const apiKey = "30ad18796080df53ef3445d3aafb78fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-search");
const searchBtn = document.querySelector("#city-search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status === 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather-info").style.display = "none";
        return;
    }

    const data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "Km/h";
    // if (data.weather[0].main == "Clouds") {
    //     weatherIcon.src = "img/clouds.png";}
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "img/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "img/sun.png";
            break;
        case "Rain":
            weatherIcon.src = "img/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "img/mist.png";
            break;
         
        default:
            weatherIcon.src = "img/default.png"; // Add a default case for unknown weather types
    }

    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
