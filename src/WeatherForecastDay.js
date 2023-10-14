import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecastday.css";

export default function WeatherForecastDay(props) {
  const [isCelsius, setIsCelsius] = useState(true);

  function toggleTemperatureUnit() {
    setIsCelsius(!isCelsius);
  }

  function maxTemperature() {
    const temp = isCelsius
      ? props.data.temp.max
      : (props.data.temp.max * 9) / 5 + 32;
    return `${Math.round(temp)}°${isCelsius ? "C" : "F"}`;
  }

  function minTemperature() {
    const temp = isCelsius
      ? props.data.temp.min
      : (props.data.temp.min * 9) / 5 + 32;
    return `${Math.round(temp)}°${isCelsius ? "C" : "F"}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
      <button className="TemperatureUnitToggle" onClick={toggleTemperatureUnit}>
        {isCelsius ? "°F" : "°C"}
      </button>
    </div>
  );
}
