const container = document.querySelector(".container")
const input = document.querySelector(".input")
const sumbitBtn = document.querySelector(".submit")
const weatherLocationName = document.querySelector(".weather-location-name")
const temperature = document.querySelector(".temperature")
const feelsLike = document.querySelector(".feels-like")
const clouds = document.querySelector(".clouds")
const humidity = document.querySelector(".humidity")


const findPlace = () => {
    const status = document.querySelector('.status')

   


    const success = (position) => {
        const latitude = position.coords
        .latitude
        const longitude = position.coords
        .longitude
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=1977debf2877a0be6ba449dd01ada2ce`
            ).then((response) => response.json())
            .then((data) => displayDefaultWeather(data))

    }

    const error = () => {
        console.log("access denied")
    }

    navigator.geolocation.getCurrentPosition(success, error);

}

window.addEventListener("DOMContentLoaded", findPlace)


input.addEventListener("submit", runFetch)
sumbitBtn.addEventListener("click", runFetch)

function runFetch(e) {
    e.preventDefault()
    fetchWeatherData()
}




function fetchWeatherData(){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1977debf2877a0be6ba449dd01ada2ce`
    ).then((response) => response.json())
    .then((data) => displayWeather(data))
    
}


function displayDefaultWeather(data) {
    console.log(data)
 const defaultPlace = data[0].state

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultPlace}&units=metric&appid=1977debf2877a0be6ba449dd01ada2ce`
    ).then((response) => response.json())
    .then((data) => displayWeather(data))
}

function displayWeather(data) {

    if(data.name == undefined) {
        console.log("try again")
    } else {
        const rounded = Math.floor(data.main.temp)
        console.log(data)
        weatherLocationName.innerHTML = data.name
        temperature.innerHTML = rounded + "°" + "c"
        feelsLike.innerHTML = "Feels like" + " " + Math.floor(data.main.feels_like) + "°" + "c"
        clouds.innerHTML =   data.weather[0].description
        humidity.textContent = "Humidity" + " " +  data.main.humidity + "%"

        
       
    }
   
}