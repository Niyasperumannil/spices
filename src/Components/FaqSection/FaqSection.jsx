import React, { useEffect, useState, useRef } from "react";
import "./FaqSection.css";

const faqItems = [
  {
    question: "Where do your spices come from?",
    answer:
      "Our spices are sourced directly from trusted local farmers across Kerala and other spice-growing regions of India. Each batch is carefully handpicked to ensure maximum freshness and flavor.",
  },
  {
    question: "Are your spices 100% natural?",
    answer:
      "Yes. We believe in purity and quality — our spices are free from artificial colors, preservatives, and additives. What you get is just the authentic, natural taste of spices.",
  },
  {
    question: "How should I store the spices?",
    answer:
      "To keep the spices fresh for longer, store them in an airtight container, away from direct sunlight and moisture. This will help preserve their aroma and flavor.",
  },
  {
    question: "Do you offer custom spice blends?",
    answer:
      "Absolutely! Along with traditional masalas like garam masala and sambar powder, we also create custom blends tailored to your taste or family recipes. You can contact us for bulk or personalized orders.",
  },
];

const FaqSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="faq-section" id="faq" ref={containerRef}>
      <h2 className="faq-title">FAQ</h2>
      <p className="faq-subtitle">
        Got questions? We’ve got answers. If you have other queries,
        feel free to send us an email at{" "}
        <a href="mailto:hello@spices.com">hello@spices.com</a>
      </p>

      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${visibleItems.includes(index) ? "visible" : "hidden"}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
