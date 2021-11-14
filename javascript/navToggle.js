const navToggleBtn = document.getElementById("nav-toggle-btn");
const callToAction = document.getElementById("call-to-action");
const navBar = document.getElementById("nav-bar");

navToggleBtn.onclick = () => {
  callToAction.classList.toggle("active");
  navBar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
};
