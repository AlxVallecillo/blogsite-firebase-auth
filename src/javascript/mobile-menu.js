// Create the JS, code for the menu buttpm \ mobile menu button

const hamBtn = document.getElementById("menuBtn");
hamBtn.addEventListener(
  "click",
  (e) => {
    document.querySelector("body").classList.toggle("overflow-y-hidden");
    toggleMobileNavMenu();
  },
  true
);

// Toggle the position of the mobile menu navigation to position relative left: 0px;
function toggleMobileNavMenu() {
  document.getElementById("nav-items").classList.toggle("left-0");
  document.getElementById("nav-items").classList.toggle("left-[-100%]");
}
