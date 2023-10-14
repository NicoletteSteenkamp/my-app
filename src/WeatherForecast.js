import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  const [forecast, setForecast] = useState([]);

  function getUserLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = "ae997t30869fc345038bf7f0abaao7e6";
        fetch(
          `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            setForecast(data);
          })
          .catch((error) => console.error(error));
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }

  getUserLocation();

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherInfo condition={forecast.icon_url} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max"> 19</span>
            <span className="WeatherForecast-temperatures-min">13</span>
          </div>
        </div>
      </div>
    </div>
  );
}
