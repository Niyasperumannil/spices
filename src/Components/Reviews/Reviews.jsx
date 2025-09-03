import React, { useEffect, useState, useRef } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    text: "The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great.",
    author: "TECH COMPANY",
  },
  {
    id: 2,
    text: "Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.",
    author: "SMART REVIEW",
  },
  {
    id: 3,
    text: "Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.",
    author: "TechLaunch",
  },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef}>
      <h2 className="reviews-title">REVIEWS</h2>
      <p className="reviews-subtitle">
        Don’t take our word. See what our experts says about the watch. We have got over 1000s of positive reviews.
      </p>
      <div className="review-cards">
        {reviewsData.map((review, index) => (
          <div
            key={review.id}
            className={`review-card ${visible ? "visible" : "hidden"}`}
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className="quote">“</div>
            <p className="review-text">{review.text}</p>
            <div className="review-author">{review.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
