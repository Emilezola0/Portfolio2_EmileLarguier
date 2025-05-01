const params = new URLSearchParams(location.search);
const id = params.get("id");

const projects = {
  spooderdance: {
    title: "Spooder Dance",
    description: "Un jeu musical avec une araignée.",
    videoUrl: "https://youtu.be/nnYTXif9Olg",
    sections: [
      {
        title: "Concept",
        text: "SpooderDance est un jeu de rythme...",
        image: "assets/img/spooderdance/spooderDanceConcept.png"
      },
      {
        title: "Développement",
        text: "Fait en 48h pendant une Game Jam avec Unreal Engine",
        image: "assets/img/spooderdance/spooderDanceConcept.png"
      }
    ],
    link: "https://emilezola.itch.io/spooder-dance"
  },
  JusantDLC: {
    title: "Jusant DLC",
    description: "Escalader accompagné de votre compagnon Rak dans la suite du jeu Jusant proposé par les Mastère 1 de LISAA",
    videoUrl: "https://youtu.be/VVF55Wm70GU",
    sections: [
      {
        title: "Concept",
        text: "Jusant est un jeu d'escalade",
        image: "assets/img/JusantDLC/jusantDLC.png"
      },
      {
        title: "Développement",
        text: "Fait sur Unreal Engine en 2 mois lors de mon Mastère 1",
        image: "assets/img/JusantDLC/jusantEmbrun.png"
      },
      {
        title: "Ce que j'ai fait",
        text: "Je me suis occupé du Game Design, Level Design (LD), System Design et Gameplay Programming (Escalade, Prises), ainsi que certains tools pour faciliter la mise en place du LD",
        image: "assets/img/JusantDLC/jusantEmbrun.png"
      }
    ],
  },
  scryptalking: {
    title: "Scryptalking",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "TEXT 1",
        image: "assets/img/spooderdance/spooderDanceConcept.png"
      },
      {
        title: "Développement",
        text: "Fait sur Unreal Engine en 2 mois lors de mon Bachelor 2 à LISAA",
        image: "assets/img/spooderdance/spooderDanceConcept.png"
      }
    ],
    link: "https://emilezola.itch.io/spooder-dance"
  },
  // ... autres projets
};

const data = projects[id];
const container = document.getElementById("project-container");

if (data) {
  // 1. Ajout du titre
  const title = document.createElement("h2");
  title.textContent = data.title;
  container.appendChild(title);

  // 2. Ajout de la vidéo (YouTube / Vimeo / direct MP4)
  if (data.videoUrl) {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");
  
    const embedUrl = convertToEmbedUrl(data.videoUrl);
  
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
  }

  // 3. Ajout des sections (texte + image)
  data.sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");

    sectionDiv.innerHTML = `
      <div class="text">
        <h3>${section.title}</h3>
        <p>${section.text}</p>
      </div>
      <img src="${section.image}" alt="${section.title}">
    `;

    container.appendChild(sectionDiv);
  });

  // 4. Bouton vers le lien externe (itch.io)
  const linkBtn = document.createElement("a");
  linkBtn.href = data.link;
  linkBtn.target = "_blank";
  linkBtn.className = "button";
  linkBtn.textContent = "Voir sur itch.io";
  container.appendChild(linkBtn);
} else {
  container.innerHTML = `<p>Projet introuvable.</p>`;
}

// Fix Video
function convertToEmbedUrl(url) {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  } else if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
}
