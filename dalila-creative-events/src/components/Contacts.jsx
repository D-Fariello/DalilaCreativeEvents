import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__intro">
          <h2>Let’s Create Something Unforgettable</h2>
          <p>
            Whether you’re dreaming of a celebration, an experience, or a brand
            moment — I’d love to hear from you. Reach out below and let’s make
            magic happen on the Riviera.
          </p>
        </div>

        <form
          className="contact__form"
          action="https://formsubmit.co/dalila.fariello@gmail.com"
          method="POST"
        >
          {/* Anti-bot */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Optional redirect */}
          <input
            type="hidden"
            name="_next"
            value="https://tua-pagina-successo.com/thanks"
          />

          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your event..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
