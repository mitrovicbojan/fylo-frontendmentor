const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const invalidEmail = document.getElementById("invalidEmail");

submitBtn.addEventListener("click", function () {
  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailInput.value.match(emailValidation)) {
    invalidEmail.innerHTML = "Please enter a valid email address.";
    return true;
  } else {
    invalidEmail.innerHTML = "";
    return false;
  }
});
