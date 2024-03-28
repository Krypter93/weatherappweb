//Grab data
const button = document.querySelector("button");
const forecast = document.querySelector(".forecast");
const country = document.querySelector(".country");
const farenheit = document.querySelector(".farenheit");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const data_wrap = document.querySelector(".data");

//Fetching function
function data(resp) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=48b6a4da649f4320b2e33045232312&q=${resp}`
  )
    .then((response) => response.json())
    .then((data) => {
      forecast.textContent = `Current Temperature in Celsius: ${data.current.temp_c} ºC`;
      farenheit.textContent = `Current Temperature in Celsius: ${data.current.temp_f} ºF`;
      country.textContent = `Country: ${data.location.country}`;
      condition.textContent = `Condition: ${data.current.condition.text}`;
      humidity.textContent = `Humidity: ${data.current.humidity}`;
      wind.textContent = `Wind: ${data.current.wind_mph}`;
    });
}

button.addEventListener("click", () => {
  let input = document.querySelector("#input").value;

  if (!input) {
    alert("Missing data");
  }

  data(input);

  document.querySelector("#input").value = "";

  data_wrap.classList.add("active");
});
