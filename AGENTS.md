# snapAddy Slidev Custom Theme & Presentation Baseline

This repository contains the custom **snapAddy Corporate Identity (CI) Theme** for Slidev. It also functions as a solid baseline/template for creating new presentations.

## Development & Presentation Preview

To run the presentation template locally using the local theme:

```bash
# Install dependencies (requires Node/Bun/npm)
npm install   # or: bun install

# Start development preview server
npm run dev   # or: bun run dev
```

The preview will open automatically in your browser at `http://localhost:3030`.

## Scripts

- `npm run dev`: Boot up the dev server with automatic reload.
- `npm run build`: Compile slides into a static single-page web app inside `dist/`.
- `npm run export`: Export the presentation deck to a PDF file.

## Theme Architecture

- `layouts/`: Custom Vue layouts (`cover`, `section`, `seed`).
- `components/`: Custom Vue components (`Card`, `Cards`, `Logo`, `Meme`).
- `styles/`: Core brand styling system (`base.css`, `layouts.css` imported via `index.ts`).
- `assets/`: Corporate branding resources (`snapaddy-logo.svg`, `snapaddy-logo-white.svg`).
- `uno.config.ts`: UnoCSS theme configuration with the snapAddy Tailwind palette tokens.

## How to use in other decks

To use this theme in another presentation project, you can:

1. **Local folder reference**: Copy this folder and configure the destination `slides.md` with:
   ```yaml
   theme: ./path/to/slidev-snapaddy-theme
   ```
2. **NPM Linking**: Run `npm link` in this directory, then `npm link slidev-theme-snapaddy` in your other project, and specify `theme: snapaddy` in its frontmatter.
