import React from "react";
import "./OfferBanner.css";

const OfferBanner = ({ message }) => (
  <div className="offer-banner">
    <div className="marquee">
      <div className="marquee-content" aria-hidden="false">
        {message}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {message}
      </div>
    </div>
  </div>
);

export default OfferBanner;
