console.log("works?");

import weather from "./modules/weather";
import view from "./modules/view";

const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");

// handle search submission
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent default for submission behavior

    const cityName = searchInput.value;
    const weatherData = await weather.getData(cityName);
    view.updatePage(weatherData)
});

// default page
document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await weather.getData("New York");
    view.updatePage(weatherData);
})