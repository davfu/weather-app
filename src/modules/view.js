import weather from "./weather";

const view = (() => {
    function updatePage(weatherData) {
        if (!weatherData) return;

        const city_name = document.getElementById("city");
        const city_country = document.getElementById("country");
        const city_time = document.getElementById("time");
        const temp = document.getElementById("temperature");
        const feel = document.getElementById("feels");
        const icon = document.getElementById("icon");
        const condition = document.getElementById("condition");
        const uv = document.getElementById("uv");
        const vis = document.getElementById("vis");
        const wind = document.getElementById("wind");
        const humidity = document.getElementById("humidity");

        city_name.textContent = weatherData.cityName;
        city_country.textContent = weatherData.cityCountry;
        city_time.textContent = weatherData.cityTime;
        temp.textContent = `${weatherData.tempC}°C`;
        feel.textContent = `Feels like ${weatherData.feelC}°C`;    
        condition.textContent = weatherData.description;
        uv.textContent = `UV Index: ${weatherData.uvIndex}`;
        vis.textContent = `Visibility: ${weatherData.vis} km`;
        wind.textContent = `Wind: ${weatherData.wind} km/hr ${weatherData.windDir}`;
        humidity.textContent = `Humidity: ${weatherData.humid}%`;
        const iconUrl = "https:" + weatherData.image;
        icon.src = iconUrl;
        icon.width = actualWidth; 
        icon.height = actualHeight;  
    }
    return { updatePage };
})();

export default view;