# Safe Harbor — Growth Strategy
_Post-launch SEO and visibility plan for Sofia Tarasov Psychotherapy_
_Produced: 2026-05-27_

---

## 1. Keyword Strategy

The rule used here: write what a real person types at 11pm when they finally decide to look. Not clinical language. Not what a marketer would write. The words they actually use.

---

### Hebrew Keywords

| # | Phrase | Translation | Category | Intent | Maps to |
|---|--------|-------------|----------|--------|---------|
| 1 | אני בחרדה ולא יכול להירגע | I'm anxious and can't calm down | Problem-first | Informational | Home, Services |
| 2 | אני מרגיש תקוע ולא יודע למה | I feel stuck and don't know why | Problem-first | Informational | Home, Services |
| 3 | מאז שקרה הדבר הזה אני לא מוצאת את עצמי | Since that thing happened I can't find myself | Problem-first | Informational | Services (trauma) |
| 4 | אני סובל ולא יודע לאן לפנות | I'm suffering and don't know where to turn | Problem-first | Informational | Home, Contact |
| 5 | פסיכותרפיסטית בראשון לציון | Psychotherapist in Rishon LeZion | Situation-first | Navigational | Home, Contact |
| 6 | טיפול נפשי ראשון לציון | Mental health therapy Rishon LeZion | Situation-first | Navigational | Home |
| 7 | מטפלת שמדברת רוסית ישראל | Therapist who speaks Russian Israel | Situation-first | Navigational | Home |
| 8 | כמה עולה פגישה אצל פסיכולוג | How much does a session with a psychologist cost | Practical-first | Informational | FAQ |
| 9 | מה קורה בפגישה ראשונה אצל פסיכולוגית | What happens in the first session with a psychologist | Practical-first | Informational | FAQ |
| 10 | טיפול פסיכולוגי אונליין ישראל | Online psychological therapy Israel | Practical-first | Transactional | Services, Contact |

**Strategic note:** Phrases 5–7 are the highest-priority local SEO terms. Sofia's name + "Rishon LeZion" will rank quickly because there's very little competition at the city level for therapists. The problem-first phrases (1–4) mirror the exact words in the product-brain.md "What they come in saying" section — they belong in page copy, not just in meta tags.

---

### Russian Keywords

These are written as the Russian-speaking immigrant community in Israel actually searches — not translated from Hebrew. The vocabulary and concerns are different.

| # | Phrase | Translation | Category | Intent | Maps to |
|---|--------|-------------|----------|--------|---------|
| 1 | я в тревоге и не могу успокоиться | I'm anxious and can't calm down | Problem-first | Informational | Home, Services |
| 2 | после переезда в израиль стало тяжело | After moving to Israel things got hard | Problem-first | Informational | Home, About |
| 3 | не нахожу себя чувствую себя потерянным | Can't find myself, feel lost | Problem-first | Informational | Home, Services |
| 4 | никто не понимает как тяжело начинать жизнь заново | Nobody understands how hard it is to start life over | Problem-first | Informational | Home, About |
| 5 | психолог на русском в израиле | Psychologist in Russian in Israel | Situation-first | Navigational | Home |
| 6 | психотерапевт русскоязычный ришон ле цион | Russian-speaking psychotherapist Rishon LeZion | Situation-first | Navigational | Home, Contact |
| 7 | терапия для репатриантов израиль | Therapy for immigrants Israel | Situation-first | Navigational | Home, About |
| 8 | как найти хорошего психолога в израиле | How to find a good psychologist in Israel | Practical-first | Informational | FAQ, About |
| 9 | сколько стоит психотерапия в израиле | How much does psychotherapy cost in Israel | Practical-first | Informational | FAQ |
| 10 | первая встреча с психотерапевтом что ожидать | First meeting with a psychotherapist — what to expect | Practical-first | Informational | FAQ |

**Strategic note:** Phrase 5 ("психолог на русском в израиле") is the single most valuable Russian keyword on this list. Search volume is moderate but competition is nearly zero. If the homepage copy and meta description include natural variations of this phrase, Sofia will be on the first page of results within weeks of Google indexing the site. Phrases 6 and 7 are long-tail with even less competition — easier wins that compound over time.

---

## 2. Structured Data Fix — Updated SEO.tsx

