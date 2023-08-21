//  EXport DOM elems

const userPassword = document.getElementById("passwordInput");
const userEmail = document.getElementById("emailInput");
const loginBtn = document.getElementById("btnLogin");
const signUpEmail = document.getElementById("signupEmail");
const signUpPassword = document.getElementById("signupPassword");
const signUpButton = document.getElementById("signUpBtn");
const logOutBtn = document.getElementById("log-out");
const logOutNavItems = document.querySelectorAll(".logged-out");
const logInNavItems = document.querySelectorAll(".logged-in");

// Used for testing only
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

function showLoginNavElems(nodeList) {
  nodeList.forEach((elem) => {
    if (elem.classList.contains("hidden")) {
      elem.classList.remove("hidden");
    }
  });
}

function showLogoutNavElems(nodeList) {
  nodeList.forEach((elem) => {
    if (elem.classList.contains("hidden")) {
      elem.classList.remove("hidden");
    }
  });
}

// Exports
export {
  loginBtn,
  userEmail,
  userPassword,
  signUpEmail,
  signUpPassword,
  signUpButton,
  logOutBtn,
  logOutNavItems,
  logInNavItems,
  preventFormReload,
  showLogoutNavElems,
  showLoginNavElems,
  spanPasswordErr,
  spanEmailErr,
};
