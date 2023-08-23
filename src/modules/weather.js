const weather =(() => {
    // destructure data object to extract specific pieces of information
    function convert(data) {
         const {
            current: {
                temp_c: tempC,
                feelslike_c: feelC,
                humidity: humid,
                uv: uvIndex,
                vis_km: vis,
                wind_kph: wind,
                wind_dir: windDir,
                condition: {code: num, icon: image, text: description}
            },
            location: {
                name: cityName,
                localtime: cityTime,
                country: cityCountry,
            }
         } = data;
         console.log(image);
         return {tempC, feelC, humid, uvIndex, vis, wind, windDir, num, image, description, cityName, cityCountry, cityTime}
    }

    // fetches data from api. handles error if city not found
    async function getData(city) {
        const link = `https://api.weatherapi.com/v1/current.json?key=c98e04155ec64d899fe04126232108&q=${city}`;
        try {
            const response = await fetch(link, { mode: "cors"} );
            if (!response.ok) throw new Error (`${city} not found.`);
            return convert(await response.json());
        }
        catch(error) {
            alert(error);
            return null; 
        }
    }
    return { getData };
})();

export default weather;