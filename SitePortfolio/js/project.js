const params = new URLSearchParams(location.search);
const id = params.get("id");

const projects = {
  spooderdance: {
    title: "Spooder Dance",
    description: "Un jeu musical avec une araignée.",
    videoUrl: "https://youtu.be/auoZptSXZ7I",
    sections: [
      {
        title: "Concept",
        text: "SpooderDance est un jeu de rythme où l'on contrôle les pâtes (4 seulement) d'une araignée pour faire correspondre au mouvement de dance d'un humain. L'objectif et que les pâtes soient bien placé avant que la figure soit dans le cercle au centre bas de l'écran",
        image: "assets/img/ProjDesc/SpooderDance/spooderDanceScreen1.png"
      },
      {
        title: "Développement",
        text: "Fait en 48h pendant une Game Jam avec Unreal Engine avec une équipe de 7 personnes",
        image: "assets/img/ProjDesc/SpooderDance/spooderDanceCredit.png"
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
        image: "assets/img/ProjDesc/JusantDLC/jusantDLC.png"
      },
      {
        title: "Développement",
        text: "Fait sur Unreal Engine en 2 mois lors de mon Mastère 1",
        image: "assets/img/ProjDesc/JusantDLC/jusantEmbrun.png"
      },
      {
        title: "Ce que j'ai fait",
        text: "Je me suis occupé du Game Design, Level Design (LD), System Design et Gameplay Programming (Escalade, Prises), ainsi que certains tools pour faciliter la mise en place du LD",
        image: "assets/img/ProjDesc/JusantDLC/jusantEmbrun.png"
      },
      {
        title: "Narration",
        text: "On va suivre l'aventure avec Rak",
        image: "assets/img/ProjDesc/JusantDLC/jusantRak.png"
      }
    ],
  },
  scryptalking: {
    title: "Scryptalking",
    description: "",
    sections: [
      {
        title: "Concept",
        text: "Absorbé par un ordinateur alors que vous et des amis étiez à la recherche d'élèves disparus, vous vous retrouvez dans un univers de zéros et de uns dépassant votre entendement. Percez le mystère autour de la disparition des élèves dans ce RPG en vue du dessus grâce au système de persuasion, un jeu de carte basé sur la personnalité de votre personnage",
        image: "assets/img/ProjDesc/Scryptalking/scryptalking.png"
      },
      {
        title: "Développement / Ce que j'ai fait",
        text: "Fait sur Unreal Engine en 2 mois lors de mon Bachelor 2 à LISAA. Je me suis occupé de la partie Game Design, System Design et Level Design ainsi que l'intégralité de la partie programmation du jeu",
        image: "assets/img/ProjDesc/Scryptalking/scryptalking.png"
      }
    ],
    link: "https://emilezola.itch.io/spooder-dance"
  },
  MaybeDieLess: {
    title: "Maybe Die Less",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec mon équipe ABM",
        gif: "assets/img/ProjDesc/MDL/MDL_Gameplay.gif"
      }
    ],
    link: "https://emilezola.itch.io/maybe-die-less"
  },
  Weird2: {
    title: "Weird 2",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "TEXT 1",
        gif: "assets/img/ProjDesc/Weird2/Weird2.gif"
      },
      {
        title: "Développement",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec mon équipe ABM",
        image: "assets/img/ProjDesc/Scryptalking/scryptalking.png"
      }
    ],
  },
  Deeplace: {
    title: "Deeplace",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "TEXT 1",
        image: "assets/img/ProjDesc/Deeplace/MapDeeplace.png"
      },
      {
        title: "Développement",
        text: "Fait sur Unreal Engine en 2 mois lors de mon Bachelor 1 à LISAA",
        image: "assets/img/ProjDesc/Deeplace/MapDeeplace.png"
      }
    ],
  },
  SlasherHigh: {
    title: "Slasher Highschool",
    description: "Jeu de Jam dans lequel vous devez placer dans des chambres des personnages puis ensuite vous incarner le tueur et vous devrez faire son pacing pour tous les tuer",
    videoUrl: "https://youtu.be/9Xp4UimFgMk",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec mon équipe ABM",
        image: "assets/img/ProjDesc/SlasherHigh/SlasherHigh1.png"
      },
      {
        title: "Images",
        text: "",
        image: "assets/img/ProjDesc/SlasherHigh/SlasherHigh2.png"
      },
      {
        title: "Images",
        text: "",
        image: "assets/img/ProjDesc/SlasherHigh/SlasherHigh5.png"
      }
    ],
    link: "https://emilezola.itch.io/maybe-die-less"
  },
  BaggyBag: {
    title: "Baggy Bag",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec une petite équipe de GD (5 personnes)",
        image: "assets/img/ProjDesc/BaggyBag/BaggyBag_Tittle.png"
      },
      {
        title: "Concept",
        text: "2 Joueurs contrôle une personnage différent",
        gif: "assets/img/ProjDesc/BaggyBag/BB_LevitationShort.gif"
      },
      {
        title: "Concept",
        text: "",
        gif: "assets/img/ProjDesc/BaggyBag/BB_Loot.gif"
      },
      {
        title: "Concept",
        text: "",
        gif: "assets/img/ProjDesc/BaggyBag/BB_ShootShort.gif"
      }
    ],
    link: "https://emilezola.itch.io/baggy-bag"
  },
  ArcadeStalker: {
    title: "Arcade Stalker",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec mon équipe ABM",
        image: "assets/img/ProjDesc/BaggyBag/BaggyBag_Tittle.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
  },
  revengefantasy: {
    title: "Revenge Fantasy",
    description: "Projet LISAA sur 1an avec une équipe composée de 12 personnes (4 Game Art, 4 Tech Art et 4 Game Designer)",
    sections: [
      {
        title: "Concept",
        text: "Le jeu est réalisé sur Unreal Engine, il s'agit d'un Fast FPS où l'on va devoir faire du combat en s'aidant des armes qu'on débloque au fur et à mesure qu'on avance et du plateforming en s'aidant des mécaniques suivante : Jump, Wall Run, Wall Climb mais aussi des capacités secondaires des armes",
        image: "assets/img/projects/revengeFantasy.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
  },
  BaggyBag: {
    title: "Baggy Bag",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec une petite équipe de GD (5 personnes)",
        image: "assets/img/ProjDesc/BaggyBag/BaggyBag_Tittle.png"
      },
      {
        title: "Concept",
        text: "2 Joueurs contrôle une personnage différent",
        gif: "assets/img/ProjDesc/BaggyBag/BB_LevitationShort.gif"
      },
      {
        title: "Concept",
        text: "",
        gif: "assets/img/ProjDesc/BaggyBag/BB_Loot.gif"
      },
      {
        title: "Concept",
        text: "",
        gif: "assets/img/ProjDesc/BaggyBag/BB_ShootShort.gif"
      }
    ],
    link: "https://emilezola.itch.io/baggy-bag"
  },
  ArcadeStalker: {
    title: "Arcade Stalker",
    description: "METTRE DESCRIPTION",
    sections: [
      {
        title: "Concept",
        text: "Fait sur Unreal Engine en 48h lors d'un Jam avec mon équipe ABM",
        image: "assets/img/ProjDesc/BaggyBag/BaggyBag_Tittle.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
  },
  revengefantasy: {
    title: "Revenge Fantasy",
    description: "Projet LISAA sur 1an avec une équipe composée de 12 personnes (4 Game Art, 4 Tech Art et 4 Game Designer)",
    sections: [
      {
        title: "Concept",
        text: "Le jeu est réalisé sur Unreal Engine, il s'agit d'un Fast FPS où l'on va devoir faire du combat en s'aidant des armes qu'on débloque au fur et à mesure qu'on avance et du plateforming en s'aidant des mécaniques suivante : Jump, Wall Run, Wall Climb mais aussi des capacités secondaires des armes",
        image: "assets/img/projects/revengeFantasy.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
  },
  MarbleMadness: {
    title: "Revenge Fantasy",
    description: "Projet LISAA sur 1an avec une équipe composée de 12 personnes (4 Game Art, 4 Tech Art et 4 Game Designer)",
    sections: [
      {
        title: "Concept",
        text: "Projet perso réalisé avec 2-4 personnes. Le jeu est un party game utilisant la physique de bille de marble madness mais avec différent style de mini-jeu connue et des pouvoirs pour donner des effets spéciaux aux billes qui sont rentrées en contact avec",
        image: "assets/img/ProjDesc/MarbleMadness/marbleMadnessScreen2.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
  },
  TockarTournament: {
    title: "Tockar Tournament",
    description: "Projet perso réalisé sur 1 mois avec 3 personnes",
    sections: [
      {
        title: "Concept",
        text: "Projet perso réalisé sur 1 mois avec 3 personnes, dans lequel on va pouvoir s'affronter sur différente map. Chaque map possède une volonté de gameplay différent grâce à spawners d'arme différent et d'éléments comme Vide, Wall Run, Bumper et Ascenseur pottentiellement présent",
        image: "assets/img/ProjDesc/TockarTournament/TockarTournamentScreen1.png"
      }
    ],
    link: "https://emilezola.itch.io/arcade-stalker"
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

    let media = "";

    if (section.image) {
      media = `<img src="${section.image}" alt="${section.title}">`;
    } else if (section.gif) {
      media = `<img src="${section.gif}" alt="${section.title}" class="gif">`;
    }

    sectionDiv.innerHTML = `
      <div class="text">
        <h3>${section.title}</h3>
        <p>${section.text}</p>
      </div>
      ${media}
    `;

    container.appendChild(sectionDiv);
  });

  // 4. Bouton vers le lien externe (itch.io)
  if (data.link) {
    const linkBtn = document.createElement("a");
    linkBtn.href = data.link;
    linkBtn.target = "_blank";
    linkBtn.className = "button";
    linkBtn.textContent = "Voir sur itch.io";
    container.appendChild(linkBtn);
  }

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
