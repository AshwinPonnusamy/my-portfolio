import React from "react";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import About from "../sections/About";
import Achievements from "../sections/Achievements";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};
