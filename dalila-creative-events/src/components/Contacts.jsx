import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(formRef.current);

    fetch("https://formsubmit.co/ajax/dalila.fariello@gmail.com", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        formRef.current.reset();
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

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

        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
            <input type="hidden" name="_captcha" value="false" />

            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button">
              Send Message
            </button>
          </form>
        ) : (
          <p
            className="contact__thankyou"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Thank you! I’ll be in touch shortly ✨
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
