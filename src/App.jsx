import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Product from "./component/Product/Product";
import "./App.css";

const App = () => {
  const [activeLink, setActiveLink] = useState(""); // Tambahkan state untuk link aktif

  return (
    <Router>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Routes>
        <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
        <Route path="/home" element={<Home setActiveLink={setActiveLink} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
