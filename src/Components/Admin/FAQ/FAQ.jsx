// FAQ.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css';

const FAQ = () => {
  const [reviews, setReviews] = useState([]);

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

  return (
    <div className="askedquestions-container">
      <h2 className="askedquestions-title">Customer Reviews</h2>
      <div className="askedquestions-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="askedquestions-item">
              <div className="askedquestions-question">
                <span>{review.title}</span>
              </div>
              <div className="askedquestions-answer">{review.paragraph}</div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
