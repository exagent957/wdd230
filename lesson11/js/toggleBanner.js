//toggles banner on-off. banner to display only if day is Friday
const date = new Date();
if (date.getDay() == 5) {
  document.getElementById("banner").classList.toggle("hide");
}
