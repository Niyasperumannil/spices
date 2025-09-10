import React, { useState } from 'react';
import axios from 'axios';
import './ImageSlider.css'; // Make sure to create this CSS file

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      setUploading(true);
      await axios.post('http://localhost:5005/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('✅ Image uploaded successfully!');
      setImage(null);
    } catch (err) {
      setMessage('❌ Upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h3>Upload Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="upload-button"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {message && <p className="upload-message">{message}</p>}
    </div>
  );
}

export default ImageUpload;
