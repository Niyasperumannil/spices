import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./FaqSection.css";

const FaqSection = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

  // Fetch FAQs (reviews used as FAQs in your backend)
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/reviews");
      setFaqItems(response.data); // expects array: [{ _id, title, paragraph }]
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(faqItems.map((_, index) => index));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [faqItems]);

  return (
    <section className="faq-section" id="faq" ref={containerRef}>
      <h2 className="faq-title">FAQ</h2>
      <p className="faq-subtitle">
        Got questions? We’ve got answers. If you have other queries,
        feel free to send us an email at{" "}
        <a href="mailto:hello@spices.com">hellotastystories.com</a>
      </p>

      <div className="faq-grid">
        {faqItems.length > 0 ? (
          faqItems.map((item, index) => (
            <div
              key={item._id || index}
              className={`faq-item ${
                visibleItems.includes(index) ? "visible" : "hidden"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))
        ) : (
          <p>No FAQs available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
