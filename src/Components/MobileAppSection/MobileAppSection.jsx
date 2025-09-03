import React, { useEffect, useRef, useState } from "react";
import "./MobileAppSection.css";

const MobileAppSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mobile-app-section" ref={sectionRef}>
      <div className={`app-image ${visible ? "visible" : "hidden"}`}>
        <img
          src="https://demo.web3canvas.com/themeforest/proland/images/app-screen.png"
          alt="Spices App Preview"
        />
      </div>

      <div className="app-content">
        <h2 className={`app-title ${visible ? "visible" : "hidden"}`}>
          Follow Us for Spice Updates
        </h2>
        <p className={`app-description ${visible ? "visible" : "hidden"}`}>
          Stay connected with the latest spice blends, recipes, cooking tips, and
          exclusive offers! Follow us on Instagram for mouth-watering spice shots
          and on WhatsApp for instant updates on new arrivals and discounts.
        </p>
        <div className={`app-buttons ${visible ? "visible" : "hidden"}`}>
          <a
            href="https://instagram.com"
            className="store-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Follow us on Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            className="store-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Connect on WhatsApp"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
