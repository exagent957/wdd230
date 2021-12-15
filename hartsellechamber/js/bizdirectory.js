//fetch json data and convert in object then into array
const jsonURL = "json/hacc.json";
fetch(jsonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const members = jsObject["members"];
    for (let i = 0; i < members.length; i++) {
      //build the business member cards using
      let card = document.createElement("section");
      let bizlogo = document.createElement("img");
      let bizname = document.createElement("h2");
      let address = document.createElement("p");
      let city = document.createElement("p");
      let phone = document.createElement("p");
      let website = document.createElement("a");
      bizlogo.setAttribute("src", members[i].bizlogo);
      bizlogo.setAttribute("alt", `${members[i].bizname} logo`);
      card.appendChild(bizlogo);
      bizname.textContent = `${members[i].bizname}`;
      card.appendChild(bizname);
      address.textContent = `${members[i].address}`;
      card.appendChild(address);
      city.textContent = `${members[i].city}`;
      card.appendChild(city);
      phone.textContent = `${members[i].phone}`;
      card.appendChild(phone);
      website.setAttribute("href", `${members[i].website}`);
      website.textContent = `Website: ${members[i].bizname}`;
      card.appendChild(website);
      card.setAttribute("class", "grid-view");
      document.querySelector("div.bizcard-container").appendChild(card);
      console.log(card);
    }
  });
