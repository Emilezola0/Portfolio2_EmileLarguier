// Détection des mises à jour du site.
// À chaque mise en ligne, augmenter "version" dans version.json : les visiteurs qui ont
// une ancienne version en cache voient un popup qui recharge le site proprement (sans Ctrl+F5).

const VERSION_KEY = "siteVersion";
const CHECK_INTERVAL = 5 * 60 * 1000; // vérifie toutes les 5 minutes si l'onglet reste ouvert

// Fichiers du site à re-télécharger lors d'une mise à jour
const ASSETS = [
  "index.html", "projects.html", "project.html", "about.html", "cv.html",
  "css/style.css",
  "js/theme-init.js", "js/common.js", "js/update.js",
  "js/home.js", "js/projects.js", "js/project.js", "js/about.js", "js/cv.js",
  "data/site.json", "data/projects.json",
];

function readStored() {
  try {
    return localStorage.getItem(VERSION_KEY);
  } catch {
    return null;
  }
}

function store(version) {
  try {
    localStorage.setItem(VERSION_KEY, version);
  } catch { }
}

async function fetchVersion() {
  try {
    // "no-store" : on ignore complètement le cache pour ce petit fichier
    const res = await fetch("version.json", { cache: "no-store" });
    return res.ok ? res.json() : null;
  } catch {
    return null; // hors ligne : on réessaiera plus tard
  }
}

// Remplace les fichiers en cache par ceux du serveur, puis recharge la page
async function applyUpdate(version) {
  await Promise.all([location.href, ...ASSETS].map(url => fetch(url, { cache: "reload" }).catch(() => { })));
  store(version);
  location.reload();
}

function showPopup(info, ui, t) {
  if (document.getElementById("update-popup")) return;

  const popup = document.createElement("div");
  popup.id = "update-popup";
  popup.className = "update-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML = `
    <p class="update-title">${t(ui.title)} <span class="update-version">v${info.version}</span></p>
    ${info.notes ? `<p class="update-notes">${t(info.notes)}</p>` : ""}
    <div class="update-actions">
      <button type="button" class="update-later">${t(ui.later)}</button>
      <button type="button" class="update-now">${t(ui.button)}</button>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector(".update-now").addEventListener("click", e => {
    e.target.disabled = true;
    e.target.textContent = t(ui.loading);
    applyUpdate(info.version);
  });
  // "Plus tard" : masque le popup pour cette visite, il reviendra à la prochaine
  popup.querySelector(".update-later").addEventListener("click", () => popup.remove());
}

let dismissedThisPage = false;

async function check(ui, t) {
  const info = await fetchVersion();
  if (!info || !info.version) return;

  const stored = readStored();
  if (!stored) {
    // Première visite : le visiteur a forcément la dernière version
    store(info.version);
  } else if (stored !== info.version && !dismissedThisPage) {
    showPopup(info, ui, t);
  }
}

export function setupUpdateCheck(site, t) {
  const ui = site.ui.update;
  check(ui, t);
  setInterval(() => check(ui, t), CHECK_INTERVAL);
  // Vérifie aussi quand on revient sur l'onglet
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") check(ui, t);
  });
  document.addEventListener("click", e => {
    if (e.target.closest(".update-later")) dismissedThisPage = true;
  });
}
