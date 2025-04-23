import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__image">
          <img src="/images/dalila.avif" alt="Dalila, Event Designer" />
        </div>

        <div className="about__content">
          <h2>More than events — meaningful experiences</h2>
          <p>
            I'm Dalila — an event designer based on the French Riviera, with a
            passion for creating intentional and stylish moments that stay with
            you.
          </p>
          <p>
            After years living abroad, I understand the unique needs of women
            who want to celebrate with purpose, even from afar. Whether you're
            planning a destination gathering, a brand retreat, or something
            simply beautiful — I'm here to bring it to life with elegance,
            clarity, and heart.
          </p>
          <p>
            I believe events are more than just a moment — they are a feeling, a
            story, and a reflection of you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
