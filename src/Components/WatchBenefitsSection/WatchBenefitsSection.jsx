import React, { useEffect, useState, useRef } from "react";
import "./WatchBenefitsSection.css";
import {
  FaLeaf,
  FaPepperHot,
  FaUtensils,
  FaSmile,
  FaHandHoldingHeart,
  FaCheckCircle,
} from "react-icons/fa";

const allFeatures = [
  {
    id: 1,
    icon: <FaLeaf size={40} color="#e93c3c" />,
    title: "100% Natural Ingredients",
    description:
      "Crafted from handpicked spices without artificial colors, flavors, or preservatives for authentic taste.",
  },
  {
    id: 2,
    icon: <FaPepperHot size={40} color="#e93c3c" />,
    title: "Rich Aroma & Flavor",
    description:
      "Our special blend enhances the taste of every dish with the perfect balance of spice and freshness.",
  },
  {
    id: 3,
    icon: <FaUtensils size={40} color="#e93c3c" />,
    title: "Perfect for All Recipes",
    description:
      "From curries to grills, our masala complements Indian, continental, and fusion cuisines effortlessly.",
  },
  {
    id: 4,
    icon: <FaSmile size={40} color="#e93c3c" />,
    title: "Loved by Families",
    description:
      "Trusted in kitchens for generations, making every meal memorable and filled with joy.",
  },
  {
    id: 5,
    icon: <FaHandHoldingHeart size={40} color="#e93c3c" />,
    title: "Goodness for Health",
    description:
      "Packed with natural antioxidants and nutrients that support digestion and overall wellness.",
  },
  {
    id: 6,
    icon: <FaCheckCircle size={40} color="#e93c3c" />,
    title: "Quality You Can Trust",
    description:
      "Every pack undergoes strict quality checks to ensure purity, freshness, and consistency.",
  },
];

const WatchFeatures = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            allFeatures.forEach((feature, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(feature.id)) {
                    return [...prev, feature.id];
                  }
                  return prev;
                });
              }, index * 300);
            });
            observerInstance.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderFeature = (item) => (
    <div
      key={item.id}
      className={`feature-item ${
        visibleItems.includes(item.id) ? "visible" : "hidden"
      }`}
    >
      <div className="feature-icon">{item.icon}</div>
      <div className="feature-content">
        <h3 className="feature-title">{item.title}</h3>
        <p className="feature-text">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section className="watch-features" ref={sectionRef}>
      {/* New Header */}
      <div className="features-header">
        <h2 className="features-title">Why Choose Our Masala</h2>
        <p className="features-subtitle">
          Experience the taste, aroma, and health in every pinch.
        </p>
      </div>

      <div className="feature-wrapper">
        <div className="feature-row top">
          {renderFeature(allFeatures[0])}
          {renderFeature(allFeatures[1])}
        </div>

        <div className="feature-row middle">
          <div className="side">{renderFeature(allFeatures[2])}</div>
          <div className="image-col">
            <img
              src="/51xgLgvEypL._SX569_-removebg-preview.png"
              alt="Masala Product"
              className="watch-img"
            />
          </div>
          <div className="side">{renderFeature(allFeatures[3])}</div>
        </div>

        <div className="feature-row bottom">
          {renderFeature(allFeatures[4])}
          {renderFeature(allFeatures[5])}
        </div>
      </div>
    </section>
  );
};

export default WatchFeatures;
