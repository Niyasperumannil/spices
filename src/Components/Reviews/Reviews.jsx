import React, { useEffect, useState, useRef } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    text: "The spices are so fresh and aromatic. They remind me of the flavors my grandmother used in her cooking.",
    author: "Anitha, Kerala",
  },
  {
    id: 2,
    text: "I love the rich taste these spices add to my curries. The quality is far better than what I used to get in the supermarket.",
    author: "Rahul, Bangalore",
  },
  {
    id: 3,
    text: "These spices have transformed the way I cook. The masalas feel authentic and full of flavor.",
    author: "Fatima, Chennai",
  },
  {
    id: 4,
    text: "The freshness is unmatched. Every dish feels more vibrant and tasty with these spices.",
    author: "Joseph, Kochi",
  },
  {
    id: 5,
    text: "Finally found spices that remind me of home. Fragrant, pure, and absolutely delicious.",
    author: "Meera, Mumbai",
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
      <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
      <div className="underline-accent" />
      <p className="reviews-subtitle">
        Hear from our happy customers who bring authentic flavor to their homes with our spices.
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
            <div className="review-footer">
              <div className="avatar">{review.author[0]}</div>
              <div className="review-author">{review.author}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
