import React, { useState, useEffect } from 'react';
import { Upload, Trash2, AlertCircle, CheckCircle } from 'lucide-react';

export function AdminUploadPanel() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('uploads');
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const adminToken = process.env.REACT_APP_ADMIN_TOKEN;

  // Fetch gallery on mount and after upload
  useEffect(() => {
    fetchGallery();
  }, [category]);

  const fetchGallery = async () => {
    try {
      setError('');
      const res = await fetch(`${backendUrl}/api/gallery?category=${category}`);
      const data = await res.json();
      if (data.success) {
        setGallery(data.items || []);
      } else {
        setError('Failed to fetch gallery');
      }
    } catch (err) {
      setError(`Error fetching gallery: ${err.message}`);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    try {
      const res = await fetch(`${backendUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(`✓ Uploaded: ${data.originalName}`);
        setFile(null);
        document.getElementById('fileInput').value = '';
        fetchGallery(); // Refresh gallery
      } else {
        setError(`Upload failed: ${data.error}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (filename) => {
    if (!window.confirm(`Delete ${filename}?`)) return;

    try {
      setError('');
      const res = await fetch(`${backendUrl}/api/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, token: adminToken }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(`Deleted: ${filename}`);
        fetchGallery();
      } else {
        setError(`Delete failed: ${data.error}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e9e3d6] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#c9a961]">Upload Panel</h1>
          <p className="text-[#999]">Manage portfolio images</p>
        </div>

        {/* Upload Section */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#333] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Image</h2>

          {error && (
            <div className="flex items-center gap-2 bg-red-900/20 border border-red-700 rounded p-4 mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 bg-green-900/20 border border-green-700 rounded p-4 mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          <form onSubmit={handleUpload} className="space-y-4">
            {/* Category Select */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#444] rounded px-4 py-2 text-[#e9e3d6]"
              >
                <option value="uploads">General Uploads</option>
                <option value="combat-camera">Combat Camera</option>
                <option value="joint-ops">Joint Operations</option>
                <option value="maritime">Maritime</option>
                <option value="training">Training</option>
                <option value="portrait">Portrait</option>
              </select>
            </div>

            {/* File Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Image</label>
              <div className="relative">
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="flex items-center justify-center w-full border-2 border-dashed border-[#444] rounded p-6 cursor-pointer hover:border-[#c9a961] transition"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-[#c9a961]" />
                    <p className="text-sm">
                      {file ? file.name : 'Click to select image (max 10MB)'}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Upload Button */}
            <button
              type="submit"
              disabled={loading || !file}
              className="w-full bg-[#c9a961] text-[#0a0a0a] font-semibold py-2 rounded hover:bg-[#dbb977] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Uploading...' : 'Upload Image'}
            </button>
          </form>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Gallery: {category} ({gallery.length} items)
          </h2>

          {gallery.length === 0 ? (
            <div className="bg-[#1a1a1a] border border-[#333] rounded p-8 text-center text-[#666]">
              No images in this category yet
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] border border-[#333] rounded overflow-hidden hover:border-[#c9a961] transition"
                >
                  {/* Image Thumbnail */}
                  <div className="aspect-square overflow-hidden bg-[#0a0a0a]">
                    <img
                      src={item.url}
                      alt={item.originalName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-3 text-xs">
                    <p className="truncate font-medium mb-1">{item.originalName}</p>
                    <p className="text-[#666] mb-2">
                      {(item.size / 1024 / 1024).toFixed(1)}MB
                    </p>
                    <p className="text-[#666] mb-3">
                      {new Date(item.uploadedAt).toLocaleDateString()}
                    </p>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(item.name)}
                      className="w-full flex items-center justify-center gap-1 bg-red-900/30 hover:bg-red-900/50 text-red-400 py-1 rounded transition text-xs"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUploadPanel;
