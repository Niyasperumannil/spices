import React, { useEffect, useState, useRef } from "react";
import "./CollectionSection.css";

const products = [
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
];

const CollectionSection = () => {
  // Replace with your WhatsApp number (with country code, no + or leading zeros)
  const whatsappNumber = "919778340818";

  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            products.forEach((product, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(product.id)) {
                    return [...prev, product.id];
                  }
                  return prev;
                });
              }, index * 300); // stagger by 300ms per item
            });
            observerInstance.disconnect(); // stop observing once triggered
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // trigger when 10% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChoose = (product) => {
    const message = `Hello, I am interested in *${product.name}*.\n\nDetails:\n${product.description}\nPrice: ${product.price}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="collection-section" ref={sectionRef}>
      <h2 className="collection-title">OUR MASALA COLLECTION</h2>
      <p className="collection-subtitle">
        Spice up your meals with our range of freshly ground and authentic
        Indian masalas, sourced directly from farms for the best flavor.
      </p>

      <div className="collection-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`collection-card ${
              visibleItems.includes(product.id) ? "visible" : "hidden"
            }`}
          >
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
    </section>
  );
};

export default CollectionSection;
