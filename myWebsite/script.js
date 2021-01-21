const aboutMeDiv = document.createElement('div');
aboutMeDiv.className = 'aboutMe';
const aboutMePara = document.createElement('p');
aboutMePara.id = 'aboutMeP'
aboutMePara.innerText = `Working in web and mobile app development for 10+ years, I bring solid technical and communication skills to every project I work on. Specialising in writing performant and testable codefor high traffic websites, SaaS and mobile applications, Ive worked in many industries including financial services, e-commerce, telecoms, healthcare and digital agencies.`
aboutMeDiv.appendChild(aboutMePara)
aboutMeDiv.style.visibility = 'Hidden'

document.body.appendChild(aboutMeDiv);


function aboutMe() {
    let aboutMe = document.getElementById('aboutMeP');
    aboutMe.style.visibility = 'Visible';
    aboutMe.style.background = 'Yellow';
    aboutMe.style.textAlign = 'center'
    aboutMe.style.transition = '0.5s';
    aboutMe.style.borderRadius = '3px'
    aboutMe.style.padding = '10px';
    aboutMeDiv.style.margin = '10px';
}