**What was missing:** The `LocalBusinessSchema` had two commented-out fields — `address` and `telephone`. Both are now filled in.

**Changes made:**
- `addressLocality`: `'Rishon LeZion'` (English form recognized by Google Maps; Hebrew `ראשון לציון` added as `alternateName` equivalent through the name field)
- `addressCountry`: `'IL'`
- `telephone`: `'+972523777865'` (E.164 format — the standard Google expects)

See the updated file: `components/SEO.tsx` (written separately — see deliverable file).

---

## 3. On-Page SEO Audit

### Audit Table

| Page | Locale | H1 | H1 matches keyword intent? | Internal links via nav? | Contact reachable? | Image alt status |
|------|--------|-----|---------------------------|------------------------|-------------------|-----------------|
| Home | he | כשהגעת לכאן, כנראה שמשהו כבר כבד מדי לשאת לבד. | ✅ Strong — matches problem-first search intent | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| Home | ru | Здесь можно говорить по-русски, и не объяснять, что значит начинать жизнь заново. | ✅ Strong — matches situation-first search intent | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| About | he | ❌ No H1 | — missing — | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| About | ru | ❌ No H1 | — missing — | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| Services | he | מה מביא אנשים אלי | ✅ Good — conversational, matches intent | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| Services | ru | С чем можно прийти | ✅ Good | ✅ Full nav | ✅ | ⚠️ Weak (see below) |
| FAQ | he | שאלות שאנשים שואלים לפני שהם מתקשרים | ✅ Very strong — uses real search language | ✅ Full nav | ✅ | ✅ Decorative (empty alt is correct) |
| FAQ | ru | Вопросы, которые задают до того, как позвонить | ✅ Very strong | ✅ Full nav | ✅ | ✅ Decorative (empty alt is correct) |
| Contact | he | ❌ No H1 | — missing — | ✅ Full nav | ✅ (this is the page) | N/A |
| Contact | ru | ❌ No H1 | — missing — | ✅ Full nav | ✅ (this is the page) | N/A |

### Critical Finding: Missing H1 Tags

**About page** (`AboutSection.tsx`) renders the page opening as a `<p>` tag, with `<h2>` for section headings. There is no H1. This is an SEO gap — Google looks for an H1 to understand what the page is about.

**Contact page** (`ContactSection.tsx`) has no heading tags at all. The page is just a form with intro text.

**Fix needed in the developer sprint:**

For the **About page** — add an H1 above the opening paragraph. The H1 should be Sofia's name + title + location (the navigational keyword):

```tsx
// he locale
<h1 className="text-h1 font-semibold text-text">
  סופיה טרסוב — פסיכותרפיסטית בראשון לציון ואונליין
</h1>

// ru locale
<h1 className="text-h1 font-semibold text-text">
  София Тарасов — психотерапевт в Ришон-ле-Ционе и онлайн
</h1>
```

For the **Contact page** — add an H1 that matches the navigational intent:

```tsx
// he locale
<h1>צרו קשר | סופיה טרסוב, פסיכותרפיה</h1>

// ru locale  
<h1>Написать Софии Тарасов</h1>
```

Both should be passed as props from page.tsx — consistent with the component content strategy in technical-decisions.md.

### Image Alt Text

The services images currently use `alt={service.name}` — just the service name. That's functional but not optimized. The FAQ bird watercolor uses `alt=""`, which is correct for decorative images and should stay.

**Corrected alt text values:**

| Image | Current alt (he) | Suggested alt (he) |
|-------|-----------------|-------------------|
| `/images/sofia-hero.jpg` | סופיה טרסוב, פסיכותרפיסטית | סופיה טרסוב, פסיכותרפיסטית בראשון לציון |
| `/images/bird3.jpg` | טיפול פרטני | ציור מים של ציפור — טיפול פרטני אצל סופיה טרסוב |
| `/images/girl1.jpg` | חרדה ודאגה | ציור מים — טיפול בחרדה ובדאגה, פסיכותרפיה בראשון לציון |
| `/images/mountains-reflection.jpg` | דיכאון, אובדן וטראומה | ציור מים של הרים — טיפול בדיכאון, אובדן וטראומה |
| `/images/pair.png` | טיפול זוגי | ציור מים של זוג — טיפול זוגי, סופיה טרסוב |

