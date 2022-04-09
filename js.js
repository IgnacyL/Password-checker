const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "You have very good pasword :)";
    p.style.color = "green";
  } else if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "You have good password.";
    p.style.color = "orange";
  } else {
    p.textContent = "You have weak password :(";
    p.style.color = "tomato";
  }
};
const passwordChecker = () => {
  if (pass.value !== "") {
    showMsg();
  } else {
    p.textContent = "You did not enter your password";
    p.style.color = "";
  }
};
pass.addEventListener("keyup", passwordChecker);
