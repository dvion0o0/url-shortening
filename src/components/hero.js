import React from "react";
import illustration from "../assets/illustration-working.svg";
import { AppContext } from "../contextapi/context";
const Hero = () => {
  const { show } = React.useContext(AppContext);
  return (
    <section className="hero">
      <img src={illustration} className="hero-img" alt="hero" />
      <div className="hero-content">
        <h1>More than just shorterlinks</h1>
        <h3>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </h3>
        <button className="hero-btn">get started</button>
      </div>
    </section>
  );
};

export default Hero;
