import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo"; // Import Logo component

const HtmlPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen flex justify-center items-center flex-col">
      {/* Logo at the top and centered */}
      <Logo />

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl text-center mt-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">
          Welcome to the HTML Page
        </h1>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
          <Link to="/html/project1">
            <button className="bg-teal-500 text-white py-3 px-8 rounded-lg text-xl shadow-md transform hover:scale-105 hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 active:scale-95">
              Project 1
            </button>
          </Link>
          <Link to="/html/project2">
            <button className="bg-teal-500 text-white py-3 px-8 rounded-lg text-xl shadow-md transform hover:scale-105 hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 active:scale-95">
              Project 2
            </button>
          </Link>
          <Link to="/html/project3">
            <button className="bg-teal-500 text-white py-3 px-8 rounded-lg text-xl shadow-md transform hover:scale-105 hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 active:scale-95">
              Project 3
            </button>
          </Link>
        </div>

        {/* Optional content area */}
        <div className="content">
          <p className="text-lg text-gray-600">
            Select a project to begin working with HTML examples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HtmlPage;
