# Design Rules
_The visual source of truth for Safe Harbor. Lock decisions here as they're made._

---

## Logo (Wordmark)

**Concept:** Three nested arcs with a thin baseline. Pure geometric form — no text, no letters. Suggests shelter, harbor, calm. — LOCKED

**SVG spec:**
- Three half-circle arcs centered on a shared baseline, radii evenly spaced by 8px (8 / 16 / 24)
- Stroke: `#5E8C85` (primary), strokeWidth 2.5, strokeLinecap round
- Baseline: same color, strokeWidth 1.5
- No fill, no text, no letters
- viewBox: `0 0 52 36`, displayed at 52×36px in nav
- Color on hover: `opacity-70` on the Link wrapper (not a color change)
- Accessible name: `aria-label={siteName}` on the wrapping Link (screen readers get the therapist's name)

**Favicon:** Same three-arc form at 32×32, radii 4/8/12, on warm cream (#F7F4F0) background with 4px border-radius. — LOCKED

---

## Favicon

**Concept:** Single Latin letter "S" (works across both locales — no script ambiguity at small sizes). — DRAFT

**Spec:**
- Character: `S`
- Font: Inter, weight 700 (bold)
- Foreground color: `#5E8C85` (primary)
- Background color: `#F7F4F0` (background)
- Format: SVG base at 32×32px; also export 16×16 and 32×32 PNG for browser compatibility
- Shape: square canvas with 4px border-radius (subtle, not a full pill)
- Padding: 4px inset on all sides (letter should not touch the edge)

**File target:** `public/favicon.svg` + `public/favicon-32.png` + `public/favicon-16.png` — DRAFT

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
| 3xl | 96px | Reserved — do not use as section padding (too heavy) |

---

## Homepage Section Flow

**Section order:** Hero → Intro → ServicesPreview → TrustBar → ContactCTA — DRAFT (order is sound; revisit TrustBar position after content strategy is confirmed)

**Problem diagnosed (2026-05-19):** The site felt disconnected because sections were padded uniformly at `py-3xl` or `py-2xl` with identical background colors, creating long stretches of dead space with no visual signal between sections. The Hero → Intro transition was the worst offender: both sections shared `bg-background`, with 96px + 64px = 160px of padding between content blocks.

**Fixes — implement these:**

| Section | Current padding | Revised padding | Background | Notes |
|---------|----------------|-----------------|------------|-------|
| Hero | `min-h-[90vh] py-3xl` | Remove `min-h`, use `py-2xl` | `bg-background` | Photo aspect ratio (4/5) provides height; the `min-h` forced excessive empty space below content on tall screens |
| Intro | `py-2xl` | `py-xl` | Change from `bg-background` → `bg-surface` | Same background as Hero was causing the two sections to bleed together. `bg-surface` (#FDFBF9) is a subtle but perceptible shift. Also upgrade text size (see below). |
| ServicesPreview | `py-2xl` | `py-xl` | `bg-neutral/40` | Background change already provides separation — doesn't need as much padding to signal a new section. |
| TrustBar | `py-xl` | Keep `py-xl` | `bg-primary/8` + `border-y` | Already well-proportioned. The border-y dividers do the work. No change. |
| ContactCTA | `py-3xl` | `py-2xl` | `bg-primary/10` | 96px is too heavy for a 2-element block. 64px is sufficient. |

**Intro text size fix:** `text-body` (17px) is too small for the first paragraph a visitor reads after the 52px headline. Change to `text-[20px]` with `leading-relaxed` and `font-normal` weight. This sits between `text-body` and `text-h3` — enough presence without competing with section headings. — DRAFT

**Dividers:** No full-width horizontal rules needed between sections — background color alternation handles separation. Do not add `<hr>` elements. The TrustBar's `border-y border-primary/15` is the only explicit divider and should stay. — LOCKED

**Background color sequence (top to bottom):**
1. Hero: `bg-background` (#F7F4F0) — warm cream
2. Intro: `bg-surface` (#FDFBF9) — near-white, slightly warmer than pure white
3. ServicesPreview: `bg-neutral/40` — muted warm sand
4. TrustBar: `bg-primary/8` + `border-y border-primary/15` — sage-tinted strip
5. ContactCTA: `bg-primary/10` — sage-tinted, warmer ending

The rhythm is: warm cream → lighter cream → sand → sage hint → sage. Each step is a small shift, not a dramatic jump. The site should feel like it exhales rather than pivoting.

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

## Icons

**Library:** Lucide (lucide-react) — already installed. Outline style only. — LOCKED

**Global rules:**
- All icons are decorative (`aria-hidden="true"`) — the adjacent text is always the accessible label
- Icons must never appear without accompanying visible text
- No icon-only buttons or icon-only labels
- Do not add icons to the nav — navigation stays text-only

**Icon usage map:**

| Location | Icon name | Size | Color token |
|----------|-----------|------|-------------|
| TrustBar — years of experience item | `Clock` | `w-5 h-5` (20px) | `text-primary` |
| TrustBar — credentials/degree item | `GraduationCap` | `w-5 h-5` (20px) | `text-primary` |
| TrustBar — languages item | `Languages` | `w-5 h-5` (20px) | `text-primary` |
| Service card — individual therapy | `User` | `w-5 h-5` (20px) | `text-text/40` |
| Service card — anxiety | `Heart` | `w-5 h-5` (20px) | `text-text/40` |
| Service card — depression | `Sparkles` | `w-5 h-5` (20px) | `text-text/40` |
| Service card — couples | `Users` | `w-5 h-5` (20px) | `text-text/40` |
| Contact CTA — WhatsApp/contact button area | `MessageCircle` | `w-4 h-4` (16px) | `text-primary` |

**TrustBar icon placement:** Icon sits above the value (not beside it). Stack order: icon → value → label. Centered vertically within each list item. — DRAFT

**Service card icon placement:** Icon appears in CardHeader, above or beside the card title. Preferred: icon left of title on the same line (inline, `flex items-center gap-sm`). Use `text-text/40` so icon doesn't compete with the card title text. — DRAFT

---

## Imagery

**Photo style:** Warm indoor light, natural setting — DRAFT. Sonya's existing professional photo (left photo from 2026-05-12 shoot) sets the reference. Direct gaze, relaxed posture, bookshelf background.
**Hero photo treatment:** Full-width or large crop, positioned prominently. No filters or heavy editing — warmth should feel authentic.
**Illustration use:** No illustrations — DRAFT. Photography only. Illustrations would feel clinical or decorative.

**Supporting atmospheric images (1–2 images alongside Sofia's portrait):** — DRAFT

**Image 1 — Warm indoor detail (Intro section):**
- Mood: quiet, inhabited, unhurried. The feeling of a good room. Not a staged "therapy room" — a real, personal space.
- Visual direction: close crop of plant leaves in afternoon window light, a stack of open books with soft shadows, or a wooden surface with natural texture. No people.
- Color temperature: warm (amber, cream, soft green) — must harmonise with the site palette, not clash. No cool blues, no fluorescent light.
- Placement on site: Intro section on desktop — small inset image (240–300px wide) floating to one side of the centered text. Hidden on mobile (text-only on small screens).
- Aspect ratio: roughly 3:4 or square, `rounded-card` (16px) corners
- Unsplash search terms: `"indoor plant warm light window"` · `"cozy interior natural light detail"` · `"books window light warm"` — choose whichever has the softest, least stock-photography feel.

**Image 2 — Soft human warmth (ContactCTA section):**
- Mood: the feeling after a session — settled, present. Not dramatic. Suggests care without sentiment.
- Visual direction: hands around a warm ceramic mug, soft fabric folds in warm light, or diffused morning light on a plain surface. Abstract enough to not be literal. No faces.
- Color temperature: same warm neutral as above — cream, amber, muted sage.
- Placement on site: ContactCTA section — either as a subtle low-opacity background texture, or as a half-column image on the left side on desktop (text/button occupies right half). On mobile: hidden.
- Aspect ratio: landscape (16:9 or 4:3) if used as background; square if used as inset column image
- Unsplash search terms: `"hands warm mug morning light"` · `"soft interior warm neutral texture"` · `"ceramic mug daylight minimal"` — avoid anything with a clinical, spa, or yoga connotation.

**Note:** Sofia's drawings may also be usable as atmospheric elements. If a drawing fits the above mood criteria (warm, minimal, non-clinical), it can substitute for one of the Unsplash images. Coordinate with Sofia before sourcing externally. — DRAFT

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

_Last updated: 2026-05-19 — Sprint 3 design revision: flow fixes, logo, favicon, icons, supporting images added_
