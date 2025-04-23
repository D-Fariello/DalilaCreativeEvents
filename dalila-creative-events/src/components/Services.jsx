import React from "react";
import services from "../data/servicesData.json";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            data-aos-delay={index * 200}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-card__image"
            />
            <div className="service-card__overlay">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
