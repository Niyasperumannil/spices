import React from 'react';
import './DeliveryBanner.css';

const DeliveryBanner = () => {
  return (
    <div className="delivery-banner">
      {/* Scheduled Delivery */}
      <div className="scheduled-delivery">
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="delivery-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h2l1 5h13l1-5h2M5 15v2a2 2 0 002 2h8a2 2 0 002-2v-2M16 7V3H8v4M6 7h12"
            />
          </svg>
        </div>
        <span className="scheduled-text">Scheduled Delivery in Kerala</span>
      </div>

      {/* Free Delivery Info */}
      <div className="free-delivery-info">
        <span>Free Delivery</span>
        <strong>Over ₹1000</strong>
      </div>

      <div className="divider"></div>

      {/* Logo */}
      <div className="spinneys-logo-container">
        <img
          src="/WhatsApp_Image_2025-09-03_at_4.37.15_PM-removebg-preview.png"
          alt="Kerala Swift"
          className="spinneys-logo"
        />
      </div>

      {/* Delivery Time */}
      <div className="delivery-time">
        <strong>Delivery in</strong>
        <span>90 minutes</span>
      </div>

      {/* Minimum Order */}
      <div className="minimum-order">
        <strong>Minimum order</strong>
        <span>₹250</span>
      </div>
    </div>
  );
};

export default DeliveryBanner;
