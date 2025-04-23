import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__container">
        <h1>
          Bespoke Events on the French Riviera
          <br />
          <em>Designed to inspire, crafted to remember.</em>
        </h1>

        <p>
          Based on the French Riviera, Dalila Creative Events brings your vision
          to life through beautifully tailored experiences — from elegant
          weddings and intimate soirées to brand launches and high-end corporate
          events.
          <br />
          <br />
          We combine refined aesthetics with strategic planning, ensuring each
          event feels effortless, unforgettable, and unmistakably yours.
          <br />
          <br />
          You dream it — we design it with meaning, emotion, and style.
        </p>

        <a href="#services" className="hero__cta">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
