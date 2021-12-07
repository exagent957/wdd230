/*OneCall Weather API for Hartselle, Alabama*/

const today = new Date();
const options = { weekday: "short" };
let forecastDay0 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000
);
let forecastDay1 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 2
);
let forecastDay2 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 3
);
let forecastDay = [forecastDay0, forecastDay1, forecastDay2];
for (let i = 0; i < 3; i++) {
  document.getElementById(`forecast-day${[i]}`).textContent = forecastDay[i];
}

const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=34.443432&lon=-86.9358&exclude=minutely,hourly&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#currently").textContent =
      jsObject.daily[0].weather[0].description.toUpperCase();
    document.querySelector("#current-temperature").textContent = Math.round(
      jsObject.current.temp
    );
    document.querySelector("#humidity").textContent = Math.round(
      jsObject.daily[0].humidity
    );
    let forecast = jsObject.daily[0].temp.day;
    for (let j = 1; j < 4; j++) {
      document.querySelector(`#forecast-temp${[j]}`).innerHTML = `${Math.round(
        jsObject.daily[j].temp.day
      )} &#8457`;
      const imagesrc = `//openweathermap.org/img/wn/${jsObject.daily[j].weather[0].icon}.png`;
      const forecastDescription = jsObject.daily[j].weather[0].description;
      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("src", imagesrc);
      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("alt", forecastDescription);
    }
    /*Show National Weather Alert if there is one*/
    jsObject.alerts = [
      {
        description: "ALERT 1 - Hard freeze tonight",
      },
      {
        description:
          "ALERT 2 ...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
      },
    ];

    if (jsObject.alerts) {
      document.querySelector(".weather-alert-container").style.display =
        "block"; //this class has display "none" by default via CSS. Turns it on.
      for (let k = 0; k < jsObject.alerts.length; k++) {
        const alertItems = document.querySelector(".weather-alert-items");
        const alertItem = document.createElement("p");
        alertItems.appendChild(alertItem);
        alertItem.textContent = jsObject.alerts[k].description;
        console.log(alertItem);
        console.log(typeof alertItem);
      }
    }
  });
