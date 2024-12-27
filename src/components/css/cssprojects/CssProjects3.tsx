import React, { useState, useEffect, useRef } from "react";

const CssProjects3 = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Reference to the last message element
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever the messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle the sending of messages
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: "Bot is typing...", sender: "bot" },
      ]);
      setInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: "This is a response from the bot!", sender: "bot" },
        ]);
      }, 1500); // Simulate bot reply after 1.5 seconds
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 p-4">
      {/* Title */}
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-8 text-white">
        Chat Interface (CSS Project 3)
      </h1>

      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-indigo-600 text-white py-4 px-6 text-2xl font-semibold rounded-t-lg shadow-md">
          ChatBot
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-96 overflow-y-scroll space-y-4 bg-gray-100">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-xs p-3 rounded-lg transition-all ${
                message.sender === "user"
                  ? "bg-blue-500 text-white ml-auto animate-slideUp"
                  : "bg-yellow-500 text-black animate-scaleFadeIn"
              } ${message.sender === "bot" ? "animate-shake" : ""}`}
            >
              {message.text}
            </div>
          ))}
          {/* This div will always be at the bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form
          onSubmit={sendMessage}
          className="flex items-center p-4 bg-white rounded-b-lg shadow-inner"
        >
          <input
            type="text"
            className="flex-grow p-2 rounded-lg mr-4 border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer with copyright */}
      <footer className="w-full text-center text-white mt-8 py-4">
        <p>© 2024 RCLD. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CssProjects3;
