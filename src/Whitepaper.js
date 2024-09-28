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
        `DogWifMog ($DWM) is more than just a meme coin—it's a celebration of internet culture, community, and creativity, built to take meme coins to the next level. 
        With a total circulation of 100 million tokens, DogWifMog not only capitalizes on the popularity of meme coins like Dogecoin but also innovates by placing a strong emphasis on the styling of memes, creating a unique platform for users to explore and express themselves through memes in ways that haven't been seen before.`
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
        `DogWifMog has a total circulation of 100 million tokens, ensuring that it is both accessible and valuable in the meme coin market. This fixed supply aims to create scarcity while encouraging early adoption and holding for potential long-term gains.`
      )}

      {content(
        "whitepaper-title",
        "whitepaper-text",
        "Meme Styling",
        `DogWifMog is redefining meme culture by providing tools that allow users to customize, create, and evolve their own memes. 
        Meme styling elevates the way people engage with internet culture, offering rewards for creativity and making memes more than just humor—they become a form of digital expression and currency.`
      )}
    </div>
  );
};

export default WhitePaper;
