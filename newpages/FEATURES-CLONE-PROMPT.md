# Clone `Growth Rocket Features.html` → Next.js + Tailwind + Framer Motion

## Objective

Convert `newpages/Growth Rocket Features.html` into a **pixel-perfect** Next.js route at
`app/features/`, built with **React + Tailwind CSS + Framer Motion**.

The rendered result must be visually indistinguishable from the source HTML at every
breakpoint — same spacing, same type scale, same colours, same fonts, same responsive
behaviour. "Close enough" is not the goal; pixel parity is.

---

## 1. Read these first

### The source file

`newpages/Growth Rocket Features.html` is **~13 MB** because every image is inlined as a
base64 data URI. **Do not read it top-to-bottom** — it will blow your context.

Strip the data URIs into a scratch copy first (13 MB → ~600 KB):

```bash
awk '{ gsub(/data:image\/[^")'"'"' ]{200,}/, "[[BASE64]]"); print }' \
  "newpages/Growth Rocket Features.html" > "$SCRATCH/features_stripped.html"
```

Then navigate the stripped copy:

| What | Where |
| --- | --- |
| Page markup (all 11 sections) | from **line 1823** |
| Section / fold CSS | **lines 1672–1820** |
| `:root` colour variables | **line 239** |
| `--fold-inset` definitions | **lines 146, 201** |

Use `Grep` with `multiline: true` to pull individual rule blocks. Many CSS lines are
minified and thousands of characters long — grep for the selector, don't read the line.

### The repo files you must reuse

| File | Why |
| --- | --- |
| `app/components/ui/Button.tsx` | The button you must reuse |
| `app/components/ui/ArrowIcon.tsx` | The arrow SVG + swap animation markup |
| `app/globals.css` **lines 190–380** | The `.btn` / `.btn-arrow` system — **read, never edit** |
| `app/components/Reveal.tsx` | The repo's existing scroll-reveal convention |
| `app/globals.css` **lines 155–175** | The `.fix` / `.fix-wide` container primitives — **read, never edit** |
| `app/layout.tsx` | Font wiring (`Inter`, `Bricolage_Grotesque`, `Poppins`) |
| `app/website-for-electricians/` | The `page.tsx` + `*Client.tsx` route pattern to copy |

---

## 2. Page structure — 11 sections

Reproduce these in order, preserving every `id` attribute (the in-page jump nav depends
on them):

| # | Source selector | Component |
| --- | --- | --- |
| 1 | `section.features-hero` | `FeaturesHero.tsx` |
| 2 | `section.features-intro#features` | `FeaturesIntro.tsx` |
| 3 | `#website .feature-fold.lavender` | `FeatureFold.tsx` *(reusable)* |
| 4 | `#appointments .feature-fold.reverse.white` | `FeatureFold` + props |
| 5 | `#enquiries .feature-fold.silver` | `FeatureFold` + props |
| 6 | `#quotes .feature-fold.reverse.deep` | `FeatureFold` + props |
| 7 | `#contacts .feature-fold.white` | `FeatureFold` + props |
| 8 | `#support .feature-fold.reverse.lavender` | `FeatureFold` + props |
| 9 | `section.workflow-fold` | `WorkflowFold.tsx` |
| 10 | `section.managed-fold` | `ManagedFold.tsx` |
| 11 | `#faq .features-faq` + `#closing-cta .features-cta` | `FeaturesFaq.tsx`, `FeaturesCta.tsx` |

The six `.feature-fold` sections share **one** layout that varies by two things:

- `reverse` — swaps the copy / image order
- tone — the background colour

Build **one** `FeatureFold` component driven by typed props. Do **not** copy-paste it six
times. Drive the six instances from a typed `const` array of content.

### Route files

```
app/features/page.tsx           → server component, exports `metadata`
app/features/FeaturesClient.tsx → "use client" shell, composes the 11 sections
app/features/<Section>.tsx      → one file per section component
```

Mirror the structure of `app/website-for-electricians/`.

---

## 3. Buttons — reuse the home page component exactly

