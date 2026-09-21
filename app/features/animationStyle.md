# Scroll-reveal animation styles

Two interchangeable reveal styles, switched with a single variable per page.
Implemented in [`FeatureReveal.tsx`](./FeatureReveal.tsx).

---

## Switching the style

One line in the route's `page.tsx`:

```tsx
import type { AnimationStyle } from "./FeatureReveal";

const animationStyle: AnimationStyle = "stagger"; // or "simple"

export default function FeaturesPage() {
  return <FeaturesClient animationStyle={animationStyle} />;
}
```

The client shell wraps its tree in the provider:

```tsx
<AnimationStyleProvider value={animationStyle}>
  <main>…</main>
</AnimationStyleProvider>
```

Every `RevealGroup` / `RevealItem` / `RevealWords` below it reads the style from
context — nothing else needs touching.

> Set it in **both** locale routes (`app/features/page.tsx` and
> `app/nl/features/page.tsx`) so EN and NL stay in step.

---

## The two styles

### `simple`

The repo's original `Reveal` behaviour. Whole blocks fade up together — no
stagger, no scale, no blur. Use for dense or utilitarian pages where motion
should stay out of the way.

| Property | Value |
| --- | --- |
| Opacity | `0 → 1` |
| Y offset | `24px → 0` |
| Scale | none |
| Blur | none |
| Duration | `0.7s` |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Stagger | **none** — the group animates as one |
| Viewport trigger | `amount: 0` (as soon as any part enters) |

Under `simple`, `RevealItem` renders as a plain tag and `RevealWords` renders
plain text, so the parent group is the only thing that moves. Wrapping children
in `RevealItem` is therefore harmless — it just goes inert.

### `stagger`

Editorial / award-site treatment. Children arrive in sequence; headlines reveal
word by word from behind a mask.

| Property | Text items | Media (`media` prop) |
| --- | --- | --- |
| Opacity | `0 → 1` | `0 → 1` |
| Y offset | `34px → 0` | `40px → 0` |
| Scale | `0.96 → 1` | `0.94 → 1` |
| Blur | `8px → 0` | none |
| Duration | `0.9s` | `1.05s` |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` | same |

**Stagger amounts**

| Setting | Value | Meaning |
| --- | --- | --- |
| `staggerChildren` | `0.08s` | Gap between successive children |
| Word stagger | `0.045s` | Gap between headline words |
| Word duration | `0.85s` | Per-word rise |
| `delayChildren` | `0` default | Offset before the first child |
| Viewport trigger | `amount: 0.2` | 20% visible before it plays |

Media gets no blur and a longer settle so images don't shimmer.

---

## Components

| Component | Purpose |
| --- | --- |
| `RevealGroup` | Orchestrates a stagger. Props: `stagger`, `delay`, `amount`, `className` |
| `RevealItem` | One staggered child. Props: `as`, `media`, `className` |
| `RevealWords` | Per-word headline. Props: `text`, `accent`, `accentClassName` |

### Typical section

```tsx
<RevealGroup className="w-[52%]">
  <RevealItem as="p" className="kicker">{kicker}</RevealItem>

  <h2>
    <RevealWords text={heading} accent={headingAccent} accentClassName={accent} />
  </h2>

  <RevealItem as="p">{intro}</RevealItem>

  <ul>
    {items.map((item) => (
      <RevealItem as="li" key={item}>{item}</RevealItem>
    ))}
  </ul>
</RevealGroup>
```

Two columns — offset the second so it trails the first:

```tsx
<RevealGroup className="w-[52%]">…copy…</RevealGroup>

<RevealGroup delay={0.12} className="w-[48%]">
  <RevealItem media>
    <Thumbnail />
  </RevealItem>
</RevealGroup>
```

---

## Applying this to another page

1. Copy `FeatureReveal.tsx` (or import it — it is page-agnostic).
2. Add `const animationStyle: AnimationStyle = "stagger"` to the route's
   `page.tsx` and pass it to the client shell.
3. Wrap the shell's tree in `<AnimationStyleProvider value={animationStyle}>`.
4. Replace each old `<Reveal>` with `<RevealGroup>`.
5. Wrap the group's direct children in `<RevealItem>` — use `as` to keep
   semantic tags (`p`, `li`, `article`) and `media` for images and video tiles.
6. Use `<RevealWords>` on the section's main headline only. Applying it to body
   copy is slow and hurts readability.

### Tuning

- **Too slow overall** — lower `stagger` on the group (try `0.05`).
- **Long lists drag** — a column of 8 items at `0.08` finishes ~0.6s after the
  first. Either lower the stagger or leave the list outside the group.
- **Fires too early / late** — adjust `amount` (`0` = any part visible,
  `0.5` = half).
- **Second column should trail** — use `delay`, not a larger stagger.

### Reduced motion

Every component checks `useReducedMotion()`. When the user prefers reduced
motion, all three render static markup with no transforms in either style — no
extra handling needed at the call site.
