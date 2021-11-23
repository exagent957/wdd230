/*Weather API for the weather summary on Preston Page*/
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#currently").textContent =
      jsObject.weather[0].description.toUpperCase();

    const temperature = Math.round(jsObject.main.temp);
    document.querySelector("#temperature").textContent = temperature;
    document.querySelector("#humidity").textContent = Math.round(
      jsObject.main.humidity
    );
    const windspeed = Math.round(jsObject.wind.speed);
    document.querySelector("#wind-speed").textContent = windspeed;

    //calculates wind chill given current temperature and wind speed. Returns "N/A" if values out of range for proper wind chill calculation
    if (temperature <= 50 && windspeed > 3) {
      const windchill =
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temperature * Math.pow(windspeed, 0.16);
      document.querySelector("#wind-chill").textContent = Math.round(windchill);
    } else {
      const windChillDescriptor = "Wind Chill: N/A";
      document.querySelector("#wind-chill-descriptor").textContent =
        windChillDescriptor;
    }
  });
