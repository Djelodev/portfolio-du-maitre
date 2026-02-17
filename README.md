# portfolio-du-maitre

Portfolio React/Vite de Ange, deploie sur GitHub Pages.

## Developpement local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

Le dossier genere est `dist/`.

## Deploiement GitHub Pages

Le deploiement est automatise via GitHub Actions avec le workflow:

- `.github/workflows/deploy.yml`

Le build utilise la base Vite:

- `base: '/portfolio-du-maitre/'` dans `vite.config.js`

URL attendue apres deploiement:

- `https://djelodev.github.io/portfolio-du-maitre/`
