//function to toggle primaryNav class on and off
function toggleMenu() {
  //console.log(document.getElementById("primaryNav").classList);
  document.getElementById("primaryNav").classList.toggle("hide");
}

// uses getElementById to pull current date from a dateObject in the following format Day, dd Month Year (ie. Wednesday, 10 October 2021)
const dateObj = new Date();
const dayOfWeek = dateObj.toLocaleString("en-US", { weekday: "long" });
const day = dateObj.toLocaleString("en-US", { day: "numeric" });
const fullMonth = dateObj.toLocaleString("en-US", { month: "long" });
const year = dateObj.toLocaleString("en-US", { year: "numeric" });
document.getElementById(
  "current-date"
).innerHTML = `${dayOfWeek}, ${day} ${fullMonth} ${year}`;
