import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : ''}`} ref={footerRef}>
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      <ul className="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>

      <p className="footer-copy">
        Copyright © {new Date().getFullYear()} TastyStories. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
