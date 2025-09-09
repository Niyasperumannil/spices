import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaWhatsapp } from "react-icons/fa";

const LogoOnlyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  return (
  <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="logo-container">
          <img
            src="/WhatsApp_Image_2025-09-03_at_4.37.15_PM-removebg-preview.png"
            alt="Proland Logo"
            className="logo-image"
          />
        </div>
  
        {/* Hamburger for mobile */}
        <div
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
  
        {/* Nav Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#product">PRODUCT</a>
          <a href="#features">FEATURES</a>
          <a href="#reviews">REVIEWS</a>
          <div className="dropdown">
            <a href="#faq">PAGES</a>
          </div>
          <a href="#order">CONTACT</a>
        </nav>
  
        {/* CTA Button */}
        <div className="cta-container">
 <a
  href="https://wa.me/918590552528?text=Hi!%20I%20want%20to%20pre-order%20spices."
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button whatsapp-button"
>
  <FaWhatsapp className="whatsapp-icon" />
  ORDER NOW
</a>   </div>
      </header>
  </>
  );
};

export default LogoOnlyHeader;
