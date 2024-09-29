import Navbar from "./Navbar";
import Main from "./Main";
import WhitePaper from "./Whitepaper";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/whitepaper" element={<WhitePaper />} />
      </Routes>
    </div>
  );
}

export default App;