The home page button is `app/components/ui/Button.tsx`. It renders
`<span className="btn__label">` plus `<ArrowIcon direction="up-right" />`, and the arrow's
two-slot swap animation is defined in `globals.css`.

### Rules

- **Import and use `Button`** from `app/components/ui/Button`. Do not write a new button
  component.
- **Do not re-implement the arrow SVG.** The path `M1 13L13 1M13 1H5M13 1V9` in
  `viewBox="-3 -3 20 20"` must come from the existing `ArrowIcon` component, via
  `Button`'s `arrow` prop.
- The hover behaviour must be **identical** to the home page:
  - slot one translates out to `(100%, -100%)` and fades to `opacity: 0`
  - slot two slides in from `(-100%, 100%)` to `(0, 0)` and fades to `opacity: 1`
  - transition `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)`, `opacity 0.25s ease-out`
  - the button itself scales to `1.03`
- **Only the colours change**, and they come from the Features page:

| Context | Background | Text | Hover |
| --- | --- | --- | --- |
| `.features-actions .button`, `.features-cta .button` | `#5b219f` | `#ffffff` | bg `#ffffff`, text `#0a0516` |
| `.features-sales-button` | `#0a0516` | `#e4fa65` | bg `#5b219f`, text `#ffffff` |
| `.pricing-teaser-price .button` | `#e4fa65` | `#0a0516` | — |

Apply these through `Button`'s `className` prop, e.g.:

```tsx
<Button
  href="/contact"
  arrow="up-right"
  className="bg-[#5b219f] text-white hover:bg-white hover:text-[#0a0516]"
>
  Get started
</Button>
```

`className` is appended after the variant class in `buildClass()`, so utilities win.
**Do not add new `.btn--*` variants to `globals.css`.**

---

## 4. Hard constraints

### CSS

- **No edits to `app/globals.css`.** Not one line. The `.btn` / `.btn-arrow` rules are
  consumed as-is.
- **No new `.css` or `.module.css` files.**
- **No inline `style={{ }}`.** One narrow exception: a background `url()` for an extracted
  image, only if no Tailwind arbitrary value can express it. Prefer `next/image` and avoid
  the exception entirely.
- **No `<style jsx>`, no `dangerouslySetInnerHTML`.**

### Layout

- **No CSS Grid.** No `grid`, `grid-cols-*`, `col-span-*`, `row-span-*`, `grid-flow-*`,
  `place-items-*`. The source uses `display: grid` in several folds — reproduce those
  layouts with **flexbox only**.
- **No `flex-1`, `flex-auto`, `flex-[0.5]`, `basis-*`**, or any fractional flex shorthand.
  Size every flex child with an explicit **width** utility: `w-[52%]`, `w-1/2`,
  `max-w-[820px]`, `w-full`. `shrink-0` / `grow-0` are acceptable as guards; `grow` with an
  implied fraction is not.
- **Containers use `.fix`.** No `max-w-7xl`, no `container`, no `mx-auto` as the centering
  mechanism for a section. Full-bleed `<section>` + inner `<div className="fix">`. See
  §5 "Section shell" for the full rule and the one documented exception.
- Everything else in pure Tailwind utilities. Arbitrary values are **encouraged** for exact
  fidelity — `w-[820px]`, `text-[clamp(39px,4.3vw,68px)]`, `rounded-[13px]`.

### Code quality

- TypeScript throughout. Typed props on every component. **No `any`.**
- No dead code, no commented-out blocks, no placeholder `TODO`s, no unused imports.
- Extract repeated markup into components or map over a typed data array. Content arrays
  (fold copy, FAQ items, jump-nav links) go in a typed `const` at the top of the file, or a
  small `data.ts`.
- Semantic HTML. Exactly one `<h1>` (in the hero); `<h2>` per section. Keep the section
  `id`s: `#features`, `#website`, `#appointments`, `#enquiries`, `#quotes`, `#contacts`,
  `#support`, `#faq`, `#closing-cta`.
- Meaningful names — `FeatureFold`, not `Section3`.
- Match the repo's existing comment density: sparse, only where non-obvious.

---

## 5. Fonts — must match exactly

The source uses two families:

