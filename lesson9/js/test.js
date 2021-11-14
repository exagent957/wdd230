/*Lesson9 - working with JSON - Weather Site Home Page Town Cards*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
//use a basic fetch() method and feed it the required argument, the URL
fetch(requestURL)
  .then(function (response) {
    //method returns a Promise
    return response.json(); //extracts the JSON content from the full HTTP response by using the json() method
  })
  .then(function (jsonObject) {
    //method converts response data in JavaScript object format

    //store the results of the converted response into an array since the data source is a neatly packed array of records named "towns".
    const towns = jsonObject["towns"];

    //loop through every record and process them into their own 'town cards' (HTML output), one at a time
    towns.forEach((towns) => {
      if (
        towns.name === "Preston" ||
        towns.name === "Soda Springs" ||
        towns.name === "Fish Haven"
      ) {
        let townCard = document.createElement("section");
        let townTextArea = document.createElement("div");
        let townName = document.createElement("h2");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement("p");
        let image = document.createElement("img");
        let townOrder = document.createElement("p");

        townTextArea.setAttribute("class", "town-text-area");
        townName.textContent = `${towns.name}`;
        townTextArea.appendChild(townName);
        motto.innerHTML = `<em>"${towns.motto}"</em>`;
        townTextArea.appendChild(motto);
        yearFounded.textContent = `Year Founded: ${towns.yearFounded}`;
        townTextArea.appendChild(yearFounded);
        currentPopulation.textContent = `Population: ${towns.currentPopulation}`;
        townTextArea.appendChild(currentPopulation);
        averageRainfall.textContent = `Average Rainfall: ${towns.averageRainfall}`;
        townTextArea.appendChild(averageRainfall);
        townCard.appendChild(townTextArea);
        image.setAttribute("src", `images/${towns.photo}`);
        image.setAttribute("alt", `Photo of ${towns.name}`);
        townCard.appendChild(image);
        //assigning an id to each townCardfor displaying in desired order
        if (towns.name === "Preston") {
          townCard.setAttribute("id", "town1");
          townCard.appendChild(townOrder);
        } else if (towns.name === "Soda Springs") {
          townCard.setAttribute("id", "town2");
          townCard.appendChild(townOrder);
        } else {
          townCard.setAttribute("id", "town3");
          townCard.appendChild(townOrder);
        }
        console.log(townTextArea);
        document.querySelector("div.home-town-cards").appendChild(townCard);
      }
    });
  });
