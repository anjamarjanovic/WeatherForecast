const submtBtn = document.querySelector(".weather-wrapper_submit-btn");
const locationInput = document.querySelector(".weather-data-wrapper_location-input")

const iconData = document.querySelector('.weather-data-wrapper_weather-image')

const temperatureData = document.querySelector(".weather-data-wrapper_forecast-temp");
const descriptionData = document.querySelector(".weather-data-wrapper_forecaast-desc");
const locationData = document.querySelector(".weather-data-wrapper_forecast-location");

const API_URL = 'http://api.weatherstack.com/current';
const API_KEY = '58f88d514fe6e6138fccabb429f1557e';

const getWeatherData = async (city)=>{
    const response = await fetch(`${API_URL}?access_key=${API_KEY}&query=${city}`);
    const weatherData = await response.json();

    const {temperature,weather_descriptions,weather_icons} = weatherData.current
    const{country,name,region} = weatherData.location;

    temperatureData.textContent = `${temperature}°C`;
    descriptionData.textContent = weather_descriptions[0];
    iconData.src = weather_icons[0];
    locationData.textContent = `${name} (${region}, ${country})`;
}


locationInput.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        const inputValue = locationInput.value;
        getWeatherData(inputValue);
    }
})