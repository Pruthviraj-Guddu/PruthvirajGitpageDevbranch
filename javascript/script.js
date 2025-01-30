document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/data.json")
      .then(response => response.json())
      .then(data => {
        console.log("hello")
          // Set the page title dynamically
          document.title = data.text.title;

          // Update the Home Section
          document.querySelector("#sectionHome .sec1__contentDetail").innerHTML = `
              <h1>${data.text.sections[0].content}</h1>
          `;

          // Update About Me Section
          document.querySelector("#sectionAbout .sec2__aboutme2").innerHTML = `
              <p>${data.text.sections[1].content}</p>
          `;

          // Populate Social Links
          const socialLinks = document.querySelector(".sec2__aboutme1Social ul");
          socialLinks.innerHTML = `
              <li><a href="${data.links.github}" target="_blank"><i class="fab fa-github"></i></a></li>
              <li><a href="${data.links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="${data.links.email}"><i class="fas fa-envelope"></i></a></li>
          `;

          // Add Projects Dynamically
          const projectsContainer = document.querySelector("#sectionProjects .sec3__container");
          data.links.projects.forEach(project => {
              projectsContainer.innerHTML += `
                  <a href="${project.url}" target="_blank" style="text-decoration: none;">
                      <div class="sec3__card">
                          <h2>${project.name}</h2>
                      </div>
                  </a>
              `;
          });
      })
      .catch(error => console.error("Error loading JSON:", error));
});
