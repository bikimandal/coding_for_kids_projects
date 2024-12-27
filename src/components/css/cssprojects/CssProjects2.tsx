import React, { useState } from "react";

const CssProjects2 = () => {
  // State variables to hold the weather data and input city
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState("");

  // Function to fetch weather data when the button is clicked
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=a41713065ec6566ffbcf40f88c49d156&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found or unable to fetch data.");
      }

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
      setWeatherData(null);
    }
  };

  // Handling the input change
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Handling the form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-10">
      {/* Heading for the Invitation Card */}
      <h1 className="text-center text-4xl font-bold mb-4 text-gray-950">
        Weather App (CSS Project 2)
      </h1>

      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl w-full max-w-lg">
        {/* Weather App Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Weather Forecast
        </h1>

        {/* Location Input */}
        <form onSubmit={handleFormSubmit} className="text-center mb-4">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={handleCityChange}
            className="p-2 sm:p-3 w-full sm:w-4/5 lg:w-3/4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <div className="text-center mt-4">
            <button
              type="submit"
              className="p-2 sm:p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            >
              Search
            </button>
          </div>
        </form>

        {/* Weather Info */}
        {error ? (
          <p className="text-red-500 text-center text-sm sm:text-base">
            {error}
          </p>
        ) : weatherData ? (
          <>
            <div className="text-4xl sm:text-5xl text-gray-800 mb-4">
              <span role="img" aria-label="weather" className="text-yellow-500">
                {weatherData.weather[0].main === "Clear" ? "☀️" : "🌥️"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
              {weatherData.name}
            </h2>

            <p className="text-3xl sm:text-4xl font-semibold text-gray-800">
              {weatherData.main.temp}°C
            </p>
            <p className="text-lg sm:text-xl text-gray-600 capitalize">
              {weatherData.weather[0].description}
            </p>

            {/* Extra Weather Details */}
            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
              <div className="text-center">
                <p className="text-sm sm:text-lg text-gray-800">Humidity</p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-700">
                  {weatherData.main.humidity}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-lg text-gray-800">Wind Speed</p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-700">
                  {weatherData.wind.speed} km/h
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Enter a city and click "Search" to get weather data.
          </p>
        )}

        {/* Footer/Additional Info */}
        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-gray-600">
            *Data provided by OpenWeatherMap
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">© 2024 RCLD</p>
        </div>
      </div>
    </div>
  );
};

export default CssProjects2;
