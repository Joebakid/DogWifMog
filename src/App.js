import Navbar from "./Navbar";
import Main from "./Main";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a custom duration
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
