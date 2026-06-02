/**
 * Vercel Serverless Function: Gallery Items Endpoint
 * Fetches list of uploaded images from Firebase Storage
 * 
 * Usage: GET /api/gallery?category=combat-camera
 */

import admin from 'firebase-admin';

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { category = 'uploads' } = req.query;

    // List files in the category folder
    const [files] = await bucket.getFiles({ prefix: `${category}/` });

    const items = await Promise.all(
      files.map(async (file) => {
        const [url] = await file.getSignedUrl({
          version: 'v4',
          action: 'read',
          expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
        });

        const metadata = file.metadata;
        return {
          name: file.name,
          url,
          uploadedAt: metadata.metadata?.uploadedAt || metadata.timeCreated,
          originalName: metadata.metadata?.originalName || file.name,
          size: metadata.size,
        };
      })
    );

    return res.status(200).json({
      success: true,
      category,
      items: items.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)),
    });
  } catch (error) {
    console.error('Gallery fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch gallery', details: error.message });
  }
}
