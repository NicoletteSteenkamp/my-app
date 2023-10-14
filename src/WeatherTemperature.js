import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function toggleTemperatureUnit() {
    setTemperatureUnit(
      temperatureUnit === "celsius" ? "fahrenheit" : "celsius"
    );
  }

  function convertTemperature(value) {
    if (temperatureUnit === "celsius") {
      return `${Math.round(value)}°C`;
    } else {
      const fahrenheitValue = (value * 9) / 5 + 32;
      return `${Math.round(fahrenheitValue)}°F`;
    }
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{convertTemperature(props.celsius)}</span>
      <button className="button" onClick={toggleTemperatureUnit}>
        {temperatureUnit === "celsius" ? "°F" : "°C"}
      </button>
    </div>
  );
}
