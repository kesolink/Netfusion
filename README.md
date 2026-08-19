# NETFUSION Website

React + Vite + SCSS landing site for NETFUSION (Ideal & Innovations Solutions
Ltd), built from the Website Design & Development Specification (BRD).

## Pages

- `/` — Home: hero, stats, trust bar, products overview, why-choose-us, industries, testimonial, CTA
- `/services` — Services: service catalogue, implementation timeline, TCO, FAQ, CTA
- `/products` — Products: ALL-FINANCIAL suite cards, ecosystem diagram, module list, integrations, CTA
- `/about` — About: company intro, mission/vision, values, local expertise + team, CTA
- `/support` — Support: contact channels, contact form, security & compliance, office info

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
```

## Structure

```
src/
  assets/svg/       15 brand-colored SVG illustrations (one per section)
  components/       Navbar, Footer, CtaBand (shared final CTA band)
  pages/            Home, Services, Products, About, Support (+ .scss per page)
  styles/           _variables.scss (brand tokens), _mixins.scss, global.scss
```

## Notes for the next dev pass

- **Brand tokens** live in `src/styles/_variables.scss` — colors (`$navy`,
  `$teal`, `$grey-bg`...), type scale, radius and shadow tokens all come from
  here. Change them once, they cascade everywhere.
- **Human photography** currently points to Unsplash URLs as placeholders
  (hero, about, testimonial, support sections). Swap these for licensed
  NETFUSION photography before launch — search for `images.unsplash.com` in
  `src/pages/*.jsx` to find every spot.
- **Client logos** in the Home trust bar are text wordmarks as placeholders;
  swap in real logo files when available.
- **Contact form** on the Support page is a client-side stub (`onSubmit`
  just shows a success state) — wire it up to your form backend / email
  service before launch.
- Fonts: Inter, loaded from Google Fonts in `index.html`, matching the BRD's
  typography spec (falls back to Segoe UI / Helvetica Neue).
- All SVGs are self-contained (inline `<style>`/SMIL), so they animate even
  though they're loaded via `<img src>` — no extra plugin required.
