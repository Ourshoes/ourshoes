import React, { useState } from 'react'; // Tambahkan import useState
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";
import vans from "./Vans.png";
import skechers from "./skechers.png";
import adidas from "./Adidas.png";
import Nb from "./New balance.png";
import './Product.css';


const ProductSlider = () => {
  // Tambahkan state untuk mengatur indeks slide saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { name: "Vans", price: "Rp. 5.000.000", img: vans, description: "Comfortable and stylish sneakers for casual wear." },
    { name: "Skechers", price: "Rp. 4.500.000", img: skechers, description: "Lightweight walking shoes with superior comfort." },
    { name: "Adidas", price: "Rp. 6.000.000", img: adidas, description: "Performance shoes for athletes and everyday wear." },
    { name: "New Balance", price: "Rp. 4.800.000", img: Nb, description: "Durable and supportive shoes for long-term use." },
  ];

  

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeIn" }}
  >
    <div className="product-slider">
      <div className="slider-content">
        {/* Image */}
        <div className="image-container">
          <img src={products[currentIndex].img} alt={products[currentIndex].name} />
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h2>{products[currentIndex].name}</h2>
          <h3>{products[currentIndex].price}</h3>
         

          {/* Bullet List */}
          <ul className="bullet-list">
            {products.map((_, index) => (
              <li
                key={index}
                className={currentIndex === index ? 'active' : ''}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <p>{products[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button className="slider-btn prev" onClick={prevSlide}><GrFormPrevious/></button>
        <button className="slider-btn next" onClick={nextSlide}><MdOutlineNavigateNext /></button>
      </div>
    </div>
    </motion.div>
  );
};

export default ProductSlider;