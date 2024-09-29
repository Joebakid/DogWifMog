import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Start with the menu closed
  const sectionRef = useRef(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    console.log("Link clicked!"); // Debugging log
    setIsOpen(false); // Close the menu on link click
  };

  useEffect(() => {
    // Animation for the navbar
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <nav className="navbar container sticky" ref={sectionRef}>
      <div className="logo">
        <Link className="logo-link" to="/">
          Dogwifmog
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link className="link-el" to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#services" onClick={handleLinkClick}>
            Tokenomics
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact" onClick={handleLinkClick}>
            Pump.fun
          </Link>
        </li>
        <li>
          <Link className="link-el" to="/whitepaper" onClick={handleLinkClick}>
            WhitePaper
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact" onClick={handleLinkClick}>
            Twitter
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact" onClick={handleLinkClick}>
            Contract address
          </Link>
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
