import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import ikon React Icons
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // Untuk link aktif
  const [menuOpen, setMenuOpen] = useState(false); // Untuk menu toggle

  const handleClick = (link) => {
    setActiveLink(link); // Set link yang diklik sebagai aktif
    setMenuOpen(false); // Tutup menu setelah link diklik
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu (buka/tutup)
  };

  return (
    <header>
      <h1 className="nav-tittle">Our Shoes</h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        {/* Tampilkan ikon React Icons */}
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Ikon berubah sesuai state */}
      </div>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      
        <div className="nav-links">
          <Link
            to="/home"
            className={activeLink === "/home" ? "active" : ""}
            onClick={() => handleClick("/home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleClick("/about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleClick("/contact")}
          >
            Contact
          </Link>
          <Link
            to="/product"
            className={activeLink === "/product" ? "active" : ""}
            onClick={() => handleClick("/product")}
          >
            Product
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
