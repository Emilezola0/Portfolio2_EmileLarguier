// Chargé dans le <head> (pas en module) pour appliquer le thème avant l'affichage,
// sinon la page s'afficherait une fraction de seconde en clair avant de passer en sombre.
(function () {
  var theme = null;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) { }
  document.documentElement.dataset.theme = theme || "auto";
})();
