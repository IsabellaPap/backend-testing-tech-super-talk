# snapAddy Custom Slidev Theme & Presentation Template

This repository contains the custom **snapAddy Corporate Identity (CI) Theme** for Slidev. It serves as both a reusable Slidev theme package and a solid baseline template for building new presentations.

---

## Method 1: Use as a Template (Recommended for New Presentations)

The easiest way to start a new presentation is to copy this entire folder. This gives you a zero-config setup with layouts, custom components, and logos working out of the box.

### 1. Copy the Directory
Copy the entire folder structure to your new presentation workspace:
```bash
cp -r /Users/michaelwolz/Desktop/slidev-snapaddy-theme /path/to/my-new-presentation
cd /path/to/my-new-presentation
```

### 2. Install & Start
```bash
# Install dependencies
bun install

# Start the local development server (opens browser automatically)
bun run dev
```

### 3. Write Your Slides
Edit `slides.md` directly. It is already configured to load the local theme and contains templates demonstrating all the custom layouts and components.

---

## Method 2: Reference the Theme from a Separate Slidev Project

If you have an existing Slidev project and want to use this theme without duplicating its code, you can link it.

### 1. Link the Theme
In this directory (`slidev-snapaddy-theme`), register the package globally:
```bash
bun link
```

### 2. Consume the Theme in Your Project
In your other Slidev project directory:
```bash
bun link slidev-theme-snapaddy
```

### 3. Configure Frontmatter
At the top of your presentation's `slides.md` file, set the theme property:
```yaml
---
theme: snapaddy
---
```

---

## Features & Custom Components

### Custom Layouts
- `layout: cover` - Hero slides with dark-green brand background.
- `layout: section` - Section divider transitions with kicker/eyebrow texts.
- `layout: seed` - Light-green background designed for Q&A, wrap-ups, and discussion prompts.

### Custom Components
- `<Logo />` - Renders the official snapAddy logo. Use `<Logo inverse />` for dark backgrounds.
- `<Cards :cols="3">` and `<Card title="..." kind="win|fail">` - Renders clean status matrices with brand green border for `win` and rose border for `fail`.
- `<Meme desc="..." caption="..." />` - Dashed placeholder for designing visual slides.
- `<SnapAsset kind="mascot|product|decorative" name="..." />` - Renders selected graphics extracted from the PowerPoint master template.

## PowerPoint Master Template Assets

Selected browser-safe graphics were extracted from `snapAddy Master presentation including products_EN.potx` into `assets/master-template/`:

- `mascot/`: snapAddy mascot illustrations as reusable SVGs.
- `product/`: VisitReport/DataAgents product screenshots as PNGs.
- `decorative/`: supporting shapes, cards, arrows, and line art.

Use the `<SnapAsset>` component in slides:

```md
<SnapAsset name="wave" height="120" />
<SnapAsset kind="product" name="analytics-dashboard" height="240" />
<SnapAsset kind="decorative" name="company-size-card" height="180" />
```

Unsupported EMF files from the PowerPoint template were intentionally not copied because browsers cannot render them reliably in Slidev.
