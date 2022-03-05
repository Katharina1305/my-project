// Display current Day and Time
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${hours}`;
}

let h4 = document.querySelector("h4");
h4.innerHTML = `${day}, ${hours}:${minutes}`;

// Change city name according to the search result

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//Change temperature according to the search

function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is currently ${temperature} °C in ${city}`;
}

let city = cityInput;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

axios.get(url).then(displayWeather);

// Get current position for the button

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "29594a25547d56b13ac551c486d0f7a6";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(url).then(getTemperature);
}

navigator.geolocation.getCurrentPosition(getPosition);
