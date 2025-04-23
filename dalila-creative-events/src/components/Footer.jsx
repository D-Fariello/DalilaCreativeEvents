import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>Dalila Creative</h4>
          <p>Based on the French Riviera</p>
          <p>
            <a href="mailto:hello@dalilacreative.com">
              dalila.fariello@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+33712345678">+33 6 35 13 01 87</a>
          </p>
        </div>

        <div className="footer__column">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#working">Working With Me</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Social</h4>
          <ul className="footer__social">
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Dalila Creative — All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
