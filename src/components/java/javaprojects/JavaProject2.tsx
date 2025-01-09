import React, { useState } from "react";

const JavaProject2: React.FC = () => {
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const calculateAge = () => {
    if (!dob) return;
    const currentDate = new Date();
    const birthDate = new Date(dob);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(
        birthDate.getFullYear(),
        birthDate.getMonth() + 1,
        0
      ).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge(`${years} years, ${months} months, and ${days} days`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Age Calculator
        </h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Current Date
          </label>
          <input
            type="text"
            value={new Date().toLocaleDateString()}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-lg focus:outline-none cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          onClick={calculateAge}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">Your Age:</p>
            <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2">
              {age}
            </p>
          </div>
        )}
      </div>

      <footer className="mt-6 text-center text-gray-600 text-sm">
        &copy; 2025 RCLD. All rights reserved.
      </footer>
    </div>
  );
};

export default JavaProject2;
