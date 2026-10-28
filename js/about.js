import { initPage, t } from "./common.js";

const site = await initPage("about");
const about = site.about;

document.getElementById("about-section").innerHTML = `
  <h2>${t(site.ui.nav.about)}</h2>
  <p>${t(about.intro)}</p>

  <p class="about-subtitle">${t(about.skillsTitle)}</p>
  <ul class="skills">
    ${about.skills.map(skill => `<li><strong>${t(skill)}</strong></li>`).join("")}
  </ul>

  ${about.outro.map(p => `<p>${t(p)}</p>`).join("")}

  <p class="about-subtitle"><strong>${t(about.softwareTitle)}</strong></p>
  <div class="software-container">
    ${about.software.map(soft => `
      <div class="software-item">
        <img src="${soft.icon}" alt="${soft.name}" loading="lazy">
        <span>${soft.name}</span>
      </div>
    `).join("")}
  </div>
`;
