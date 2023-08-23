console.log("works?");

import weather from "./modules/weather";
import view from "./modules/view";

document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await weather.getData("los angeles");
    view.updatePage(weatherData);
})