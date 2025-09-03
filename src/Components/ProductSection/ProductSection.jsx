import React, { useState, useEffect, useRef } from "react";
import "./ProductSection.css";

const hotspots = [
  { id: 1, position: "hotspot-top-left", text: "Spicy Masala Blend ", side: "left" },
  { id: 2, position: "hotspot-top-right", text: "Traditional Recipe", side: "right" },
  { id: 3, position: "hotspot-center-right", text: "Handcrafted Taste", side: "right" },
  { id: 4, position: "hotspot-bottom-left", text: "Fresh Ingredients", side: "left" },
];

const ProductSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [animatedHotspots, setAnimatedHotspots] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation only once when in view
            hotspots.forEach((spot, index) => {
              setTimeout(() => {
                setAnimatedHotspots((prev) => {
                  if (!prev.includes(spot.id)) {
                    return [...prev, spot.id];
                  }
                  return prev;
                });
              }, index * 300);
            });
            observer.disconnect(); // Stop observing after animation triggered
          }
        });
      },
      {
        threshold: 0.1, // 10% visible triggers animation
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="product-section" id="product">
      <h2 className="product-title">THE PRODUCT</h2>
      <p className="product-description">
        Introduce the product here. A small description about what it is and how
        it helps the user. You can also add some photos below.
      </p>

      <div className="product-image-container" ref={containerRef}>
        <img
          src="/57114ea394a96284787fc8381f623410-removebg-preview.png"
          alt="Smartwatch"
          className="product-image"
        />

        {/* Hotspot markers */}
        {hotspots.map((spot) => (
          <span
            key={spot.id}
            className={`hotspot ${spot.position} ${
              animatedHotspots.includes(spot.id) ? "animate" : "hidden"
            }`}
            onClick={() =>
              setActiveHotspot(activeHotspot === spot.id ? null : spot.id)
            }
          >
            +
            {activeHotspot === spot.id && (
              <div className={`hotspot-tooltip ${spot.side}`}>
                {spot.side === "left" && (
                  <>
                    <span className="tooltip-text">{spot.text}</span>
                  </>
                )}
                {spot.side === "right" && (
                  <>
                    <span className="tooltip-line"></span>
                    <span className="tooltip-text">{spot.text}</span>
                  </>
                )}
              </div>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
