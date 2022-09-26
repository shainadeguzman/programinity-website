const nextButton1 = document.querySelector(".next-btn-1");
const nextButton2 = document.querySelector(".next-btn-2");
const nextButton3 = document.querySelector(".next-btn-3");
const submitBtn = document.querySelector(".next-btn-4");
const prevButton1 = document.querySelector(".prev-btn-1");
const prevButton2 = document.querySelector(".prev-btn-2");
const prevButton3 = document.querySelector(".prev-btn-3");
const wizardPage = document.querySelector(".slide-page");
const fullName = document.querySelector(".fullname");
const fullNameError = document.querySelector(".fullname-error");
const email = document.querySelector(".email");
const emailError = document.querySelector(".email-error");
const projectName = document.querySelector(".project-name");
const projectNameError = document.querySelector(".project-name-error");
const projectDesc = document.querySelector(".project-desc");
const projectDescError = document.querySelector(".project-desc-error");
const projectWebDesign = document.querySelector(".web-design");
const projectWebDev = document.querySelector(".web-dev");
const projectAppDev = document.querySelector(".app-dev");
const projectDatabase = document.querySelector(".database");
const projectTypeError = document.querySelector(".project-type-error");
const projectSurvey = document.querySelector(".project-survey");
const projectSurveyError = document.querySelector(".project-survey-error");
const projectTerms = document.querySelector(".project-terms");
const projectTermsError = document.querySelector(".project-terms-error");
const message = document.querySelector(".message");
const messageBoxCloseIcon = document.querySelector(".close-icon");
const bullets = document.querySelectorAll(".bullet");
let current = 1;

// FORM ERROR FUNCTION
const formError = function (errorElement) {
  errorElement.classList.add("show");
  setTimeout(() => {
    errorElement.classList.add("show");
  }, 3000);
};

// PROJECT MULTI STEP FORM
nextButton1.addEventListener("click", function (e) {
  if (fullName.value === "" || fullName.value == null) {
    formError(fullNameError);
    e.preventDefault();
  } else if (email.value === "" || email.value == null) {
    formError(emailError);
    e.preventDefault();
  } else {
    wizardPage.style.marginLeft = "-25%";
    e.preventDefault();
    bullets[current - 1].classList.add("active");
    current++;
    console.log(current);
  }
});

nextButton2.addEventListener("click", function (e) {
  if (projectName.value === "" || projectName.value == null) {
    formError(projectNameError);
    e.preventDefault();
  } else if (projectDesc.value === "" || projectDesc.value == null) {
    formError(projectDescError);
    e.preventDefault();
  } else {
    wizardPage.style.marginLeft = "-50%";

    e.preventDefault();
    bullets[current - 1].classList.add("active");
    current++;
    console.log(current);
  }
});

nextButton3.addEventListener("click", function (e) {
  if (
    projectWebDesign.checked ||
    projectAppDev.checked ||
    projectWebDev.checked ||
    projectDatabase.checked
  ) {
    wizardPage.style.marginLeft = "-75%";
    e.preventDefault();
    bullets[current - 1].classList.add("active");
    current++;
  } else {
    formError(projectTypeError);
    e.preventDefault();
    console.log(current);
  }
});

prevButton1.addEventListener("click", function (e) {
  wizardPage.style.marginLeft = "0%";
  e.preventDefault();
  bullets[current - 2].classList.remove("active");
  current--;
});

prevButton2.addEventListener("click", function (e) {
  wizardPage.style.marginLeft = "-25%";
  e.preventDefault();
  bullets[current - 2].classList.remove("active");
  current--;
});

prevButton3.addEventListener("click", function (e) {
  wizardPage.style.marginLeft = "-50%";
  e.preventDefault();
  bullets[current - 2].classList.remove("active");
  current--;
});

submitBtn.addEventListener("click", function (e) {
  if (projectSurvey.value === "" || projectSurvey.value == null) {
    formError(projectSurveyError);
    e.preventDefault();
  } else if (!projectTerms.checked) {
    formError(projectTermsError);
    e.preventDefault();
  } else {
    overlay.classList.remove("hidden");
    message.classList.add("open");
    e.preventDefault();
    bullets[current - 1].classList.add("active");
    current++;
  }
});

messageBoxCloseIcon.addEventListener("click", function () {
  overlay.classList.add("hidden");
  message.classList.remove("open");
  document.location.href = "index.html";
});

message.addEventListener("click", function () {
  overlay.classList.add("hidden");
  message.classList.remove("open");
  document.location.href = "index.html";
});

messageBoxCloseIcon.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});
