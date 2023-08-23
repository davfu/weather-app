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
        temp.textContent = `${Math.round(weatherData.tempC)}°C`;
        feel.textContent = `${Math.round(weatherData.feelC)}°C`;    
        condition.textContent = weatherData.description;
        uv.textContent = `${weatherData.uvIndex}`;
        vis.textContent = `${weatherData.vis} km`;
        wind.textContent = `${weatherData.wind} km/hr ${weatherData.windDir}`;
        humidity.textContent = `${weatherData.humid}%`;
        const iconUrl = "https:" + weatherData.image;
        icon.src = iconUrl;
        icon.width = actualWidth; 
        icon.height = actualHeight;  
    }
    return { updatePage };
})();

export default view;