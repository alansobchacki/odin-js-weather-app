let currentCity = "";

async function setCurrentCity() {
  const userInput = document.getElementById("city").value;

  const fetchedCity = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=262fb141faa34d58844195452242304&q=${userInput}`,
  );

  const cityData = await fetchedCity.json();

  currentCity = {
    city_name: cityData.location.name,
    temp_c: cityData.current.temp_c,
    temp_f: cityData.current.temp_f,
    feelslike_c: cityData.current.feelslike_c,
    feelslike_f: cityData.current.feelslike_f,
    condition: cityData.current.condition.text,
  };
}

export { setCurrentCity, currentCity };
