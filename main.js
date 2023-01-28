const container = document.querySelector(".container")
const input = document.querySelector(".input")
const sumbitBtn = document.querySelector(".submit")
const weatherLocationName = document.querySelector(".weather-location-name")
const temperature = document.querySelector(".temperature")
const feelsLike = document.querySelector(".feels-like")
const clouds = document.querySelector(".clouds")
const humidity = document.querySelector(".humidity")
const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")


//let key {
   // 5126997362510f46f560b1af0593d26e
//}

input.addEventListener("submit", runFetch)
sumbitBtn.addEventListener("click", runFetch)

function runFetch(e) {
    e.preventDefault()
    fetchWeatherData()
}


function fetchWeatherData(){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=5126997362510f46f560b1af0593d26e`
    ).then((response) => response.json())
    .then((data) => displayWeather(data))
    
}

function displayWeather(data) {
    console.log(data)
    weatherLocationName.innerHTML = data.name
    temperature.innerHTML = data.main.temp + "°" + "c"
    feelsLike.innerHTML = data.main.feels_like
    clouds.textContent = data.weather.description 
    humidity.textContent = data.main.humidity + "%"
   // sunrise.textContent = data.main.sunrise
    //sunset.textContent = data.main.sunset
}