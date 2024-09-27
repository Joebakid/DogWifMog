import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
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
          toggleActions: "play none none none", // Play the animation on scroll
        },
      } // End state
    );
  }, []);

  return (
    <section ref={sectionRef} className="second-section container">
      {/* Attach ref to the section */}
      <h1 className="title py-1">About</h1>
      <p className="about-text">
        Dogwifmog is an innovative, community-driven meme coin that celebrates
        the playful spirit of the internet’s favorite pet—the dog! Inspired by
        the viral culture of meme coins, this project aims to combine humor and
        crypto by offering a fun, rewarding token ecosystem for users and
        holders. Powered by the solana blockchain type, our token, Dogwifmog,
        captures the essence of decentralized finance (DeFi) with a
        light-hearted twist.
      </p>
    </section>
  );
}
