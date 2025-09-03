import React, { useEffect, useState, useRef } from "react";
import "./FaqSection.css";

const faqItems = [
  {
    question: "What is Watch? How it works?",
    answer:
      "Watch took center stage at this year’s Product Show with a preview of watch OS 2. The next generation of Watch software is packed with features that just might turn the device from a nice-to-have into a must-have. If you already own an Apple Watch, you'll have to live with the old software until fall. You’ll love it at the first use.",
  },
  {
    question: "How the watch is made?",
    answer:
      "Watch has an anodized aluminum case (which is lighter than stainless steel) in silver or space gray, and the face is Ion-X glass, which also designed to be hard and rugged (as well as a little bit lighter) than the sapphire. It’s definitely the lightest of the three Apple Watch editions, making it an ideal exercise companion.",
  },
  {
    question: "Can I swap out the watch band?",
    answer:
      "Absolutely. Watch comes with six bands that are easy to mix and match any band with any watch. You can swap them out as your heart desires without the aid of any tools— as long as the band and watch are the same size. (The Leather Loop band, for example, only fits 42mm watches, not the smaller 38mm size.)",
  },
  {
    question: "So it’s a watch and a fitness tracker?",
    answer:
      "The accelerometer lets the watch count your steps, and it extrapolates distance on its own, or rely on the GPS in the paired Phone to trace your exact route. That step data comes in handy for two of the apps included on the watch: Activity and Workout. Both of the watch’s fitness apps sync data back to the Health and Fitness apps on your Phone.",
  },
];

const FaqSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the section scrolls into view, show all items
            setVisibleItems(faqItems.map((_, index) => index));
            observer.disconnect(); // stop observing after trigger
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="faq-section" id="faq" ref={containerRef}>
      <h2 className="faq-title">FAQ</h2>
      <p className="faq-subtitle">
        Got questions? We’ve got answers. If you have some other questions,
        feel free to send us an email to{" "}
        <a href="mailto:hello@product.com">hello@product.com</a>
      </p>

      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${visibleItems.includes(index) ? "visible" : "hidden"}`}
            style={{ animationDelay: `${index * 0.3}s` }} // stagger animation
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