| Image | Current alt (ru) | Suggested alt (ru) |
|-------|-----------------|-------------------|
| `/images/sofia-hero.jpg` | София Тарасов, психотерапевт | София Тарасов, психотерапевт в Ришон-ле-Ционе |
| `/images/bird3.jpg` | Индивидуальная терапия | Акварель — индивидуальная терапия у Софии Тарасов |
| `/images/girl1.jpg` | Тревога и беспокойство | Акварель — терапия тревоги, психотерапевт на русском |
| `/images/mountains-reflection.jpg` | Депрессия, утрата и травма | Акварель, горы — работа с депрессией, утратой и травмой |
| `/images/pair.png` | Парная терапия | Акварель — парная терапия, Ришон-ле-Цион |

**Implementation note:** The alt text for watercolor images is kept descriptive but natural — "акварель" (watercolor) and "ציור מים" contextualize the image honestly and include a relevant term. These images come from Sofia's art therapy practice, so naming them as artworks is accurate. Do not keyword-stuff — the current suggested values are the upper limit of what's natural.

---

## 4. Meta Title and Description Review

Only flagging pages that need updating. Pages not listed here are fine as-is.

| Page | Locale | Current | Issue | Suggested |
|------|--------|---------|-------|-----------|
| About | ru | **Title:** "Об Офии Тарасов \| Психотерапия в Ришон-ле-Ционе" | **Typo** — "Офии" should be "Офии" → "О Софии" | "О Софии Тарасов \| Психотерапия в Ришон-ле-Ционе" |
| Services | he | **Title:** "עם מה מגיעים \| סופיה טרסוב, פסיכותרפיה" | No location keyword — local searches won't find it | "עם מה מגיעים \| סופיה טרסוב, פסיכותרפיה בראשון לציון" |
| Services | ru | **Description:** "…психотерапия в Ришон-ле-Ционе и онлайн. С 16 лет." | No mention of Russian-language services — misses the primary differentiator for this locale | "София Тарасов работает с тревогой, депрессией, травмой и парами. Психотерапия на русском в Ришон-ле-Ционе и онлайн. С 16 лет." |

**Note on the About/ru typo:** This is the highest-priority fix. "Об Офии" reads as a completely different name in Russian and will confuse both users and search engines. Fix this before the next deployment.

All other pages (Home he/ru, About he, FAQ he/ru, Contact he/ru) have solid meta content that aligns well with the keyword strategy. No changes needed.

---

## 5. Google Search Console Setup

### Step 1 — Add the Property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with a Google account Sofia owns (create one dedicated to the practice if she doesn't have one)
3. Click **Add property** → choose **Domain** (not URL prefix — domain covers all protocols and subdomains)
4. Enter: `sofia-tarasov.com`
5. Click **Continue**

### Step 2 — Verify via DNS TXT Record (Vercel)

Google will show you a TXT record to add. It looks like:
`google-site-verification=xxxxxxxxxxxxxxxxxxx`

