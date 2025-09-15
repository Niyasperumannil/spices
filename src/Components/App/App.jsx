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
        setImages(res.data || []);
      } catch (err) {
        console.error("Failed to load images:", err);
      }
    };
    fetchImages();
  }, []);

  // Extended images for infinite loop (clone first & last)
  const extendedImages = images.length > 0
    ? [
        { ...images[images.length - 1], cloneType: "lastClone", originalIdx: images.length - 1 },
        ...images.map((img, idx) => ({ ...img, cloneType: "original", originalIdx: idx })),
        { ...images[0], cloneType: "firstClone", originalIdx: 0 }
      ]
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
  }, [currentIndex, images]); // possibly also transitionEnabled, but this should work

  // Handle transition end to “wrap around”
  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      // we've reached the clone of first image
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // we've reached the clone of last image
      setTransitionEnabled(false);
      setCurrentIndex(images.length);
    }
  };

  // Re-enable transition after jump without animation
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
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
          {extendedImages.map((img, idx) => {
            // originalIdx is stable for original items; cloneType distinguishes clones
            const baseId = img._id ?? img.id ?? `no-id-${img.originalIdx}`;
            const key = `slide-${baseId}-${img.cloneType}-${idx}`;
            return (
              <div className="slide" key={key}>
                <img
                  src={`http://localhost:5005${img.imageUrl}`}
                  alt={`slide-${idx}`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="slider-dots">
          {images.map((img, idx) => {
            const baseId = img._id ?? img.id ?? `no-id-${idx}`;
            const key = `dot-${baseId}-${idx}`;
            // dot corresponds to original slide (excluding clones), so active when idx === currentIndex - 1
            const isActive = idx === currentIndex - 1;
            return (
              <span
                key={key}
                className={`dot ${isActive ? "active" : ""}`}
                onClick={() => {
                  setCurrentIndex(idx + 1);
                }}
              />
            );
          })}
        </div>

        {/* Optional Prev/Next Buttons if desired */}
        {/* <button className="slider-arrow left" onClick={handlePrev}>‹</button> */}
        {/* <button className="slider-arrow right" onClick={handleNext}>›</button> */}
      </div>
    </div>
  );
}

export default App;
