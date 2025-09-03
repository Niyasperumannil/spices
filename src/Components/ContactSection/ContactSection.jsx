import React, { useEffect, useRef, useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Trigger only once
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
    <section className="contact-section" id="contect" ref={sectionRef}>
      <div className="contact-overlay">
        <div className="contact-card">
          <h2 className={`contact-title ${visible ? 'visible' : ''}`}>Get in Touch</h2>

          <div className="contact-info">
            <p className={visible ? 'visible' : ''}>
              <span className="icon">📍</span> 523 Sylvan Ave, 5th Floor<br />
              Mountain View, CA 94041 USA
            </p>
            <p className={visible ? 'visible' : ''}>
              <span className="icon">📞</span> +1 (234) 56789<br />
              +1 987 654 3210
            </p>
            <p className={visible ? 'visible' : ''}>
              <span className="icon">✉️</span> support@watchland.com
            </p>
          </div>

          <a
            href="mailto:support@watchland.com"
            className={`contact-button ${visible ? 'visible' : ''}`}
          >
            Contact Us
          </a>
        </div>
      </div>

      <iframe
        title="Google Map"
        className="contact-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.137610125162!2d-122.08385112422466!3d37.38605197209025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a6b6cfe5c9%3A0x9f5aa1f0b4b43c93!2s523%20Sylvan%20Ave%2C%20Mountain%20View%2C%20CA%2094041%2C%20USA!5e0!3m2!1sen!2sin!4v1638351918214!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default ContactSection;
