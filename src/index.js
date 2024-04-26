// index.js will handle DOM logic only

import { setWeatherForecast, weatherForecast } from "./weather";

// properly formats and displays the city name in case the user enters something like "LonDoN"
function displayCity() {
  const cityName = document.getElementById("city").value.toLowerCase();
  const formatedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const cityDisplay = document.getElementById("weather-city");

  cityDisplay.innerHTML = `
    <p>The weather forecast for ${formatedCityName} over the next three days is:<p>
  `;
}

// displays the weather for the next 3 days
// 7 days would be the ideal, but it requires paid API access
function displayWeather() {
  const weatherDisplay = document.getElementById("weather-contents");

  weatherForecast.forEach((day) => {
    const dailyWeather = document.createElement("div");

    dailyWeather.innerHTML = `
      <p>Day: ${day.date}</p>
      <p>Temp (celsius): ${day.temp_c}</p>
      <p>Temp (farenheit): ${day.temp_f}</p>
      <p>Condition: ${day.condition}</p>
      <img src=https:${day.condition_icon}>
    `;

    weatherDisplay.appendChild(dailyWeather);
  });
}

async function fetchWeather(event) {
  // removes default form behavior, preventing the page from refreshing after pressing the form submit button
  event.preventDefault();

  await setWeatherForecast();
  displayCity();
  displayWeather();
}

document
  .getElementById("weather-form")
  .addEventListener("submit", fetchWeather);

// improve css [ ]
