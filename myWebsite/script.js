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
    workExpDiv.style.display = "none"
    cvDiv.style.display = "none";
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
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
    workExpDiv.style.display = "none";
    cvDiv.style.display = "none";
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  } else {
    currentProjectDiv.style.display = "none";
  }
}

const workExpDiv = document.getElementById('work-experince');
const workExpBtn = document.getElementById('workexBtn').addEventListener('click', workExpClick)

function workExpClick() {
  if (workExpDiv.style.display !== "block") {
    workExpDiv.style.display = "block"
    textInfo.style.display = "none";
    currentProjectDiv.style.display = "none";
    cvDiv.style.display = "none";
    window.scrollTo({
      top: 850,
      behavior: 'smooth'
    });
  } else {
    workExpDiv.style.display = "none"
  }
}
const cvDiv = document.getElementById('cvDiv');
const cvBtn = document.getElementById('cvBtn').addEventListener('click', cvClick)

function cvClick() {
  if (cvDiv.style.display !== 'block') {
    cvDiv.style.display = "block";
    textInfo.style.display = "none";
    currentProjectDiv.style.display = "none";
    workExpDiv.style.display = "none"
    window.scrollTo({
      top: 850,
      behavior: 'smooth'
    });
  } else {
    cvDiv.style.display = 'none'
  }
}