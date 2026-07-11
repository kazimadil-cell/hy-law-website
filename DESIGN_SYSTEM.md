# York Solicitors Design System — Portable Reference

This file documents the full visual/technical design language built for the York Solicitors
demo site, so it can be **reused as a starting point for a different firm's site** (e.g. H&Y Law)
in a separate project folder, without needing this conversation's history.

**How to use this in a new chat:** copy this file into the new project folder, then say
*"Read DESIGN_SYSTEM.md and build [firm name]'s site using this design language, with their
own content, colors if needed, and real details."* Treat everything below as a pattern library,
not literal content to copy — swap in the new firm's name, colors, copy, services, and real data.

---

## 1. Build philosophy

- **Fully static HTML/CSS/vanilla JS.** No build tools, no framework, no npm. Every page is a
  single `.html` file opened directly via `file://` in the browser.
- **`file://` has no `fetch()`.** Never load JSON via `fetch()` for local files — it fails under
  CORS on `file://`. Instead, put shared data in a plain `.js` file declaring a `const` array
  (e.g. `const NEWS_DATA = [...]`), and load it with `<script src="data.js"></script>` before the
  page's own script. This is how repeated content (news articles, case studies) stays in one
  place instead of being duplicated across pages.
- **URL query-param detail pages.** For "listing → detail" content (news articles, case studies),
  use one template page like `article.html?id=<slug>`, read `id` via `URLSearchParams`, `Array.find()`
  it in the shared data array, and render. Always handle the not-found case gracefully (a friendly
  "no longer available, back to listing" message), since data may be rotated/pruned over time.
- **One `<style>` block per page**, scoped with a consistent `:root` variable palette (see below).
  No CSS framework. No component library.
- **Never fabricate content.** If sourcing real news/reviews/data, only use verified real sources;
  if a source is inaccessible, say so honestly rather than inventing content.
- **Real business data is a placeholder until confirmed.** If no real address/phone is given,
  use an honestly-flagged placeholder and tell the user to replace it before going live — fake
  NAP (Name/Address/Phone) data in schema markup violates Google's guidelines.

---

## 2. Color palette (CSS custom properties)

```css
:root {
  --gold: #EC6A2B;           /* primary accent — orange, NOT yellow/gold-colored */
  --gold-light: #F2854A;
  --white: #ffffff;
  --dark: #0d0a06;           /* hero page background fallback */
  --dark-mid: #1a1209;
  --navy: #1f2d4d;           /* primary dark brand color */
  --navy-2: #2c3f6b;
  --ink: #1f2d4d;             /* heading text on light backgrounds */
  --ink-soft: #5a6478;
  --muted: #7a8399;           /* body/secondary text on light backgrounds */
  --cream: #f4f6f9;           /* light section background */
  --cream-2: #eef1f6;
  --card: #ffffff;
  --line: #e4e7ee;            /* hairline borders on light backgrounds */
  --line-gold: rgba(236,106,43,0.35);
  --slate: #58678a;           /* footer background + dark news-card section background */
}
```

