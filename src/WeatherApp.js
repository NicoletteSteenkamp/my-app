import React, { useEffect, useState } from "react";

function WeatherApp() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [condition, setCondition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  useEffect(() => {
    if (lat && lon) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=5f472b7acba333cd8a035ea85a0d4d4c`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.weather && data.weather.length > 0) {
            const currentCondition = data.weather[0].main;
            setCondition(currentCondition);
          } else {
            console.error("Weather data is not available.");
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [lat, lon]);

  let backgroundImage = "";

  switch (condition && condition.toLowerCase()) {
    case "clouds":
      backgroundImage = "/images/cloudy.jpg";
      break;
    case "rain":
      backgroundImage = "/images/rainy.jpg";
      break;
    case "snow":
      backgroundImage = "/images/snowy.jpg";
      break;
    case "clear":
      backgroundImage = "/images/sunny.jpg";
      break;
    default:
      backgroundImage = "/images/default.jpg";
  }

  return (
    <div className="weather-app">
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      ></div>
    </div>
  );
}

export default WeatherApp;
