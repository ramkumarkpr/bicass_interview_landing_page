import React from "react";

const Copyright = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-gray-400 mb-2 md:mb-0">
          © 2022 Biccas Inc. All rights reserved.
        </p>
        <nav className="text-sm text-gray-400 space-x-4">
          <a href="#" className="hover:text-green-500">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-green-500">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Copyright;
