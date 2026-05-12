# Technical Decisions
_The engineering source of truth for Safe Harbor. Document every significant decision and why it was made._

---

## Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js | SEO-friendly, fast, widely supported |
| Styling | Tailwind CSS | Utility-first, consistent spacing, responsive by default |
| UI Components | shadcn/ui | Accessible, unstyled base, easy to customize |
| Hosting | Vercel | Zero-config deployment, free tier, works natively with Next.js |
| Language | TypeScript | Type safety, better editor support |

---

## Repository

**GitHub repo:** https://github.com/zilmanalex-pm/safe-harbor-website
**Branch strategy:** main (production) — feature branches for each sprint

---

## Project Structure

```
/app
  layout.tsx           → global layout, fonts, metadata
  page.tsx             → homepage
  /about/page.tsx
  /services/page.tsx
  /faq/page.tsx
  /contact/page.tsx

/components
  /sections            → full-page sections
  /ui                  → primitive components
  /layout              → Header, Footer, Nav

/content               → copy and data files
/public
  /images
  /fonts
```

---

## Naming Conventions

- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Files and folders:** kebab-case (e.g., `contact-form.tsx`)
- **CSS classes:** Tailwind utilities only — no custom class names unless necessary
- **Variables:** camelCase

---

## Content Strategy

**Content approach:** TBD — hardcoded MDX / headless CMS / JSON files
**CMS (if used):** TBD
**Languages:** TBD — single language / Hebrew + English

---

## Forms and Contact

**Contact form handling:** TBD — Resend / Formspree / Netlify Forms
**Spam protection:** TBD — honeypot / reCAPTCHA

---

## Analytics

**Tool:** TBD — Google Analytics / Plausible / none
**Events to track:** Page views, contact form submissions, CTA clicks

---

## SEO

**Sitemap:** Auto-generated via next-sitemap
**Robots.txt:** Standard — allow all, block /api
**Structured data:** LocalBusiness + Person schema on homepage and About page
**OG images:** Static per page

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |

---

## Deployment

**Platform:** Vercel
**Domain:** TBD
**Environment variables:** TBD (contact form API keys, etc.)

---

## Decisions Log

_Record every significant decision here with the date and reason._

| Date | Decision | Reason |
|------|----------|--------|
| — | Initial stack selected | See stack table above |

---

_Last updated: —_