Fonts (Google Fonts):
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```
- **Playfair Display**, weight 700–900 — all headings. Never use a light/thin weight, it reads
  as cheap on a law firm site.
- **Manrope** — all body text, nav, buttons, labels.

For a different firm, keep the *structure* of a two-tone palette (one deep "brand" color + one
warm accent color) but swap the actual hex values to match their existing branding if they have
any (e.g. H&Y Law's logo uses a deep navy/blue scale-of-justice mark — keep navy as the anchor,
pick a distinct accent that isn't identical orange to avoid the two firms looking related).

---

## 3. Global "premium polish" layer (added to every page)

These four things were retrofitted onto **every single page** late in the build and are what
took the site from "flat template" to "feels like a real agency site." Apply them site-wide from
day one on a new project instead of retrofitting.

### 3a. Film-grain texture overlay
```css
.grain {
  position: fixed; inset: 0; z-index: 300; pointer-events: none;
  opacity: 0.035; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```
```html
<body>
  <div class="grain"></div>
  ...
```

### 3b. Scroll-progress bar
```css
.scroll-progress { position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 250; background: rgba(0,0,0,0.06); }
.scroll-progress-bar { height: 100%; width: 0%; background: var(--gold); transition: width 0.1s linear; }
```
```html
<div class="scroll-progress"><div class="scroll-progress-bar" id="scrollBar"></div></div>
```
```js
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('scrollBar').style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}, { passive: true });
```

### 3c. Smooth scroll + scroll-reveal
```css
html { scroll-behavior: smooth; }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.in-view { opacity: 1; transform: translateY(0); }
```
```js
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```
Add `class="reveal"` to every top-level `<section>`/`<header>`/`<footer>` on the page. Do **not**
add it to `<nav>` (it should always be visible immediately).

### 3d. Nav goes solid on scroll (for pages with a full-bleed hero)
```css
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: transparent; padding: 28px 44px;
  transition: background 0.35s ease, padding 0.35s ease, box-shadow 0.35s ease;
}
nav.nav-scrolled {
  background: rgba(20,28,48,0.92); backdrop-filter: blur(10px);
  padding: 16px 44px; box-shadow: 0 8px 30px rgba(0,0,0,0.25);
}
```
```js
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('nav-scrolled', window.scrollY > 80);
}, { passive: true });
```
For pages that are **light-background, no hero photo** (most interior pages), a simpler
always-solid sticky nav is fine instead:
```css
nav { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
```

---

## 4. Section-eyebrow with rule lines

Used above every section heading site-wide instead of a plain uppercase label:
```css
.section-eyebrow {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold);
  margin-bottom: 18px;
}
.section-eyebrow::before, .section-eyebrow::after { content: ''; width: 32px; height: 1px; background: var(--line-gold); }
```
```html
<div class="section-eyebrow">What We Do</div>
```
Renders as: `— WHAT WE DO —`

---

## 5. Practice-area editorial hover-list (the signature homepage pattern)

Instead of a generic 4-card grid, practice areas are a full-width list where each row sweeps a
solid color in from the left on hover and the arrow button rotates 45° — this is the pattern
top-tier firm sites (Klasko, BAL, Dickinson Wright) actually use.

```css
.pa-list { max-width: 1100px; margin: 0 auto; border-top: 1px solid var(--line); }
.pa-row {
  position: relative; display: flex; align-items: center; justify-content: space-between; gap: 24px;
  padding: 40px 14px; border-bottom: 1px solid var(--line); text-decoration: none; overflow: hidden;
}
.pa-row::before {
  content: ''; position: absolute; inset: 0; background: var(--navy);
  transform: scaleX(0); transform-origin: left; transition: transform 0.5s cubic-bezier(.65,0,.35,1); z-index: 0;
}
.pa-row:hover::before { transform: scaleX(1); }
.pa-row-left { position: relative; z-index: 1; display: flex; align-items: baseline; gap: 28px; }
.pa-row-num { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 13px; color: var(--gold); }
.pa-row-title { font-family: 'Playfair Display', serif; font-weight: 800; font-size: clamp(24px,3.6vw,38px); color: var(--ink); transition: color 0.3s; }
.pa-row:hover .pa-row-title { color: #fff; }
.pa-row-desc { position: relative; z-index: 1; font-size: 13.5px; color: var(--muted); max-width: 280px; text-align: right; transition: color 0.3s; }
.pa-row:hover .pa-row-desc { color: rgba(255,255,255,0.75); }
.pa-row-arrow {
  position: relative; z-index: 1; width: 46px; height: 46px; border: 1px solid var(--line); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  transition: transform 0.35s ease, border-color 0.3s, background 0.3s;
}
.pa-row-arrow svg { width: 17px; height: 17px; stroke: var(--ink); transition: stroke 0.3s; }
.pa-row:hover .pa-row-arrow { background: var(--gold); border-color: var(--gold); transform: rotate(45deg); }
.pa-row:hover .pa-row-arrow svg { stroke: #fff; }
@media (max-width: 720px) { .pa-row-desc { display: none; } .pa-row-left { gap: 18px; } }
```
```html
<div class="pa-list">
  <a class="pa-row" href="...">
    <div class="pa-row-left">
      <span class="pa-row-num">01</span>
      <span class="pa-row-title">Immigration</span>
    </div>
    <span class="pa-row-desc">One-line description of the service.</span>
    <span class="pa-row-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
  </a>
  <!-- repeat per practice area, numbered 01, 02, 03... -->
</div>
```

---

## 6. Stats band with count-up motion

```css
.stats-band { background: var(--navy); padding: 64px 48px; }
.stats-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 32px; text-align: center; }
.stat b { display: block; font-family: 'Playfair Display', serif; font-weight: 800; font-size: clamp(30px,4vw,44px); color: var(--gold); transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); }
.stat b.counted { transform: scale(1.08); }
.stat span { display: block; margin-top: 8px; font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.72); }
```
```html
<section class="stats-band reveal" id="statsBand">
  <div class="stats-inner">
    <div class="stat"><b data-count="4.9" data-decimals="1" data-suffix="★">0★</b><span>300+ Google Reviews</span></div>
    <div class="stat"><b data-count="1000" data-suffix="+">0+</b><span>Cases Won</span></div>
  </div>
