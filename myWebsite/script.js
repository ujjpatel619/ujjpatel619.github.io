// const aboutMeDiv = document.createElement('div');
// aboutMeDiv.className = 'aboutMe';
// const aboutMePara = document.createElement('p');
// aboutMePara.id = 'aboutMeP'
// aboutMePara.innerText = `Working in web and mobile app development for 10+ years, I bring solid technical and communication skills to every project I work on. Specialising in writing performant and testable codefor high traffic websites, SaaS and mobile applications, Ive worked in many industries including financial services, e-commerce, telecoms, healthcare and digital agencies.`
// aboutMeDiv.appendChild(aboutMePara)
// aboutMeDiv.style.visibility = 'Hidden'

// document.body.appendChild(aboutMeDiv);


// function aboutMe() {
//     let aboutMe = document.getElementById('aboutMeP');
//     aboutMe.style.visibility = 'Visible';
//     aboutMe.style.background = 'Yellow';
//     aboutMe.style.textAlign = 'center'
//     aboutMe.style.transition = '0.5s';
//     aboutMe.style.borderRadius = '3px'
//     aboutMe.style.padding = '10px';
//     aboutMeDiv.style.margin = '10px';
// }

const linkedInBtn = document.getElementById('lkdBtn').addEventListener('click', linkedin);
const GithubBtn = document.getElementById('gtbBtn').addEventListener('click', github);

function linkedin() {
    window.open('https://www.linkedin.com/in/ujjaval-p/')
}

function github() {
    window.open('https://github.com/ujjpatel')
}


const aboutMeBtn = document.getElementById('aboutmeBtn');
const textInfo = document.getElementById('text');
aboutMeBtn.addEventListener('click', aboutMeClick)


function aboutMeClick(){
    if(textInfo.style.display !== 'block'){
       textInfo.style.display = 'block'
       window.scrollTo(0,1000);
   } else 
       {textInfo.style.display = 'none'}
   }
   


