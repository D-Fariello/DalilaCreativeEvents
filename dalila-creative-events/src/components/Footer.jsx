import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>Dalila Creative Events</h4>
          <p>
            Via Bellezza 23
            <br />
            20100 Milan, Italy
          </p>
          <p>
            <a href="tel:+390212345678">+39 078</a>
          </p>
          <p>
            <a href="mailto:info@email.it">info@email.it</a>
          </p>
        </div>

        <div className="footer__column">
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Follow Us</h4>
          <ul className="footer__social">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Dalila Creative Events – All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
