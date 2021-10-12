/***** Add and Remove items to a Dynamic List *****/

//Use querySelector to pull values from html
const myList = document.querySelector(".list"); //"ul" also worked
const myInput = document.querySelector("input");
const myButton = document.querySelector("button");

function myListener() {
  //Set consts to create new elements on page
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listButton = document.createElement("button");
  if (myInput.value !== "") {
    // assure input field has a value to add
    let myItem = myInput.value; //store input in myItem
    myInput.value = ""; //clear input
    listItem.appendChild(listText); //create li element - <span></span> listText will go in it
    listText.textContent = myItem; //fill span with listText from myItem
    listItem.appendChild(listButton); //add button to listItem
    listButton.innerHTML = '<span class="material-icons md-18">close</span>'; //format button
    myList.appendChild(listItem); //append listItem to myList - now 2 elements
    listButton.onclick = function (e) {
      //function (e) js passes element that triggered event into e
      myList.removeChild(listItem);
    };
    myInput.focus();
  }
}

//Add click event listener to button to run myListener function
myButton.addEventListener("click", myListener);
