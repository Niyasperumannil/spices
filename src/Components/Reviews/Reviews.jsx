import React, { useEffect, useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import "./Reviews.css";

const reviewsData = [
  { image: "/WhatsApp Image 2025-09-09 at 3.31.39 PM.jpeg" },
  { image: "/WhatsApp Image 2025-09-09 at 3.31.39 PM.jpeg" },
  { image: "/WhatsApp Image 2025-09-09 at 3.31.39 PM.jpeg" },
  { image: "/WhatsApp Image 2025-09-09 at 3.31.39 PM.jpeg" },
  { image: "/WhatsApp Image 2025-09-09 at 3.31.39 PM.jpeg" },
];

const Reviews = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef}>
      <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
      <div className="underline-accent" />
      <p className="reviews-subtitle">
        Our customers love what we offer! Here's what they're sharing visually.
      </p>

      <div className="review-cards-container">
        <div className="review-cards">
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div
              key={`review-${index}`}
              className={`review-card ${visible ? "visible" : "hidden"}`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="review-image-wrapper">
                <img
                  src={review.image}
                  alt={`Customer Review ${index + 1}`}
                  className="review-image"
                />
                <div className="instagram-icon">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
