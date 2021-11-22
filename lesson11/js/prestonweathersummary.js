/*Lesson 10: Weather API for the weather summary on Preston Page*/
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#currently").textContent =
      jsObject.weather[0].description.toUpperCase();

    const temperature = jsObject.main.temp.toFixed(1);
    document.querySelector("#temperature").textContent = temperature;
    document.querySelector("#humidity").textContent =
      jsObject.main.humidity.toFixed(1);
    const windspeed = jsObject.wind.speed.toFixed(1);
    document.querySelector("#wind-speed").textContent = windspeed;

    //calculates wind chill given current temperature and wind speed. Returns "N/A" if values out of range for proper wind chill calculation
    /* const temperature = document.getElementByID("temperature");
const windspeed = document.getElementByID("wind-speed"); */
    if (temperature <= 50 && windspeed > 3) {
      const windchill =
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temperature * Math.pow(windspeed, 0.16);
      document.querySelector("#wind-chill").textContent = windchill.toFixed(1);
    } else {
      const windChillDescriptor = "Wind Chill: N/A";
      document.querySelector("#wind-chill-descriptor").textContent =
        windChillDescriptor;
    }
  });
