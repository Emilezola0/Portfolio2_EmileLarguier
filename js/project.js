import { initPage, loadProjects, t, youtubeEmbed } from "./common.js";

const site = await initPage("project");
const container = document.getElementById("project-container");
const id = new URLSearchParams(location.search).get("id");

try {
  const project = (await loadProjects()).find(p => p.id === id);
  if (project) {
    displayProject(project);
  } else {
    container.innerHTML = `<p>${t(site.ui.projectNotFound)}</p>`;
  }
} catch (err) {
  console.error(err);
  container.innerHTML = `<p>${t(site.ui.loadError)}</p>`;
}

// Vidéo YouTube (iframe) ou fichier vidéo (mp4)
function videoHTML(url) {
  const embed = youtubeEmbed(url);
  const media = embed
    ? `<iframe src="${embed}" title="${t(site.ui.videoTitle)}" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen loading="lazy"></iframe>`
    : `<video controls><source src="${url}" type="video/mp4"></video>`;
  return `<div class="video-container">${media}</div>`;
}

// Bouton de lien. Sans "label", on affiche "Page Itch.io" pour un lien itch.io, sinon "Lien externe".
function linkHTML(link) {
  const label = link.label
    ? t(link.label)
    : t(link.url.includes("itch.io") ? site.ui.itchPage : site.ui.externalLink);
  return `<a class="button" href="${link.url}" target="_blank" rel="noopener">${label}</a>`;
}

function displayProject(project) {
  const title = t(project.pageTitle || project.title);
  document.title = `${title} - ${site.owner.name}`;

  let html = `
    <a class="back-link" href="projects.html">${t(site.ui.backToProjects)}</a>
    <h2>${title}</h2>
    <h3>${t(project.description)}</h3>
  `;

  (project.videos || []).forEach(url => {
    html += videoHTML(url);
  });

  (project.sections || []).forEach(section => {
    const sectionTitle = t(section.title);
    let media = "";
    if (section.image) {
      media = `<img src="${section.image}" alt="${sectionTitle}" loading="lazy">`;
    } else if (section.video) {
      media = `<div class="media">${videoHTML(section.video)}</div>`;
    }

    html += `
      <div class="section">
        <div class="text">
          <h3>${sectionTitle}</h3>
          <p>${t(section.text)}</p>
          ${section.link ? linkHTML(section.link) : ""}
        </div>
        ${media}
      </div>
    `;
  });

  if (project.links && project.links.length) {
    html += `<div class="project-links">${project.links.map(linkHTML).join("")}</div>`;
  }

  container.innerHTML = html;
}
