---
theme: ./
title: "snapAddy Slidev Theme Template"
info: |
  ## snapAddy Corporate Slidev Theme
  A clean baseline presentation using the custom snapAddy theme design system.
class: text-center
transition: slide-left
mdc: true
---

# snapAddy Presentation Template

<div class="sa-cover-sub text-xl mt-2">
  A Premium Slidev Baseline for Future Presenters
</div>

<div class="absolute bottom-6 left-8 text-sm opacity-80 leading-snug">
  <div class="font-600">Your Name</div>
  <div>May 2026</div>
</div>

<Logo inverse class="absolute bottom-6 right-8" :height="24" />

<!--
layout: cover
-->

---

# Welcome to the New Baseline

Here are the key typographic and element style defaults provided out-of-the-box:

- **Typography**: Headings use **Livvic**, body copy uses **Inter**.
- **Colors**: Rich darkgreen (`#004c37`) for text, green (`#87bd25`) for highlights.
- **Lists**: Bullet points automatically styled with matching brand colors.
- **Accents**: Strong statements get colored properly in **bold** or *emphasis*.

You can write standard Markdown slides and get consistent corporate styling instantly.

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Win & Fail Status Cards

Use the custom `<Cards>` and `<Card>` components to display list items, comparisons, or wins and fails.

<Cards :cols="3">
  <Card title="Neutral State">
    Use for regular cards, explanations, or factual information without standard alert status colors.
  </Card>
  <Card title="Success / Win" kind="win">
    Highlight achievements, best practices, green lights, or positive items (`kind="win"`).
  </Card>
  <Card title="Issue / Fail" kind="fail">
    Highlight errors, risks, problems, failures, or items requiring caution (`kind="fail"`).
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Master Template Assets

Use `<SnapAsset>` for graphics extracted from the PowerPoint master template. The assets are grouped as `mascot` (default), `product`, and `decorative` — every asset is shown on the following slides.

```html
<SnapAsset name="wave" :height="72" />
<SnapAsset kind="product" name="visitreport-phone" :height="190" />
<SnapAsset kind="decorative" name="squiggle" :height="40" decorative />
```

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Assets · Mascot

<div class="sa-asset-grid dense mt-4" style="--cols: 6">
  <div class="sa-asset-tile"><SnapAsset name="automation-bot" height="48" /><div class="sa-asset-label">automation-bot</div></div>
  <div class="sa-asset-tile"><SnapAsset name="bot" height="48" /><div class="sa-asset-label">bot</div></div>
  <div class="sa-asset-tile"><SnapAsset name="bot-hello" height="48" /><div class="sa-asset-label">bot-hello</div></div>
  <div class="sa-asset-tile"><SnapAsset name="bot-love" height="48" /><div class="sa-asset-label">bot-love</div></div>
  <div class="sa-asset-tile"><SnapAsset name="broom" height="48" /><div class="sa-asset-label">broom</div></div>
  <div class="sa-asset-tile"><SnapAsset name="contact-card" height="48" /><div class="sa-asset-label">contact-card</div></div>
  <div class="sa-asset-tile"><SnapAsset name="dashboard-chat" height="48" /><div class="sa-asset-label">dashboard-chat</div></div>
  <div class="sa-asset-tile"><SnapAsset name="dataagent-orb" height="48" /><div class="sa-asset-label">dataagent-orb</div></div>
  <div class="sa-asset-tile"><SnapAsset name="document" height="48" /><div class="sa-asset-label">document</div></div>
  <div class="sa-asset-tile"><SnapAsset name="document-hold" height="48" /><div class="sa-asset-label">document-hold</div></div>
  <div class="sa-asset-tile"><SnapAsset name="document-wave" height="48" /><div class="sa-asset-label">document-wave</div></div>
  <div class="sa-asset-tile"><SnapAsset name="documents" height="48" /><div class="sa-asset-label">documents</div></div>
  <div class="sa-asset-tile"><SnapAsset name="finish-flag" height="48" /><div class="sa-asset-label">finish-flag</div></div>
  <div class="sa-asset-tile"><SnapAsset name="hand" height="48" /><div class="sa-asset-label">hand</div></div>
  <div class="sa-asset-tile"><SnapAsset name="head" height="48" /><div class="sa-asset-label">head</div></div>
  <div class="sa-asset-tile"><SnapAsset name="id-card" height="48" /><div class="sa-asset-label">id-card</div></div>
  <div class="sa-asset-tile"><SnapAsset name="magic-wand" height="48" /><div class="sa-asset-label">magic-wand</div></div>
  <div class="sa-asset-tile"><SnapAsset name="mobile-growth" height="48" /><div class="sa-asset-label">mobile-growth</div></div>
  <div class="sa-asset-tile"><SnapAsset name="ok" height="48" /><div class="sa-asset-label">ok</div></div>
  <div class="sa-asset-tile"><SnapAsset name="peace" height="48" /><div class="sa-asset-label">peace</div></div>
  <div class="sa-asset-tile"><SnapAsset name="raised-hand" height="48" /><div class="sa-asset-label">raised-hand</div></div>
  <div class="sa-asset-tile"><SnapAsset name="side-profile" height="48" /><div class="sa-asset-label">side-profile</div></div>
  <div class="sa-asset-tile"><SnapAsset name="voice-phone" height="48" /><div class="sa-asset-label">voice-phone</div></div>
  <div class="sa-asset-tile"><SnapAsset name="wave" height="48" /><div class="sa-asset-label">wave</div></div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Assets · Decorative

