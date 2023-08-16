//  EXport DOM elems

const userPassword = document.getElementById("passwordInput");
const userEmail = document.getElementById("emailInput");
const loginBtn = document.getElementById("btnLogin");
const signUpEmail = document.getElementById("signupEmail");
const signUpPassword = document.getElementById("signupPassword");
const signUpButton = document.getElementById("signUpBtn");

function preventFormReload(formID) {
  document.getElementById(formID).onsubmit = function (e) {
    e.preventDefault();
  };
}

function spanPasswordErr() {
  document.querySelector(".wrongPassword").classList.toggle("invisible");
}

function spanEmailErr() {
  document.querySelector(".wrongEmail").classList.toggle("invisible");
}

// Exports
export {
  loginBtn,
  userEmail,
  userPassword,
  signUpEmail,
  signUpPassword,
  signUpButton,
  preventFormReload,
  spanPasswordErr,
  spanEmailErr,
};
