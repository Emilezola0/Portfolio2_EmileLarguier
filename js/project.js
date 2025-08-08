const params = new URLSearchParams(location.search);
const id = params.get("id");

const container = document.getElementById("project-container");
let currentLang = localStorage.getItem("lang") || "en";

async function loadProjects(lang) {
  try {
    // Charge le JSON de projets selon la langue (ex: lang/en/projects.json)
    const res = await fetch(`lang/${lang}.json`);
    if (!res.ok) throw new Error("Erreur de chargement des projets");
    
    const projectsData = await res.json();

    // Accède au projet selon l'id
    const data = projectsData.projectsDescription[id];

    if (data) {
      displayProject(data);
    } else {
      container.innerHTML = `<p>Projet introuvable.</p>`;
    }
  } catch (err) {
    container.innerHTML = `<p>Erreur lors du chargement des projets.</p>`;
  }
}

function displayProject(data) {
  container.innerHTML = ""; // Vide le container avant ajout

  // 1. Titre
  const title = document.createElement("h2");
  title.textContent = data.title;
  container.appendChild(title);

  // 1.5 Description
  const description = document.createElement("h3");
  description.textContent = data.description;
  container.appendChild(description);

  // 2. Vidéos
  if (data.videoUrls && Array.isArray(data.videoUrls)) {
    data.videoUrls.forEach(videoUrl => {
      const videoContainer = document.createElement("div");
      videoContainer.classList.add("video-container");

      const embedUrl = convertToEmbedUrl(videoUrl);

      if (embedUrl.includes("youtube.com") || embedUrl.includes("vimeo.com")) {
        videoContainer.innerHTML = `
          <iframe 
            width="100%" 
            height="480" 
            src="${embedUrl}" 
            title="Vidéo du projet"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        `;
      } else {
        videoContainer.innerHTML = `
          <video controls width="100%">
            <source src="${embedUrl}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        `;
      }

      container.appendChild(videoContainer);
    });
  }

  // 3. Sections
  data.sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");

    let media = "";

    if (section.image) {
      media = `<img src="${section.image}" alt="${section.title}">`;
    } else if (section.gif) {
      media = `<img src="${section.gif}" alt="${section.title}" class="gif">`;
    } else if (section.video) {
      media = `
        <div class="video-container">
          <video controls>
            <source src="${section.video}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      `;
    } else if (section.videoUrl) {
      const embedUrl = convertToEmbedUrl(section.videoUrl);
      media = `
        <div class="video-container">
          <iframe 
            src="${embedUrl}" 
            title="Vidéo de la section"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `;
    }

    // Lien optionnel
    let sectionLink = "";
    if (section.link && section.link.url) {
      const label = section.link.label || "Lien externe";
      sectionLink = `<a class="button" href="${section.link.url}" target="_blank">${label}</a>`;
    }

    sectionDiv.innerHTML = `
      <div class="text">
        <h3>${section.title}</h3>
        <p>${section.text}</p>
        ${sectionLink}
      </div>
      ${media}
    `;

    container.appendChild(sectionDiv);
  });

  // 4. Liens externes
  if (data.links && Array.isArray(data.links)) {
    data.links.forEach(linkObj => {
      const linkBtn = document.createElement("a");
      linkBtn.href = linkObj.url;
      linkBtn.target = "_blank";
      linkBtn.className = "button";
      linkBtn.textContent = linkObj.label || "Lien externe";
      container.appendChild(linkBtn);
    });
  }
}

function convertToEmbedUrl(url) {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  } else if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
}

// Lance le chargement des projets selon la langue courante
loadProjects(currentLang);