- **Bricolage Grotesque** — all headings (`h1`, `h2`, `.feature-copy h2`, `.features-cta h2`)
- **Inter** — body copy, buttons, nav

Both are already wired in `app/layout.tsx` via `next/font` and exposed as Tailwind theme
tokens in `globals.css`:

```css
--font-bricolage: var(--font-bricolage), system-ui, sans-serif;
--font-sans:      var(--font-inter),     system-ui, sans-serif;
```

Use the `font-bricolage` and `font-sans` utilities.

- **Do not** add `<link>` tags to Google Fonts.
- **Do not** declare `font-family` anywhere.

### Heading scale (exact, from the source)

```css
font-size: clamp(39px, 4.3vw, 68px);
line-height: .99;
letter-spacing: -.055em;
```

→ `text-[clamp(39px,4.3vw,68px)] leading-[0.99] tracking-[-0.055em]`

### Section shell — use `.fix`, not width utilities

**This is a hard rule.** The repo already has a container primitive. Use it.

```css
/* globals.css:158 — Fixed content width. Sections are full-bleed; .fix centers content. */
.fix {
  width: 100%;
  max-width: var(--content-width);  /* 1180px */
  margin-inline: auto;
  padding-inline: 20px;
}
@media (min-width: 768px) {
  .fix { padding-inline: 0px; }
}

/* globals.css:173 — wider 1320px content area */
.fix-wide {
  padding-inline: max(clamp(20px, 4vw, 56px), calc((100% - 1320px) / 2));
}
```

#### Banned in this page

- `max-w-7xl`, `max-w-6xl`, `max-w-[1180px]`, or any `max-w-*` used to constrain a
  **section container**
- `mx-auto` used to centre a **section container**
- `container`
- hand-rolled `w-[min(calc(100%-28px),1920px)]` shells

#### Required instead

Every section follows the repo's **full-bleed outer / `.fix` inner** pattern: the `<section>`
carries the background colour and vertical padding and spans the full viewport; a child
`div.fix` centres the content.

```tsx
<section id="website" className="w-full bg-violet-98 py-[clamp(42px,6vw,86px)]">
  <div className="fix flex flex-col items-center gap-[28px]">
    {/* content */}
  </div>
</section>
```

