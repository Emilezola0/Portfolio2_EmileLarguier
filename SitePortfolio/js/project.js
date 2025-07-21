const params = new URLSearchParams(location.search);
const id = params.get("id");

const projects = {
  spooderdance: {
    title: "Spooder Dance",
    description: "Un jeu de Jam réalisé en 2024/2025",
    videoUrls: [
      "https://youtu.be/auoZptSXZ7I"
    ],
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
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/spooder-dance" }
    ]
  },
  JusantDLC: {
    title: "Jusant DLC",
    description: "Escalader accompagné de votre compagnon Rak dans la suite du jeu Jusant proposé par les Mastère 1 de LISAA",
    videoUrls: [
      "https://youtu.be/VVF55Wm70GU"
      ],
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
    description: "School Game made in 2022/2023",
    sections: [
      {
        title: "Concept",
        text: "Absorbé par un ordinateur alors que vous et des amis étiez à la recherche d'élèves disparus, vous vous retrouvez dans un univers de zéros et de uns dépassant votre entendement. Percez le mystère autour de la disparition des élèves dans ce RPG en vue du dessus grâce au système de persuasion, un jeu de carte basé sur la personnalité de votre personnage",
        image: "assets/img/ProjDesc/Scryptalking/scryptalking.png"
      },
      {
        title: "Développement / Ce que j'ai fait",
        text: "Fait sur Unreal Engine en 2 mois en 2022/2023 lors de mon Bachelor 2 à LISAA. Je me suis occupé de la partie Game Design, System Design et Level Design ainsi que l'intégralité de la partie programmation du jeu",
        image: "assets/img/ProjDesc/Scryptalking/scryptalking.png"
      }
    ],
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/spooder-dance" }
    ]
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
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/maybe-die-less" }
    ]
  },
  Weird2: {
    title: "Weird 2",
    description: "Jeu de Jam réalisée en 2023/2024 avec l'équipe d'ABM",
    sections: [
      {
        title: "Concept",
        text: "It's a full motion video (FMV) that takes place in the school, in which you have to make choices at the end of the video sequence. These choices are presented by directions and lead to a new sequence interspersed with a mini-game.",
        gif: "assets/img/ProjDesc/Weird2/Weird2.gif"
      },
      {
        title: "Développement",
        text: "After the game design part on the idea for the game. I tackled the development of the game, which was a new challenge for me because Unreal Engine was software that we'd only recently learned to use and I was discovering how to use MP4s (video) in Unreal Engine.",
      }
    ],
  },
  Deeplace: {
    title: "Deeplace",
    description: "Bachelor 1 Game at LISAA",
    sections: [
      {
        title: "Concept",
        text: "Accelerated Gameplay",
        videoUrl: "https://youtu.be/_JJQ7WJpuro"
      },
      {
        title: "Developpement",
        text: "Made on Unreal Engine in 2 months during my Bachelor 1 at LISAA",
        image: "assets/img/ProjDesc/Deeplace/MapDeeplace.png"
      }
    ],
  },
  SlasherHigh: {
    title: "Slasher Highschool",
    description: "Fait en 2022/2023, Slasher Highschool est Jeu de Jam dans lequel vous devez placer dans des chambres des personnages puis ensuite vous incarner le tueur et vous devrez faire son pacing pour tous les tuer",
    videoUrls: [
      "https://youtu.be/9Xp4UimFgMk"
    ],
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
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/maybe-die-less" }
    ]
  },
  ArcadeStalker: {
    title: "Arcade Stalker",
    description: "Game Jam 2023",
    sections: [
      {
        title: "Concept",
        text: "Made in 2022/2023 on Unreal Engine in 48 hours during a Jam with my ABM team. Locked inside the arcade terminal by the shop manager, the game consists of managing the games inside an arcade terminal to please the person so that he spends a lot of money and allows you to free yourself. You have to be reactive to change and adapt the game and avoid short-circuiting to avoid this you will have to make mini-games.",
        gif: "assets/img/ProjDesc/ArcadeStalker/ArcadeStalker_GIF.gif"
      }
    ],
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/arcade-stalker" }
    ]
  },
  revengefantasy: {
    title: "Revenge Fantasy",
    description: "Projet LISAA sur 1an avec une équipe composée de 12 personnes (4 Game Art, 4 Tech Art et 4 Game Designer) fait lors de ma 3ème année de Bachelor à LISAA en 2023/2024",
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
    description: "Game Jam 2024",
    sections: [
      {
        title: "Concept",
        text: "Made in 2022/2023 on Unreal Engine in 48 hours during a Jam with a small GD team (5 people)",
        image: "assets/img/ProjDesc/BaggyBag/BaggyBag_Title.png"
      },
      {
        title: "Concept",
        text: "A 2-player game in which each player controls a character, but the two are interconnected because one controls the feet (movement) and the other is in charge of shooting. In the example (gif) just below, when the player jumps, he has to press down to glide and control switches to the person in the bag, which encourages coordination when jumping.",
        gif: "assets/img/ProjDesc/BaggyBag/BB_LevitationShort.gif"
      },
      {
        title: "Concept",
        text: "If the player in the bag runs out of ammunition, it's up to the player to move or roll it.",
        gif: "assets/img/ProjDesc/BaggyBag/BB_Loot.gif"
      },
      {
        title: "What did I take care of?",
        text: "I developed the idea of a two-player game, with one character depending on the other, which we reworked as a team. Then, once the game design part was finished, I took care of the FX, the materials and fixed certain bugs.",
        gif: "assets/img/ProjDesc/BaggyBag/BB_ShootShort.gif"
      }
    ],
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/baggy-bag" }
    ]
  },
  MarbleMadness: {
    title: "Marble Madness : Party Game",
    description: "Marble Madness: Party Game is a remake of Marble Madness but with several mini-games instead.",
    videoUrls: [
      "https://youtu.be/Ibb5-nvUalc"
    ],
    sections: [
      {
        title: "Concept",
        text: "Personal project with 2-4 people. The game is a party game using the marble physics of marble madness but with different mini-game styles and powers to give special effects to the marbles that come into contact with them.",
        image: "assets/img/ProjDesc/MarbleMadness/marbleMadnessScreen2.png"
      },
      {
        title: "Image",
        text : "Mini-jeu : TNT Tag like",
        image: "assets/img/ProjDesc/MarbleMadness/marbleMadnessScreen3.png"
      },
      {
        title: "Image",
        text : "Mini-game: Arena, the aim of which is to expel the player from the arena",
        image: "assets/img/ProjDesc/MarbleMadness/marbleMadnessScreen6.png"
      }
    ],
    links: [
      { label: "Itch.io page", url: "https://emilezola.itch.io/arcade-stalker" }
    ]
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
    links: [
      { label: "Itch.io page", url: "https://tockar-studio.itch.io/tockar-tournament" }
    ]
  },
  Weird: {
    title: "Weird",
    description: "Game Jam 2022",
    videoUrls: [
      "https://youtu.be/RfX5XzAFn4Y"
    ]
  },
  LittleGames: {
    title: "Little games",
    description: "Games far too small to fit on separate pages",
    videoUrls: "",
    sections: [
      {
        title: "Dodge Expert",
        text: "Gameplay : You have to dodge the balls while collecting points by standing in the centre of the tiles.",
        videoUrl: "https://youtu.be/UyTWprXCLlw"
      },
      {
        title: "Fast Magic",
        text: "Gameplay",
        videoUrl: "https://youtu.be/e20FELxGQ_Y"
      }
    ]
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

  // 1.5. Ajout d'une description
  const description = document.createElement("h3");
  description.textContent = data.description;
  container.appendChild(description);

  // 2. Ajout des vidéos (supporte plusieurs)
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

  // 3. Ajout des sections (texte + image)
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
