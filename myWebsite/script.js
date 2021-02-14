const linkedInBtn = document
  .getElementById("lkdBtn")
  .addEventListener("click", linkedin);
const GithubBtn = document
  .getElementById("gtbBtn")
  .addEventListener("click", github);

function linkedin() {
  window.open("https://www.linkedin.com/in/ujjaval-p/");
}

function github() {
  window.open("https://github.com/ujjpatel");
}

const aboutMeBtn = document.getElementById("aboutmeBtn");
const textInfo = document.getElementById("text");
aboutMeBtn.addEventListener("click", aboutMeClick);

function aboutMeClick() {
  if (textInfo.style.display !== "block") {
    textInfo.style.display = "block";
    currentProjectDiv.style.display = "none";
    window.scrollTo(0, 1000);
  } else {
    textInfo.style.display = "none";
  }
}

const currentProjectDiv = document.getElementById("current-project");
const cpBtn = document
  .getElementById("cpBtn")
  .addEventListener("click", currentProjectClick);

function currentProjectClick() {
  if (currentProjectDiv.style.display !== "block") {
    currentProjectDiv.style.display = "block";
    textInfo.style.display = "none";
    window.scrollTo(0, 1000);
  } else {
    currentProjectDiv.style.display = "none";
  }
}
