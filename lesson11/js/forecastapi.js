/*Lesson 10: Five Day Forecast API*/
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
    const length = jsObject.list.length;
    for (let i = 0; i < length; i++) {
      const forecastDate = `${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()}`;
      console.log(forecastDate);
      console.log([i]);

      const forecastTime = "18:00:00";
      const searchStrDateTime = jsObject.list[i].dt_txt;
      console.log(searchStrDateTime);
      console.table(jsObject); //this is for testing purposes to visualize data
      for (let j = 0; j < 5; ) {
        if (
          searchStrDateTime.includes(forecastTime) &&
          !searchStrDateTime.includes(forecastDate)
        ) {
          document.getElementById(
            `forecast-temp${[j]}`
          ).innerHTML = `${jsObject.list[i].main.temp} &#8457`;
          const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
          const forecastDescription = jsObject.list[i].weather[0].description;
          document
            .getElementById(`forecast-icon${[j]}`)
            .setAttribute("src", imagesrc);
          document
            .getElementById(`forecast-icon${[j]}`)
            .setAttribute("alt", forecastDescription);
          console.log(forecastDescription);
          j = j++;
          return;
        } else {
          return;
        }
      }
    }
  });
