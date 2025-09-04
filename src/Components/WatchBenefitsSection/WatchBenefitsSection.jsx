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

// ✅ All 6 features in one array
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
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Split features into 2 columns: first 3 left, last 3 right
  const featuresLeft = allFeatures.slice(0, 3);
  const featuresRight = allFeatures.slice(3, 6);

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
      <div className="features-layout">
        <div className="features-column">{featuresLeft.map(renderFeature)}</div>

        <div className="watch-display">
          <img
            src="/51xgLgvEypL._SX569_-removebg-preview.png"
            alt="Masala Product"
            className="watch-img"
          />
        </div>

        <div className="features-column">{featuresRight.map(renderFeature)}</div>
      </div>
    </section>
  );
};

export default WatchFeatures;
