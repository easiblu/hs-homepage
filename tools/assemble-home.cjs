const fs = require('fs');
const path = require('path');
const W = path.join(__dirname, 'canvas-src');
const APP = path.join(__dirname, '..', 'src');

const logic = fs.readFileSync(path.join(W, 'logic.js'), 'utf8').replace(/\n$/, '');
const wrapper = fs.readFileSync(path.join(W, 'main-wrapper.jsx.txt'), 'utf8').replace(/\n$/, '');

const lines = logic.split('\n');
if (lines[0].trim() !== 'class Component extends DCLogic {')
  throw new Error('unexpected logic header: ' + lines[0]);
if (lines[lines.length - 1].trim() !== '}')
  throw new Error('unexpected logic footer: ' + lines[lines.length - 1]);
const body = lines.slice(1, -1).join('\n');

const SECTIONS = [
  ['CookieBarMobile', 'cookie-bar-mobile'], ['MobileNav', 'mobile-nav'],
  ['CookieBarDesktop', 'cookie-bar-desktop'], ['GridOverlay', 'grid-overlay'],
  ['Preloader', 'preloader'], ['ChatSentinel', 'chat-sentinel'],
  ['StampyBubble', 'stampy-bubble'], ['StampyFab', 'stampy-fab'],
  ['StampyChat', 'stampy-chat'], ['BannerVideo', 'banner-video'],
  ['ChatTeaser', 'chat-teaser'], ['BottomGlass', 'bottom-glass'],
  ['Reminders', 'reminders'], ['AppPromo', 'app-promo'], ['PromoBar', 'promo-bar'],
  ['TopNav', 'top-nav'], ['HeroMobile', 'hero-mobile'], ['HeroDesktop', 'hero-desktop'],
  ['Categories', 'categories'], ['PrintedDigital', 'printed-digital'],
  ['Features', 'features'], ['Deals', 'deals'], ['Christmas', 'christmas'],
  ['MomentsBand', 'moments-band'], ['AppIos', 'app-ios'], ['Editor', 'editor'],
  ['Testimonials', 'testimonials'], ['PromptToArt', 'prompt-to-art'],
  ['WhyDifferent', 'why-different'], ['SeoCards', 'seo-cards'], ['Faq', 'faq'],
  ['Letterbox', 'letterbox'], ['Footer', 'footer'], ['Spotlight', 'spotlight'],
];
for (const [, f] of SECTIONS)
  if (!fs.existsSync(path.join(APP, 'sections', f + '.tsx')))
    throw new Error('missing section file: ' + f);

/* ── 1. props ─────────────────────────────────────────────────────────── */
fs.writeFileSync(path.join(APP, 'home-props.ts'), `/* Props for <Home />.

   These are the canvas file's \`data-props\` editor schema, one for one, and the
   defaults are that schema's defaults — so an unconfigured <Home /> renders
   exactly what the approved v5.7 canvas rendered.

   Two props the behaviour reads are not in the schema and so were always
   undefined on the canvas: \`slideDuration\` (the logic falls back to 8s) and
   \`iosTileIcons\`. Both are declared here so callers can set them. */

export type PreviewMode =
  | 'Desktop'
  | 'iPhone SE — 375×667'
  | 'iPhone 12 Pro — 390×844'
  | 'iPhone 14 Pro Max — 430×932'
  | 'Pixel 7 — 412×915'
  | 'Galaxy S8+ — 360×740'
  | 'Narrow — 320';

export interface HomeProps {
  /** Device frame for responsive review. 'Desktop' renders with no frame. */
  previewMode?: PreviewMode;
  /** 12-column layout overlay. */
  showGrid?: boolean;
  showLoader?: boolean;
  preloaderStyle?: 'Two-layer' | 'Counter';
  /** Show the preloader once per browser session rather than on every load. */
  sessionOnce?: boolean;
  exitDirection?: 'Bottom' | 'Top' | 'Left' | 'Right';
  showPromoBar?: boolean;
  showAskStampy?: boolean;
  /** Vimeo id or url for the 3D deal card. Empty falls back to the local mp4. */
  deal3dVideo?: string;
  /** Hero slide dwell time in seconds. Defaults to 8. */
  slideDuration?: number;
  /** Optional icon overrides for the iOS feature tiles. */
  iosTileIcons?: unknown;
}

export const DEFAULT_PROPS: HomeProps = {
  previewMode: 'Desktop',
  showGrid: false,
  showLoader: true,
  preloaderStyle: 'Two-layer',
  sessionOnce: false,
  exitDirection: 'Bottom',
  showPromoBar: true,
  showAskStampy: true,
  deal3dVideo: '',
};
`);

