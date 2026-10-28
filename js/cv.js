import { initPage, lang, t } from "./common.js";

const site = await initPage("cv");

// Le CV dans la langue courante est affiché en premier
const cvs = [...site.cv].sort((a, b) => (b.lang === lang) - (a.lang === lang));

document.getElementById("cv-section").innerHTML = `
  <h2>${t(site.ui.nav.cv)}</h2>
  ${cvs.map(cv => `
    <div class="cv-item">
      <a href="${cv.file}" target="_blank" rel="noopener">${t(cv.label)}</a>
      <iframe src="${cv.file}" title="${t(cv.label)}"></iframe>
    </div>
  `).join("")}
`;
