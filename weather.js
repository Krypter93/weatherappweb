//Grab data 
let button = document.querySelector("button");
let forecast = document.querySelector(".forecast");
let country = document.querySelector(".country");
let farenheit = document.querySelector(".farenheit");
let condition = document.querySelector(".condition");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

//Fetching function
function data(resp){
    fetch(`https://api.weatherapi.com/v1/current.json?key=48b6a4da649f4320b2e33045232312&q=${resp}`)
    .then(response => response.json())
    .then(data => {
        forecast.textContent = `Current Temperature in Celsius: ${data.current.temp_c} ºC`;
        farenheit.textContent = `Current Temperature in Celsius: ${data.current.temp_f} ºF`;
        country.textContent = `Country: ${data.location.country}`;
        condition.textContent = `Condition: ${data.current.condition.text}`;
        humidity.textContent = `Humidity: ${data.current.humidity}`;
        wind.textContent = `Wind: ${data.current.wind_mph}`;
    })
    }

button.addEventListener("click", () => {
    let input = document.querySelector("#input").value;

        if(!input){
            alert("Missing data");
        }
        
        if(input){
            console.log(input);
            console.log(typeof input);
        }

        data(input)
    })
    
