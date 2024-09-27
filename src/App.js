import Navbar from "./Navbar";
import Main from "./Main";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function App() {
  // Using a ref to target the element to animate
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // GSAP Animation on the section and image
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: "bounce.out",
      delay: 0.5,
    });
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
