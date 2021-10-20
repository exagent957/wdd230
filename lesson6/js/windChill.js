//calculates wind chill given current temperature and wind speed. Returns "N/A" if values out of range for proper wind chill calculation
const temperature = document.getElementById("temperature").innerText;
const windspeed = document.getElementById("wind-speed").innerText;
const windchill = Math.trunc(
  35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windspeed, 0.16) +
    0.4275 * temperature * Math.pow(windspeed, 0.16)
);
if (temperature <= 50 && windspeed > 3) {
  document.getElementById("wind-chill").innerText = windchill;
} else {
  const windChillDescriptor = "Wind Chill: N/A";
  document.getElementById("wind-chill-descriptor").innerText =
    windChillDescriptor;
}
