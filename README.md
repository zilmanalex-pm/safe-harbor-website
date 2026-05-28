# Safe Harbor — Sofia Tarasov Psychotherapy Website

Professional psychotherapy website for Sofia Tarasov. Built with Next.js 14, Tailwind CSS, and shadcn/ui. Bilingual: Hebrew (RTL) and Russian (LTR).

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Components | shadcn/ui + Radix UI |
| i18n | next-intl |
| Fonts | Heebo (Hebrew), Inter (Russian) — self-hosted via next/font |
| Contact form | Formspree |
| Hosting | Vercel |

---

## Getting Started

```bash
cd safe-harbor-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/he` (Hebrew) by default.

- Hebrew version: `http://localhost:3000/he`
- Russian version: `http://localhost:3000/ru`

> **Note:** On some Windows setups, use `http://127.0.0.1:3000/he` if localhost doesn't resolve.

---

## Project Structure

```
/app
  /[locale]           → All pages live under a locale prefix (/he or /ru)
    layout.tsx        → Header, Footer, fonts, dir attribute
    page.tsx          → Homepage
    /about/page.tsx
    /services/page.tsx
    /faq/page.tsx
    /contact/page.tsx

/components
  /sections           → Full-page sections (HeroSection, TrustBar, etc.)
  /ui                 → Primitive components (Button, Card, Input, Textarea)
  /layout             → Header, Footer, Nav, LocaleSwitcher, WhatsAppButton

/content
  /he                 → Hebrew copy (one JSON file per page)
  /ru                 → Russian copy (one JSON file per page)

/lib
  utils.ts            → cn(), locale helpers
  fonts.ts            → Font definitions
  rtl.ts              → RTL utility classes

/public
  /images             → sofia-hero.jpg and any future photos
```

---

## Updating Content

All website copy lives in `/content/he/` and `/content/ru/`. Each page has its own JSON file. To update text, edit the relevant file and the change appears immediately (dev) or on next deploy (production).

| File | Page |
|------|------|
| `home.json` | Homepage |
| `about.json` | About page |
| `services.json` | Services page |
| `faq.json` | FAQ page |
| `contact.json` | Contact page |
| `shared.json` | Nav, footer, site name, WhatsApp number |

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Formspree contact form — get your form ID from formspree.io
# Destination email: sonyatar7@gmail.com
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

Also add this variable in the Vercel dashboard under **Settings → Environment Variables**.

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

- **Vercel project:** connect at [vercel.com](https://vercel.com) → Import from GitHub
- **Domain:** TBD — configure in Vercel dashboard once purchased

---

## Source of Truth Documents

Three documents govern all decisions. Do not override them without updating the docs.

| Document | Location | What it controls |
|----------|----------|-----------------|
| Product Brain | `product-brain.md` | Strategy, positioning, messaging |
| Design Rules | `design-rules.md` | Colors, typography, spacing, components |
| Technical Decisions | `technical-decisions.md` | Stack choices, architecture, decisions log |

---

## Sprint Status

| Sprint | Focus | Status |
|--------|-------|--------|
| 1 | Project scaffold | ✅ Complete |
| 2 | Design system + UI components | ✅ Complete |
| 3 | Homepage | ✅ Complete |
| 4 | Secondary pages | ✅ Complete |
| 5 | SEO, accessibility, performance | 🔜 Next |
| 6 | Deployment, analytics, contact form | 🔜 Upcoming |
