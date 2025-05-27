import React from "react";
import "../index.css";
import Reviewer1 from "../assets/Images/reviewer1.jpg";
import Reviewer2 from "../assets/Images/reviewer2.jpg";
import Reviewer3 from "../assets/Images/reviewer3.jpg";
import Reviewer4 from "../assets/Images/reviewer4.jpg";

const FifthTemplate = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
            People are Saying About DoWhith
          </h2>
          <p className="mb-6 max-w-md text-center md:text-left text-gray-400">
            Everything you need to accept payments and grow your money or manage
            anywhere on planet.
          </p>

          <blockquote className="mb-4 max-w-md text-center md:text-left italic text-gray-400">
            "I am very helped by this E-wallet application, my days are very
            easy to use this application and it’s very helpful in my life. Even
            I can pay in a short time 😍"
          </blockquote>
          <p className="mb-8 max-w-md text-center md:text-left font-semibold text-green-600">
            — Aria Zinanrio
          </p>

          {/* Reviewers */}
          <div className="flex gap-4 mb-8">
            {[Reviewer1, Reviewer2, Reviewer3, Reviewer4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Reviewer ${i + 1}`}
                width={48}
                height={48}
                className="rounded-full border-2 border-green-400 object-cover"
              />
            ))}
          </div>

          <div className="mb-8 text-center md:text-left">
            <h3 className="text-4xl font-bold text-green-400 mb-1 glow-text hover:cursor-pointer">
              Biccas
            </h3>
            <p>Get started now — try our product!</p>
          </div>

          <div className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="w-full rounded border border-gray-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <button
              aria-label="Submit email"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-400 hover:bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg transition cursor-pointer"
            >
              ➤
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-10">
          <form className="bg-gray-800 p-6 rounded-2xl shadow-md max-w-md mx-auto">
            <h2 className="text-2xl text-center">Get Startted</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="w-full rounded border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-3 rounded shadow-lg transition"
            >
              Request Demo
            </button>
          </form>

          <div className="flex justify-around max-w-md mx-auto  text-gray-700">
            <div>
              <h4 className="font-semibold mb-2 text-gray-300">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Help Center
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Account Information
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  About
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-300">
                Help and Solution
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Talk to Support
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Support Docs
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  System Status
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Covid Response
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Update
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Security
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Beta Test
                </li>
                <li className="hover:text-green-400 hover:underline cursor-pointer">
                  Pricing Product
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthTemplate;
