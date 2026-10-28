# Données du portfolio

Tout le contenu du site est dans ce dossier. Les pages HTML et les scripts JS n'ont normalement pas besoin d'être modifiés.

| Fichier | Contenu |
| --- | --- |
| `site.json` | Infos perso (nom, email, téléphone, LinkedIn, itch.io), textes de l'interface, projets mis en avant sur l'accueil, page À propos, CV |
| `projects.json` | La liste des projets (dans l'ordre d'affichage) |

## Textes traduits

Chaque texte peut être :

- une simple chaîne, quand c'est pareil dans les deux langues : `"title": "Spooder Dance"`
- un objet FR / EN : `"summary": { "fr": "Un jeu musical…", "en": "A musical game…" }`

Le HTML simple est autorisé dans les textes (`<br>`, `<strong>`…).

## Ajouter un projet

Ajouter un bloc dans `projects.json` (copier un projet existant est le plus simple) :

```json
{
  "id": "monprojet",
  "category": "jam",
  "thumbnail": "assets/img/projects/monProjet.png",
  "title": "Mon Projet",
  "summary": { "fr": "Texte de la carte", "en": "Card text" },
  "description": { "fr": "Sous-titre de la page", "en": "Page subtitle" },
  "videos": ["https://youtu.be/XXXXXXXXXXX"],
  "sections": [
    {
      "title": "Concept",
      "text": { "fr": "…", "en": "…" },
      "image": "assets/img/ProjDesc/MonProjet/screen1.png"
    }
  ],
  "links": [
    { "url": "https://emilelarguier.itch.io/mon-projet" }
  ]
}
```

- `id` : utilisé dans l'URL (`project.html?id=monprojet`), sans espaces.
- `category` : `jam`, `school` ou `perso` (les filtres sont définis dans `site.json` → `ui.categories`).
- Champs optionnels :
  - `pageTitle` : titre plus long affiché sur la page du projet et sur l'accueil ;
  - `tagline` : phrase courte affichée sur l'accueil (sinon `summary`) ;
  - `cover` : image de fond sur l'accueil (sinon `thumbnail`) ;
  - `hidden: true` : la page existe mais le projet n'apparaît pas dans la liste.
- Dans une section :
  - `image` : une image ou un GIF ;
  - `video` : un lien YouTube ou un `.mp4` ;
  - `link` : un bouton, sous la forme `{ "label": …, "url": … }`.
- Dans `links`, le `label` est optionnel : un lien itch.io affiche automatiquement « Page Itch.io » / « Itch.io page ».

⚠️ GitHub Pages respecte les majuscules : `spooderDance.png` ≠ `spooderdance.png`. Vérifiez que le chemin correspond exactement au nom du fichier.

## Mettre un projet sur l'accueil

Ajouter son `id` dans `site.json` → `home.featured`. L'ordre de la liste est l'ordre d'affichage.

## Changer un lien ou une info de contact

Email, téléphone, LinkedIn et itch.io : `site.json` → `owner`. Le footer de toutes les pages se met à jour automatiquement.
