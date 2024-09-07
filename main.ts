function toggleAbout() {
    const toggleAboutBtn = document.getElementById("toggle-about") as HTMLButtonElement;
    const shortPara = document.getElementById("short-para") as HTMLElement;

    const fullPara: string = "I hold a Master's degree in Mathematics from Karachi University, which has honed my analytical thinking and problem-solving skills. In addition to my strong mathematical foundation, I am gaining hands-on experience in cutting-edge technologies through the Certified Cloud Applied Generative AI course, part of the Governor Sindh Pakistan Initiative. I am also diving deep into web and mobile app development at Saylani Mass IT Training. Proficient in TypeScript, HTML, and JavaScript, I am passionate about combining my skills in technology and mathematics to contribute to innovative projects.";

    if (shortPara.innerHTML === fullPara) {
        // Showing the short paragraph
        shortPara.innerHTML = "I hold a Master's degree in Mathematics from Karachi University, with strong analytical thinking and problem-solving skills. Currently gaining hands-on experience in AI and web development.";
        toggleAboutBtn.innerText = "Read More";
    } else {
        // Showing the full paragraph
        shortPara.innerHTML = fullPara;
        toggleAboutBtn.innerText = "Show Less";
    }
}


const experience = document.getElementById("experience") as HTMLElement;
const experBtn = document.getElementById("toggle-experience") as HTMLButtonElement;

function experienceBtn(): void {
  if (window.getComputedStyle(experience).display === "none") {
    experience.style.display = "block";
    experBtn.innerText = "Hide Experience";
  } else {
    experience.style.display = "none";
    experBtn.innerText = "Show Experience";
  }
}

const education = document.getElementById("education") as HTMLElement;
const eduBtn = document.getElementById("toggle-education") as HTMLButtonElement;

function educationBtn(): void {
  if (window.getComputedStyle(education).display === "none") {
    education.style.display = "block";
    eduBtn.innerText = "Hide Education";
  } else {
    education.style.display = "none";
    eduBtn.innerText = "Show Education";
  }
}

const projects = document.getElementById("projects") as HTMLElement;
const projBtn = document.getElementById("toggle-projects") as HTMLButtonElement;

function projectsBtn(): void {
  if (window.getComputedStyle(projects).display === "none") {
    projects.style.display = "block";
    projBtn.innerText = "Hide Projects";
  } else {
    projects.style.display = "none";
    projBtn.innerText = "Show Projects";
  }
}
