import React from "react";
// import "./Fourthsection.css";

export default function Fourthsection() {
  return (
    <div className=" container fourth-section">
      <hr />
      <h1 className="title" data-aos="fade-down">
        ROADMAP
      </h1>

      <div className="roadmap-grid">
        {/* Phase I */}
        <div className="roadmap-phase" data-aos="fade-down">
          <h2>PHASE I</h2>
          <ul>
            <li>Fair Launch</li>
            <li>Burn 100% LP</li>
            <li>Shill ze $Dogwifmog</li>
            <li>500 TG Members</li>
          </ul>
        </div>

        {/* Phase II */}
        <div className="roadmap-phase" data-aos="fade-down">
          <h2>PHASE II</h2>
          <ul>
            <li>Increase Marketing</li>
            <li>1000 TG Members</li>
            <li>Apply for CoinGecko</li>
            <li>Apply for CoinMarketCap</li>
          </ul>
        </div>

        {/* Phase III */}
        <div className="roadmap-phase" data-aos="fade-down">
          <h2>PHASE III</h2>
          <ul>
            <li>1500 TG Members</li>
            <li>Initiate Burn Lottery Game</li>
            <li>Tier 2 and 3 CEX Listings</li>
          </ul>
        </div>

        {/* Phase IV */}
        <div className="roadmap-phase" data-aos="fade-down">
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
