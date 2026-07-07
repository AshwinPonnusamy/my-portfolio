import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import About from "../sections/About";
import Achievements from "../sections/Achievements";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};
