//Validate Input - only alphas spaces minimum of 5 characters
function allAlphas() {
  const inputText = document.getElementById("fullname").value;
  const pattern = /^[A-Za-z ]{5,30}$/;
  if (pattern.test(inputText)) {
    return true;
  } else {
    alert(
      "Please input at least 5 alpha characters, no numbers or special characters"
    );
    return false;
  }
}
