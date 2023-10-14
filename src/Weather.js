import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function handleResponse(response) {
    const { city, condition, temperature, wind, time } = response.data;

    setWeatherData({
      ready: true,
      city: city,
      condition: condition.description,
      icon: condition.icon_url,
      temperature: temperature.current,
      humidity: temperature.humidity,
      windSpeed: wind.speed,
      date: new Date(time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "ae997t30869fc345038bf7f0abaao7e6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  const getBackgroundImage = () => {
    if (!weatherData) {
      return "sunny.jpg";
    } else if (weatherData.weather === "sunny") {
      return "sunny.jpg";
    } else if (weatherData.weather === "cloudy") {
      return "cloudy.jpg";
    } else if (weatherData.weather === "rainy") {
      return "rainy.jpg";
    } else if (weatherData.weather === "snow") {
      return "snow.jpg";
    } else if (weatherData.weather === "cold") {
      return "snow.jpg";
    } else if (weatherData.weather === "thunder") {
      return "thunder.jpg";
    }
  };

  function toggleTemperatureUnit() {
    setTemperatureUnit(
      temperatureUnit === "celsius" ? "fahrenheit" : "celsius"
    );
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {weatherData.ready ? (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter City"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                  value={city}
                />
              </div>
              <div className="col-3">
                <button onClick={toggleTemperatureUnit}>
                  {temperatureUnit === "celsius" ? "°C" : "°F"}
                </button>
                <input
                  type="submit"
                  value="search"
                  className="btn btn-light w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo weatherData={weatherData} />
          <WeatherForecast />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
