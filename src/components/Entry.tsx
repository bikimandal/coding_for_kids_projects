import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import the Logo component
import Footer from "./Footer";

const Entry: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen flex justify-center items-center flex-col">
      {/* Logo at the top and centered */}
      <Logo />

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-auto max-w-full text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Choose a Topic
        </h1>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row justify-center w-auto items-center gap-6 sm:gap-12">
          <Link to="/scratch">
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300 active:scale-95">
              SCRATCH
            </button>
          </Link>
          <Link to="/html">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-400 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:from-purple-600 hover:to-indigo-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">
              HTML
            </button>
          </Link>
          <Link to="/css">
            <button className="bg-gradient-to-r from-green-400 to-lime-500 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:from-green-500 hover:to-lime-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 active:scale-95">
              CSS
            </button>
          </Link>
          <Link to="/java">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-8 rounded-lg text-xl sm:text-2xl shadow-md transform hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95">
              Java
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Entry;
