import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-yellow-600 text-white">
      <h1 className="text-lg font-bold">BuildRight Constructions</h1>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`md:flex md:gap-6 ${open ? 'block mt-3' : 'hidden'}`}>
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
