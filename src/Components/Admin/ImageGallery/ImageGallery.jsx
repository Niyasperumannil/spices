import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGallery.css';

function ImageGallery() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5005/api/images');
      setImages(res.data);
    } catch (err) {
      console.error('Failed to fetch images', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return;

    try {
      await axios.delete(`http://localhost:5005/api/images/${id}`);
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      <h3>Uploaded Images</h3>
      {images.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        <div className="image-grid">
          {images.map((img) => (
            <div key={img._id} className="image-card">
              <img
                src={`http://localhost:5005${img.imageUrl}`}
                alt="Uploaded"
                className="gallery-image"
              />
              <button className="delete-button" onClick={() => handleDelete(img._id)}>
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
