import React from "react";

const WhitePaper = () => {
  function content(titleClassName, textClassName, title, text) {
    return (
      <div className="flex whitepaper-content">
        <h2 className={titleClassName}>{title}</h2>
        <p className={textClassName}>{text}</p>
      </div>
    );
  }

  return (
    <div className="container">
      {content(
        "whitepaper-title",
        "whitepaper-text",
        "Introduction",
        `DogWifMog is a revolutionary meme coin that merges the playful culture of internet memes with the rapidly growing world of decentralized finance (DeFi). Built on the Solana blockchain, DogWifMog aims to create a fun and rewarding ecosystem for users, while offering real utility beyond the memes. It combines humor, community engagement, and cutting-edge crypto technology to become the next big meme token. `
      )}

      {content(
        "whitepaper-title",
        "whitepaper-text",
        "What Is DogWifMog?",
        `At its core, DogWifMog is a cryptocurrency that blends the fun, humor, and virality of internet memes with the decentralized technology of blockchain. 
        Unlike other meme coins that are often one-dimensional, DogWifMog embraces the idea of "meme styling," giving users tools and incentives to create, share, and evolve memes. By doing so, it seeks to cultivate an ecosystem where memes are not just jokes but tokens of value and creativity.`
      )}

      {content(
        "whitepaper-title",
        "whitepaper-text",
        "Circulation",
        `- Total Supply: 1 billion (1,000,000,000) DogWifMog tokens 

- Token Symbol: DWM .`
      )}

      <div className="flex whitepaper-content">
        <h2 className="whitepaper-title">Token Distribution</h2>
        <table className="whitepaper-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Percentage</th>
              <th>Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team</td>
              <td>20%</td>
              <td>200M</td>
            </tr>
            <tr>
              <td>Advisors</td>
              <td>5%</td>
              <td>50M</td>
            </tr>
            <tr>
              <td>Private Sale</td>
              <td>15%</td>
              <td>150M</td>
            </tr>
            <tr>
              <td>Public Sale</td>
              <td>20%</td>
              <td>200M</td>
            </tr>
            <tr>
              <td>Liquidity Pool</td>
              <td>10%</td>
              <td>100M</td>
            </tr>
            <tr>
              <td>Community Incentives</td>
              <td>20%</td>
              <td>200M</td>
            </tr>
            <tr>
              <td>Reserve</td>
              <td>10%</td>
              <td>100M</td>
            </tr>
          </tbody>
        </table>
      </div>

      {content(
        "whitepaper-title",
        "whitepaper-text",
        "Meme Styling",
        `DogWifMog is redefining meme culture by providing tools that allow users to customize, create, and evolve their own memes. 
        Meme styling elevates the way people engage with internet culture, offering rewards for creativity and making memes more than just humor—they become a form of digital expression and currency.`
      )}

      {content(
        "whitepaper-title",
        "whitepaper-text",
        "Vesting Schedule",
        `DogWifMog ensures a fair vesting schedule to promote long-term stability and commitment from key stakeholders: 

  

- Team: 1-year cliff, vested monthly over 3 years. 

- Advisors: 1-year cliff, vested quarterly over 2 years. 

- Private Sale: 25% at launch, the remaining vested over 1 year. 

  

This vesting structure ensures that tokens are gradually released to core team members and early investors, maintaining price stability and preventing large token dumps. .`
      )}
    </div>
  );
};

export default WhitePaper;
