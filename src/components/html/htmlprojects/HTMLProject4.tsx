import { useState, ChangeEvent } from "react";

export default function HTMLProject4() {
  const [sessionMode, setSessionMode] = useState("offline");

  const handleSessionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSessionMode(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-[#F8EDE3] shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img
              src="/assets/img/logo-rcld.png"
              alt="Logo"
              className="h-12 mr-4"
            />
            <span className="text-3xl font-bold text-red-500">RCLD</span>
          </div>
          <ul className="hidden sm:flex space-x-6 text-lg text-[#FF6969]">
            <li>
              <a href="#home" className="hover:text-pink-700">
                Home
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-pink-700">
                Notification
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-pink-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-pink-700">
                About Us
              </a>
            </li>
          </ul>
          {/* Mobile menu for small screens */}
          <div className="sm:hidden">
            <button className="text-gray-600">☰</button>
          </div>
        </nav>
      </header>

      {/* Inquiry Section */}
      <section className="flex items-center justify-center py-10 bg-[#CDE8E5]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">
            Book your Free Session
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Learn from India's best teachers
          </p>

          {/* Session Mode */}
          <div className="flex flex-wrap justify-between mb-6">
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
                className={`cursor-pointer px-6 py-2 border rounded-full text-gray-600 border-gray-300 hover:bg-purple-600 hover:text-white transition ${
                  sessionMode === "online" ? "bg-purple-600 text-white" : ""
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
                className={`cursor-pointer px-6 py-2 border rounded-full text-gray-600 border-gray-300 hover:bg-purple-600 hover:text-white transition ${
                  sessionMode === "offline" ? "bg-purple-600 text-white" : ""
                }`}
              >
                Offline
              </label>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Name of your Child"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
            <button className="absolute top-0 right-0 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Send OTP
            </button>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none">
              <option value="">State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
            Continue to Schedule
          </button>
        </div>
      </section>
    </div>
  );
}
