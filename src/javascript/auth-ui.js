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
const passwordContainer = document.querySelector(".passwordContainer");

signUpEmail.addEventListener("input", (e) => {
  if (e.target.value === "") {
    hidePasswordInput();
  }
});
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

function showPasswordInput() {
  passwordContainer.classList.remove("hidden");
  passwordContainer.classList.add("slide-down");
}

function hidePasswordInput() {
  passwordContainer.classList.remove("slide-down");
  passwordContainer.classList.add("slide-up");

  setTimeout(() => {
    passwordContainer.classList.add("hidden");
    passwordContainer.classList.remove("slide-up");
  }, 250);
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
  passwordContainer,
  showPasswordInput,
  preventFormReload,
  showLogoutNavElems,
  showLoginNavElems,
  spanPasswordErr,
  spanEmailErr,
};
