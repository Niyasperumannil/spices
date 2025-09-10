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
          {/* <div
            className={`review-card nested-card-wrapper ${visible ? "visible" : "hidden"}`}
            style={{ animationDelay: `${(reviewsData.length + 2) * 0.2}s` }}
          >
            <div className="nested-inner-card">
              <h4>Nested Card</h4>
              <p>This card is inside another card.</p>
              <i className="fas fa-star" style={{ color: "#f5b50a", marginRight: "4px" }}></i>
              <i className="fas fa-star" style={{ color: "#f5b50a", marginRight: "4px" }}></i>
              <i className="fas fa-star" style={{ color: "#f5b50a", marginRight: "4px" }}></i>
              <i className="fas fa-star" style={{ color: "#f5b50a", marginRight: "4px" }}></i>
              <i className="far fa-star" style={{ color: "#f5b50a" }}></i>
            </div>
          </div> */}

          {/* Insert Image Card */}
          {/* <div
            className={`review-card insert-card ${visible ? "visible" : "hidden"}`}
            style={{ animationDelay: `${(reviewsData.length + 3) * 0.2}s` }}
            onClick={() => document.getElementById("image-upload-input").click()}
          >
            <div className="insert-content">
              <i className="fas fa-plus-circle insert-icon"></i>
              <p>Insert Image</p>
            </div>
            <input
              type="file"
              id="image-upload-input"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageInsert}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
