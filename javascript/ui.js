// Create the JS, code for the menu buttpm \ mobile menu button

const hamBtn = document.getElementById("menuBtn");
hamBtn.addEventListener(
  "click",
  (e) => {
    document.querySelector("body").classList.toggle("overflow-y-hidden");
    mobileNavbar();
  },
  true
);

// Toggle the position of the mobile menu navigation to position relative left: 0px;
function mobileNavbar() {
  document.getElementById("mobile-menu").classList.toggle("left-0");
}
