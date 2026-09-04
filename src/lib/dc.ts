/* ══════════════════════════════════════════════════════════════════════════
   Design-canvas runtime shims.

   The v5.7 template leaned on two things the canvas runtime provided that
   plain React does not. Both are reproduced here with the same semantics as
   `support.js`, so the ported markup behaves identically.

     · pseudo-class styles — `style-hover="…"` / `style-active="…"` attributes.
       createPseudoSheet() minted one class per unique (pseudo, css) pair and
       appended an !important-ified rule to a single stylesheet. The
       !important matters: these rules have to beat the element's own inline
       style, which is where every base value on this page lives.

     · sc-for lists — non-arrays were coerced to empty rather than throwing.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── importantify(): append !important to each declaration, respecting
      strings, parens and unquoted url() so values are never split wrongly ── */
function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

/** Index just past an unquoted url(...) starting at i, or -1. */
function scanUnquotedUrl(css: string, i: number): number {
  if (css.slice(i, i + 4).toLowerCase() !== 'url(') return -1;
  let j = i + 4;
  while (j < css.length && /\s/.test(css[j])) j++;
  if (css[j] === '"' || css[j] === "'") return -1; // quoted: normal quote handling
  const close = css.indexOf(')', j);
  return close === -1 ? css.length : close + 1;
}

function importantify(input: string): string {
  const css = stripComments(input);
  const decls: string[] = [];
  let start = 0;
  let depth = 0;
  let quote = '';
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = '';
    } else if (c === "'" || c === '"') {
      quote = c;
    } else if (c === '(') {
      depth++;
    } else if (c === ')') {
      depth = Math.max(0, depth - 1);
    } else if (c === ';' && depth === 0) {
      decls.push(css.slice(start, i));
      start = i + 1;
    } else {
      const end = scanUnquotedUrl(css, i);
      if (end !== -1) i = end - 1;
    }
  }
  decls.push(css.slice(start));
  return decls
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => (/!\s*important$/i.test(d) ? d : d + ' !important'))
    .join(';');
}

/* ── the sheet ─────────────────────────────────────────────────────────── */
const cache = new Map<string, string>();
let sheetEl: HTMLStyleElement | null = null;
let n = 0;

function pseudoClass(pseudo: string, css: string): string {
  const k = pseudo + '|' + css;
  const hit = cache.get(k);
  if (hit) return hit;
  if (typeof document === 'undefined') return '';
  if (!sheetEl) {
    sheetEl = document.createElement('style');
    sheetEl.setAttribute('data-hs-pseudo', '');
    document.head.appendChild(sheetEl);
  }
  const cls = 'scp' + (n++).toString(36);
  const isPseudoElement = pseudo === 'before' || pseudo === 'after';
  const sel = isPseudoElement ? '.' + cls + '::' + pseudo : '.' + cls + ':' + pseudo;
  sheetEl.sheet?.insertRule(
    sel + '{' + (isPseudoElement ? css : importantify(css)) + '}',
    sheetEl.sheet.cssRules.length,
  );
  cache.set(k, cls);
  return cls;
}

/** `style-hover="…"` */
export const hv = (css: string) => pseudoClass('hover', css);
/** `style-active="…"` */
export const act = (css: string) => pseudoClass('active', css);
/** `style-focus="…"` */
export const foc = (css: string) => pseudoClass('focus', css);

/** Join class names, dropping empties — matches the runtime's className merge. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** `<sc-for list>`: anything that isn't an array renders nothing. */
export function toArray<T>(list: T[] | unknown): T[] {
  return Array.isArray(list) ? (list as T[]) : [];
}

/** The flat object the template renders against — `renderVals()` output. */
export type V = Record<string, any>;

/* ── data-lazysrc ──────────────────────────────────────────────────────────
   The canvas ran a small head script that copied `data-lazysrc` onto `src`
   once the binding had resolved, which is how the category tiles, moment
   cards, card deck, mega-menu promo and the 3D deal video get their sources.
   It watched for changes and also polled every 300ms; both are kept, because
   React re-renders those attributes as state moves.

   The rest of that script only did anything when `window.__resources` was
   set — the single-file export path, which remaps assets onto inlined blob
   URLs. Nothing in a normal build sets it, so it is left out. */
export function startLazySrc(): () => void {
  const apply = () => {
    document.querySelectorAll('[data-lazysrc]').forEach((el) => {
      const v = el.getAttribute('data-lazysrc');
      if (v && v.indexOf('{{') === -1 && el.getAttribute('src') !== v) {
        el.setAttribute('src', v);
      }
    });
  };
  const mo = new MutationObserver(apply);
  mo.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['data-lazysrc'],
  });
  apply();
  const timer = window.setInterval(apply, 300);
  return () => {
    mo.disconnect();
    clearInterval(timer);
  };
}
