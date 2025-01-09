import React, { useState } from "react";

const JavaProject1: React.FC = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const convertToFahrenheit = () => {
    if (celsius === "") return;
    const f = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  const convertToCelsius = () => {
    if (fahrenheit === "") return;
    const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Temperature Converter
        </h1>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="celsius"
          >
            Celsius
          </label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            placeholder="Enter Celsius"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fahrenheit"
          >
            Fahrenheit
          </label>
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            placeholder="Enter Fahrenheit"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={convertToFahrenheit}
            className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Convert to Fahrenheit
          </button>
          <button
            onClick={convertToCelsius}
            className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Convert to Celsius
          </button>
        </div>

        <button
          onClick={resetFields}
          className="w-full mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Reset
        </button>
      </div>

      <footer className="mt-6 text-center text-gray-600 text-sm">
        &copy; 2025 RCLD. All rights reserved.
      </footer>
    </div>
  );
};

export default JavaProject1;
