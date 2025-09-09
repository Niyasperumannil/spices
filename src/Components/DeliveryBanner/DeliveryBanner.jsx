import React from "react";
import "./DeliveryBanner.css";

const DeliveryBanner = () => {
  return (
    <div className="delivery-banner-wrapper-outer">
      <div className="delivery-banner-container">

        {/* Left Section */}
        <div className="delivery-left-section">
          <div className="delivery-scheduled-box">
            <div className="delivery-icon-circle">
              <div className="icon-slice-bar" />
            </div>
            <span>Scheduled Delivery</span>
          </div>

          <div className="vertical-divider-line" />

          <div className="free-delivery-label">
            Free Delivery<br />
            <strong>Over 1000 rupees</strong>
          </div>
        </div>

        {/* Center Logo Section */}
        <div className="spinneys-logo-block">
          <img
            src="/WhatsApp_Image_2025-09-03_at_4.37.15_PM-removebg-preview.png"
            alt="Spinneys Swift"
            className="spinneys-logo-img"
          />
        </div>

        {/* Right Section */}
        <div className="delivery-right-section">
          <div className="delivery-info-box-left">
            Delivery in<br />
            <strong>3 Days</strong>
          </div>

          <div className="vertical-divider-line" />

          <div className="delivery-info-box-right">
            Minimum order<br />
            <strong>250</strong>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeliveryBanner;
