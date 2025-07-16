const projects = [
    {
      id: "spooderdance",
      title: "SpooderDance",
      description: "Un jeu musical avec une araignée et beaucoup beaucoup d'effet spéciaux",
      image: "assets/img/projects/spooderDance.png",
      category: "jam"
    },
    {
      id: "JusantDLC",
      title: "Jusant DLC",
      description: "Jouer la suite de Jusant, traverser et escalader des endroits dangeureux",
      image: "assets/img/projects/jusantDLC.png",
      category: "school"
    },
    {
      id: "TockarTournament",
      title: "Tockar Tournament",
      description: "Un jeu multijoueurs où l'on joue avec ses amis pour s'affronter dans des arènes avec différentes armes. Dans ce jeu les dépalcements sont rapides et multiples (Wall Run, Slide, Bumper, Katana)",
      image: "assets/img/projects/tockarTournament.png",
      category: "perso"
    },
    {
      id: "revengefantasy",
      title: "Revenge Fantasy",
      description: "Un fast FPS avec combat, plateforming dans un style unique",
      image: "assets/img/projects/revengeFantasy.png",
      category: "school"
    },
    {
      id: "scryptalking",
      title: "Scryptalking",
      description: "Un jeu Top View de mystère et d'énigme dans lequel vous essayez de persuader d'étranges personnages en utilisant des mots ou combats de cartes",
      image: "assets/img/projects/scryptalking.png",
      category: "school"
    },
    {
      id: "MaybeDieLess",
      title: "Maybe Die Less",
      description: "Un jeu 2D de plateforming ou vous contrôlez un slime",
      image: "assets/img/projects/mdl.png",
      category: "jam"
    },
    {
      id: "Weird2",
      title: "Weird 2",
      description: "Découvrez le prologue de Weird 1 dans ce FMV (Full motion video) avec des minis-jeux, produit lors d'un jam",
      image: "assets/img/projects/weird2.png",
      category: "jam"
    },
    {
      id: "Deeplace",
      title: "Deeplace",
      description: "Jeu d'horreur en First Person ou vous devez retrouver vos collègues perdu dans ce bunker abandonné où des créatures réside",
      image: "assets/img/projects/deeplace.png",
      category: "school"
    },
    {
      id: "SlasherHigh",
      title: "Slasher High",
      description: "Préparer votre scène en installant les archétypes de personne de film d'horreur pour définir leur emplacement et l'odre dans lequel le tueur devra les tuer",
      image: "assets/img/projects/slasherHigh.png",
      category: "jam"
    },
    {
      id: "BaggyBag",
      title: "Baggy Bag",
      description: "Jeu à 2 joueurs l'un contrôle les jambes l'autre le protège",
      image: "assets/img/projects/baggyBag.png",
      category: "jam"
    },
    {
      id: "ArcadeStalker",
      title: "Arcade Stalker",
      description: "Enfermer dans une borne d'arcade vous devez gérer la machine de manière à ce que ça plaise aux personnes pour générer un max de thune et pouvoir être libéré",
      image: "assets/img/projects/arcadeStalker.png",
      category: "jam"
    },
    {
      id: "MarbleMadness",
      title: "Marble Madness",
      description: "Mini Game à 4 joueurs dans lequel on contrôle une bille dans différent mode de jeu en équipe ou tout seul dans lequel on peut récupérer des pouvoirs",
      image: "assets/img/projects/marbleMadness.png",
      category: "perso"
    }
  ];
  
  const grid = document.getElementById("project-grid");
  
  function renderProjects(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);
  
    filtered.forEach(project => {
      const card = document.createElement("a");
      card.href = `project.html?id=${project.id}`;
      card.classList.add("project-card");
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    const filterButtons = document.querySelectorAll(".filters button");
    
    // Button All already selected
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
      allButton.classList.add("active");
    }
    
    // Select the button you click and put the DA
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Supprime l’état actif des autres
        filterButtons.forEach(b => b.classList.remove("active"));
        // Ajoute à l’actuel
        btn.classList.add("active");
        // Puis tu fais ton filtrage comme avant
      });
    });
  }
  
  // Initial render
  renderProjects();
  
  // Filter buttons
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      renderProjects(btn.dataset.filter);
    });
  });
  