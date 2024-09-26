import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// import "./Thirdsection.css";

// Register the necessary chart elements
Chart.register(ArcElement, Tooltip, Legend);

export default function Thirdsection() {
  // Token distribution data for the chart
  const data = {
    labels: [
      "Team",
      "Advisors",
      "Public Sale",
      "Liquidity",
      "Community",
      "Reserve",
    ],
    datasets: [
      {
        label: "Token Distribution",
        data: [20, 5, 15, 20, 10, 20, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
        ],
      },
    ],
  };

  return (
    <section className="Thirdsection container">
      {/* Header Section */}
      <hr />
      {/* Token Distribution Section */}
      <div className="token-distribution" data-aos="fade-down">
        <h2 className="title">Token Distribution</h2>

        <Doughnut data={data} />
        {/* Token Data Grid */}
        <div className="data-grid">
          {data.labels.map((label, index) => (
            <div className="grid-item" key={index}>
              <p>
                <strong>{label}</strong>: {data.datasets[0].data[index]}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Token Details Section */}
      <div className="details-container">
        {/* Token Allocation */}
        <div className="token-details" data-aos="fade-down">
          <h2 className="sub-title">Token Allocation</h2>
          <ul className="list-item-thirdsection">
            <li>Team: 20% - 200M Tokens</li>
            <li>Advisors: 5% - 50M Tokens</li>

            <li>Public Sale: 20% - 200M Tokens</li>
            <li>Liquidity Pool: 10% - 100M Tokens</li>
            <li>Community Incentives: 20% - 200M Tokens</li>
            <li>Reserve: 10% - 100M Tokens</li>
          </ul>
        </div>

        {/* Token Utility Section */}
        <div className="utility" data-aos="fade-down">
          <h2 className="sub-title">Token Utility</h2>
          <p className="">The token will have the following utilities:</p>
          <ul className="list-item-thirdsection">
            <li>Governance Voting</li>
            <li>Staking Rewards</li>
            <li>Transaction Fee Discounts</li>
            <li>Exclusive Access to Platform Features</li>
          </ul>
        </div>

        {/* Vesting Schedule Section */}
        <div className="vesting-schedule" data-aos="fade-down">
          <h2 className="sub-title">Vesting Schedule</h2>
          <ul className="list-item-thirdsection">
            <li>Team: 1-year cliff, vested monthly over 3 years</li>
            <li>Advisors: 1-year cliff, vested quarterly over 2 years</li>
            <li>Private Sale: 25% at launch, rest vested over 1 year</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
