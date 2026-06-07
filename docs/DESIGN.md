# Russo «Der Quartierladen» — Design System

> Visual foundation for the redesign prototype. Direction: **elevate, keep DNA** —
> a modern *editorial alimentari*. Warm, hand-curated, Italian; calm and confident,
> never corporate-restaurant-template. This file is the source of truth: the build
> reads these tokens, the offer shows this thinking.

## Locked decisions — Rustic but simple
**One-line identity:** *an old neighbourhood alimentari — austere white page, warm Marcellus serif, hand-drawn ink food, almost nothing else.*

- **Direction:** **Rustic but simple.** A refinement of the ink direction: warmer typography, more restraint, hand-drawn rules. Simple everywhere *except* the illustrations, which carry all the personality.
- **Base:** **flat white** `#FFFFFF` — no warm paper, no grain, no texture. Rustic comes from type + ink, not colour.
- **Corners:** **sharp — `border-radius: 0`** everywhere. (Rustic = texture/imperfection, not rounding.)
- **Headings:** **Marcellus** — warm, bookish old-style serif. No decorative underlines/scribbles on titles; keep them clean.
- **Wordmark:** **"Russo der Quartierladen"** — one line, Marcellus, **mixed case, minimal tracking**. Warm small-shop name, not a luxury lockup. "Russo" in ink, "der Quartierladen" in grey for gentle hierarchy. No all-caps, no wide spacing.
- **Body / UI:** **Work Sans** (400–600) for menus, buttons, labels, nav. **Marcellus** allowed for long-form prose (story/intro) only.
- **Rules / dividers:** **slightly irregular hand-drawn ink lines**, not crisp hairlines.
- **Colour:** black ink on white + amber, **used sparingly**. Lean on the deeper ochre `#A86F23` for rules/accents; reserve bright amber `#F4B86F` for occasional pops. **Never on buttons** — buttons are ink (solid or outline). No new colours.
- **Illustration:** dense ink illustrations for 2–4 focal moments + small line-art food sketches (focaccia, panini, sandwiches…), each alone in real whitespace. See §10.
- **Licensing:** Marcellus + Work Sans both SIL OFL 1.1 — cleared for commercial use, no attribution required. Self-host the woff2 files (perf + GDPR).

---

## 1. Brand principles
1. **Warmth over polish.** It should feel like a shop where you're greeted by name.
2. **Editorial, not e-commerce.** Generous whitespace, big photography, a printed-menu feel.
3. **Italian by detail.** Product names stay Italian (Cornetto ripieno, Pinse romane). Let language carry flavor.
4. **The passerby test.** Hours, address, and "what's for lunch" are never more than one glance away.

---

## 2. Color

