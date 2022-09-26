const hamburgerButton = document.querySelector(".nav__button");
const mobileMenu = document.querySelector(".mobile");
const cosultation = document.querySelector(".consultation");
const links = document.querySelectorAll(".link");
const scrollToTopButton = document.querySelector(".scroll-btn");

hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.querySelector(".body").classList.toggle("hide-bar");
});

links.forEach((link) =>
  link.addEventListener("click", function () {
    hamburgerButton.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.querySelector(".body").classList.remove("hide-bar");
  })
);

window.addEventListener("resize", function () {
  const vw = Math.max(document.documentElement.clientWidth);
  if (vw >= 830) {
    hamburgerButton.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.querySelector(".body").classList.remove("hide-bar");
  }
});

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
