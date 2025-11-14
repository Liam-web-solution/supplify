import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-50 shadow-sm">
      <h1 className="font-bold text-lg">
        🧱 Jenga Construction Company
      </h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      
      </ul>
    </nav>
  );
}
export default  Navbar