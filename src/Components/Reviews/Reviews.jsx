import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Reviews.css";

const Reviews = () => {
  const [visible, setVisible] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const sectionRef = useRef(null);

  // Fetch images from backend
  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5005/api/review-images");
      setReviewsData(res.data);
    } catch (err) {
      console.error("Error fetching review images:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Intersection animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle file input change
  const handleImageInsert = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`You selected file: ${file.name}`);
      // Upload logic goes here
    }
  };

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef}>
      <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
      <div className="underline-accent" />
      <p className="reviews-subtitle">
        Our customers love what we offer! Here's what they're sharing visually.
      </p>

      <div className="review-cards-container">
        <div className="review-cards">
          {/* Review image cards */}
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div
              key={review._id || index}
              className={`review-card ${visible ? "visible" : "hidden"}`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="review-image-wrapper">
                <img
                  src={`http://localhost:5005${review.imageUrl}`}
                  alt={`Customer Review ${index + 1}`}
                  className="review-image"
                />
              </div>
            </div>
          ))}

          {/* Card inside another card */}
       

          {/* Insert Image Card */}
     
        </div>
      </div>
    </section>
  );
};

export default Reviews;
