import React from "react";
import testimonials from "../data/testimonialsData.json";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__heading">
        <h2>What Clients Say</h2>
        <p>
          Real words from real events — thoughtful, intentional, and
          unforgettable.
        </p>
      </div>

      <div className="testimonials__container">
        {testimonials.map((t, index) => (
          <div
            className="testimonial-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <p className="testimonial-card__quote">“{t.quote}”</p>
            <p className="testimonial-card__name">– {t.name}</p>
            <p className="testimonial-card__event">{t.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
