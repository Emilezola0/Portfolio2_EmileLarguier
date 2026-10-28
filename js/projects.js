import { initPage, loadProjects, t } from "./common.js";

const site = await initPage("projects");
const projects = (await loadProjects()).filter(p => !p.hidden);

const grid = document.getElementById("project-grid");
const filters = document.getElementById("filters");

document.getElementById("projects-title").textContent = t(site.ui.projectsTitle);

// Un bouton par catégorie définie dans data/site.json -> ui.categories
Object.entries(site.ui.categories).forEach(([key, label]) => {
  const btn = document.createElement("button");
  btn.className = "juicy-hover ripple-button press-button";
  btn.dataset.filter = key;
  btn.textContent = t(label);
  btn.addEventListener("click", () => renderProjects(key));
  filters.appendChild(btn);
});

function renderProjects(filter = "all") {
  grid.innerHTML = "";

  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach(project => {
      const title = t(project.title);
      const card = document.createElement("a");
      card.href = `project.html?id=${project.id}`;
      card.classList.add("project-card");
      card.innerHTML = `
        <img src="${project.thumbnail}" alt="${title}" loading="lazy" />
        <div class="info">
          <h3>${title}</h3>
          <p>${t(project.summary)}</p>
        </div>
      `;
      grid.appendChild(card);
    });

  // Met en surbrillance le filtre actif
  filters.querySelectorAll("button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
}

renderProjects();
