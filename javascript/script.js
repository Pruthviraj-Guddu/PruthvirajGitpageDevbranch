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
  /*
  // GitHub Link
  let githubLinkElement = document.getElementById("githubLinkElement");
  if (githubLinkElement) {
    // Dynamically set the href to the GitHub URL from the JSON data
    githubLinkElement.href = data.basics.profiles.github.url;
    console.log(data.basics.profiles.github.url);
  } else {
    console.error("Element with ID 'githubLinkElement' not found.");
  }

  let linkedinLinkElement = document.getElementById("linkedinLinkElement");
  if (linkedinLinkElement) {
    linkedinLinkElement.href = data.basics.profiles.linkedin.url;
    console.log(data.basics.profiles.linkedin.url);
  } else {
    console.error("Element with class 'linkedinLinkElement' not found.");
  }

  //digitalResumeElement
  let digitalResumeElement = document.getElementById("digitalResumeElement");
  if (digitalResumeElement) {
    digitalResumeElement.href = data.links.digitalResume.url;
    console.log(data.links.digitalResume.url);
  } else {
    console.error("Element with class 'digitalResumeElement' not found.");
  }
  
  //mailElement
  let mailElement = document.getElementById("mailElement");
  if (mailElement) {
    mailElement.src = data.links.email.url;
    console.log(data.links.ProfilePicture.url);
  } else {
    console.error("Element with class 'mailElement' not found.");
  }
    */
  let socialLinks = document.querySelectorAll(".socialLink");
  socialLinks.forEach((link) => {
    // Handle GitHub link
    if (link.classList.contains("githubLinkElement")) {
      link.href = data.basics.profiles.github.url;
    }
    // Handle LinkedIn link
    else if (link.classList.contains("linkedinLinkElement")) {
      link.href = data.basics.profiles.linkedin.url;
    }
    // Handle Digital Resume link
    else if (link.classList.contains("digitalResumeElement")) {
      link.href = data.links.digitalResume.url;
      console.log(data.links.digitalResume.url);
    }
    else if (link.classList.contains("mailElement")) {
      link.href = data.links.email.url;
      console.log(data.links.email.url);
      //mailElement
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

}

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
