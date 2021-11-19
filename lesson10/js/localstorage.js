/*WDD230 Lesson 7 - Gallery page. Calculates number of days since last visit to gallery page using local storage.*/

const currentVisit = new Date().getTime(); //get current milliseconds
console.log(currentVisit);
//Access localStorage
const myStorage = window.localStorage;

console.log(myStorage);
//check for lastVisit in localStorage
console.log(window.localStorage.getItem("lastVisit"));
if (myStorage.getItem("lastVisit")) {
  let previousVisit = myStorage.getItem("lastVisit");
  //subtract miliseconds and divide by 86400000 to convert to days - truncate to lowest whole day
  const daysPassed = Math.trunc((currentVisit - previousVisit) / 86400000);
  document.getElementById("daysPassed").innerText = daysPassed;
} else {
  document.getElementById("daysPassed").innerText = "0";
}
//reset lastVisit to currentVisit
myStorage.setItem("lastVisit", currentVisit);
