function toggleAbout() {
    var toggleAboutBtn = document.getElementById("toggle-about");
    var shortPara = document.getElementById("short-para");
    var fullPara = "I hold a Master's degree in Mathematics from Karachi University, which has honed my analytical thinking and problem-solving skills. In addition to my strong mathematical foundation, I am gaining hands-on experience in cutting-edge technologies through the Certified Cloud Applied Generative AI course, part of the Governor Sindh Pakistan Initiative. I am also diving deep into web and mobile app development at Saylani Mass IT Training. Proficient in TypeScript, HTML, and JavaScript, I am passionate about combining my skills in technology and mathematics to contribute to innovative projects.";
    if (shortPara.innerHTML === fullPara) {
        // Showing the short paragraph
        shortPara.innerHTML = "I hold a Master's degree in Mathematics from Karachi University, with strong analytical thinking and problem-solving skills. Currently gaining hands-on experience in AI and web development.";
        toggleAboutBtn.innerText = "Read More";
    }
    else {
        // Showing the full paragraph
        shortPara.innerHTML = fullPara;
        toggleAboutBtn.innerText = "Show Less";
    }
}
var experience = document.getElementById("experience");
var experBtn = document.getElementById("toggle-experience");
function experienceBtn() {
    if (window.getComputedStyle(experience).display === "none") {
        experience.style.display = "block";
        experBtn.innerText = "Hide Experience";
    }
    else {
        experience.style.display = "none";
        experBtn.innerText = "Show Experience";
    }
}
var education = document.getElementById("education");
var eduBtn = document.getElementById("toggle-education");
function educationBtn() {
    if (window.getComputedStyle(education).display === "none") {
        education.style.display = "block";
        eduBtn.innerText = "Hide Education";
    }
    else {
        education.style.display = "none";
        eduBtn.innerText = "Show Education";
    }
}
var projects = document.getElementById("projects");
var projBtn = document.getElementById("toggle-projects");
function projectsBtn() {
    if (window.getComputedStyle(projects).display === "none") {
        projects.style.display = "block";
        projBtn.innerText = "Hide Projects";
    }
    else {
        projects.style.display = "none";
        projBtn.innerText = "Show Projects";
    }
}
