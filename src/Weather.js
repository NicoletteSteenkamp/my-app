import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./Weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  useEffect(() => {
    const apiKey = "ae997t30869fc345038bf7f0abaao7e6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.defaultCity]);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
