import React, { useState } from "react";
import quaprix from "../../assets/icons/quaprix.png";
import menu_icon from "../../assets/icons/menu.png";
import "./styles.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const isCurrentPage = (href) => {
    return window.location.pathname === href;
  };

  return (
    <header className="container">
      <a href="/">
        <img className="logo"  src={quaprix} alt="Image not found" />
      </a>
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li className={isCurrentPage("/") ? "active" : ""}>
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li className={isCurrentPage("/services") ? "active" : ""}>
          <a href="/services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li className={isCurrentPage("/about-us") ? "active" : ""}>
          <a href="/about-us" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li className={isCurrentPage("/contact-us") ? "active" : ""}>
          <a href="/contact-us" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li className={isCurrentPage("/careers") ? "active" : ""}>
          <a href="/careers" onClick={toggleMenu}>
            Careers
          </a>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Header;