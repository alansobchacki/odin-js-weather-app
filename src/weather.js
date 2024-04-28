// eslint-disable-next-line import/no-mutable-exports
let weatherForecast = [];
// eslint-disable-next-line import/no-mutable-exports
let failedToFetchData = false;

async function setWeatherForecast() {
  try {
    weatherForecast = [];
    failedToFetchData = false;

    const userInput = document.getElementById("city").value;

    const fetchedCity = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=262fb141faa34d58844195452242304&q=${userInput}&days=3`,
    );

    if (!fetchedCity.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const cityData = await fetchedCity.json();

    cityData.forecast.forecastday.forEach((forecastDay) => {
      const currentDay = {
        date: forecastDay.date,
        temp_c: forecastDay.day.avgtemp_c,
        temp_f: forecastDay.day.avgtemp_f,
        condition: forecastDay.day.condition.text,
        condition_icon: forecastDay.day.condition.icon,
      };

      weatherForecast.push(currentDay);
    });
  } catch (error) {
    failedToFetchData = true;
  }
}

export { setWeatherForecast, weatherForecast, failedToFetchData };
