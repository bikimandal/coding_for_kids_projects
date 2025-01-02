import { useState, ChangeEvent } from "react";

export default function HTMLProject1() {
  const [sessionMode, setSessionMode] = useState("offline");

  const handleSessionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSessionMode(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-500 shadow-lg">
        <nav className="container mx-auto flex items-center justify-between py-6 px-10">
          <div className="flex items-center">
            <img
              src="/assets/img/logo-rcld.png"
              alt="Logo"
              className="h-12 mr-6"
            />
            <span className="text-3xl font-semibold text-white">RCLD</span>
          </div>
          <ul className="hidden md:flex space-x-12 text-lg text-white">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-yellow-300 transition">
                Notification
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Courses
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="hover:text-yellow-300 transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Inquiry Section */}
      <section className="flex items-center justify-center py-24 bg-gradient-to-r from-teal-400 to-cyan-500">
        <div className="bg-white p-12 rounded-lg shadow-xl w-full max-w-lg">
          <h2 className="text-4xl font-semibold text-center text-purple-800 mb-8">
            Book your Free Session
          </h2>
          <p className="text-center text-md text-gray-600 mb-8">
            Learn from India's top educators in a comfortable environment.
          </p>

          {/* Session Mode */}
          <div className="flex justify-center gap-10 mb-8">
            <div>
              <input
                type="radio"
                id="online"
                name="session-mode"
                value="online"
                checked={sessionMode === "online"}
                onChange={handleSessionChange}
                className="hidden"
              />
              <label
                htmlFor="online"
                className={`cursor-pointer px-8 py-4 text-lg font-medium border-2 border-gray-300 rounded-full text-gray-700 transition-all ${
                  sessionMode === "online"
                    ? "bg-purple-600 text-white border-purple-600"
                    : "hover:bg-purple-100"
                }`}
              >
                Online
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="offline"
                name="session-mode"
                value="offline"
                checked={sessionMode === "offline"}
                onChange={handleSessionChange}
                className="hidden"
              />
              <label
                htmlFor="offline"
                className={`cursor-pointer px-8 py-4 text-lg font-medium border-2 border-gray-300 rounded-full text-gray-700 transition-all ${
                  sessionMode === "offline"
                    ? "bg-purple-600 text-white border-purple-600"
                    : "hover:bg-purple-100"
                }`}
              >
                Offline
              </label>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter Name of your Child"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-gray-700"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-gray-700"
            />
            <button className="absolute top-0 right-0 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:bg-gradient-to-l transition-all">
              Send OTP
            </button>
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-gray-700"
            />
          </div>
          <div className="mb-8">
            <select className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-gray-700">
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg hover:bg-gradient-to-l transition-all">
            Continue to Schedule
          </button>
        </div>
      </section>
    </div>
  );
}
