// Code partagé par toutes les pages : langue, chargement des données, menu et footer.
// Les contenus (textes, liens, projets) sont dans data/site.json et data/projects.json.

const LANGS = ["fr", "en"];

function readStoredLang() {
  try {
    return localStorage.getItem("lang");
  } catch {
    return null;
  }
}

export const lang = LANGS.includes(readStoredLang()) ? readStoredLang() : "fr";

// Renvoie le texte dans la langue courante.
// Accepte soit une simple chaîne (identique en FR et EN), soit { "fr": "...", "en": "..." }.
export function t(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.fr ?? "";
  }
  return value ?? "";
}

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Erreur de chargement ${path} : ${res.status}`);
  return res.json();
}

export const loadSite = () => loadJSON("data/site.json");
export const loadProjects = () => loadJSON("data/projects.json");

// Convertit un lien YouTube (youtu.be, watch?v=, shorts) en lien intégrable, sinon renvoie null.
export function youtubeEmbed(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

// Pages du menu, dans l'ordre d'affichage
const NAV_PAGES = [
  { key: "home", href: "index.html" },
  { key: "about", href: "about.html" },
  { key: "projects", href: "projects.html" },
  { key: "cv", href: "cv.html" },
];

function renderNav(site, currentPage) {
  const nav = document.getElementById("site-nav");
  const ui = site.ui.nav;
  // La page détail d'un projet affiche "Projets" comme titre mais garde le lien vers la liste
  const titleKey = currentPage === "project" ? "projects" : currentPage;

  const links = NAV_PAGES
    .filter(page => page.key !== currentPage)
    .map(page => `<li><a href="${page.href}" class="juicy-hover ripple-button press-button">${t(ui[page.key])}</a></li>`)
    .join("");

  nav.innerHTML = `
    <h1 id="nav-name">${site.owner.name}</h1>
    <h1 id="nav-currentPage">${t(ui[titleKey])}</h1>
    <ul>
      ${links}
      <li>
        <div class="language-toggle juicy-hover">
          ${LANGS.map(l => `<button class="lang-btn${l === lang ? " active" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("")}
        </div>
      </li>
    </ul>
  `;

  nav.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      try {
        localStorage.setItem("lang", btn.dataset.lang);
      } catch { }
      location.reload();
    });
  });
}

function renderFooter(site) {
  const { name, email, phone, linkedin, itch } = site.owner;
  document.getElementById("site-footer").innerHTML = `
    <p>© ${name} - ${new Date().getFullYear()}</p>
    <p><a href="mailto:${email}">📧 ${email}</a> — ${phone}</p>
    <p>
      <a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a> |
      <a href="${itch}" target="_blank" rel="noopener">itch.io</a>
    </p>
  `;
}

// Cache le menu en scrollant vers le bas, le réaffiche en remontant
function setupStickyNav() {
  const nav = document.getElementById("site-nav");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle("nav-hidden", scrollTop > lastScrollTop);
    nav.classList.toggle("nav-scrolled", scrollTop > 10);
    lastScrollTop = Math.max(scrollTop, 0);
  });
}

// Effet "ripple" au clic sur les boutons (délégation : marche aussi pour les boutons ajoutés en JS)
function setupRipple() {
  document.addEventListener("click", e => {
    const button = e.target.closest(".ripple-button");
    if (!button) return;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

// À appeler en premier dans chaque page. Renvoie le contenu de data/site.json.
export async function initPage(currentPage) {
  document.documentElement.lang = lang;
  const site = await loadSite();

  renderNav(site, currentPage);
  renderFooter(site);
  setupStickyNav();
  setupRipple();

  const titleKey = currentPage === "project" ? "projects" : currentPage;
  document.title = `${t(site.ui.nav[titleKey])} - ${site.owner.name}`;
  return site;
}
