/**
 * Vercel Serverless Function: Delete File Handler
 * Deletes uploaded images from Firebase Storage
 * Requires authentication token
 * 
 * Usage: DELETE /api/delete
 * Body: { filename: "uploads/uuid.jpg", token: "admin_token" }
 */

import admin from 'firebase-admin';

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
  res.setHeader('Access-Control-Allow-Methods', 'DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, token } = req.body;

    // Simple token validation (replace with proper auth)
    if (token !== process.env.ADMIN_DELETE_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!filename) {
      return res.status(400).json({ error: 'Filename required' });
    }

    // Delete file from Firebase Storage
    await bucket.file(filename).delete();

    return res.status(200).json({
      success: true,
      message: `File ${filename} deleted`,
    });
  } catch (error) {
    console.error('Delete error:', error);
    return res.status(500).json({ error: 'Failed to delete file', details: error.message });
  }
}
