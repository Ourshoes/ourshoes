import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Ikon React Icons
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // State link aktif
  const [menuOpen, setMenuOpen] = useState(false); // State toggle sidebar

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Tutup menu setelah link diklik
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle untuk sidebar
  };

  return (
    <>
      <header>
        <h1 className="nav-tittle">Our Shoes</h1>
        {/* Ikon toggle menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar biasa */}
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

      {/* Sidebar responsif */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-links">
          <Link to="/home" onClick={() => handleClick("/home")}>
            Home
          </Link>
          <Link to="/about" onClick={() => handleClick("/about")}>
            About
          </Link>
          <Link to="/contact" onClick={() => handleClick("/contact")}>
            Contact
          </Link>
          <Link to="/product" onClick={() => handleClick("/product")}>
            Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
