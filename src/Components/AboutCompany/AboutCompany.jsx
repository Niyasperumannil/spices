import React from "react";
import "./AboutCompany.css";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-left">
        <h2>About the Company</h2>
        <p>
     Tastty Stories, formerly known as Ajmi Flour Mills (India) Pvt. Ltd., continues its legacy since 1994 as a leader in Kerala’s breakfast foods segment. With a strong reputation built on quality, innovation, and customer trust, the company is now expanding its footprint with a new base in Cherpulassery, Palakkad (established 2025), aiming to deliver Kerala's authentic flavors under its refreshed brand identity
        </p>
<a
  href="https://wa.me/919876543210?text=Hi%2C%20I%20saw%20your%20site%20and%20want%20to%20know%20more!"
  className="view-more-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  View More
</a>
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
