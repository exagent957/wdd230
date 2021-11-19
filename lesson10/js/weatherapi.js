/*Lesson 10: Weather API for the weather summary on Preston Page*/
const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#currently").textContent =
      jsObject.weather[0].description;
    document.querySelector("#temperature").textContent =
      jsObject.main.temp.toFixed(1);
    document.querySelector("#humidity").textContent =
      jsObject.main.humidity.toFixed(1);
    document.querySelector("#wind-speed").textContent =
      jsObject.wind.speed.toFixed(1);
  });
//calculates wind chill given current temperature and wind speed. Returns "N/A" if values out of range for proper wind chill calculation
const temperature = document.querySelector("#temperature").textContent;
const windspeed = document.querySelector("#wind-speed").textContent;
const windchill = Math.trunc(
  35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windspeed, 0.16) +
    0.4275 * temperature * Math.pow(windspeed, 0.16)
);
if (temperature <= 50 && windspeed > 3) {
  document.querySelector("#wind-chill").textContent = windchill;
} else {
  const windChillDescriptor = "Wind Chill: N/A";
  document.querySelector("#wind-chill-descriptor").textContent =
    windChillDescriptor;
}
