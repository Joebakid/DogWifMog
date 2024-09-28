import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function FirstSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: -100,
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
    <>
      <section ref={sectionRef} className="first-section container">
        {/* Attach ref to the section */}
        <div className="text-hero">
          <h1 className="title">Introducing Dogwifmog</h1>
          <p className="showcase-text">
            Wrap Yourself in Fun with Wrapped Deng!
          </p>
        </div>
        <img src="/img/img.png" className="img" alt="dog with glasses" />
      </section>
      <div className="container">
        <hr />
      </div>
    </>
  );
}
