import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <section className="bg-gray-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl text-green-400 font-bold cursor-pointer glow-text">
          Biccas
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-green-500 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-green-500 cursor-pointer transition">
            Product
          </li>
          <li className="hover:text-green-500 cursor-pointer transition">
            FAQ
          </li>
          <li className="hover:text-green-500 cursor-pointer transition">
            Blog
          </li>
          <li className="hover:text-green-500 cursor-pointer transition">
            About Us
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="text-gray-700 font-medium hover:text-green-500 transition glow-text cursor-pointer">
            Login
          </button>
          <button className="bg-green-400 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-500 transition glow-text">
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
