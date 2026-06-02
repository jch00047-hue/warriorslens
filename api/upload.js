/**
 * Vercel Serverless Function: File Upload Handler
 * Handles image uploads to Firebase Storage
 * 
 * Usage: POST /api/upload
 * Body: FormData with 'file' and 'category' fields
 */

import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

const bucket = admin.storage().bucket();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse FormData using a library (busboy)
    const busboy = require('busboy')({ headers: req.headers });
    let file = null;
    let category = 'uploads';

    await new Promise((resolve, reject) => {
      busboy.on('file', (fieldname, fileStream, filename, encoding, mimetype) => {
        if (fieldname === 'file') {
          const chunks = [];
          fileStream.on('data', (data) => chunks.push(data));
          fileStream.on('end', () => {
            file = {
              buffer: Buffer.concat(chunks),
              filename,
              mimetype,
            };
          });
        }
      });

      busboy.on('field', (fieldname, val) => {
        if (fieldname === 'category') {
          category = val;
        }
      });

      busboy.on('close', resolve);
      busboy.on('error', reject);

      req.pipe(busboy);
    });

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Validate file type (images only)
    const validMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validMimes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Only image files are allowed' });
    }

    // Validate file size (max 10MB)
    if (file.buffer.length > 10 * 1024 * 1024) {
      return res.status(400).json({ error: 'File too large (max 10MB)' });
    }

    // Generate unique filename
    const ext = file.filename.split('.').pop();
    const newFilename = `${category}/${uuidv4()}.${ext}`;

    // Upload to Firebase Storage
    const fileRef = bucket.file(newFilename);
    await fileRef.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
        metadata: {
          uploadedAt: new Date().toISOString(),
          originalName: file.filename,
        },
      },
    });

    // Get the public URL
    const [url] = await fileRef.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 365 * 24 * 60 * 60 * 1000, // 1 year
    });

    return res.status(200).json({
      success: true,
      filename: newFilename,
      url,
      originalName: file.filename,
      size: file.buffer.length,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed', details: error.message });
  }
}
