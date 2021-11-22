//practice dynamic li
let myArray = ["event0", "event1", "event2"];
let ul = document.createElement("ul");
document.querySelector("div.container").appendChild(ul);
myArray.forEach((item) => {
  console.log(item);
  let eventli = document.createElement("li");
  eventli.textContent = item;
  document.querySelector("ul").appendChild(eventli);
});
