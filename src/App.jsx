import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Achievements from './sections/Achievements';

import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

