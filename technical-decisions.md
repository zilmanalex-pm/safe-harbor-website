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
  layout.tsx                     → root layout (no locale yet — just sets html shell)
  /[locale]
    layout.tsx                   → locale layout: sets dir, lang, loads correct font
    page.tsx                     → homepage
    /about/page.tsx
    /services/page.tsx
    /faq/page.tsx
    /contact/page.tsx

/components
  /sections                      → full-page sections (Hero, FAQ, Services, etc.)
  /ui                            → primitive components (Button, Card, Input, etc.)
  /layout                        → Header, Footer, Nav

/content                         → copy and data files
  /he                            → Hebrew JSON files per page
  /ru                            → Russian JSON files per page

/lib                             → shared utilities and config
  i18n.ts                        → next-intl config and locale helpers
  fonts.ts                       → font loading definitions (localFont, one per locale)

/types                           → shared TypeScript interfaces
  content.ts                     → types for JSON content shapes
  components.ts                  → shared prop types

/public
  /images
  /fonts
```

**Note on i18n routing:** Every page lives under `/app/[locale]/`. The root `/app/layout.tsx` is a minimal shell. The `[locale]/layout.tsx` handles `dir`, `lang`, and locale-scoped font loading. This must be scaffolded before any page components are built.

---

## Component Content Strategy

**Rule:** Components receive content as props — they do not call `useTranslations()` internally.

Pages (at the route level) are responsible for fetching the correct locale content and passing it down as props. This keeps components locale-agnostic, independently testable, and reusable across both languages without hidden dependencies.

```tsx
// ✅ Correct — page fetches, component renders
// /app/[locale]/page.tsx
const t = await getTranslations('home')
<HeroSection headline={t('headline')} subtext={t('subtext')} cta={t('cta')} />

// ❌ Avoid — component knows about locale
// HeroSection.tsx
const t = useTranslations('home') // don't do this inside a section component
```

---

## Naming Conventions

- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Files and folders:** kebab-case (e.g., `contact-form.tsx`)
- **CSS classes:** Tailwind utilities only — no custom class names unless necessary
- **Variables:** camelCase

---

## Internationalization (i18n)

**Languages:** Hebrew (`he`) and Russian (`ru`) — LOCKED
**Text direction:** Hebrew = RTL, Russian = LTR — layout must mirror between languages
**Routing strategy:** `/he/` and `/ru/` route prefixes via Next.js i18n

**Font strategy:**
- Hebrew: Heebo or Assistant (supports Hebrew + Latin)
- Russian: Inter or DM Sans (supports Cyrillic + Latin)
- These are separate font loads per locale — not one font for both

**Implementation approach:** next-intl library for translations and locale routing

**RTL implementation:** Tailwind CSS supports RTL via `dir` attribute on `<html>`. Use `rtl:` prefix utilities where layout needs to mirror. Set `dir="rtl"` for Hebrew locale, `dir="ltr"` for Russian.

**Content files:** One JSON or MDX file per page per language:
```
/content
  /he
    home.json
    about.json
    services.json
  /ru
    home.json
    about.json
    services.json
```

---

## Content Strategy

**Content approach:** JSON files per locale (see i18n section above)
**CMS (if used):** TBD — may add later if Sonya wants to update content herself
**Languages:** Hebrew and Russian — LOCKED

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

## Performance Rules

### Fonts
- Use Next.js `localFont` (via `next/font/local`) — never a `<link>` to Google Fonts
- Define font objects in `/lib/fonts.ts`, one per locale (Heebo for Hebrew, Inter for Russian)
- Load only the active locale's font in `[locale]/layout.tsx` — never load both on the same page
- Always set `display: 'swap'` to prevent invisible text during font load
- Preload only the font weight(s) actually used on that page (typically 400 + 600)

### Images
- All images must use `next/image` — no raw `<img>` tags
- Always set explicit `width` and `height` to prevent layout shift (CLS)
- Hero image must have `priority={true}` to trigger early fetch and protect LCP
- Deliver images in WebP format; keep hero image under 150KB at mobile breakpoint
- Use `sizes` prop on responsive images to avoid serving desktop-sized images to mobile

### RTL / Tailwind
- Use `rtl:` prefix utilities only where layout physically mirrors (text alignment, padding direction, flex order, icon placement)
- Do not reflexively add `rtl:` variants to every spacing utility — only where the visual result actually changes between Hebrew and Russian layouts
- Test RTL layout with real Hebrew text, not placeholder text (letter spacing and word length behave differently)

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
| 2026-05-13 | All pages live under `/app/[locale]/` from day one | next-intl requires locale-prefixed routes; retrofitting this mid-build is painful |
| 2026-05-13 | Added `/lib` and `/types` folders to project structure | i18n config and shared TS types need a defined home before implementation starts |
| 2026-05-13 | Components receive content as props — no internal `useTranslations()` calls | Keeps section components locale-agnostic and independently testable |
| 2026-05-13 | Fonts loaded per locale via `localFont` in `[locale]/layout.tsx` | Prevents shipping both font stacks on every page; critical for mobile performance |
| 2026-05-13 | All images via `next/image`; hero requires `priority={true}` | Protects LCP target; prevents layout shift from missing dimensions |
| 2026-05-13 | `rtl:` Tailwind prefix used selectively, not reflexively | Prevents duplicate utility bloat; RTL overrides only where layout actually mirrors |

---

_Last updated: 2026-05-13_