<div class="sa-asset-grid dense mt-4" style="--cols: 5">
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="asterisk" height="44" decorative /><div class="sa-asset-label">asterisk</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="blob-lavender" height="44" decorative /><div class="sa-asset-label">blob-lavender</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="blob-purple" height="44" decorative /><div class="sa-asset-label">blob-purple</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="blob-rose" height="44" decorative /><div class="sa-asset-label">blob-rose</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="blob-softgreen" height="44" decorative /><div class="sa-asset-label">blob-softgreen</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="down-arrow" height="44" decorative /><div class="sa-asset-label">down-arrow</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="rocket-line" height="44" decorative /><div class="sa-asset-label">rocket-line</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="squiggle" height="32" decorative /><div class="sa-asset-label">squiggle</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="squiggle-wide" height="24" decorative /><div class="sa-asset-label">squiggle-wide</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="company-size-card" height="56" /><div class="sa-asset-label">company-size-card</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="data-search" height="56" /><div class="sa-asset-label">data-search</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="magnifier" height="56" /><div class="sa-asset-label">magnifier</div></div>
  <div class="sa-asset-tile"><SnapAsset kind="decorative" name="priority-card" height="56" /><div class="sa-asset-label">priority-card</div></div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Assets · Product

<div class="sa-asset-grid dense mt-4" style="--cols: 4; align-items: stretch">
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="analytics-dashboard" height="120" /><div class="sa-asset-label">analytics-dashboard</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="business-card-scan-phone" height="120" /><div class="sa-asset-label">business-card-scan-phone</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="contact-capture-phone" height="120" /><div class="sa-asset-label">contact-capture-phone</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="dashboard-builder" height="120" /><div class="sa-asset-label">dashboard-builder</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="report-phone" height="120" /><div class="sa-asset-label">report-phone</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="visitreport-phone" height="120" /><div class="sa-asset-label">visitreport-phone</div></div>
  <div class="sa-asset-tile" style="height: 11rem"><SnapAsset kind="product" name="webapp-composite" height="120" /><div class="sa-asset-label">webapp-composite</div></div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Product Visuals

<div class="grid grid-cols-[1fr_1.1fr] gap-8 items-center mt-4">
  <div>
    <h2>VisitReport and DataAgents screenshots</h2>
    <p>
      Product screenshots from the master template can be reused directly in Slidev decks without manual exporting from PowerPoint.
    </p>
  </div>
  <div class="grid grid-cols-2 gap-5 items-center">
    <SnapAsset kind="product" name="visitreport-phone" height="190" />
    <SnapAsset kind="product" name="analytics-dashboard" height="150" />
  </div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />

---

# Integrated Meme Placeholders

A theme is not complete without support for visual pacing and humor. Use `<Meme>` as a placeholder while designing:

<div class="grid grid-cols-2 gap-8 items-start mt-8">
  <div>
    <ul class="space-y-4">
      <li>Prompts a custom dashed layout wrapper.</li>
      <li>Specifies description text (`desc`).</li>
      <li>Optionally shows a bold bottom caption.</li>
      <li>Reminds you to replace it with a real graphic before shipping.</li>
    </ul>
  </div>
  <div>
    <Meme
      desc="Distracted boyfriend meme comparing Opus 4.8 vs GPT 5.5"
      caption="When a new model drops mid-presentation"
    />
  </div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />

---
layout: section
---

<div class="sa-kicker">Part 2</div>

# Custom Section Transitions

<div class="mt-6 opacity-80 text-xl">Creating natural visual pauses in your deck</div>

---
layout: seed
---

<div class="sa-q mt-4 space-y-4">
  What will you build next with this baseline?
</div>

<div class="mt-8 text-lg opacity-80">
  This is the <code>seed</code> layout, designed specifically for discussion prompts, Q&A sessions, or wrapping up presentations.
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />
