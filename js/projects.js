const grid = document.getElementById("project-grid");
let currentLang = localStorage.getItem("lang") || "en";
let translations = {};

async function loadTranslations(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();
  // Store as a map with id keys for easier lookup
  translations = {};
  (data.projects || []).forEach(p => {
    translations[p.id] = p;
  });
}


const projects = [
  { id: "spooderdance", image: "assets/img/projects/spooderDance.png", category: "jam" },
  { id: "JusantDLC", image: "assets/img/projects/jusantDLC.png", category: "school" },
  { id: "TockarTournament", image: "assets/img/projects/tockarTournament.png", category: "perso" },
  { id: "revengefantasy", image: "assets/img/projects/revengeFantasy.png", category: "school" },
  { id: "scryptalking", image: "assets/img/projects/scryptalking.png", category: "school" },
  { id: "MaybeDieLess", image: "assets/img/projects/mdl.png", category: "jam" },
  { id: "Weird2", image: "assets/img/projects/weird2.png", category: "jam" },
  { id: "Deeplace", image: "assets/img/projects/deeplace.png", category: "school" },
  { id: "SlasherHigh", image: "assets/img/projects/slasherHigh.png", category: "jam" },
  { id: "BaggyBag", image: "assets/img/projects/baggyBag.png", category: "jam" },
  { id: "ArcadeStalker", image: "assets/img/projects/arcadeStalker.png", category: "jam" },
  { id: "MarbleMadness", image: "assets/img/projects/marbleMadness.png", category: "perso" },
  { id: "LittleGames", image: "assets/img/projects/TestImage1.png", category: "perso" }
];

async function renderProjects(filter = "all") {
  await loadTranslations(currentLang);
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const { id, image } = project;
    const translated = translations[id] || {};
    const title = translated.title || id;
    const description = translated.description || "";


    const card = document.createElement("a");
    card.href = `project.html?id=${id}`;
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${image}" alt="${title}" />
      <div class="info">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  const filterButtons = document.querySelectorAll(".filters button");
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) allButton.classList.add("active");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

renderProjects();

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    renderProjects(btn.dataset.filter);
  });
});