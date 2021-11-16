//Purpose: to capture a value on a sliding scale and report that value
//Part of W08 WDD230 assignment to include a storm severity slider on the Storm Center Page.
let sliderPosition = document.getElementById("slider-position");
let severityNumber = document.getElementById("severity-number");
// trigger this function when slider bar value changes
sliderPosition.oninput = function () {
  //return the new value to display
  severityNumber.innerHTML = sliderPosition.value;
  return;
};
