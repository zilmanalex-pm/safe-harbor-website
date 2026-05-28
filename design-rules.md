# Design Rules
_The visual source of truth for Safe Harbor. Lock decisions here as they're made._

---

## Typography

**Script support required:** Hebrew (RTL) and Russian Cyrillic (LTR) — two separate font stacks
**Hebrew font (heading + body):** Heebo — DRAFT (clean, readable, works for both heading and body in Hebrew)
**Russian font (heading + body):** Inter — DRAFT (excellent Cyrillic support, pairs visually with Heebo)
**Note:** Fonts load per locale. Both should feel warm and approachable, not clinical.

**Heading font (Latin fallback):** Inter — DRAFT
**Body font (Latin fallback):** Inter — DRAFT

**Font scale — DRAFT (Option A: Warm Editorial)**

| Label | Size | Weight | Line height | Use |
|-------|------|--------|-------------|-----|
| H1 | 52px | 600 | 1.15 | Hero headline |
| H2 | 34px | 500 | 1.2 | Section titles |
| H3 | 22px | 500 | 1.3 | Sub-sections, card titles |
| Body | 17px | 400 | 1.7 | Paragraph text |
| Small | 13px | 400 | 1.5 | Captions, labels, metadata |

**Tailwind tokens:** `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-small`

**Mobile scale:** H1 reduces to ~36px on mobile (`text-4xl`). To be confirmed in Sprint 3 during responsive testing.

---

## Color Palette

Derived directly from Sonya's professional photo — warm cream, natural wood, soft sage from the book spines. The site should feel like an extension of the room she's sitting in.

| Name | Hex | Use | Status |
|------|-----|-----|--------|
| Background | #F7F4F0 | Page background — warm off-white, not clinical white | DRAFT |
| Text | #2D2926 | Headings and body — warm dark, not pure black | DRAFT |
| Primary | #5E8C85 | CTAs, links, key accents — sage/teal from book spines | DRAFT |
| Warm Neutral | #E8E0D5 | Section backgrounds, dividers — pulled from her blazer | DRAFT |
| Soft White | #FDFBF9 | Cards, input fields — slightly warmer than pure white | DRAFT |

**Colors to avoid:** Clinical white (#FFFFFF as background), cold blues, any color that reads as medical or corporate

**Contrast ratios (verified 2026-05-14):**
- Text on Background: 13.15:1 — PASS (body text)
- Text on Surface: 13.96:1 — PASS (body text)
- Text on Neutral: 11.02:1 — PASS (body text)
- Primary on Background: 3.44:1 — PASS (large text / UI elements only)
- Primary on Surface: 3.66:1 — PASS (large text / UI elements only)

**Rule:** Primary (#5E8C85) must never be used as body text or small label color — insufficient contrast at small sizes. Primary is for CTAs, borders, icon accents, and large decorative text only.

---

## Spacing Scale

Base unit: 8px

| Token | Value | Use |
|-------|-------|-----|
| xs | 8px | Tight gaps |
| sm | 16px | Between elements |
| md | 24px | Component padding |
| lg | 32px | Section padding (mobile) |
| xl | 48px | Section padding (desktop) |
| 2xl | 64px | Large section gaps |
| 3xl | 96px | Hero spacing |

---

## Layout

**Max content width:** 1200px — DRAFT
**Column grid:** 12-column — DRAFT
**Gutter:** 24px (md) on mobile, 32px (lg) on desktop — DRAFT

---

## Components

**Direction: Option A — Soft & rounded** — DRAFT

### Buttons
- **Primary:** bg-primary, text-surface, border-radius pill (`rounded-pill`), padding 11px 22px, font-size small/500. Hover: opacity 90%.
- **Secondary:** transparent bg, primary border (1.5px), primary text, border-radius pill, same padding. Hover: bg-primary/10.
- **Ghost:** no border, no background, text-text, underline with offset 3px. Used for inline links and tertiary actions.
- **Border radius token:** `rounded-pill` (9999px) for all buttons

### Cards
- Background: surface (`#FDFBF9`)
- Border: 0.5px solid neutral (`#E8E0D5`)
- Shadow: none — border only, no elevation
- Border radius: `rounded-card` (16px)
- Padding: 24px (md)

### Forms
- Input height: 44px
- Border style: 1.5px solid neutral (`#E8E0D5`), rounded-pill
- Focus state: border-color changes to primary, no box-shadow ring
- Background: surface (`#FDFBF9`)
- Font size: body (17px)

### Border radius tokens (Tailwind)
| Token | Value | Use |
|-------|-------|-----|
| `rounded-pill` | 9999px | Buttons, inputs |
| `rounded-card` | 16px | Cards, containers |
| `rounded-sm` | 8px | Badges, tags, small elements |

---

## Imagery

**Photo style:** Warm indoor light, natural setting — DRAFT. Sonya's existing professional photo (left photo from 2026-05-12 shoot) sets the reference. Direct gaze, relaxed posture, bookshelf background.
**Hero photo treatment:** Full-width or large crop, positioned prominently. No filters or heavy editing — warmth should feel authentic.
**Illustration use:** No illustrations — DRAFT. Photography only. Illustrations would feel clinical or decorative.
**Icon set:** Lucide (already installed via lucide-react). Outline style only, used sparingly for nav and UI affordances, not decoration.

---

## Responsive Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | < 640px | Primary design target |
| Tablet | 640–1024px | |
| Desktop | > 1024px | |

---

## Tone in Design

**Overall feeling:** Warm, unhurried, safe. The site should feel like walking into a quiet, well-lit room. — DRAFT
**What the design should NOT feel like:** Clinical, corporate, anxious, cluttered, or self-promotional. No stock photography. No aggressive CTAs. No countdown timers or urgency language.
**Design reference:** Carolin Jakoby (carolinjakoby.com) — minimal, personal, the therapist's voice leads, design follows.

---

_Last updated: 2026-05-14 — Sprint 2 design system DRAFT complete_
