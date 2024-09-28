import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the sectionRef here in Navbar
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: -50,
      }, // Initial state (from)
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      } // End state (to)
    );
  }, []);

  return (
    <nav
      className="navbar container sticky"
      ref={sectionRef}
      data-aos-anchor-placement="center-bottom"
    >
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
        <li>
          <a className="link-el" href="#contact">
            WhitePaper
          </a>
        </li>
        <li>
          <a className="link-el" href="#contact">
            Twitter
          </a>
        </li>
        <li>
          <a className="link-el" href="#contact">
            Contract address
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
