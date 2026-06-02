# Serverless Backend Setup Guide

## Overview
This backend uses **Vercel Serverless Functions** + **Firebase Storage** to handle:
- **File uploads** (images only, max 10MB)
- **Gallery listing** (fetch uploaded images)
- **File deletion** (admin-only)

**Zero maintenance required** — no database, no server to manage, automatic scaling.

---

## Quick Start: Deploy to Vercel

### 1. Create a Firebase Project
1. Go to [firebase.google.com](https://firebase.google.com)
2. Create a new project
3. Enable **Cloud Storage**
4. Create a Storage bucket (multi-region recommended)
5. Go to **Project Settings** → **Service Accounts** → **Generate new private key**
   - Save the JSON file (you'll need it in step 3)

### 2. Push Code to GitHub
```bash
git add .
git commit -m "Add serverless backend with Firebase"
git push origin serverless-backend
```

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New"** → **"Project"**
3. Import your `warriorslens` GitHub repo
4. In **Environment Variables**, add:

| Key | Value |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Paste entire JSON from Firebase service account |
| `FIREBASE_STORAGE_BUCKET` | `your-project-id.appspot.com` |
| `ADMIN_DELETE_TOKEN` | Generate a random token (e.g., `openssl rand -hex 32`) |

5. Click **Deploy**

Vercel will auto-deploy whenever you push to this branch.

---

## API Endpoints

### 📤 Upload File
**POST** `/api/upload`

```bash
curl -X POST https://your-vercel-deployment.vercel.app/api/upload \
  -F "file=@photo.jpg" \
  -F "category=combat-camera"
```

**Response:**
```json
{
  "success": true,
  "filename": "combat-camera/uuid.jpg",
  "url": "https://storage.googleapis.com/...",
  "originalName": "photo.jpg",
  "size": 204800
}
```

---

### 📋 List Gallery
**GET** `/api/gallery?category=combat-camera`

```bash
curl https://your-vercel-deployment.vercel.app/api/gallery?category=uploads
```

**Response:**
```json
{
  "success": true,
  "category": "uploads",
  "items": [
    {
      "name": "uploads/uuid-1.jpg",
      "url": "https://storage.googleapis.com/...",
      "uploadedAt": "2026-06-02T...",
      "originalName": "photo1.jpg",
      "size": 204800
    }
  ]
}
```

---

### 🗑️ Delete File
**DELETE** `/api/delete`

```bash
curl -X DELETE https://your-vercel-deployment.vercel.app/api/delete \
  -H "Content-Type: application/json" \
  -d '{
    "filename": "uploads/uuid.jpg",
    "token": "your-admin-token"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "File uploads/uuid.jpg deleted"
}
```

---

## Frontend Integration

### Update `.env`
```dotenv
REACT_APP_BACKEND_URL=https://your-vercel-deployment.vercel.app
REACT_APP_ADMIN_TOKEN=your-admin-token
```

### Example React Upload Component

```jsx
import { useState } from 'react';

export function UploadForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'combat-camera');

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
        { method: 'POST', body: formData }
      );
      const data = await res.json();
      
      if (data.success) {
        console.log('Uploaded:', data.url);
        setFile(null);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button disabled={loading || !file}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}
```

---

## Environment Variables

Create a `.env.local` file (never commit to Git):

```dotenv
# Frontend
REACT_APP_BACKEND_URL=https://your-vercel-deployment.vercel.app
REACT_APP_ADMIN_TOKEN=your-admin-token

# Firebase (only needed for local testing)
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
ADMIN_DELETE_TOKEN=your-admin-token
```

---

## Security Best Practices

1. **Keep tokens secret** — Never commit `ADMIN_DELETE_TOKEN` to Git
2. **CORS is open** — Consider restricting to your domain in production:
   ```javascript
   res.setHeader('Access-Control-Allow-Origin', 'https://your-domain.com');
   ```
3. **File validation** — Only images allowed (change `validMimes` to allow PDFs, etc.)
4. **Rate limiting** — Add in production (Vercel's built-in or Upstash)
5. **Firebase Rules** — Restrict who can access storage:
   ```
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if false; // Only allow via API
       }
     }
   }
   ```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| 401 Unauthorized on delete | Check `ADMIN_DELETE_TOKEN` env var matches |
| 403 Forbidden from Firebase | Verify service account has Storage permissions |
| CORS errors in browser | Check `Access-Control-Allow-Origin` headers |
| File upload timeout | Increase max payload in Vercel settings |

---

## Next Steps

1. **Merge to main** when ready: Create a PR from `serverless-backend` → `main`
2. **Update PortfolioGallery component** to fetch from `/api/gallery`
3. **Add upload UI** to admin panel
4. **Set up monitoring** in Vercel dashboard

---

**Questions?** Check the [Vercel Docs](https://vercel.com/docs) or [Firebase Storage Guide](https://firebase.google.com/docs/storage).
