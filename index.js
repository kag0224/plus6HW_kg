function formatDate(date) {
  let list = currentTime.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[list];
  console.log(day);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  console.log(hours, minutes);

  return `${day} ${hours}:${minutes}`;
}

let date = document.querySelector("#date");
let currentTime = new Date();
date.innerHTML = formatDate(currentTime);

//function search(event) {
//  event.preventDefault();
//  let city = document.querySelector("#city");
//  let enterCity = document.querySelector("#enter-city");
//  city.innerHTML = enterCity.value;
//}
//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("click", search);

//function convertToFahrenheit(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temperature");
//  let temperature = temperatureElement.innerHTML;
//  temperature = Number(temperature);
//  temperatureElement.innerHTML = 72;
//}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//function convertToCelsius(event) {
//  event.preventDefault();
//  let temperatureElement = document.querySelector("#temperature");
//  temperatureElement.innerHTML = 22;
//}

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);

//homework 5
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city").value;
  let apiKey = "748e575d7c9421f3b821d29a87e2a544";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", search);
