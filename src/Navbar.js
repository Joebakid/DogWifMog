import React, { useState } from "react";
// import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar container sticky">
      <div className="logo">Dogwifmog</div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a className="link-el" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="link-el" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="link-el" href="#services">
            Tokenomics
          </a>
        </li>
        <li>
          <a className="link-el" href="#contact">
            Pump.fun
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>
    </nav>
  );
}
