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
    text: "Watch is the most ambitious, well-constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.",
    author: "SMART REVIEW",
  },
  {
    id: 3,
    text: "Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.",
    author: "TECH LAUNCH",
  },
  {
    id: 4,
    text: "It redefines convenience and blends fashion with function. Easily my favorite gadget of the year.",
    author: "GADGET INSIDER",
  },
  {
    id: 5,
    text: "The new Watch offers unmatched performance, a sleek design, and a surprisingly intuitive user experience.",
    author: "DIGITAL WORLD",
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
      <h2 className="reviews-title">WHAT EXPERTS SAY</h2>
      <div className="underline-accent" />
      <p className="reviews-subtitle">
        Don’t take our word for it — here’s what industry leaders are saying about our product.
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
