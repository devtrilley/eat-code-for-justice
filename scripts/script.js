// JavaScript for Form Validation

// Selecting HTML elements
const form = document.querySelector(".contact-form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");

const inputsArray = [firstNameInput, lastNameInput, emailInput, telephoneInput];

const fnameError = document.querySelector(".fname-error");
const lnameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const teleError = document.querySelector(".tele-error");

form.addEventListener("submit", (e) => {
  // Regular Expression for Email and Telephone Validation
  // Standard email regex
  let emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  // Tele regex that allows 10 characters
  let teleRegex = /^\d{10}$/;

  // Validating First Name
  if (firstNameInput.value === "" || firstNameInput.value === null) {
    e.preventDefault();
    fnameError.innerHTML = "&#129365; Error: First Name is required";
  } else {
    fnameError.innerHTML = "";
  }

  if (firstNameInput.value.length < 2) {
    e.preventDefault();
    fnameError.innerHTML =
      "&#129365; Error: First name requires at least 2 characters";
  } else {
    fnameError.innerHTML = "";
  }

  // if (firstNameInput.value.length > 20) {
  //   e.preventDefault();
  //   fnameError.innerHTML =
  //     "&#129365; Error: First name has a max of 20 characters";
  // } else {
  //   fnameError.innerHTML = "";
  // }

  if (lastNameInput.value === "" || lastNameInput.value === null) {
    e.preventDefault();
    lnameError.innerHTML = "&#129365; Error: Last Name is required";
  } else {
    lnameError.innerHTML = "";
  }

  if (lastNameInput.value.length < 2) {
    e.preventDefault();
    lnameError.innerHTML =
      "&#129365; Error: Last name requires at least 2 characters";
  } else {
    lnameError.innerHTML = "";
  }

  // if (lastNameInput.value.length > 20) {
  //   e.preventDefault();
  //   lnameError.innerHTML =
  //     "&#129365; Error: Last name has a max of 20 characters.";
  // } else {
  //   lnameError.innerHTML = "";
  // }

  if (!emailInput.value.match(emailRegex)) {
    e.preventDefault();
    emailError.innerHTML = "&#129365; Error: Valid email is required";
  } else {
    emailError.innerHTML = "";
  }

  if (!telephoneInput.value.match(teleRegex)) {
    e.preventDefault();
    teleError.innerHTML =
      "&#129365; Error: Valid phone number of 10 digits is required";
  } else {
    teleError.innerHTML = "";
  }
});
