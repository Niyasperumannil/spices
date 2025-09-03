import React, { useEffect, useState, useRef } from "react";
import "./OrderSection.css";
import { FaWhatsapp, FaListOl, FaBox, FaTruck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaWhatsapp className="order-icon" />,
    text: "Click the WhatsApp button to start chatting with us",
  },
  {
    id: 2,
    icon: <FaListOl className="order-icon" />,
    text: "Send us the product name and quantity you want",
  },
  {
    id: 3,
    icon: <FaBox className="order-icon" />,
    text: "We confirm availability and share payment details",
  },
  {
    id: 4,
    icon: <FaTruck className="order-icon" />,
    text: "Your fresh masalas will be shipped to your doorstep",
  },
];

const OrderSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
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

  return (
    <section className="order-section" ref={sectionRef} id="order">
      {/* 🟢 Image first (left side) */}
      <div className="order-image">
        <img
          src="/51xgLgvEypL._SX569_-removebg-preview.png"
          alt="Order via WhatsApp"
        />
      </div>

      {/* 🟢 Content second (right side) */}
      <div className="order-content">
        <h2 className="order-title">HOW TO ORDER</h2>
        <p className="order-subtitle">
          Ordering your favorite masalas is simple and quick. Just follow the
          steps below and place your order directly on WhatsApp.
        </p>

        <ul className="order-list">
          {steps.map((step) => (
            <li
              key={step.id}
              className={visibleSteps.includes(step.id) ? "visible" : "hidden"}
            >
              {step.icon}
              <span>{step.text}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20order%20masalas"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default OrderSection;
