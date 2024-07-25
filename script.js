let emailElem = document.querySelector("#email");
let countryElem = document.querySelector("#country");
let zipElem = document.querySelector("#zip");
let passwordElem = document.querySelector("#password");
let confirmPasswordElem = document.querySelector("#confirm-password");

function addEventListenersToEmail() {
  emailElem.addEventListener("input", () => {
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
  });
}

function addEventListenersToCountry() {
  countryElem.addEventListener("input", () => {
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
  });
}

addEventListenersToEmail();
addEventListenersToCountry();
