import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [images, setImages] = useState([]);
  const heroRef = useRef(null);

  // Fetch slider images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5005/api/images");
        setImages(res.data);
      } catch (err) {
        console.error("Failed to load images:", err);
      }
    };
    fetchImages();
  }, []);

  // Clone first and last for infinite loop
  const extendedImages =
    images.length > 0
      ? [images[images.length - 1], ...images, images[0]]
      : [];

  // Resize detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  // Handle transition end
  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(images.length);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className={`hero ${inView ? "visible" : ""}`} ref={heroRef}>
      <div className="hero-text">
        {isMobile && (
          <div className="button-container">
            <a
              href="https://wa.me/918590552528?text=Hi!%20I%20want%20to%20pre-order%20spices."
              target="_blank"
              rel="noopener noreferrer"
              className="pre-order-button fade-item delay-3"
            >
              Order Now
            </a>
          </div>
        )}
      </div>

      <div className="slider-wrapper fade-item delay-4">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionEnabled ? "transform 0.8s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((img, idx) => (
            <div className="slide" key={idx}>
              <img
                src={`http://localhost:5005${img.imageUrl}`}
                alt={`slide-${idx}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="slider-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex - 1 ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