To add it via Vercel:
1. Go to [vercel.com](https://vercel.com) → your project → **Settings** → **Domains**
2. Click on `sofia-tarasov.com` → **Manage DNS Records**
3. Add a new record:
   - Type: `TXT`
   - Name: `@` (root domain)
   - Value: the full string Google gave you (paste exactly as shown)
   - TTL: Auto or 3600
4. Save the record
5. Wait 5–15 minutes for DNS propagation
6. Back in Google Search Console, click **Verify**

If verification fails, wait another 10 minutes and try again — DNS propagation varies.

### Step 3 — Submit the Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar → Indexing → Sitemaps)
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **Submit**

The full sitemap URL will be `https://sofia-tarasov.com/sitemap.xml` — auto-generated by next-sitemap. Google will crawl it and begin indexing all pages.

### Step 4 — What to Check

**Week 1:**
- Sitemaps → confirm status shows "Success" (not "Couldn't fetch")
- Coverage → check for crawl errors, especially on `/he/` and `/ru/` routes
- Confirm all 10 pages appear (5 pages × 2 locales): home, about, services, faq, contact

**Month 1:**
- Performance → Search results: what queries are bringing people in? Are they Hebrew or Russian? This data takes 2–4 weeks to populate
- Coverage → are all pages "Indexed"? If any show "Discovered – currently not indexed," click into the page and request indexing manually
- Check that the `hreflang` alternates (already wired in SEO.tsx) are being read correctly — no errors in the International Targeting report

---

## 6. Google Business Profile

### Step-by-Step Setup

1. Go to [business.google.com](https://business.google.com)
2. Click **Manage now** → sign in with the same Google account used for Search Console
3. Enter the business name: **סופיה טרסוב — פסיכותרפיה** (Hebrew first, as the primary listing language)
4. When asked "What category best describes your business?" → search for and select: **Psychotherapist** (פסיכותרפיסט)
5. For location: select "Yes, I have a physical location customers can visit" → enter the Rishon LeZion clinic address
6. Add phone number: `052-377-7865` (local format for Israeli listings)
7. Add website: `https://sofia-tarasov.com`
8. Choose verification method: Google typically offers postcard by mail (5–7 business days) or, for some accounts, video call verification. Postcard is the most common — request it and wait for the code

### What to Fill In (in order of importance)

- [ ] **Business name** — סופיה טרסוב — פסיכותרפיה
- [ ] **Category** — Psychotherapist (primary); Mental Health Service (additional)
- [ ] **Phone** — 052-377-7865
- [ ] **Website** — https://sofia-tarasov.com
- [ ] **Address** — full clinic address in Rishon LeZion
- [ ] **Service area** — Rishon LeZion, Tel Aviv District, Online (Israel-wide)
- [ ] **Hours** — clinic hours (ask Sofia for current schedule)
- [ ] **Business description** — use text below
- [ ] **Languages spoken** — Hebrew, Russian (explicitly)
- [ ] **Services** — Individual Therapy, Couples Therapy, Online Therapy, Art Therapy
- [ ] **Professional photo** — upload the same photo used as hero on the site
- [ ] **Additional photos** — 2–3 of the clinic space if available

### Business Description (Hebrew — primary listing language)

> אני סופיה טרסוב, פסיכותרפיסטית בראשון לציון עם למעלה מ-8 שנות ניסיון קליני. עובדת עם מבוגרים ובני נוער על חרדה, דיכאון, טראומה, אובדן ויחסים — פרונטלי ואונליין.
>
> גישתי האינטגרטיבית משלבת פסיכותרפיה אקזיסטנציאליסטית, עבודה פסיכודינמית, טיפול באמנות וגישה נרטיבית. אני עובדת לפי האדם שיושב מולי — לא לפי פרוטוקול.
>
> מציעה טיפול גם ברוסית — לדוברי רוסית בישראל שחיפשו מטפלת שמבינה את מה שנשמע ועמד לא רק מהפן הלשוני.
>
> הצעד הראשון הוא הודעת וואטסאפ. לא צריך לדעת מה בדיוק לומר.

_Translation for reference: "I'm Sofia Tarasov, a psychotherapist in Rishon LeZion with over 8 years of clinical experience. I work with adults and adolescents on anxiety, depression, trauma, loss, and relationships — in-person and online. My integrative approach combines existential psychotherapy, psychodynamic work, art therapy, and narrative therapy. I work with the person in front of me — not a protocol. I also offer therapy in Russian — for Russian speakers in Israel who were looking for a therapist who understands what was heard and remained unsaid — not only linguistically. The first step is a WhatsApp message. You don't need to know exactly what to say."_

**Why this text works:** It explicitly names Russian-language services in a way that Russian speakers searching for "פסיכותרפיסטית ברוסית" or simply reading the listing in Hebrew will immediately register. It uses Sofia's voice and avoids generic therapy-brochure language. The last two sentences match the CTA logic of the site — no pressure, no commitment.

---

## 7. Blog Content Plan

A blog is the highest-leverage content investment Sofia can make. The reasoning is simple: the site copy is fixed, but blog posts are how new pages get indexed for new search queries. Every post is a new entry point.

**Recommended format:** 500–800 words. Sofia's voice, first person when it suits her. No clinical jargon. Written as if explaining something to a friend who is hesitant about therapy. She should write in whichever language feels most natural for that topic — do not write in Hebrew and translate to Russian. They are separate pieces.

**Recommended frequency:** One post every 4–6 weeks. That's 8–12 posts in the first year. Consistency matters far more than volume.

### Hebrew Post Ideas

| Title | Who finds it | Why it works |
|-------|-------------|--------------|
| **מה קורה בפגישה הראשונה אצל פסיכולוגית — ומה אני לא צופה ממך** | Anyone who almost reached out but didn't. The hesitation before first contact. | "מה קורה בפגישה ראשונה" is a high-intent search phrase. Sofia's voice makes the answer feel personal, not clinical. |
| **חרדה לא אומרת שמשהו לא בסדר איתך — זה אומרת שמשהו עובד** | Adults who've normalized anxiety for years and aren't sure it "qualifies" as something worth treating. | Reframes the problem without dismissing it. Matches Sofia's integrative, humanizing approach. Positions anxiety as a signal, not a flaw. |
| **טיפול זוגי: לא מי צודק, אלא מה נוצר ביניכם** | Couples who have been in the same fight for years and aren't sure therapy can help. | "טיפול זוגי" is a searched term. The title subverts the most common fear about couples therapy (judgment, sides). Unique to Sofia's framing. |

### Russian Post Ideas

These are the higher-opportunity posts. The competitive landscape for Russian-language mental health content in Israel is nearly empty.

| Title | Who finds it | Why it works |
|-------|-------------|--------------|
| **Как найти психолога в Израиле: практическое руководство** | Any Russian-speaking person who has considered therapy but doesn't know how the system works in Israel. | "как найти психолога в израиле" is a direct search phrase with essentially zero competition. This post will rank. A practical tone (not emotional) works for the Russian-speaking audience. |
| **Я в тревоге — и я не знаю, с чего начать** | Someone who already knows something is wrong but doesn't know if it "warrants" therapy. | Mirrors the exact words from product-brain.md: "Я в тревоге." A post that starts with the reader's own words creates immediate recognition. Could be the most-read post on the site. |
| **Когда язык — это не просто язык: о терапии для тех, кто строил жизнь дважды** | Russian-speaking immigrants in Israel at any stage of their lives — recent arrival or 20 years in. | The phrase "строил жизнь дважды" (built life twice) comes from the brand strategy and is specific to this community. No other therapist in Israel is writing this content in Russian. This is a genuine competitive gap. |

**The Russian content advantage, stated plainly:** If Sofia publishes the three posts above, she will almost certainly be the only therapist in Israel appearing in search results for those Russian queries. That's not an exaggeration. The competition is effectively zero.

---

## 8. 90-Day Monitoring Plan

Sofia is a solo practitioner. One action per week is enough — this is not a marketing job, it's a practice. The plan below reflects that.

### Weeks 1–2: Verify

- [ ] Confirm Google Search Console shows "Success" on the sitemap
- [ ] Check Coverage report — are all 10 pages indexed (5 pages × 2 locales)?
- [ ] If any pages show errors, share them with the developer for a fix
- [ ] Verify the Google Business Profile listing is live and the description is correct
- [ ] Test the WhatsApp CTA on both mobile and desktop — this is the primary conversion

### Month 1: Review

- [ ] Open Search Console → Performance → check which queries are bringing impressions (even before clicks)
- [ ] Note: are queries coming in Hebrew or Russian? This tells you where the early organic traffic is coming from
- [ ] Check Google Business Profile — has it been viewed? Any actions (calls, website clicks)?
- [ ] Look at Google Analytics → which pages are getting traffic? Home is expected to dominate, but if /ru/ pages are getting traffic, that's a signal to invest there first
- [ ] One share: ask a colleague or professional contact to link to the site from their website or directory listing — even one early inbound link helps

### Months 2–3: Act

- [ ] By month 2, Search Console will have enough data to show real queries. Look for surprises — terms you didn't expect. Those are blog post ideas
- [ ] Write the first blog post. The highest-impact option based on current data: if Russian queries are showing up, write the first Russian post. If Hebrew queries dominate, start with "מה קורה בפגישה הראשונה"
- [ ] If the Google Business Profile has been verified, add Sofia's professional photo and update hours if anything has changed
- [ ] Check Core Web Vitals in Search Console (under Experience) — if any metrics are flagged as Poor, pass to developer
- [ ] Month 3 milestone: Sofia should have her first organic contact — someone who found the site through search rather than referral. That's when you'll know the foundation is working

---

_This document is a living reference. As Search Console data comes in, revisit the keyword strategy and blog plan to reflect what's actually working._