/* ── 2. behaviour: the canvas class, verbatim ─────────────────────────── */
fs.writeFileSync(path.join(APP, 'home-behavior.ts'), `/* ══════════════════════════════════════════════════════════════════════════
   HeartStamp homepage — behaviour.

   This is \`class Component extends DCLogic\` from \`HeartStamp Home v5.7.dc.html\`,
   carried over line for line. Only the class header changed: DCLogic mirrors
   React's class API exactly — props, state, setState, forceUpdate,
   componentDidMount / componentDidUpdate / componentWillUnmount — so
   re-parenting it onto React.Component was the whole port. \`renderVals()\`
   still returns the flat object the markup renders against; Home.tsx feeds it
   to the JSX in src/sections.

   Preloader, Lenis smooth scroll, the IntersectionObserver reveal cascade,
   marquee, typewriter, hero slides, mega menu, notification swipe, nav
   auto-hide, Stampy chat, spotlight search and the cookie bar all live here.

   ── Why @ts-nocheck ──────────────────────────────────────────────────────
   The port is untyped JavaScript that leans on DOM expando properties
   (\`el.__rv\`, \`el.__vObs\`), on \`querySelectorAll\` results used as
   HTMLElements, and on state keys added as it goes. Type-checking it would
   mean editing roughly 400 sites in code that is meant to stay identical to
   the approved build, so checking is off for this file alone. Every other
   file in src/ — Home.tsx, all 34 sections, lib/, main.tsx — compiles under
   \`strict\`. Nothing outside this file is exempt.
   ══════════════════════════════════════════════════════════════════════════ */
// @ts-nocheck
import React from 'react';
import type { HomeProps } from './home-props';

export class HomeBehavior extends React.Component<HomeProps, any> {
${body}
}
`);

/* ── 3. composition ───────────────────────────────────────────────────── */
/* The main wrapper can reference design-system components directly — the mobile
   profile sheet lives there, outside the transformed header. Collect any
   capitalised tag that is not one of our sections and import it. */
/* …and the same for lib/dc helpers the wrapper's own markup may need. */
const dcHelpers = ['hv', 'act', 'foc', 'cx', 'toArray'].filter((h) => new RegExp('\\b' + h + '\\(').test(wrapper));

const sectionNames = new Set(SECTIONS.map(([n]) => n));
const dsUsed = [...new Set(
  [...wrapper.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)].map((m) => m[1]).filter((n) => !sectionNames.has(n) && n !== 'React'),
)].sort();

fs.writeFileSync(path.join(APP, 'Home.tsx'), `/* ══════════════════════════════════════════════════════════════════════════
   HeartStamp homepage.

   A React port of \`HeartStamp Home v5.7.dc.html\`, the approved design-canvas
   build — same structure, same styling, same motion and timing.

   The canvas format split a page in two: a bound HTML template, and a
   behaviour class. Both halves are preserved:

     · behaviour  → home-behavior.ts   (the class, verbatim)
     · template   → sections/*.tsx     (the markup, compiled to JSX)
     · styling    → home.css           (the five <style> blocks, verbatim)
     · runtime    → lib/dc.ts          (what the canvas provided, React doesn't)

   Every section is a plain function of \`v\`, the \`renderVals()\` output, which
   is how the canvas template read its bindings too.
   ══════════════════════════════════════════════════════════════════════════ */
${dcHelpers.length ? `import { ${dcHelpers.join(', ')} } from './lib/dc';\n` : ''}import type { V } from './lib/dc';
import { HomeBehavior } from './home-behavior';
import { DEFAULT_PROPS } from './home-props';
import './home.css';

${dsUsed.length ? `import { ${dsUsed.join(', ')} } from '@heartstampxo/design-system/hs';\n` : ''}${SECTIONS.map(([n, f]) => `import { ${n} } from './sections/${f}';`).join('\n')}

export type { HomeProps, PreviewMode } from './home-props';

export class Home extends HomeBehavior {
  render() {
    /* The canvas rendered its template against \`{ ...props, ...renderVals() }\`. */
    const v: V = { ...DEFAULT_PROPS, ...this.props, ...this.renderVals() };
    return (
      <>
        {CookieBarMobile(v)}
${wrapper.split('\n').map((l) => '    ' + l).join('\n')}
        {MobileNav(v)}
        {CookieBarDesktop(v)}
      </>
    );
  }
}

export default Home;
`);

const n = f => fs.readFileSync(path.join(APP, f), 'utf8').split('\n').length;
console.log('home-props.ts   ', n('home-props.ts'), 'lines');
console.log('home-behavior.ts', n('home-behavior.ts'), 'lines');
console.log('Home.tsx        ', n('Home.tsx'), 'lines');
