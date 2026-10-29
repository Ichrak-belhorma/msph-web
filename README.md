# MSPH — MS Pro Hygiène · Website

Bilingual (French / English) marketing website for **MSPH — MS Pro Hygiène**, a CEPA / NF EN 16636 certified pest control and hygiene company in France.

Built with [Astro](https://astro.build) as a fully static site: fast, SEO-friendly, no server or database required.

## Highlights

- **Lead generation first** — a "Diagnostic gratuit" form is visible in the hero of the home page and of every service page, plus a full quote page, sticky "Call / Free assessment" bar on mobile and a phone number in the header.
- **B2B + B2C** — dedicated pages for businesses (contracts, HACCP / IFS / BRCGS compliance, industries) and for homeowners.
- **Bilingual** — French at `/`, English at `/en/` with translated URLs, language switcher and `hreflang` tags on every page.
- **SEO** — unique titles/descriptions, canonical URLs, Open Graph image, `sitemap-index.xml`, `robots.txt`, JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList, Article).
- **Accessible & responsive** — WCAG AA colour contrast, keyboard navigation, skip link, reduced-motion support, tested from 390 px to 1440 px.
- **GDPR friendly** — self-hosted fonts, no tracking cookies, consent checkbox on forms, privacy policy and legal notice pages.
- **French typography** — non-breaking spaces before `: ; ? !` and inside « guillemets » are added automatically at build time.

## Pages

| French | English |
| --- | --- |
| `/` Accueil | `/en/` |
| `/services/` + 6 service pages (dératisation, désinsectisation, punaises de lit, guêpes & frelons, dépigeonnisation, désinfection) | `/en/services/…` |
| `/entreprises/` Contrats & offre B2B | `/en/business/` |
| `/secteurs/` Secteurs d’activité | `/en/industries/` |
| `/particuliers/` | `/en/residential/` |
| `/a-propos/` | `/en/about/` |
| `/certifications/` | `/en/certifications/` |
| `/faq/` | `/en/faq/` |
| `/conseils/` + 3 articles | `/en/insights/…` |
| `/recrutement/` | `/en/careers/` |
| `/contact/` | `/en/contact/` |
| `/devis-gratuit/` | `/en/free-quote/` |
| `/mentions-legales/`, `/confidentialite/` | `/en/legal-notice/`, `/en/privacy/` |

## Getting started

Requires Node.js 22.12 or later (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the production build
npm run check    # type-check
```

## ✅ Before going live

All company details live in **`src/config/site.ts`**. Every value marked `À CONFIRMER` is a placeholder:

1. **Contact** — phone, international phone, emails, WhatsApp (optional).
2. **Address & service area** — street, postcode, city, GPS coordinates (shows a map on the contact page), list of departments covered.
3. **Legal** — legal form, share capital, SIREN/SIRET, RCS, VAT number, publication director, biocide approval number, insurer, web host. Also fill in the consumer mediator in `src/views/LegalView.astro`.
4. **Domain** — `site.url` in `src/config/site.ts`, `SITE_URL` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
5. **Forms** — create a free form on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and paste the endpoint (and access key for Web3Forms) in `site.form`. Until then, forms open the visitor’s email app with a pre-filled message.
6. **Reviews** — `src/data/testimonials.ts` contains **sample reviews** shown in the scrolling review band: replace them with real client reviews (with their permission), or switch to the official Trustpilot widget by filling `site.trustpilot.businessUnitId` (and `url`), or set `showTestimonials = false`. Also set the real Trustpilot `rating` and `reviewCount`. Publishing fake reviews is illegal in France.
7. **Figures** — `site.proof` holds the years of experience (30), number of satisfied clients and satisfaction rate shown on the home and about pages.
8. **Client logos** — `src/data/clients.ts` lists client *types* as placeholders for the “Ils nous font confiance” band; replace them with real client logos (with their permission) via the `logo` field.
9. **Job offers** — update or remove the positions in `src/views/CareersView.astro`.
10. **Logos** — `src/components/Logo.astro` and `public/brand/` contain a vector redraw of the MSPH logo; replace with the official vector file if available. Replace the certification logos in `public/brand/certs/` with high-resolution versions from CEPA, Bureau Veritas and Prosane.

## Replacing the photos

The home hero uses the team photo in `public/images/hero-equipe-msph.{webp,jpg}` (desktop, canvas extended on the left so the team sits between the headline and the form) and `public/images/hero-equipe-msph-mobile.{webp,jpg}` (mobile crop).

Placeholder photos are hot-linked from [Pexels](https://www.pexels.com) (free for commercial use). They are all declared in **`src/data/images.ts`**. To use your own photo:

1. put the file in `public/images/` (e.g. `public/images/equipe.jpg`);
2. set `src: '/images/equipe.jpg'` on the matching entry — it takes priority over the Pexels image.

If an image fails to load, a branded blue placeholder is shown instead.

## Editing content

| What | Where |
| --- | --- |
| Services (texts, FAQs, method) | `src/data/services.ts` |
| Industries | `src/data/sectors.ts` |
| General FAQ | `src/data/faq.ts` |
| Blog articles | `src/data/articles.ts` |
| Navigation, buttons, form labels | `src/i18n/ui.ts` |
| URLs per language | `src/i18n/routes.ts` |
| Page layouts | `src/views/*.astro` |
| Colours, typography, spacing | `src/styles/global.css` (design tokens at the top) |

## Deployment

`npm run build` produces a static `dist/` folder that can be hosted anywhere:

- **Netlify / Vercel / Cloudflare Pages** — connect the repository, build command `npm run build`, output directory `dist`.
- **Classic hosting (OVH, o2switch, IONOS…)** — upload the contents of `dist/` to the web root via FTP.

## Maintenance

The site uses Astro 6 (Node 22.12+). `npm audit` still lists advisories for Astro < 7 and `sharp`; they concern server-side rendering, image optimisation and View Transitions, none of which this static site uses. Upgrade to Astro 7 once your build environment runs Node 22.23 or later.

## Project structure

```
public/            static files (logos, favicons, OG image, robots.txt)
src/
  components/      Header, Footer, LeadForm, cards, FAQ…
  config/site.ts   company details & form settings
  data/            services, sectors, FAQ, articles, images, testimonials
  i18n/            routes and UI translations (fr / en)
  integrations/    build-time French typography fixer
  layouts/         BaseLayout (SEO, header, footer)
  pages/           routes (FR at root, EN under /en/)
  scripts/site.ts  menus, animations, form handling
  styles/          global design system
  views/           page templates shared by both languages
```
