import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.shecodes.io/weather/v1/forecast?${lon}&${lat}&key=${key}"
    )
      .then((response) => response.json())
      .then((data) => setForecast(data));
  }, []);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={WeatherForecastData.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
      </div>
    </div>
  );
}
