# NETFUSION SEO Implementation Brief
**For: Coding agent working on the NETFUSION Ideal & Innovations Solutions Ltd website**
**Stack: React + Vite + SCSS (no Tailwind)**

---

## 0. FIRST: Audit before building

Before writing anything, check and report back on:

1. **Rendering mode** — Is this a pure client-side Vite SPA, or is there any prerendering/SSR (vite-plugin-ssr, `vite-plugin-prerender`, Next.js, etc.)?
   - **This matters more than anything else on this list.** If it's a pure CSR SPA, Googlebot can usually still index it (Google renders JS), but: (a) social share previews (LinkedIn — explicitly a BRD goal) will NOT work without prerendering, since crawlers like LinkedIn's bot don't execute JS, and (b) time-to-first-render affects Core Web Vitals/rankings.
   - If no prerendering exists, add **`vite-plugin-prerender`** (or `vite-plugin-ssr` if more control is needed) to statically generate HTML for each route at build time, so each page ships with its own `<title>`, meta tags, and JSON-LD already in the HTML — not injected client-side only.
2. **Current routing setup** (React Router version, route file structure).
3. **Whether `react-helmet-async` (or similar) is already installed** for per-route head management.
4. Confirm the production domain (e.g. `https://netfusionideal.com`) — needed for canonical URLs, sitemap, OG tags, and JSON-LD `url` fields. Use the actual domain everywhere below, not a placeholder.

Report findings before proceeding to implementation.

---

## 1. Context (so the agent understands *why*, not just *what*)

NETFUSION sells enterprise core banking software (ALL-FINANCIAL Core Banking Suite) to commercial banks, microfinance banks, mortgage banks, fintechs, cooperative societies, and finance houses across Africa. Buyers are MDs/CEOs, CTOs, COOs, Heads of IT/Risk/Compliance.

This is **B2B, high-consideration, long sales cycle** — not local "near me" search. The SEO goal is to rank for capability/category search terms (e.g. "core banking software Nigeria") and to look credible and technically solid when a prospect Googles the company before or during a sales conversation. Site speed, structured data, and content depth matter more here than local map-pack signals.

---

## 2. Global technical SEO (applies site-wide)

Install/configure once, applies everywhere:

- **`react-helmet-async`** wrapped around the app root — every route gets its own `<title>`, `<meta name="description">`, canonical `<link>`, OG tags, Twitter Card tags.
- **`sitemap.xml`** — generate at build time (or a static file for now) listing all 6+ routes with `lastmod`. Place at site root.
- **`robots.txt`** — allow all, reference sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://[domain]/sitemap.xml
  ```
- **HTTPS enforced** — redirect any HTTP to HTTPS at hosting/CDN level.
- **Canonical tags** — every page self-canonicalizes to its clean URL (no query params, no trailing slash inconsistency).
- **Clean URLs** — already specified in BRD, keep to this pattern: `/products/all-financial-core-banking`, `/services/core-banking-implementation`, `/insights/[slug]`. No IDs or query strings in indexable URLs.
- **404 page** — custom, with nav back to Home/Products, not a blank React error.
- **Compression** — enable Gzip/Brotli at the hosting/CDN layer (Vercel/Netlify/Cloudflare do this automatically; confirm if self-hosted).
- **Image formats** — convert hero/product images to WebP, keep a fallback if needed. Add `width`/`height` attributes to prevent layout shift (CLS).
- **Lazy loading** — `loading="lazy"` on all below-the-fold images (testimonial logos, insight thumbnails, etc.). Hero image should NOT be lazy-loaded (it's the LCP element).
- **Core Web Vitals targets**: LCP < 2.5s, CLS < 0.1, INP < 200ms. Check hero image size, animated SVG performance, and font loading (use `font-display: swap` for Inter/Segoe UI web fonts).

---

## 3. Per-page meta tags + keyword targeting

Map the BRD's keyword list to actual pages. Titles ≤ 60 chars, descriptions ≤ 155 chars, both compelling (not stuffed).

| Page | Target keyword(s) | SEO Title | Meta Description |
|---|---|---|---|
| Home `/` | core banking software, banking technology, core banking system | NETFUSION \| Core Banking Software & Digital Banking Platform for Africa | Enterprise core banking, digital banking and financial technology solutions built for African banks, microfinance institutions and fintechs. |
| About `/about` | banking technology company Africa | About NETFUSION \| African Banking Technology Company | 20+ years of banking and fintech expertise. Learn how NETFUSION helps financial institutions modernize with secure, scalable technology. |
| Products `/products` | core banking software, banking ERP, digital banking platform | ALL-FINANCIAL Core Banking Suite \| NETFUSION Products | Explore NETFUSION's enterprise banking suite: core banking, digital banking, loan management, CRM, AML compliance and API integration. |
| Product detail `/products/all-financial-core-banking` | core banking software Nigeria, core banking system | ALL-FINANCIAL Core Banking Suite \| Modules & Features | A modular, cloud or on-premise core banking platform with real-time processing, unlimited branches, AML/KYC and open API integrations. |
| Services `/services` | core banking implementation, digital transformation banking | Banking Technology Services \| Implementation & Support | Core banking implementation, data migration, system integration, training and managed support — deployed in 8–12 weeks. |
| Insights `/insights` | best core banking software in Nigeria, digital banking solutions | Banking Technology Insights \| NETFUSION | Articles and guides on core banking, digital transformation, compliance and fintech infrastructure across Africa. |
| Contact `/contact` | NETFUSION contact, book banking software demo | Contact NETFUSION \| Request a Demo | Talk to a banking technology expert or schedule a demo of the ALL-FINANCIAL Core Banking Suite. |

Individual insight articles get their own long-tail-targeted title/description per topic (see section 6).

Every page also needs Open Graph + Twitter Card tags (og:title, og:description, og:image — use a branded 1200x630 image per page type, og:url, twitter:card = summary_large_image).

---

## 4. Structured data (JSON-LD)

Add via `react-helmet-async` `<script type="application/ld+json">`. Minimum set per BRD:

**Organization schema (site-wide, in root layout):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NETFUSION Ideal & Innovations Solutions Ltd",
  "url": "https://[domain]",
  "logo": "https://[domain]/logo.png",
  "email": "info@netfusionideal.com",
  "telephone": "+234-704-551-2215",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1, Ore-Ofe Street, Off Adewole Adenere Street, Simawa",
    "addressLocality": "Ogun State",
    "addressCountry": "NG"
  },
  "sameAs": ["[LinkedIn URL]"]
}
```

