import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewImageGallery.css';

function ReviewImageGallery() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  // Fetch review images
  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5005/api/review-images');
      setImages(res.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setMessage('');
  };

  // Upload image
  const handleUpload = async () => {
    if (!image) {
      setMessage('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      setUploading(true);
      await axios.post('http://localhost:5005/api/review-images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('✅ Image uploaded successfully!');
      setImage(null);
      fetchImages();
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  // Delete image
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/api/review-images/${id}`);
      setMessage('🗑️ Image deleted.');
      fetchImages();
    } catch (error) {
      console.error('Delete failed:', error);
      setMessage('❌ Failed to delete image.');
    }
  };

  return (
    <div className="review-gallery-container">
      <h2>Review Image Manager</h2>

      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Review Image'}
        </button>
        {message && <p className="message">{message}</p>}
      </div>

      <div className="image-grid">
        {images.length === 0 ? (
          <p>No review images yet.</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="image-card">
              <img
                src={`http://localhost:5005${img.imageUrl}`}
                alt="review"
                className="gallery-image"
              />
              <button className="delete-button" onClick={() => handleDelete(img._id)}>
                ✖
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewImageGallery;
