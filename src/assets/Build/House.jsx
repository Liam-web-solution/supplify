import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './services';
import About from './About';
import Footer from './Footer';

function House() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default House;
