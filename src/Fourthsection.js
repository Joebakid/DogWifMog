import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Fourthsection() {
  const sectionRef = useRef(null); // Create a ref for the section

  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 100,
      }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger animation when this section enters the viewport
          start: "top 80%", // Animation starts when the top of the section is 80% into the viewport
          end: "bottom 60%", // End when the bottom of the section reaches 60% of the viewport
          toggleActions: "play none none none", // Play the animation on scroll down
        },
      } // End state
    );
  }, []);
  return (
    <div className=" container fourth-section">
      <hr />
      <h1 className="title">ROADMAP</h1>

      <div className="roadmap-grid" ref={sectionRef}>
        {/* Phase I */}
        <div className="roadmap-phase">
          <h2>PHASE I</h2>
          <ul>
            <li>Fair Launch</li>
            <li>Burn 100% LP</li>
            <li>Shill ze $Dogwifmog</li>
            <li>500 TG Members</li>
          </ul>
        </div>

        {/* Phase II */}
        <div className="roadmap-phase">
          <h2>PHASE II</h2>
          <ul>
            <li>Increase Marketing</li>
            <li>1000 TG Members</li>
            <li>Apply for CoinGecko</li>
            <li>Apply for CoinMarketCap</li>
          </ul>
        </div>

        {/* Phase III */}
        <div className="roadmap-phase">
          <h2>PHASE III</h2>
          <ul>
            <li>1500 TG Members</li>
            <li>Initiate Burn Lottery Game</li>
            <li>Tier 2 and 3 CEX Listings</li>
          </ul>
        </div>

        {/* Phase IV */}
        <div className="roadmap-phase">
          <h2>PHASE IV</h2>
          <ul>
            <li>3000 TG Members</li>
            <li>Tier 1 CEX Listing</li>
            <li>Buy 500 Dogwifmog for 50 Homeless Shelters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
