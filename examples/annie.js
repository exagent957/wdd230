//using city id for soda springs and your appid copied from your code.
var apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=acc0c305e326e6d9f1226a549bc67124";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    const mytemp = jsObject.main.temp.toFixed(0);
    const myspeed = jsObject.wind.speed.toFixed(0);
    const mydescription = jsObject.weather[0].description;
    const myhumidity = jsObject.main.humidity;
    document.getElementById("temp").textContent = mytemp;
    document.getElementById("speed").textContent = myspeed;
    document.getElementById("description").textContent = mydescription;
    document.getElementById("description").style.textTransform = "capitalize";
    document.getElementById("humidity").textContent = myhumidity;
    //let temp = parseFloat(document.querySelector("#temp").textContent);
    //let speed = parseFloat(document.querySelector("#speed").textContent);

    let windchill = "";
    if (mytemp <= 50 && myspeed > 3) {
      f =
        35.74 +
        0.6215 * mytemp -
        35.75 * myspeed ** 0.16 +
        0.4275 * mytemp * myspeed ** 0.16;
      windchill = `${f.toFixed(0)} \u00B0F`;
    } else {
      windchill = "N/A";
    }

    document.querySelector("#wind").textContent = windchill;
  });
