import React from "react";
import { motion } from "framer-motion";
import imgHome from './img_home.png'; // Pastikan jalur gambar benar
import "./Home.css";

const Home = () => {
  const text = `
    Explore our collection of premium footwear designed for ultimate comfort
    and unmatched style. Whether you're looking for casual wear, athletic
    shoes, or elegant designs, we have the perfect match for every occasion.
    Start your journey towards perfect fit and fashion today!
  `;

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="home-container">
      <div className="home">
        <h1>Discover the Perfect Pair for You!</h1>
        <motion.p
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="typing-text"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <button>Explore Our Product</button>
      </div>
 <div className="img">
        <motion.img
          src={imgHome}
          alt="yayay"
          initial={{ opacity: 0, scale: 0.8, filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }} // Mulai dengan opacity 0 dan skala lebih kecil
          animate={{ opacity: 1, scale: 1, filter: "drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.3))" }} // Fade-in dan skala kembali normal
          transition={{
            opacity: { duration: 2 }, // Durasi fade-in
            scale: { duration: 1, delay: 1 }, // Delay sedikit untuk skala
            filter: { duration: 1 }
            
          }}
        />
      </div>
    </div>
  );
};

export default Home;