</section>
```
```js
const statsBand = document.getElementById('statsBand');
if (statsBand) {
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        function frame(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()) + suffix;
          if (p < 1) requestAnimationFrame(frame);
          else { el.textContent = (decimals ? target.toFixed(decimals) : target.toLocaleString()) + suffix; el.classList.add('counted'); }
        }
        requestAnimationFrame(frame);
      });
      statIO.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  statIO.observe(statsBand);
}
```

---

## 7. Dark card system for news/updates (`.ln-card`)

A reusable dark-navy card with hover-scale + solid-blue fill, used identically on both the
homepage teaser and the full news listing page so they feel like one component, not two designs.

```css
.ln-section { background: var(--slate); padding: 70px 48px; }
.ln-track { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ln-card {
  background: #10182b; border: 1px solid rgba(255,255,255,0.06); border-radius: 0; overflow: hidden; text-decoration: none;
  display: flex; flex-direction: column; min-height: 560px;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background 0.3s ease;
}
.ln-card:hover { transform: scale(1.06); box-shadow: 0 30px 60px rgba(0,0,0,0.5); border-color: transparent; background: #3d6fa8; z-index: 2; }
.ln-card:hover .ln-cat { background: transparent; color: #fff; border-color: rgba(255,255,255,0.5); }
.ln-top { padding: 26px 26px 0; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.ln-date { font-size: 11px; letter-spacing: 0.08em; color: rgba(255,255,255,0.55); font-weight: 600; white-space: nowrap; }
.ln-cat { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 800; color: var(--gold); border: 1px solid rgba(236,106,43,0.35); padding: 4px 10px; border-radius: 999px; white-space: nowrap; }
.ln-title { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 20px; line-height: 1.28; color: #fff; padding: 18px 26px 0; }
.ln-teaser { font-size: 13px; line-height: 1.65; color: rgba(255,255,255,0.62); padding: 12px 26px 0; }
.ln-media { position: relative; width: 100%; aspect-ratio: 16/12; background: var(--navy); overflow: hidden; }
.ln-media img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
.ln-card:hover .ln-media img { transform: scale(1.06); }
```

**Important lesson learned:** don't rely on real stock photos here if the underlying data source
only has 1–2 generic press photos — three cards showing the *same* repeated stock photo looks
cheap. Prefer either (a) genuinely varied real photos per item, or (b) a branded gradient +
icon/crest fallback (navy gradient background + a relevant topic icon in a circle) so every card
looks distinct and intentional. See the `platformFor()` / `CRESTS` / `TOPIC_ICONS` pattern in
`news-data.js` in the York Solicitors project for a working example of source-branded fallback
graphics (GOV.UK crown crest, EIN icon, etc.) — reuse this idea with the new firm's own real
source types (e.g. their own blog, local press).

**Also:** when picking "latest N items" for a teaser, don't just sort by date — if items cluster
by source (e.g. all the newest ones are from one source), the teaser looks monotonous. Pick the
most recent item per distinct source first, then fill remaining slots by date, so the teaser is
naturally varied.

---

## 8. Reviews marquee (auto-scrolling, pauses on hover)

```css
.marquee-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.marquee-track { display: flex; gap: 24px; width: max-content; animation: marquee 42s linear infinite; }
.marquee-wrap:hover .marquee-track { animation-play-state: paused; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```
Duplicate the card list once inside `.marquee-track` (real cards + an identical `aria-hidden="true"`
copy) so the loop is seamless at `translateX(-50%)`.

---

## 9. Buttons

```css
.btn-primary { /* solid gold CTA, used in hero + final CTA banners */
  background: var(--gold); color: #fff; padding: 15px 30px; font-weight: 700;
  letter-spacing: 0.04em; text-transform: uppercase; font-size: 13px; text-decoration: none; display: inline-block;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--gold-light); }

.btn-view { /* secondary "view more" link-button, navy → gold on hover */
  display: inline-block; background: var(--navy); color: #fff; text-decoration: none;
  font-size: 13px; font-weight: 700; letter-spacing: 0.04em; padding: 15px 30px;
  transition: background 0.2s;
}
.btn-view:hover { background: var(--gold); }
```

---

## 10. Footer (dark slate, 5-column)

```css
.dw-footer { background: var(--slate); color: #fff; padding: 60px 48px 34px; }
.dw-connect { text-align: center; font-family: 'Playfair Display', serif; font-weight: 500; font-size: clamp(28px,4vw,42px); margin-bottom: 54px; }
.dw-connect a { color: #fff; text-decoration: none; border-bottom: 2px solid var(--gold); padding-bottom: 3px; }
.dw-cols { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr) 1.5fr; gap: 34px; }
.dw-col h4 { font-size: 15px; color: #cfd6e6; font-weight: 400; margin-bottom: 18px; }
.dw-col a { display: block; width: fit-content; color: #fff; text-decoration: none; font-size: 12.5px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 13px; position: relative; }
.dw-col a::after { content: ''; position: absolute; left: 0; right: 0; bottom: -3px; height: 2px; background: var(--gold); transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
.dw-col a:hover::after { transform: scaleX(1); }
```
Columns typically: Practice Areas | Serving (locations) | Firm (nav links) | Connect (phone/email/address/socials) | legal copyright line.

---

## 11. SEO scaffolding pattern (per page)

Every page should have:
```html
<title>Specific, Unique Title Per Page | Firm Name</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://www.realdomain.co.uk/page.html" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="..." />
<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "LegalService", "name": "...", "telephone": "...", "address": {...}, "areaServed": [...], ... }
</script>
```
Plus location+service landing pages (`immigration-solicitor-[area].html` style) targeting
long-tail local search terms, a `sitemap.xml`, and a `robots.txt`. **Never use a placeholder
address in production** — flag it clearly to the user if real data isn't provided yet.

---

## 12. What NOT to repeat (lessons from mistakes made during the York Solicitors build)

- Don't lock a homepage to a single non-scrolling viewport unless the client explicitly wants a
  splash-screen feel — it hides all the content you build afterward and causes confusion later.
- Don't put interactive elements (like a "serving areas" link strip) as `position: absolute`
  pinned to the bottom of a `height: 100vh; overflow: hidden` hero — on real-world screen sizes
  it gets clipped below the fold and becomes unreachable. If something needs to always be visible
  regardless of scroll, use `position: fixed` relative to the true viewport, not a container.
- Don't embed raw SVG/HTML containing double-quotes inside an `onerror="..."` (or any
  double-quoted) HTML attribute via a template literal — the quotes will prematurely terminate
  the attribute and corrupt the markup. Keep inline event handlers simple, or attach listeners
  via JS instead of inline strings when the payload contains quotes.
- Don't reuse the same literal stock photo across multiple cards in a row — it reads as cheap.
  Prefer a branded abstract/icon treatment when real varied photography isn't available.
