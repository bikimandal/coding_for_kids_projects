import React, { useState } from "react";

const JavaProject3: React.FC = () => {
  const [inputNumber, setInputNumber] = useState<number | "">("");
  const [patterns, setPatterns] = useState<string[]>([]);

  const generatePatterns = () => {
    if (inputNumber === "" || inputNumber <= 0) {
      setPatterns(["Please enter a positive number."]);
      return;
    }

    const newPatterns: string[] = [];

    // Right Angle Triangle Pattern
    let rightAngleTriangle = "";
    for (let i = 1; i <= inputNumber; i++) {
      rightAngleTriangle += "* ".repeat(i) + "\n";
    }
    newPatterns.push("Right Angle Triangle:\n" + rightAngleTriangle);

    // Inverted Right Angle Triangle Pattern
    let invertedTriangle = "";
    for (let i = inputNumber; i >= 1; i--) {
      invertedTriangle += "* ".repeat(i) + "\n";
    }
    newPatterns.push("Inverted Right Angle Triangle:\n" + invertedTriangle);

    // Square Pattern
    let squarePattern = "";
    for (let i = 1; i <= inputNumber; i++) {
      squarePattern += "* ".repeat(inputNumber) + "\n";
    }
    newPatterns.push("Square Pattern:\n" + squarePattern);

    setPatterns(newPatterns);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Pattern Printing using JAVA
        </h1>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberInput"
          >
            Enter a Number
          </label>
          <input
            type="number"
            id="numberInput"
            value={inputNumber}
            onChange={(e) => setInputNumber(Number(e.target.value))}
            placeholder="Enter a positive number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          onClick={generatePatterns}
          className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Generate Patterns
        </button>

        {patterns.length > 0 && (
          <div className="mt-6 space-y-4">
            {patterns.map((pattern, index) => (
              <pre
                key={index}
                className="bg-gray-100 p-4 rounded-lg overflow-auto text-gray-800 whitespace-pre-wrap font-mono"
              >
                {pattern}
              </pre>
            ))}
          </div>
        )}
      </div>

      <footer className="mt-6 text-center text-gray-600 text-sm">
        &copy; 2025 RCLD. All rights reserved.
      </footer>
    </div>
  );
};

export default JavaProject3;
