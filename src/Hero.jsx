import React from "react";
import "./components.css";
import Links from "./common/Links";

function Hero({ togglePage }) {
  const year = new Date().getFullYear();

  return (
    <div className="hero" onClick={togglePage}>
      <img src="/white.svg" />
      <h1>PROFESSIONAL PROFILE</h1>
      <h2>VEM AIENSI MARASIGAN</h2>
      <div className="quick-links">
        <Links direction="links-row"></Links>
      </div>
      <p>© {year}</p>
    </div>
  );
}

export default Hero;
