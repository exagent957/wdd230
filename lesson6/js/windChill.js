//calculates wind chill given current temperature and wind speed. Returns "N/A" if values out of range for proper wind chill calculation
const temperature = document.getElementById("temperature").innerText;
console.log(temperature);
const windspeed = document.getElementById("wind-speed").innerText;
console.log(windspeed);
const windchill = Math.trunc(
  35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windspeed, 0.16) +
    0.4275 * temperature * Math.pow(windspeed, 0.16)
);
console.log(windchill);
if (temperature <= 50 && windspeed > 3) {
  document.getElementById("wind-chill").innerText = windchill;
} else {
  /*   document.getElementById("wind-chill").innerText = "N/A";
  console.log(document.getElementById("wind-chill-descriptor").innerText); */
  const windChillDescriptor = "Wind Chill: N/A";
  document.getElementById("wind-chill-descriptor").innerText =
    windChillDescriptor;
}
