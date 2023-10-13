import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">{props.weatherData.condition}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.weatherData.icon}
              alt={props.weatherData.condition}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {" "}
                {Math.round(props.weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Windspeed: {Math.round(props.weatherData.windSpeed)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
