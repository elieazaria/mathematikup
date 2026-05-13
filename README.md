# MATEMATIKUP — Structure du projet

```
matematikup/
│
├── index.html              ← Page d'accueil
├── programmes.html         ← Catalogue des cours (sidebar + chapitres)
├── auth.html               ← Connexion / Inscription
├── examens.html            ← Concours & Examens (à créer)
├── apropos.html            ← À propos (à créer)
│
├── css/
│   └── global.css          ← Styles partagés (header, footer, variables)
│
├── js/
│   └── index.js            ← Scripts spécifiques à index.html
│
└── components/
    ├── header.js           ← Composant header (auto-injecté via document.write)
    └── footer.js           ← Composant footer (auto-injecté via document.write)
```

## Comment utiliser les composants

### Header
Placer **avant** le contenu, juste après `<body>` :
```html
<script src="components/header.js" data-page="index"></script>
```
Valeurs valides pour `data-page` : `index` | `programmes` | `examens` | `apropos`
Le lien actif dans la nav sera mis en évidence en orange.

### Footer
Placer **avant** `</body>` :
```html
<script src="components/footer.js"></script>
```

### Template pour une nouvelle page
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MATEMATIKUP — Ma Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/global.css" />
  <style>
    body { background: #fff; }
    /* Styles spécifiques à cette page */
  </style>
</head>
<body>

  <!-- HEADER (changer data-page selon la page) -->
  <script src="components/header.js" data-page="examens"></script>

  <!-- CONTENU DE LA PAGE -->
  <main>
    <!-- ... -->
  </main>

  <!-- FOOTER -->
  <script src="components/footer.js"></script>

  <!-- JS spécifique (optionnel) -->
  <script src="js/mapage.js"></script>

</body>
</html>
```

## Menu mobile
Le menu mobile suit le design de la maquette :
- Liens en pleine largeur avec séparateurs
- Sous-menu "Compte" accordion
- 2 boutons CTA en bas : **Se connecter** (or) + **S'inscrire** (outline)
- Burger animé → croix à l'ouverture
- Fermeture au clic extérieur ou sur un lien

## Couleurs principales
| Variable      | Valeur    | Usage                |
|---------------|-----------|----------------------|
| `--navy`      | `#0d2b56` | Fond principal, textes |
| `--gold`      | `#ffa300` | Accents, CTA, hover   |
| `--gold-dark` | `#cc8200` | Hover des boutons or  |
| `--bg`        | `#f0f4ff` | Fond des sections claires |
