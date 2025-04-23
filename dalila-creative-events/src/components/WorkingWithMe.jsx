import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "We begin with a warm, honest conversation. You share your story, your goals, your dreams — and I listen. Together we shape a clear, authentic direction.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "I handle the details — location scouting, aesthetic mood, vendor coordination. You receive refined proposals and transparent communication every step of the way.",
  },
  {
    number: "03",
    title: "Celebration & Magic",
    description:
      "It’s time to live it. With elegance and ease, your event unfolds beautifully. You enjoy the moment — I make sure it flows seamlessly behind the scenes.",
  },
];

const WorkingWithMe = () => {
  return (
    <section id="working" className="working">
      <div className="working__heading">
        <h2>Working With Me</h2>
        <p>
          A seamless, intentional, and heartfelt journey — from our first chat
          to the final celebration.
        </p>
      </div>

      <div className="working__steps">
        {steps.map((step, index) => (
          <div
            className="working-step"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="working-step__number">{step.number}</div>
            <h3 className="working-step__title">{step.title}</h3>
            <p className="working-step__description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingWithMe;
