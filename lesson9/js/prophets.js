/*Lesson9 - working with JSON - Latter-day Prophets assignment*/
const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
//use a basic fetch() method and feed it the required argument, the URL
fetch(requestURL)
  .then(function (response) {
    //.then() method returns a Promise
    return response.json(); //extracts the JSON content from the noise of the full HTTP response by using the json() method
  })
  .then(function (jsonObject) {
    //second .then() method converts response data in JavaScript object format
    /*console.table(jsonObject);*/ // temporary ** check for valid response and data parsing
    //store the results of the converted response into an array since the data source is a neatly packed array of records named "prophets".
    const prophets = jsonObject["prophets"];
    //loop through every record and process them into their own 'cards' (HTML output), one at a time
    for (let i = 0; i < prophets.length; i++) {
      //build the HTML of the prophet card using the createElement(), textContent(), and appendChild() methods on the document
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let dob = document.createElement("p");
      let pob = document.createElement("p");
      let image = document.createElement("img");
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      card.appendChild(h2);
      dob.textContent = `Date of Birth: ${prophets[i].birthdate}`;
      card.appendChild(dob);
      pob.textContent = `Place of Birth: ${prophets[i].birthplace}`;
      card.appendChild(pob);
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute(
        "alt",
        `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`
      );
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);
    }
  });