Their real palette: a clean white-and-black base with one warm amber accent.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FFFFFF` | Primary background |
| `--paper-alt` | `#FBF7F1` | Warm off-white for alternating sections / cards |
| `--ink` | `#111111` | Primary text + primary buttons (softer than pure #000) |
| `--grey` | `#666666` | Secondary text, captions |
| `--sand` | `#F4B86F` | Signature accent — fills, highlights, accent buttons |
| `--sand-700` | `#A86F23` | Darkened amber for **accent text on white** (legible) |
| `--line` | `#EBEBEB` | Hairline borders, dividers |
| `--line-2` | `#C3C1C1` | Stronger rules, leader dots |

**Contrast (WCAG):** ink & grey on white = AA/AAA. The bright `--sand` is for **fills and large
elements only** — for accent *text* on white, always use `--sand-700`. On a `--sand` fill, use `--ink` text (amber + black passes).

---

## 3. Typography

- **Display / headings — `Marcellus` 400.** Single weight, **upright only — no italic, no bold.** Elegant, inscriptional. Emphasis via the ochre accent or size — never fake-bold or oblique.
- **Body / UI — `Work Sans` 400–600.** 600 for buttons, nav, labels; 400 for prose.
- **Long-form prose — `Work Sans` 400** (Marcellus has no italic and reads heavy at body length — keep prose in the sans).

**Scale** (base 16px). Headings use `clamp()` to scale down on mobile.

| Token | Size (clamp) | Line | Font / weight | Use |
|---|---|---|---|---|
| `display` | `clamp(2.8rem, 6.4vw, 4.6rem)` | 1.04 | Marcellus 400 | Hero headline |
| `h1` | `clamp(2.3rem, 5vw, 3.6rem)` | 1.08 | Marcellus 400 | Page title |
| `h2` | `clamp(1.8rem, 3.2vw, 2.5rem)` | 1.15 | Marcellus 400 | Section title |
| `h3` | `1.45rem` | 1.25 | Marcellus 400 | Menu group / sub-section |
| `lead` | `1.3rem` | 1.55 | Marcellus 400 | Intro paragraph (prose) |
| `body` | `1.0rem` | 1.6 | Work Sans 400 | Default UI text |
| `small` | `0.875rem` | 1.5 | Work Sans 400 | Captions, meta |
| `eyebrow` | `0.74rem` | 1.4 | Work Sans 600, tracking 0.18em, uppercase, `--sand-700` | Section labels |

**Wordmark:** one line — `Russo der Quartierladen` in Marcellus, mixed case, letter-spacing `.01em`.
"Russo" `--ink`, "der Quartierladen" `--grey`, same size (gentle hierarchy by colour, not size/caps).
Header ~1.5rem; shop-sign/cover larger. Warm and plain — it's a corner shop, not a fine-dining lockup.
Emphasis in headings via the ochre accent or size — never fake-bold or oblique (Marcellus has no italic).

---

## 4. Spacing, radius, elevation
- **Spacing (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Sections breathe — 96–128 vertical on desktop.
- **Radius:** `0` everywhere — sharp corners are part of the editorial direction. (No `--r-*` scale; the single rule is "no rounding.")
- **Shadow:** light. `--shadow-card: 0 1px 2px rgba(17,17,17,.05), 0 10px 30px rgba(17,17,17,.06)`. Prefer `--line` borders over heavy shadows — printed feel.

---

## 5. Buttons
**Buttons are ink only — never amber.** (Amber/ochre stays for tiny accents, rules, and labels, not fills people click.)
Shared: **square (radius 0)**, padding `12px 22px`, Work Sans 600, `.8rem`, **uppercase + `.08em` tracking** (shop-sign feel), 150ms ease.
Focus-visible: `outline: 2px solid var(--ink); outline-offset: 2px`.

| Variant | Default | Hover | Use |
|---|---|---|---|
| **Primary** | bg `--ink`, text white | bg #000 / translateY(1px) | Main CTA |
| **Outline** | transparent, 1.5px `--ink` border, text `--ink` | bg `--ink`, text white | Secondary / header ("Anfahrt") |
| **Ghost/Text** | text `--ink`, no bg | underline | Tertiary inline actions |
| **Disabled** | bg `--line`, text `--grey` | none | — |

Icon buttons (map, phone, IG): 44×44 min hit area, **square**, `--ink` icon, thin `--ink` border.

---

## 6. Links
- **Inline text link:** color `--ink`, underline `text-underline-offset: 3px`, `text-decoration-thickness: 1.5px`. Hover → color `--sand-700`.
- **Nav links:** Work Sans 500, `--ink`, no underline. Hover → 2px `--sand` underline animating in from left. Active page → persistent `--sand` underline.
- Min touch target 44px; underline (not color alone) conveys link-ness.

---

## 7. Menus

### A. Site navigation (header)
- Sticky, `--paper` bg, `--line` bottom border, subtle blur on scroll.
- Left: wordmark "RUSSO" in Marcellus. Right: nav links + an **Accent** "Anfahrt" button.
- Mobile: hamburger → full-screen `--ink` overlay, links in Marcellus large, centered.

### B. Food / price menu (printed-menu styling, not a table)
```
Panini caldi ........................ 9.50
  Mozzarella, Pomodoro, Basilico
```
- Item row: name (Work Sans 600, `--ink`) + leader dots (`--line-2`) + price (Work Sans 700, `--ink`).
- Description below: `small`, `--grey`, Italian terms kept as-is.
- Group headers ("Am Morgen", "Mittagshunger", "Aus dem Laden"): `h3` Marcellus `--ink` with a short `--sand` rule beneath.
- Chips ("Vegetarisch", "Neu"): **square**, thin `--line` border, `eyebrow` text.

---

## 8. Drop-in CSS tokens
```css
:root{
  /* color */
  --paper:#FFFFFF; --paper-alt:#FBF7F1; --ink:#111111; --grey:#666666;
  --sand:#F4B86F; --sand-700:#A86F23; --line:#EBEBEB; --line-2:#C3C1C1;

  /* type */
  --font-display:"Marcellus", Georgia, serif;
  --font-body:"Work Sans", system-ui, sans-serif;
  --display: clamp(2.6rem, 6vw, 4.2rem);
  --h1: clamp(2.2rem, 5vw, 3.4rem);
  --h2: clamp(1.7rem, 3.2vw, 2.4rem);

  /* shape — sharp editorial: no rounding anywhere */
  --r:0;
  --shadow-card:0 1px 2px rgba(17,17,17,.05), 0 10px 30px rgba(17,17,17,.06);

  /* spacing */
  --s1:.25rem; --s2:.5rem; --s3:.75rem; --s4:1rem; --s5:1.5rem;
  --s6:2rem; --s7:3rem; --s8:4rem; --s9:6rem; --s10:8rem;
}
```
For Tailwind, mirror these into `theme.extend.colors / fontFamily / borderRadius`.

---

## 9. Imagery & motion
- **Photos:** warm, close, real food (reuse their Instagram shots). Natural light, slightly warm. Generous whitespace around them.
- **Motion:** restrained — fade/slide-up on scroll (16–24px, 400ms), button press 150ms. Respect `prefers-reduced-motion`.
- **Texture (optional):** faint paper-warm grain on `--paper-alt` sections, ≤4% opacity, for the alimentari feel.

---

## 10. Illustration & sketches (signature device)
The hand-drawn ink art is the brand's strongest asset — it carries the personality.

- **Focal illustrations:** the dense cross-hatched ink pieces (e.g. the basket). Use for **2–4 hero moments** (hero, section openers). Let them **bleed off an edge** for energy. Store in `assets/` as transparent PNG (or SVG).
- **Spot sketches:** small, simple line-art of single items — focaccia, panini, sandwiches, espresso, olives. Use as scattered accents near related content (a panini sketch by the lunch menu, espresso by the hours). Lightweight SVG preferred.
- **Discipline > density.** Place sketches in **designed whitespace pockets**, never overlapping text or each other. Rule of thumb: ~1 focal + 1–2 spot sketches per viewport. Many-everywhere reads cluttered/flea-market; few-deliberate reads high-end alimentari.
- **Colour:** ink black line-art; the amber accent only for the occasional flourish (an arrow, a sprig), not whole sketches.
- **Performance:** focal PNGs optimized (<150KB each); spots as inline SVG so they cost nothing.
