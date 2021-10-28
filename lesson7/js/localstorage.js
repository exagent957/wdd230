/*WDD230 Lesson 7 - Gallery page. Calculates number of days since last visit to gallery page using local storage.*/

const currentVisit = new Date().getTime(); //get current milliseconds

//Access localStorage
const myStorage = window.localStorage;

//check for lastVisit in localStorage
if (myStorage.getItem("lastVisit")) {
  let previousVisit = myStorage.getItem("lastVisit");
  //subtract miliseconds and divide by 86400000 to convert to days - truncate to lowest whole day
  const daysPassed = Math.trunc((currentVisit - previousVisit) / 86400000);
  document.getElementById("daysPassed").innerText = daysPassed;
  myStorage.setItem("lastVisit", currentVisit);
}