**SoftwareApplication schema (Products page):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ALL-FINANCIAL Core Banking Suite",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Cloud, On-Premise, Hybrid",
  "description": "Enterprise core banking platform for commercial banks, microfinance banks, and fintechs across Africa.",
  "provider": { "@type": "Organization", "name": "NETFUSION Ideal & Innovations Solutions Ltd" }
}
```

**FAQPage schema** — on Services page (and Products, if FAQs are added there), matching whatever FAQ content is written.

**BreadcrumbList schema** — on every non-home page, matching the visible breadcrumb nav (Home > Products > ALL-FINANCIAL Core Banking Suite).

Validate everything with Google's Rich Results Test before shipping.

---

## 5. On-page content/structure rules

- **One `<h1>` per page**, matching the primary target keyword naturally (e.g. Products page h1: "Enterprise Banking Software Built for Financial Institutions Across Africa").
- Logical heading hierarchy — h2 for major sections, h3 for sub-points. Don't skip levels or use headings for styling only.
- **Image alt text** — descriptive, not keyword-stuffed. E.g. `alt="NETFUSION digital banking dashboard showing real-time transaction monitoring"`, not `alt="banking software core banking system"`.
- **Internal linking** — every product card on the homepage/Products page should link to its own detail section/page. Services should cross-link to relevant Products. Insight articles should link back to relevant Product/Service pages (this is a big ranking lever for B2B SaaS sites — don't skip it).
- **Breadcrumb nav** — visible UI component, not just schema, on all non-home pages.

---

## 6. Content gap: Insights/blog section

The BRD says "Latest Insights — Automatically pull from blog" but there's no CMS/content plan specified. This is likely the single highest-leverage SEO lever available, because long-tail B2B keywords ("best core banking software in Nigeria," "how to choose a core banking system for a microfinance bank," "AML compliance software for African banks") are far easier to rank for than the primary head terms, and this is genuinely where NETFUSION can compete.

Ask the agent to set up a simple structure for this even if content isn't written yet:
- `/insights` index page + `/insights/[slug]` dynamic route
- Content can live as local Markdown/MDX files initially (no CMS needed yet) — front-matter for title, description, date, slug
- Each article template includes: h1, meta title/description fields, JSON-LD `Article` schema, related-product internal links, and a CTA block (Request Demo / Talk to Expert)

Flag this back to the user — they'll need to actually write 8–10 articles targeting the BRD's long-tail keyword list to see real movement here. That's a content task, not a code task.

---

## 7. Conversion tracking (supports SEO indirectly, worth doing together)

Per BRD's three target CTAs (Request Demo, Talk to Expert, Download Brochure) — instrument these as events (GA4 or similar) so ranking improvements can be tied to actual lead generation, not just traffic.

---

## 8. What's explicitly NOT a code task

- Google Search Console + Bing Webmaster Tools setup and sitemap submission (user does this once site is live)
- Google Business Profile listing (relevant for the Ogun State office address / brand search, not organic content rankings)
- LinkedIn company page optimization + posting cadence (BRD goal: "increase LinkedIn traffic")
- Backlinks from named clients (NIRSAL MFB, Honey MFB, Molusi MFB, ZENP FC) — outreach task, not code
- Writing the actual Insights articles (content task — see section 6)

---

## Priority order for the agent

1. Audit (section 0) — confirm rendering approach before anything else
2. Global technical setup (section 2) — helmet, sitemap, robots.txt, image optimization, Core Web Vitals
3. Per-page meta tags (section 3)
4. Structured data (section 4)
5. On-page structure/internal linking (section 5)
6. Insights template scaffold (section 6) — even empty, so content can drop in later
