import { initPage, loadProjects, t } from "./common.js";

const site = await initPage("home");
const projects = await loadProjects();
const container = document.getElementById("home-projects");

// Les projets affichés sur l'accueil sont listés dans data/site.json -> home.featured
site.home.featured.forEach(id => {
  const project = projects.find(p => p.id === id);
  if (!project) return console.warn(`Projet "${id}" introuvable dans data/projects.json`);

  const link = document.createElement("a");
  link.href = `project.html?id=${project.id}`;
  link.innerHTML = `
    <section class="parallax fullscreen" style="background-image: url('${project.cover || project.thumbnail}')">
      <div class="overlay">
        <h2>${t(project.pageTitle || project.title)}</h2>
        <p>${t(project.tagline || project.summary)}</p>
      </div>
    </section>
  `;
  container.appendChild(link);
});
