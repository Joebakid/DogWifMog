import Navbar from "./Navbar";
import Main from "./Main";
import WhitePaper from "./Whitepaper"; // Ensure this is correctly cased
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/whitepaper" element={<WhitePaper />} />{" "}
        {/* Ensure this matches the case */}
      </Routes>
    </div>
  );
}

export default App;
