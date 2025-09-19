import React, { useEffect, useState, useRef } from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: "🛒",
    title: "Pick Your Spices",
    description:
      "Choose from our wide range of authentic masalas, freshly packed to keep the natural aroma and taste intact.",
  },
  {
    id: 2,
    icon: "🍳",
    title: "Cook with Love",
    description:
      "Add the masala blends to your favorite dishes and experience the burst of traditional flavors in every bite.",
  },
  {
    id: 3,
    icon: "😋",
    title: "Enjoy the Taste",
    description:
      "Serve your delicious meal and enjoy the authentic, mouth-watering spice experience with family and friends.",
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  if (!prev.includes(step.id)) {
                    return [...prev, step.id];
                  }
                  return prev;
                });
              }, index * 500); 
            });
            observer.disconnect(); 
          }
        });
      },
      {
        root: null,
        threshold: 0.1, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works" ref={containerRef}>
      <h2 className="how-title">HOW IT WORKS</h2>
      <p className="how-description">
        Bringing the authentic taste of tradition to your kitchen is simple.
        Follow these easy steps and enjoy flavorful meals every day.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step-item ${
              visibleSteps.includes(step.id) ? "visible" : "hidden"
            }`}
            style={{ transitionDelay: `${index * 0.5}s` }}
          >
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.description}</p>

            {index < steps.length - 1 && <div className="step-arrow">›</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
