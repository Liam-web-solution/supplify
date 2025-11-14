import React from 'react';
import Register from './Regster';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[url('/construction-bg.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 text-center md:text-left p-4 md:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">We Build Your Dreams</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          Professional construction and architectural services that bring your vision to life.
        </p>
      </div>

      {/* Register Form Here */}
      <div className="relative z-10 mt-6 md:mt-0 md:w-1/3 bg-white rounded-xl shadow-lg p-6 text-gray-900 mx-4 w-[90%] sm:w-[80%]">
        {/* <Register /> */}
      </div>
    </section>
  );
}

export default Hero;
