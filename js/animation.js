const nav = document.querySelector(".nav-content");
const heroText = document.querySelector(".hero__text");
const heroImageOutside = document.querySelector(".outside");
const heroImageInside = document.querySelector(".inside");
const processTitle = document.querySelector(".process__title");
const processItem_1 = document.querySelector(".process-1");
const processItem_2 = document.querySelector(".process-2");
const processItem_3 = document.querySelector(".process-3");

window.addEventListener("load", function () {
  nav.classList.add("reveal");
});

nav.addEventListener("transitionend", function () {
  heroText.classList.add("reveal");
});

heroText.addEventListener("transitionend", function () {
  heroImageOutside.classList.add("reveal");
});

heroImageOutside.addEventListener("transitionend", function () {
  heroImageInside.classList.add("reveal");
});

heroImageInside.addEventListener("transitionend", function () {
  processTitle.classList.add("reveal");
});

processTitle.addEventListener("transitionend", function () {
  processItem_1.classList.add("reveal");
});

processItem_1.addEventListener("transitionend", function () {
  processItem_2.classList.add("reveal");
});

processItem_2.addEventListener("transitionend", function () {
  processItem_3.classList.add("reveal");
});
