const progressBar = document.querySelector(".progress-bar");
const progressPercent = document.querySelector(".percent");
const projectPercentage = progressBar.textContent;

progressPercent.style.width = `${projectPercentage}%`;
