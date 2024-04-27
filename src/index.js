// index.js will handle DOM logic only

import "./style.css";
import { setWeatherForecast, weatherForecast } from "./weather";

// properly formats and displays the city name in case the user enters something like "LonDoN"
function displayCityName() {
  const cityName = document.getElementById("city").value.toLowerCase();
  const formatedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const cityDisplay = document.getElementById("announcer");

  cityDisplay.innerHTML = `
    <p class="message">The weather forecast for ${formatedCityName} over the next three days is:</p>
  `;
}

// displays the weather for the next 3 days
// 7 days would be the ideal, but it requires paid API access
function displayWeather() {
  const weatherDisplay = document.getElementById("weather-contents");

  weatherForecast.forEach((day) => {
    const dailyWeather = document.createElement("div");
    dailyWeather.classList.add("weather-card");

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

// Since performance isn't an issue (it's only 3 divs), I prefer writing this way
// rather than using the 'while removeChild' loop.
function resetDisplay() {
  const weatherDisplay = document.getElementById("weather-contents");

  weatherDisplay.innerHTML = ``;
}

async function fetchWeather(event) {
  // removes default form behavior, preventing the page from refreshing after pressing the form submit button
  event.preventDefault();

  await setWeatherForecast();
  resetDisplay();
  displayCityName();
  displayWeather();
}

document
  .getElementById("weather-form")
  .addEventListener("submit", fetchWeather);

// to-do stuff:
// add a rule that shows an error message if the API couldn't fetch their input value [ ]
// improve css [ ]
