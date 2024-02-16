
let currentElement = [];
let forecastElement = [];

const getWeather = async () => {
    const city = document.getElementById("city").value;

    if(!city) {
        alert(`Please enter a city`);
        return;
    }
    //Constructing the URL based in the city thats inputed in the search.
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=101d91e51e0143399166f66b8020636f`;
    //Constructing the URL for the forecast weather based in the same city provided
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=101d91e51e0143399166f66b8020636f`;

    //Fetching the current weather URL and converting to a JSON element.
    const currentWeatherResponse = await fetch(currentWeatherUrl);
    currentElement = await currentWeatherResponse.json();
    displayWeather(currentElement);

    //Fetching the FORECAST weather URL and converting to a JSON element.
    const forecastWeatherResponse = await fetch(forecastUrl);
    forecastElement = await forecastWeatherResponse.json();
    displayForecast(forecastElement.list); //the list is the list that contains the forecast information. We just need the list data thats why we extracted Right here.


}

const displayWeather = (jsonElement) => {
    const temperatureDiv = document.getElementById("temperature");
    const weatherDiv = document.getElementById("weather");
    const wIcon = document.getElementById("weather-icon");
    const forecastDiv = document.getElementById("forecast");

    //Clearing the previous info
    temperatureDiv.innerHTML = "";
    forecastDiv.innerHTML = "";
    weatherDiv.innerHTML = "";

    //Cheking to handle a conexion error or not found error.
    if (jsonElement.cod === '404'){
        weatherDiv.innerHTML = `<p>${jsonElement.message}</p>`;
    }else{
        const cityName = jsonElement.name;
        const temperature1 = Math.round(jsonElement.main.temp-273.15);
        const description = jsonElement.weather[0].description;
        const wIconCode = jsonElement.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${wIconCode}@4x.png`;


        //setting the inner html text to the values assign to the variables
        temperatureDiv.innerHTML = `<p>${temperature1}°C</p>`
        weatherDiv.innerHTML = `<p>${cityName}\n${description}</p>`

        //seting the attributes for the icon image element
        wIcon.src = iconURL;
        wIcon.alt = description

        displayImage();
    }

}

const displayForecast = (foreElement) =>{
    const forecastDiv = document.getElementById("forecast");
    const forecast24h = foreElement.slice(0,5); //Extracting the first 8 elements

    forecast24h.forEach(item => {
        const dateTime = new Date(item.dt * 1000); //Creating a new date time objt. And getting it from the item from the list provided from the forecast weather.
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const wIcon = item.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${wIcon}@4x.png`;

        forecastDiv.innerHTML += `
                <div class = "hourly-item">
                    <span>${hour}:00</span>
                    <img src = "${iconURL}" alt = "Hourly Weather Icon">
                    <span>${temperature}°C</span>
                </div>`;
    });

}

const displayImage = () => {
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.style.display = 'block';
}




document.getElementById("getWeather").addEventListener('click', getWeather)