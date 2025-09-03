import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./CollectionSection.css";

const products = [
  // your products as before
  {
    id: 1,
    name: "Turmeric Powder",
    description: "Pure ground turmeric with rich aroma",
    price: "₹120 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 2,
    name: "Red Chilli Powder",
    description: "Fiery and authentic Indian red chillies",
    price: "₹150 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 3,
    name: "Coriander Powder",
    description: "Finely ground coriander seeds",
    price: "₹90 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 4,
    name: "Garam Masala",
    description: "A blend of aromatic Indian spices",
    price: "₹180 / 100g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 5,
    name: "Cumin Seeds",
    description: "Earthy and nutty cumin seeds",
    price: "₹130 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 6,
    name: "Mustard Seeds",
    description: "Pungent mustard seeds for tempering",
    price: "₹110 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 7,
    name: "Black Pepper",
    description: "Freshly ground black pepper",
    price: "₹160 / 150g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
  {
    id: 8,
    name: "Fennel Seeds",
    description: "Sweet and aromatic fennel seeds",
    price: "₹140 / 200g",
    image: "/57114ea394a96284787fc8381f623410-removebg-preview.png",
  },
];

const CollectionSection = () => {
  const whatsappNumber = "919778340818";

  // Detect if mobile screen
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Current slide index (group)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set visibleCount based on screen size
  const visibleCount = isMobile ? 1 : 4;
  const totalGroups = Math.ceil(products.length / visibleCount);

  // On resize update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setCurrentIndex(0); // reset index on resize for safety
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide only if NOT mobile
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, totalGroups]);

  const handleChoose = (product) => {
    const message = `Hello, I am interested in *${product.name}*.\n\nDetails:\n${product.description}\nPrice: ${product.price}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleScrollRight = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const handleScrollLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  // Slice products to show current group of cards
  const start = currentIndex * visibleCount;
  let visibleProducts = products.slice(start, start + visibleCount);

  // Wrap around if fewer than visibleCount at end
  if (visibleProducts.length < visibleCount) {
    visibleProducts = visibleProducts.concat(
      products.slice(0, visibleCount - visibleProducts.length)
    );
  }

  return (
    <section className="collection-section">
      <h2 className="collection-title">OUR MASALA COLLECTION</h2>
      <p className="collection-subtitle">
        Spice up your meals with our range of freshly ground and authentic Indian masalas,
        sourced directly from farms for the best flavor.
      </p>

      <div className="collection-grid-wrapper">
        <button
          className="scroll-icon-btn scroll-left"
          onClick={handleScrollLeft}
          aria-label="Scroll products left"
        >
          <FaArrowLeft size={24} />
        </button>

        <div className={`collection-grid carousel ${isMobile ? "mobile" : ""}`}>
          {visibleProducts.map((product) => (
            <div key={product.id} className="collection-card visible">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="choose-btn" onClick={() => handleChoose(product)}>
                CHOOSE
              </button>
            </div>
          ))}
        </div>

        <button
          className="scroll-icon-btn scroll-right"
          onClick={handleScrollRight}
          aria-label="Scroll products right"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default CollectionSection;
