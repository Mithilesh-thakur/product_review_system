import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyStore</Link>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white">
            All Products
          </Link>
          <Link to="/add-product" className="text-gray-300 hover:text-white">
            Add Products
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-gray-300 hover:text-white py-2"
            onClick={toggleMenu}
          >
            All Products
          </Link>
          <Link
            to="/add-product"
            className="block text-gray-300 hover:text-white py-2"
            onClick={toggleMenu}
          >
            Add Products
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
