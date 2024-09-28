import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported from react-router-dom
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const sectionRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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
        {" "}
        <Link className="logo-link" to="/">Dogwifmog</Link>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link className="link-el" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#services">
            Tokenomics
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact">
            Pump.fun
          </Link>
        </li>
        <li>
          <Link className="link-el" to="/whitepaper">
            WhitePaper
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact">
            Twitter
          </Link>
        </li>
        <li>
          <Link className="link-el" to="#contact">
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
