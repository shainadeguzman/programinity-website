const consultation = document.querySelector(".consultation");
const navCTA = document.querySelector(".nav__cta");
const mobileNavCTA = document.querySelector(".mobile__menu-cta");
const consultationCloseBtn = document.querySelector(".consultation-icon");

navCTA.addEventListener("click", function () {
  consultation.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

mobileNavCTA.addEventListener("click", function (e) {
  consultation.classList.remove("hidden");
  overlay.classList.remove("hidden");
  e.preventDefault();
});

consultationCloseBtn.addEventListener("click", function (e) {
  consultation.classList.add("hidden");
  overlay.classList.add("hidden");
  e.preventDefault();
});
