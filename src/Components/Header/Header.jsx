import React, { useState, useEffect } from 'react';
import './Header.css';

const LogoOnlyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo-container">
        <img
          src="https://demo.web3canvas.com/themeforest/proland/images/logo.png"
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
        <button className="cta-button">PRE-ORDER NOW</button>
      </div>
    </header>
  );
};

export default LogoOnlyHeader;
