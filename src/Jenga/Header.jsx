import React, { useState } from "react";

// ================== Header ==================
function Header()  {
  const [isOpen, setIsOpen] = useState(false); // controls hamburger toggle

  return (
    <header className="flex items-center bg-gray-50 dark:bg-gray-900 p-4 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-4xl max-sm:text-xl text-blue-600 border-2 border-blue-500 rounded-sm hover:bg-blue-100">
          Supplify🛒
        </span>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Supplify
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex ml-auto gap-6">
        <a href="#home" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">
          Home
        </a>
        <a href="#how" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">
          About
        </a>
        <a href="#SuppliersSay" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">
          Supplier
        </a>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden ml-auto text-gray-900 dark:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-3xl max-sm:text-xl ">
          {isOpen ? "❌" : "Menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 right-4 left-4 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-3 md:hidden">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#how"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#SuppliersSay"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600"
          >
            Supplier
          </a>
        </nav>
      )}
    </header>
  );
};
export default Header