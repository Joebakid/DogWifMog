import React from "react";

export default function FirstSection() {
  return (
    <>
      <section className="first-section container">
        <div className="text-hero ">
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
