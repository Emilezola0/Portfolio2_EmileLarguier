const switcher = document.getElementById('language-switcher');

async function setLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((obj, i) => obj?.[i], data);
    if (value) el.textContent = value;
  });
}

const defaultLang = localStorage.getItem('lang') || 'fr';
switcher.value = defaultLang;
setLanguage(defaultLang);

switcher.addEventListener('change', (e) => {
  const lang = e.target.value;
  localStorage.setItem('lang', lang);
  setLanguage(lang);
});
