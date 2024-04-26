import { setCurrentCity, currentCity } from "./weather";

// index.js will handle DOM logic only

function displayWeather() {
  const weatherDisplay = document.getElementById("weather-contents");

  weatherDisplay.innerHTML = `
    <p>City: ${currentCity.city_name}</p>
    <p>Condition: ${currentCity.condition}</p>
    <p>Temp (celsius): ${currentCity.temp_c}</p>
    <p>Temp (farenheit): ${currentCity.temp_f}</p>
    <p>Feels like (celsiuis): ${currentCity.feelslike_c}</p>
    <p>Feels like (farenheit): ${currentCity.feelslike_f}</p>
  `;
}

async function fetchWeather(event) {
  event.preventDefault();

  await setCurrentCity();
  displayWeather();
}

// removes default form behavior, preventing the page from refreshing after pressing the form submit button
document
  .getElementById("weather-form")
  .addEventListener("submit", fetchWeather);

// to-do stuff
// improve form validation (reject numbers, etc)
// fetch data for next 3 days [ ]
// show data for next 3 days [ ]
// improve css [ ]
