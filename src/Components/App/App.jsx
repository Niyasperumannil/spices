import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`hero ${inView ? "visible" : ""}`} ref={heroRef}>
      <div className="hero-text">
        {/* <h2 className="fade-item delay-1">
          When Spices Tell Stories: The Legacy of Bottle Masala
        </h2> */}
        <div className="button-container">
          {/* <button className="play-button fade-item delay-2">
            <span className="play-icon">▶</span> Video
          </button> */}
          {isMobile && (
          <a
  href="https://wa.me/918590552528?text=Hi!%20I%20want%20to%20pre-order%20spices."
  target="_blank"
  rel="noopener noreferrer"
  className="pre-order-button fade-item delay-3"
>
  Order Now
</a>

          )}
        </div>
      </div>

      <div className="hero-content-with-bg fade-item delay-4">
        {/* Background image only */}
      </div>
    </div>
  );
}

export default App;
