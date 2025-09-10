import React from "react";
import "./AvailableOn.css";

// import amazonLogo from "/src/assets/amazon.png";
// import flipkartLogo from "/src/assets/flipkart.png";
// import bigbasketLogo from "/src/assets/bigbasket.png";
// import relianceLogo from "/src/assets/reliance.png";

const AvailableOn = () => {
  return (
    <section className="available-section">
      <p className="available-text">Our products are also available in</p>
      <div className="available-logos">
        <img src="https://www.nirapara.com/image/index/Amazon.png" alt="Amazon" />
        <img src="https://www.nirapara.com/image/index/Flipkart.png" alt="Flipkart" />
        <img src="https://www.nirapara.com/image/index/Big%20Basket.png" alt="BigBasket" />
        <img src="https://www.nirapara.com/image/index/Reliance.png" alt="Reliance Smart" />
      </div>
    </section>
  );
};

export default AvailableOn;
