import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WorkingWithMe from "./components/WorkingWithMe";
import Contacts from "./components/Contacts";

const App = () => {
  useEffect(() => {
    if (!window.location.hash && window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Services />
      <About />
      <WorkingWithMe />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
