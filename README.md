# mika-site

Landing + posts + docs para Mika · `https://mika.systems`

Repo: `github.com/JorgeMataSaucedo/mika-site`

Stack: Astro 5 + Tailwind CSS v4 + MDX + Cloudflare Pages.

## Desarrollo

```bash
npm install
npm run dev
# abre http://localhost:4321
```

## Build

```bash
npm run build       # genera ./dist
npm run preview     # sirve ./dist localmente
```

## Estructura

```
src/
├── content/
│   ├── posts/          # serie "vibe-coding vs AI engineering"
│   └── docs/           # capítulos web del doc largo (próx.)
├── components/         # Hero, FeatureGrid, SeriesIndex, Header, Footer
├── layouts/            # BaseLayout (meta, og, favicon)
├── pages/              # index, posts, docs, about, 404
└── styles/             # global.css con Tailwind + prose tweaks
public/
└── downloads/          # PDFs descargables
```

## Editar contenido sin tocar código

- **Hero / copy del landing**: `src/components/Hero.astro` (líneas marcadas con `<h1>` y `<p>`)
- **Features**: `src/components/FeatureGrid.astro` (array `features`)
- **Serie de posts**: `src/components/SeriesIndex.astro` (array `series`)
- **Post #1**: `src/content/posts/ai-102.md` (frontmatter + cuerpo markdown)

## Deploy a Cloudflare Pages

1. Push este repo a GitHub
2. Cloudflare Dashboard → Pages → "Connect to Git"
3. Selecciona el repo, framework auto-detectado (Astro)
4. Build command: `npm run build` · Output: `dist`
5. Save & Deploy
6. En "Custom domains" → agregar `mika.systems` (Cloudflare reconfigura el A record solo)
