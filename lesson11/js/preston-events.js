//pulls in Preston town events from BYUI JSON file
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const towns = jsObject["towns"]; //towns array
    const townsFiltered = towns.filter((x) => x.name.includes("Preston"));
    let length = townsFiltered[0].events.length;
    for (let i = 0; i < length; i++) {
      let townEvent = document.createElement("li");
      townEvent.textContent = townsFiltered[0].events[i];
      document.querySelector("ul.town-event-list").appendChild(townEvent);
    }
  });
