import React, { useEffect, useState, useRef } from "react";
import "./BenefitsSection.css";
import {
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaLightbulb,
  FaSeedling,
  FaMortarPestle,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Natural Ingredients",
    description:
      "Made with handpicked spices and herbs, our masalas are 100% natural with no artificial preservatives.",
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: "Healthy & Nutritious",
    description:
      "Rich in antioxidants and essential nutrients that support digestion and boost immunity.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Quality & Safety",
    description:
      "Prepared in hygienic facilities with strict quality checks to ensure purity and freshness.",
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    title: "Traditional Recipes",
    description:
      "Blended with age-old recipes passed down through generations to give authentic flavor.",
  },
  {
    id: 5,
    icon: <FaSeedling />,
    title: "Farm Fresh",
    description:
      "Sourced directly from farmers to bring you the freshest spices full of natural aroma.",
  },
  {
    id: 6,
    icon: <FaMortarPestle />,
    title: "Authentic Taste",
    description:
      "Ground and blended perfectly to enhance the flavor of your curries, snacks, and everyday meals.",
  },
];

const BenefitsSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((benefit, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(benefit.id)) {
                    return [...prev, benefit.id];
                  }
                  return prev;
                });
              }, index * 300);
            });
            observerInstance.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="benefits-section" id="features" ref={sectionRef}>
      <h2 className="benefits-title">THE BENEFITS</h2>
      <p className="benefits-description">
        Discover the goodness of our masalas. Blended with care, packed with
        health benefits, and crafted to bring authentic taste to your kitchen.
      </p>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`benefit-item ${
              visibleItems.includes(benefit.id) ? "visible" : "hidden"
            }`}
          >
          <div className="benefit-content">
  <h3 className="benefit-title">
    <span className="benefit-icon-inline">{benefit.icon}</span>
    {benefit.title}
  </h3>
  <p className="benefit-text">{benefit.description}</p>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
