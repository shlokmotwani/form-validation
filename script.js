let wrapper = document.querySelector("#wrapper");
let emailElem = document.querySelector("#email");
let countryElem = document.querySelector("#country");
let zipElem = document.querySelector("#zip");
let passwordElem = document.querySelector("#password");
let confirmPasswordElem = document.querySelector("#confirm-password");
let submitBtn = document.querySelector("input[type='submit']");

let formElements = [];
formElements.push(emailElem);
formElements.push(countryElem);
formElements.push(zipElem);
formElements.push(passwordElem);
formElements.push(confirmPasswordElem);

function addEventListenersToEmail() {
  emailElem.addEventListener("input", checkEmailValidity);
  emailElem.addEventListener("focusout", checkEmailValidity);
}

function addEventListenersToCountry() {
  countryElem.addEventListener("input", checkCountryValidity);
  countryElem.addEventListener("focusout", checkCountryValidity);
}

function addEventListenersToZIP() {
  zipElem.addEventListener("input", checkZIPValidity);
  zipElem.addEventListener("focusout", checkZIPValidity);
}

function addEventListenersToPassword() {
  passwordElem.addEventListener("input", ()=>{
    confirmPasswordElem.value = "";
    checkPasswordValidity();
  });
  passwordElem.addEventListener("focusout", checkPasswordValidity);
}

function addEventListenersToConfirmPassword() {
  confirmPasswordElem.addEventListener("input", checkConfirmPasswordValidity);
}

function addEventListenersToSubmitBtn() {
  submitBtn.addEventListener("click", (event) => {
    let form = document.querySelector("#form");
    if (!form.checkValidity()) {
      for (let i = 0; i < formElements.length; i++) {
        if (!formElements[i].validity.valid) {
          formElements[i].reportValidity();
          break;
        }
      }
    } else {
      form.style.display = "none";
      let span = document.createElement("span");
      span.textContent = "High Five!";
      wrapper.appendChild(span);
    }
    event.preventDefault();
  });
}

function checkEmailValidity(){
  if (!emailElem.checkValidity()) {
    if (emailElem.validity.typeMismatch) {
      emailElem.setCustomValidity("The format must be -'abc@xyz'.");
    } else if (emailElem.validity.valueMissing) {
      emailElem.setCustomValidity(
        "An email address of the format-'abc@xyz' is required."
      );
    } else {
      emailElem.setCustomValidity("");
    }
    emailElem.reportValidity();
  }
}

function checkCountryValidity(){
  if (!countryElem.checkValidity()) {
    if (countryElem.validity.valueMissing) {
      countryElem.setCustomValidity("Country must be specified.");
    } else if (countryElem.validity.tooShort) {
      countryElem.setCustomValidity(
        "Length of the country name must be greater than 3."
      );
    } else {
      countryElem.setCustomValidity("");
    }
    countryElem.reportValidity();
  }
}

function checkZIPValidity(){
  if (!zipElem.checkValidity()) {
    if (zipElem.validity.valueMissing) {
      zipElem.setCustomValidity("Please specify the ZIP code.");
    } else if (zipElem.validity.tooShort) {
      zipElem.setCustomValidity("ZIP Code must contain atleast 5 digits.");
    } else {
      zipElem.setCustomValidity("");
    }
    zipElem.reportValidity();
  }
}

function checkPasswordValidity(){
  if (!passwordElem.checkValidity()) {
    if (passwordElem.validity.valueMissing) {
      passwordElem.setCustomValidity("Please enter a password.");
    } else if (passwordElem.validity.tooShort) {
      passwordElem.setCustomValidity(
        `Password must contain atleast ${passwordElem.minLength} characters.`
      );
    } else {
      passwordElem.setCustomValidity("");
    }
    passwordElem.reportValidity();
  }
}

function checkConfirmPasswordValidity(){
  if (confirmPasswordElem.value === passwordElem.value) {
    confirmPasswordElem.setCustomValidity("");
  } else {
    confirmPasswordElem.setCustomValidity("Passwords do not match.");
  }
  confirmPasswordElem.reportValidity();
}

window.onload = () => {
  addEventListenersToEmail();
  addEventListenersToCountry();
  addEventListenersToZIP();
  addEventListenersToPassword();
  addEventListenersToConfirmPassword();
  addEventListenersToSubmitBtn();
};
