const projects = [
    {
      id: "spooderdance",
      title: "SpooderDance",
      description: "Un jeu musical avec une araignée.",
      image: "assets/img/projects/spooderdance.png",
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
      id: "revengefantasy",
      title: "RevengeFantasy",
      description: "Un fast FPS pixel art.",
      image: "assets/img/projects/revengeFantasy.png",
      category: "school"
    },
    {
      id: "scryptalking",
      title: "Scryptalking",
      description: "Jeu de persuasion basé sur le dialogue.",
      image: "assets/img/projects/scryptalking.png",
      category: "school"
    },
    {
      id: "MaybeDieLess",
      title: "Maybe Die Less",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/mdl.png",
      category: "jam"
    },
    {
      id: "Weird2",
      title: "Weird 2",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/weird2.png",
      category: "jam"
    },
    {
      id: "Deeplace",
      title: "Deeplace",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/deeplace.png",
      category: "school"
    },
    {
      id: "SlasherHigh",
      title: "Slasher High",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/slasherHigh.png",
      category: "jam"
    },
    {
      id: "Baggy Bag",
      title: "Baggy Bag",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/baggyBag.png",
      category: "jam"
    },
    {
      id: "ArcadeStalker",
      title: "Arcade Stalker",
      description: "METTRE DESCRIPTION",
      image: "assets/img/projects/arcadeStalker.png",
      category: "jam"
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
  