import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import the Logo component

const Entry: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen flex justify-center items-center flex-col">
      {/* Logo at the top and centered */}
      <Logo />

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-lg text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Choose a Topic
        </h1>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link to="/html">
            <button className="bg-teal-500 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 active:scale-95">
              HTML
            </button>
          </Link>
          <Link to="/css">
            <button className="bg-cyan-500 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:bg-cyan-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-95">
              CSS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Entry;
