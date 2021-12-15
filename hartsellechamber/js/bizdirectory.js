//fetch json data and convert in object then into array
const jsonURL = "json/hacc.json";
fetch(jsonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const members = jsObject["members"];
    for (let i = 0; i < members.length; i++) {
      //build the business member cards
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
      card.classList.add("grid-view");
      document.querySelector("div.bizcard-container").appendChild(card);
      document
        .querySelector("div.bizcard-container")
        .classList.add("grid-view");
      console.log(card);
    }
  });

function gridView() {
  const container = document.querySelector("div.bizcard-container");
  console.log(container);
  container.classList.add("grid-view");
  container.classList.remove("list-view");
  const cards = document.querySelectorAll("div.bizcard-container section");
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("grid-view");
    cards[i].classList.remove("list-view");
  }
}

function listView() {
  const container = document.querySelector("div.bizcard-container");
  console.log(container);
  container.classList.add("list-view");
  container.classList.remove("grid-view");
  const cards = document.querySelectorAll("div.bizcard-container section");
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("list-view");
    cards[i].classList.remove("grid-view");
  }
}
