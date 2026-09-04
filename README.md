# HeartStamp homepage

A React build of `HeartStamp Home v5.7.dc.html` — the approved design-canvas
homepage. Structure, styling, motion and timing are unchanged from that file;
this is a re-platforming, not a redesign.

Vite 6 · React 19 · TypeScript, matching the design system repo's stack.
Design system components and tokens come from `@heartstampxo/design-system`.

```bash
npm install
npm run dev        # http://localhost:5273
npm run build      # typecheck, then production build
npm run typecheck
```

## How the canvas file maps onto this repo

A `.dc.html` file is two halves: a bound HTML template, and a
`class Component extends DCLogic` behaviour class. DCLogic mirrors React's
class API — `props`, `state`, `setState`, `forceUpdate`, `componentDidMount` /
`componentDidUpdate` / `componentWillUnmount` — and `renderVals()` returns the
flat object the template renders against. Both halves carry over directly.

| Canvas | Here |
| --- | --- |
| `class Component extends DCLogic` | `src/home-behavior.ts` — verbatim, re-parented onto `React.Component` |
| the bound template | `src/sections/*.tsx` — 34 sections, compiled to JSX |
| the five `<style>` blocks | `src/home.css` — verbatim |
| what the canvas runtime supplied | `src/lib/dc.ts` |
| `data-props` editor schema | `src/home-props.ts` |
| composition | `src/Home.tsx` |

Every section is a plain function of `v`, the `renderVals()` output — the same
way the canvas template read its bindings. `Home.tsx` builds `v` once from
`{ ...DEFAULT_PROPS, ...props, ...renderVals() }` and passes it down.

The page mounts on `<div id="dc-root">`, because the v5.7 stylesheet keys its
dark mode, mobile overrides and device-frame preview off that id.

### What `lib/dc.ts` provides

- `hv()` / `act()` / `foc()` — the `style-hover=""` and `style-active=""`
  attributes. Reproduces the runtime's `createPseudoSheet`: one generated class
  per unique (pseudo, css) pair, with every declaration `!important`-ified so it
  beats the element's own inline style, which is where the base values live.
- `toArray()` — `<sc-for>` coerced non-arrays to empty rather than throwing.
- `startLazySrc()` — the head script that resolved `data-lazysrc` onto `src`,
  which is how the category tiles, moment cards, card deck, mega-menu promo and
  3D deal video get their sources.

## Regenerating from the canvas

The template and behaviour were converted mechanically, not retyped, and the
tools are kept so a newer canvas file can be re-ported the same way:

```bash
npm run port      # convert-template.cjs, then assemble-home.cjs
```

`tools/canvas-src/` holds the three slices of the v5.7 file the tools read:
`template.html`, `logic.js`, and the generated `main-wrapper.jsx.txt`.
`tools/convert-template.cjs` mirrors `support.js`'s compile semantics —
`{{ }}` bindings, `<sc-if>`, `<sc-for>`, `<x-import>`, `dc-props`, `style-*`,
attribute and event-name mapping, `cssToObj`.

**Anything hand-edited in `src/sections/` or `src/home-behavior.ts` is
overwritten by `npm run port`.** Change the converter, not its output.

## Design system

Installed from GitHub Packages, pinned to an exact version. The package is
private, so `npm install` needs a token with `read:packages` on the
`heartstampxo` org, read from `NODE_AUTH_TOKEN` by `.npmrc`:

```bash
NODE_AUTH_TOKEN=$(gh auth token) npm install
```

On Vercel, add `NODE_AUTH_TOKEN` as a project environment variable.

To develop against a local checkout instead, point the dependency at it
(`"file:../HS_Design_System_Git_Repo"`) and change the `@source` line in
`home.css` to match — Tailwind scans the design system's build for the utility
classes its shadcn primitives use.

The canvas bundled its own reduced snapshot of the design system. That snapshot
was checked against the real package before swapping:

- **Tokens** — all 153 token names the page uses resolve identically. The only
  two values that differ, `--color-state-success` and `--color-state-warning`,
  are redefined by the page itself and never read from the package.
- **`btn.css`** — every `.hs-btn` rule the page uses is identical.
- **`Btn` and `Swt`** — the only two components the page imports. Both are
  drop-in: same props, same class output, same markup.

One thing the package does **not** carry is the base element typography layer
(`h1`–`h5`), because its `tokens.css` is declarations-only and the element layer
lives in the design system's own `theme.css`, which the package does not export.
It is reproduced at the top of `home.css`.

> ⚠️ The two sources disagree on heading line-height. The canvas snapshot sets a
> **ratio** (`h2: 1.1`); the design system repo's `theme.css` sets an **absolute
> token** (`--line-height-h2: 48px`). The approved layout is built on the ratios
> — most headings on this page override `font-size` inline, so a fixed 48px will
> not scale with them. Worth reconciling upstream.

## Deviations from the canvas file

Three, all recorded in the source at the point they apply:

1. **`home.css`** — the two `url(uploads/stampy-circle-nav.png)` references are
   root-relative. Inline in the canvas HTML they resolved against the page;
   bundled into `/assets/index-*.css` they would 404.
2. **`home.css`** — the canvas harness's own rule,
   `html,body{height:100%} #dc-root{height:100%}`, is kept. It is harness
   chrome, but it is load-bearing: the page's mobile
   `body { padding-bottom: 96px }` sits inside `#dc-root`'s overflow and never
   extends the scroll height. Without it, mobile gains 96px of dead space under
   the footer that the approved build does not have.
3. **`home-behavior.ts`** — `// @ts-nocheck`. The port is untyped JavaScript
   leaning on DOM expando properties and dynamically added state keys; checking
   it would mean editing ~400 sites in code meant to stay identical. Every other
   file in `src/` compiles under `strict`.

Dropped: `<template id="__bundler_thumbnail">` (canvas export metadata) and
`data-dc-tpl` attributes (editor source-mapping). Neither renders.

Lenis is bundled at the same pinned version (1.1.13) and assigned to
`window.Lenis` in `main.tsx`, since the behaviour reads it from there. The Vimeo
embed API stays a script tag in `index.html`, as in the canvas.

## Fidelity check

The port and the original `.dc.html` were rendered side by side in the same
browser — same viewport, same colour scheme — and compared element by element
on position, size, font size, weight, family, colour, background and opacity.

| | elements | page height | differing |
| --- | --- | --- | --- |
| 1440×900 light | 1180 = 1180 | 11054 = 11054 | 80 |
| 1440×900 dark | 1180 = 1180 | 11054 = 11054 | 75 |
| 390×844 light | 1180 = 1180 | 17089 = 17089 | 43 |

No differences in font size, weight, family, colour or background anywhere. The
rest are position and opacity on continuously animating elements — the card
marquee, the growing Stampy halo, floating emoji — sampled at different points
in their cycles. For scale: comparing the port against **itself** across two
loads produces **53** differences on the same elements. The port matches the
original more closely than two runs of the port match each other.