This is exactly how the existing home sections do it — see
[`FeatureGrid.tsx:135`](app/components/sections/FeatureGrid.tsx#L135),
[`CTA.tsx:36`](app/components/sections/CTA.tsx#L36),
[`Evolution.tsx:472`](app/components/sections/Evolution.tsx#L472):

```tsx
<div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center gap-[28px]">
```

Follow that idiom. `max-w-*` / `mx-auto` are acceptable **only** in that documented
widening role alongside `fix` (as above), or on a text-measure element *inside* a `.fix`
container (e.g. `max-w-[800px]` on a headline). They are never the container mechanism
itself.

#### Reconciling with the source's rounded card shells

The source wraps each fold in a rounded full-width card:

```css
width: min(calc(100% - 28px), 1920px);
margin: 0 auto;
border-radius: 13px;
padding: clamp(42px, 6vw, 86px) var(--fold-inset);
```

`--fold-inset` is `clamp(28px, 5vw, 80px)` at desktop and `20px` in the narrow override —
verify both in the source.

Express that as **three** nested levels, so `.fix` still governs the content width:

1. **outer** `<section>` — full-bleed, transparent, holds the `id`
2. **card** `<div>` — the rounded tinted shell:
   `w-[calc(100%-28px)] max-w-[1920px] mx-auto rounded-[13px] py-[clamp(42px,6vw,86px)]`
   *(this is the one place `max-w` + `mx-auto` are correct — it is the source's literal
   card geometry, not a content container)*
3. **inner** `<div className="fix">` — centres the content at 1180px

Do **not** put the source's `--fold-inset` horizontal padding on the card and then also use
`.fix` inside it — that double-insets the content. Let `.fix` own the horizontal rhythm and
drop `--fold-inset`; only keep the card's vertical padding.

---

## 6. Colour palette

From the source's `:root` (line 239):

```
--gr-deep:      #0a0516
--gr-lime:      #e4fa65
--gr-brand-ink: #5b219f
--gr-lavender:  #f5f3ff
--gr-white:     #ffffff
--gr-text:      #0a0516
```

### Fold tones

| Class | Background | Notes |
| --- | --- | --- |
| `.feature-fold.lavender` | `#f5f3ff` | |
| `.feature-fold.white` | `#ffffff` | |
| `.feature-fold.silver` | `#eeeeee` | |
| `.feature-fold.deep` | `#0a0516` | light text (`#ffffff`) |

Some of these already exist as theme tokens in `globals.css` — `--color-haiti` is
`#0a0516`, `--color-violet-98` is `#f5f3ff`. **Prefer the existing token utility**
(`bg-haiti`, `bg-violet-98`) where the hex matches exactly; use arbitrary values
(`bg-[#e4fa65]`) otherwise. Verify the hex before substituting a token.

---

## 7. Responsive behaviour

Extract every `@media` query from the source and express it with Tailwind responsive
prefixes.

The source's breakpoints are **custom** — `max-width: 600px` and `max-width: 760px`, not
Tailwind's defaults. Use arbitrary variants to land on the same pixel values:

```
max-[600px]:text-[17px]
max-[760px]:w-[calc(100%-20px)]
[@media(min-width:761px)]:flex-row
```

Do **not** substitute Tailwind's `sm:` / `md:` where the pixel value would shift the
layout.

Known narrow-viewport overrides to carry across (from `@media (max-width: 600px)`):

- `.features-hero p` → `font-size: 17px`
- `.feature-jump-nav` → `margin-top: 26px`, links `font-size: 13px`
- `.feature-hub-intro` → `width: calc(100% - 20px)`, `padding: 28px 22px 6px`
- `.feature-fold` → `padding-block: 38px`
- `.managed-image` → `min-height: 280px`

Verify this list against the source — it is not necessarily exhaustive.

---

## 8. Framer Motion

`framer-motion` v12 is already in `package.json`. Import from `framer-motion`.

**Follow the repo's existing convention** in `app/components/Reveal.tsx`:

```tsx
const variants: Variants = {
  hidden: { opacity: 0, y: reduced ? 0 : y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.22, 1, 0.36, 1] },
  },
};
// initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}
```

Reuse `Reveal` directly where a plain fade-up is all that's needed, rather than
re-declaring variants in every section.

### Restraint

The source page is largely static. Keep motion subtle and purposeful:

- section fade-up on scroll into view
- FAQ accordion expand/collapse via `AnimatePresence` (see `app/components/sections/FAQ.tsx`)
- nothing that changes layout, shifts spacing, or breaks pixel parity with the source

**Always honour `useReducedMotion()`** — every animation must degrade to a no-op, exactly
as `Reveal` does.

Motion must never be the reason a measurement differs from the source.

---

## 9. Images

The source's images are inlined base64 data URIs. Extract each one to `public/features/`
as a real file (`.webp` / `.png` / `.jpg` as appropriate) and reference it with
`next/image`. Do not leave base64 in the JSX.

Set explicit `width` / `height` (or `fill` with a sized parent) so there is no layout shift.

---

## 10. Definition of done

- [ ] `app/features/` route renders all 11 sections in order, with the original `id`s
- [ ] Zero changes to `app/globals.css`
- [ ] Zero new CSS files, zero inline `style` (bar the documented image exception)
- [ ] Zero `grid`, `col-span`, `flex-1`, `flex-[0.5]`, `basis-*` — widths only
- [ ] Every section container is `.fix` — zero `max-w-7xl` / `container` / centering `mx-auto`
- [ ] Buttons import `Button`; arrow animation matches home page exactly; only colours differ
- [ ] Headings `font-bricolage`, body `font-sans`; no `font-family` declared anywhere
- [ ] Custom breakpoints (600px / 760px) preserved, not swapped for Tailwind defaults
- [ ] `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` succeeds
- [ ] Side-by-side against the source HTML at 1920px, 1280px, 760px, 600px, 375px —
      no visible difference
