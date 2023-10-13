import React, { useState, useEffect } from "react";
import CloudIcon from "./CloudIcon";

const WeeklyForecast = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.shecodes.io/weather/v1/forecast?lon={lon}&lat={lat}&key=${key}"
    )
      .then((response) => response.json())
      .then((data) => setForecast(data));
  }, []);

  const cloudIcons = forecast.map((day, index) => <CloudIcon key={index} />);

  return (
    <div>
      <h2>Weekly Forecast</h2>
      <div className="cloud-icons">{cloudIcons}</div>
    </div>
  );
};

export default WeeklyForecast;
