import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css';

const FAQ = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ title: '', paragraph: '' });
  const [editReview, setEditReview] = useState(null);

  // Fetch all reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  // Handle input changes for new and edited reviews
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editReview) {
      setEditReview({ ...editReview, [name]: value });
    } else {
      setNewReview({ ...newReview, [name]: value });
    }
  };

  // Create a new review
  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5005/api/reviews', newReview);
      setReviews([...reviews, response.data]);
      setNewReview({ title: '', paragraph: '' });
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  // Edit an existing review
  const handleEditReview = (review) => {
    setEditReview(review);
  };

  // Update an existing review
  const handleUpdateReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5005/api/reviews/${editReview._id}`, editReview);
      setReviews(reviews.map((r) => (r._id === editReview._id ? response.data : r)));
      setEditReview(null);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  // Delete a review
  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Reviews</h2>
      <div className="faq-list">
        {reviews.map((review) => (
          <div key={review._id} className="faq-item">
            <div className="faq-question">
              <span>{review.title}</span>
              <button onClick={() => handleEditReview(review)}>Edit</button>
              <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
            </div>
            <div className="faq-answer">{review.paragraph}</div>
          </div>
        ))}
      </div>

      <div className="admin-panel">
        <h3>{editReview ? 'Edit Review' : 'Add New Review'}</h3>
        <form onSubmit={editReview ? handleUpdateReview : handleAddReview}>
          <input
            type="text"
            name="title"
            value={editReview ? editReview.title : newReview.title}
            onChange={handleInputChange}
            placeholder="Enter title"
            required
          />
          <textarea
            name="paragraph"
            value={editReview ? editReview.paragraph : newReview.paragraph}
            onChange={handleInputChange}
            placeholder="Enter paragraph"
            required
          />
          <button type="submit">{editReview ? 'Update Review' : 'Add Review'}</button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
