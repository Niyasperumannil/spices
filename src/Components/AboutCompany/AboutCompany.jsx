import React from "react";
import "./AboutCompany.css";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-left">
        <h2>About the Company</h2>
        <p>
          Ajmi Flour Mills (India) Pvt Ltd. is a fully automated cereal and
          spice processing company located at Elappunkal, Erattupetta in Kottayam
          District of Kerala. It has been manufacturing and marketing
          high-quality rice products, spice powders, etc. since 1994. Ajmi has
          adhered to stringent quality standards to secure and maintain trust
          and customer satisfaction. Presently, it is the biggest seller of
          breakfast foods in Kerala and the Ajmi brand is an absolute customer
          favourite.
        </p>
        <a href="#more" className="view-more-btn">View More</a>
      </div>

      <div className="about-right">
        <img
          src="/51xgLgvEypL._SX569_-removebg-preview.png"
          alt="Ajmi Fish Masala"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default AboutCompany;
