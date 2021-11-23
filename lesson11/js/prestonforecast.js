/*Five Day Forecast API for Preston Page*/
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
let forecastDay3 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 4
);
let forecastDay4 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 5
);

let forecastDay = [
  forecastDay0,
  forecastDay1,
  forecastDay2,
  forecastDay3,
  forecastDay4,
];

for (let i = 0; i < 5; i++) {
  document.getElementById(`forecast-day${[i]}`).textContent = forecastDay[i];
}

const apiForecastURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const eveForecast = jsObject.list.filter((x) =>
      x.dt_txt.includes("18:00:00")
    );
    for (let j = 0; j < 5; j++) {
      document.querySelector(`#forecast-temp${[j]}`).innerHTML = `${Math.round(
        eveForecast[j].main.temp
      )} &#8457`;
      const imagesrc = `http://openweathermap.org/img/w/${eveForecast[j].weather[0].icon}.png`;
      const forecastDescription = eveForecast[j].weather[0].description;
      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("src", imagesrc);
      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("alt", forecastDescription);
    }
  });
