// Menu item click event
//import data from ".data.js";
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menuBar ul li a");
  const menuBar = document.querySelector(".menuBar");

  if (menuBar) {
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault();
        menuBar.classList.remove("active");
      });
    });
  }
  injectData(data); // Handle the data as needed
});

function injectData(data) {
  let firstNameElement = document.getElementsByClassName("firstNameElement")[0];
  if (firstNameElement) {
    firstNameElement.textContent = data.basics.firstName;
  } else {
    console.error("Element with class 'FirstNameHtml' not found.");
  }

  //social links
  let socialLinks = document.querySelectorAll(".socialLink");
  socialLinks.forEach((link) => {
    if (link.classList.contains("githubLinkElement")) {
      link.href = data.basics.profiles.github.url;
    } else if (link.classList.contains("linkedinLinkElement")) {
      link.href = data.basics.profiles.linkedin.url;
    } else if (link.classList.contains("digitalResumeElement")) {
      link.href = data.links.digitalResume.url;
      console.log(data.links.digitalResume.url);
    } else if (link.classList.contains("mailElement")) {
      link.href = data.links.email.url;
      console.log(data.links.email.url);
    }
  });

  //profileImageElement
  let profileImageElement = document.getElementById("profileImageElement");
  if (profileImageElement) {
    profileImageElement.src = data.links.ProfilePicture.url;
    console.log(data.links.ProfilePicture.url);
  } else {
    console.error("Element with class 'profileImageElement' not found.");
  }

  // inject Work Experience start
  injectWorkExperience(window.data.work);

  // inject skills
  injectSkills(window.data.skills);
  // inject projects
  injectProjects(window.data.projects);
  injectCertifications(window.data.certifications);
}
// Work Experience start
function injectWorkExperience(workData) {
  let workContainer = document.getElementById("work-experience");
  workContainer.innerHTML = ""; // Clear existing content

  workData.forEach((job) => {
    let jobHTML = `
          <h2 style="font-size: 2.2rem">${job.name}</h2>
          <h3 style="font-size: 1.8rem">
            <strong>${job.position}</strong>
          </h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Duration:</strong> ${job.startDate} - ${job.endDate}</p>
          <ul>
            ${job.highlights
              .map((highlight) => `<li>${highlight}</li>`)
              .join("")}
          </ul>
          <br />
      `;

    workContainer.innerHTML += jobHTML;
  });
}
// Work Experience end
// inject skills start
function injectSkills(skillsData) {
  let skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = ""; // Clear existing content

  skillsData.forEach((skillCategory) => {
    let categoryName = Object.keys(skillCategory)[0];
    let skillList = skillCategory[categoryName];

    let skillHTML = `
          <div class="col-12 col-md-6 col-lg-4 skill-card">
              <div class="featurette-icon"><i class="fab fa-###"></i></div>
              <h3 class="skill-title">${categoryName}</h3>
              <hr color="#e66060" />
              <br />
              <p class="skill-text">${skillList.join("<br />")}</p>
          </div>
      `;

    skillsContainer.innerHTML += skillHTML;
  });
}

// inject skills end
// inject projects start
function injectProjects(projectsData) {
  let projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = ""; // Clear existing content

  projectsData.forEach((project) => {
    let projectHTML = `
    <div class="project-card">
        <div class="project-img-container">
            <img src="${project.img}" alt="${project.name}" class="project-img">
        </div>
        <div class="project-info">
            <h3>${project.name}</h3>
            <p><strong>Date:</strong> ${project.date}</p>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${
              project.technologies ? project.technologies.join(", ") : "N/A"
            }</p>
            <ul>
                ${
                  project.functionality
                    ? project.functionality
                        .map((func) => `<li>${func}</li>`)
                        .join("")
                    : ""
                }
            </ul>
            <a href="${project.link}" target="_blank">
                <button class="project-button">${project.buttonText}</button>
            </a>
        </div>
    </div>
`;

    projectsContainer.innerHTML += projectHTML;
  });
}

// inject projects end
//inject certification start
function injectCertifications(certificationsData) {
  let certificationsContainer = document.getElementById("certifications-container");
  certificationsContainer.innerHTML = ""; // Clear existing content

  certificationsData.forEach(cert => {
      let certHTML = `
          <div class="cert-card">
              <h2 class="cert-title">${cert.name}</h2>
              <p><strong>Issuer:</strong> ${cert.issuer}</p>
              <p><strong>Issued:</strong> ${cert.issued}</p>
              <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
              ${cert.link ? `
              <a href="${cert.link}" target="_blank">
                  <button class="cert-button">
                      Show certificate
                      <img height="20" width="20" src="Images/website icon/icons/2849800_chain_link_linked_multimedia_icon.svg" alt="Show Certificate">
                  </button>
              </a>` : ""}
          </div>
      `;

      certificationsContainer.innerHTML += certHTML;
  });
}
//inject certification end

// GSAP animations
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.from(".navBar", { y: "-10rem", duration: 1 });
tl.from(".navBar .navBar__menu ul li", {
  y: "-2rem",
  opacity: 0,
  duration: 1,
  stagger: 0.25,
});
tl.to(
  ".sec1__content .sec1__contentDetail h1",
  { y: "0rem", duration: 1, stagger: 0.25 },
  "=-1"
);
tl.from(".sec1__imgBx img", { opacity: 0, x: "50%", duration: 1.5 });
tl.from(
  ".sec1__imgBx .sec1__design1",
  { opacity: 0, x: "3rem", duration: 1.5 },
  "=-1"
);
tl.from(
  ".sec1__imgBx .sec1__design2",
  { opacity: 0, x: "-3rem", duration: 1.5 },
  "=-1"
);
tl.from(".sec1__design3", { opacity: 0, x: "-30%", duration: 1.5 }, "=-2");
tl.from(".sec1__design4", { opacity: 0, duration: 1.5 }, "=-2");
tl.from(".sec1__content a", { opacity: 0, duration: 1.5 }, "=-3");

// AOS initialization
AOS.init({
  duration: 1000,
  offset: 0,
});

// Menu icon toggle
var sec1__menuIcon = document.querySelector(".sec1__menuIcon");
var menuBar = document.querySelector(".menuBar");
sec1__menuIcon.addEventListener("click", function () {
  sec1__menuIcon.classList.toggle("active");
  menuBar.classList.toggle("active");
});

// Scroll to top functionality
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".fa");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
