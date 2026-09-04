/* ══════════════════════════════════════════════════════════════════════════
   Design-canvas template -> JSX converter.

   Mirrors support.js compile semantics exactly:
     {{ path }}                -> member expression, optional-chained like resolvePath()
     <sc-if value>             -> cond ? <>..</> : null
     <sc-for list as>          -> toArray(list).map((as, $index) => ..)
     <x-import ...NS.Name>     -> <Name .../>, wrapped in div.sc-host-x when it
                                  carried a style attr (only positional props survive,
                                  else display:contents) — see hostPositionStyle()
     dc-props="{{ o }}"        -> {...o}
     style-hover/-active/-focus-> hv()/act()/foc() pseudo-sheet classes
     style="a: b; c: {{ d }}"  -> style object, one expression per declaration
     class->className, for->htmlFor, on* -> React event names (EVENT_MAP)
     hint-*, sc-name, data-dc-tpl -> dropped (editor-only plumbing)
   ══════════════════════════════════════════════════════════════════════════ */
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const W = path.join(__dirname, 'canvas-src');
const OUT = path.join(__dirname, '..', 'src', 'sections');
const SRC = fs.readFileSync(path.join(W, 'template.html'), 'utf8').replace(/<\/x-dc>\s*$/, '');

/* ---------- support.js constants ---------- */
const EVENT_MAP = {
  onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit',
  onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onkeypress: 'onKeyPress',
  onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter',
  onmouseleave: 'onMouseLeave', onfocus: 'onFocus', onblur: 'onBlur',
  ondoubleclick: 'onDoubleClick', oncontextmenu: 'onContextMenu', onmousemove: 'onMouseMove',
  onmouseover: 'onMouseOver', onmouseout: 'onMouseOut', onpointerdown: 'onPointerDown',
  onpointerup: 'onPointerUp', onpointermove: 'onPointerMove', onpointerenter: 'onPointerEnter',
  onpointerleave: 'onPointerLeave', onpointercancel: 'onPointerCancel',
  onpointerover: 'onPointerOver', onpointerout: 'onPointerOut',
  ontouchstart: 'onTouchStart', ontouchend: 'onTouchEnd', ontouchmove: 'onTouchMove',
  ontouchcancel: 'onTouchCancel', ondragstart: 'onDragStart', ondragend: 'onDragEnd',
  ondragenter: 'onDragEnter', ondragleave: 'onDragLeave', ondragover: 'onDragOver',
  onanimationstart: 'onAnimationStart', onanimationend: 'onAnimationEnd',
  onscroll: 'onScroll', onwheel: 'onWheel', onload: 'onLoad', onerror: 'onError',
  ontransitionend: 'onTransitionEnd', onplay: 'onPlay', onpause: 'onPause',
  onended: 'onEnded', ontimeupdate: 'onTimeUpdate', oncanplay: 'onCanPlay',
  onloadeddata: 'onLoadedData', onvolumechange: 'onVolumeChange',
};
const VOID_TAGS = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
const RAW_WRAP = { select: 'sc-raw-select', table: 'sc-raw-table', tbody: 'sc-raw-tbody',
  thead: 'sc-raw-thead', tfoot: 'sc-raw-tfoot', tr: 'sc-raw-tr', td: 'sc-raw-td',
  th: 'sc-raw-th', caption: 'sc-raw-caption' };
const RAW_UNWRAP = Object.fromEntries(Object.entries(RAW_WRAP).map(([k, v]) => [v, k]));
const HOST_STYLE_PROPS = new Set(['position', 'left', 'right', 'top', 'bottom', 'inset',
  'width', 'height', 'z-index', 'transform']);
const CAMEL_ATTR = 'sc-camel-';
const PSEUDO_FN = { hover: 'hv', active: 'act', focus: 'foc' };
/* Attributes the source spells the HTML way. React sets these through its own
   camelCase prop, producing the identical DOM attribute — and without the
   "did you mean tabIndex?" warning the canvas build logged. */
const ATTR_MAP = { tabindex: 'tabIndex', fetchpriority: 'fetchPriority',
  maxlength: 'maxLength', minlength: 'minLength', readonly: 'readOnly',
  autocomplete: 'autoComplete', autofocus: 'autoFocus', spellcheck: 'spellCheck',
  colspan: 'colSpan', rowspan: 'rowSpan', enterkeyhint: 'enterKeyHint',
  inputmode: 'inputMode', novalidate: 'noValidate', crossorigin: 'crossOrigin' };
/* Hyphenated SVG presentation attributes. React emits the hyphenated attribute
   from its camelCase prop, so the rendered SVG is identical and it stops
   warning "Invalid DOM property `stroke-width`". */
const SVG_ATTR_MAP = { 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset', 'stroke-opacity': 'strokeOpacity',
  'stroke-miterlimit': 'strokeMiterlimit', 'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
  'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor', 'dominant-baseline': 'dominantBaseline',
  'vector-effect': 'vectorEffect', 'paint-order': 'paintOrder' };
/* React types these as numbers; the source writes them as strings. Emitting the
   number renders the same attribute value. */
const NUMERIC_PROPS = new Set(['rows', 'cols', 'tabIndex', 'span', 'maxLength',
  'minLength', 'colSpan', 'rowSpan', 'start']);

const kebabToCamel = s => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

/* ---------- parse ---------- */
function encodeCase(html) {
  html = html.replace(/<(x-import|dc-import)((?:[^>"']|"[^"]*"|'[^']*')*?)\/>/g,
    (_, t, a) => '<' + t + a + '></' + t + '>');
  html = html.replace(/(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g,
    (_, sp, name, eq) => sp + CAMEL_ATTR + name.replace(/[A-Z]/g, c => '-' + c.toLowerCase()) + eq);
  for (const [real, alias] of Object.entries(RAW_WRAP))
    html = html.replace(new RegExp('(</?)' + real + '(?=[\\s>])', 'gi'), '$1' + alias);
  return html;
}
const dom = new JSDOM('<!doctype html><body><template id="t"></template>');
const tplEl = dom.window.document.getElementById('t');
tplEl.innerHTML = encodeCase(SRC);
const ROOT = tplEl.content;

/* ---------- binding expressions ---------- */
const scopes = [];
const inScope = n => scopes.some(s => s.has(n));
let curUses = new Set();          // DS components referenced by the section being emitted

function expr(src) {
  const e = String(src).trim();
  if (!e) return 'undefined';
  if (e === 'true' || e === 'false' || e === 'null' || e === 'undefined') return e;
  if (/^-?(?:\d+\.?\d*|\.\d+)$/.test(e)) return e;
  if (/^".*"$|^'.*'$/.test(e)) return JSON.stringify(e.slice(1, -1));
  const m = /^([A-Za-z_$][A-Za-z0-9_$]*)((?:\.[A-Za-z0-9_$]+)*)$/.exec(e);
  if (!m) throw new Error('unsupported binding expression: ' + e);
  const rest = m[2] ? m[2].slice(1).split('.') : [];
  const base = inScope(m[1]) ? m[1] : 'v.' + m[1];
  return rest.length ? base + rest.map(p => '?.' + p).join('') : base;
}

const HOLE = /\{\{([\s\S]+?)\}\}/;
function valueExpr(raw) {
  const whole = /^\s*\{\{([\s\S]+?)\}\}\s*$/.exec(raw);
  if (whole) return { kind: 'expr', code: expr(whole[1]) };
  if (!HOLE.test(raw)) return { kind: 'literal', code: raw };
  const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
  const body = parts.map((s, i) => i & 1
    ? '${' + expr(s) + ' ?? ""}'
    : s.replace(/[\\`$]/g, c => '\\' + c)).join('');
  return { kind: 'expr', code: '`' + body + '`' };
}

/* ---------- style ---------- */
function declList(raw) {
  const out = [];
  for (const decl of raw.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    out.push([prop, decl.slice(i + 1).trim()]);
  }
  return out;
}
function objLiteral(pairs) {
  // cssToObj assigned into an object, so a repeated property kept its LAST
  // value. A JS object literal behaves the same at runtime but TS rejects the
  // duplicate key, so collapse them here — same result, no duplicate.
  const seen = new Map();
  for (const [prop, rawVal] of pairs) seen.set(prop, rawVal);
  pairs = [...seen.entries()];
  if (!pairs.length) return null;
  const body = pairs.map(([prop, rawVal]) => {
    const key = prop.startsWith('--') ? prop : kebabToCamel(prop);
    const name = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
    const v = valueExpr(rawVal);
    return name + ': ' + (v.kind === 'expr' ? v.code : JSON.stringify(v.code));
  }).join(', ');
  return '{ ' + body + ' }';
}
const styleObject = raw => objLiteral(declList(raw));
const hostPositionStyle = raw => objLiteral(declList(raw).filter(([p]) => HOST_STYLE_PROPS.has(p)));

/* ---------- emit ---------- */
const IND = n => '  '.repeat(n);
/* JSX text collapses a newline plus its indentation into a single space, which
   would rewrap the copy inside the page's `white-space: pre-line` blocks. Any
   run carrying a newline is therefore emitted as a string expression, where the
   characters survive exactly; single-line runs stay plain JSX text so the
   markup keeps reading like markup. */
const jsxText = t => t.includes('\n')
  ? '{' + JSON.stringify(t) + '}'
  : t.replace(/[{}<>]/g, c => ({ '{': '{"{"}', '}': '{"}"}', '<': '{"<"}', '>': '{">"}' }[c]));

function attrParts(el, kind) {
  const props = [];
  const spreads = [];
  const pseudos = [];
  let classExpr = null;
  let styleRaw = null;

  for (const at of [...el.attributes]) {
    let key = at.name;
    const raw = at.value;
    if (key === 'sc-name' || key === 'data-dc-tpl') continue;
    if (key.startsWith(CAMEL_ATTR)) key = kebabToCamel(key.slice(CAMEL_ATTR.length));
    if (key.startsWith('hint-')) continue;
    if (key.startsWith('style-')) {
      const fn = PSEUDO_FN[key.slice(6)];
      if (!fn) throw new Error('unsupported pseudo: ' + key);
      pseudos.push(fn + '(' + JSON.stringify(raw) + ')');
      continue;
    }
    if (kind === 'x-import') {
      if (['component', 'componentFromGlobalScope', 'component-from-global-scope',
        'from', 'src', 'import'].includes(key)) continue;
      if (key === 'style') { styleRaw = raw; continue; }
      if (key.includes('-') && !key.startsWith('aria-') && !key.startsWith('data-'))
        key = kebabToCamel(key);
      if (key === 'dcProps') { spreads.push(valueExpr(raw).code); continue; }
      const v = valueExpr(raw);
      props.push([key, v.kind === 'expr' ? '{' + v.code + '}' : JSON.stringify(v.code)]);
      continue;
    }
    if (key === 'class') {
      const v = valueExpr(raw);
      classExpr = v.kind === 'expr' ? v.code : JSON.stringify(v.code);
      continue;
    }
    if (key === 'style') { styleRaw = raw; continue; }
    if (key === 'for') key = 'htmlFor';
    else if (key.startsWith('on')) key = EVENT_MAP[key] || 'on' + key[2].toUpperCase() + key.slice(3);
    else if (ATTR_MAP[key]) key = ATTR_MAP[key];
    else if (SVG_ATTR_MAP[key]) key = SVG_ATTR_MAP[key];
    const v = valueExpr(raw);
    if (NUMERIC_PROPS.has(key) && v.kind === 'literal' && /^-?\d+$/.test(v.code.trim())) {
      props.push([key, '{' + v.code.trim() + '}']);
      continue;
    }
    props.push([key, v.kind === 'expr' ? '{' + v.code + '}' : JSON.stringify(v.code)]);
  }
  return { props, spreads, pseudos, classExpr, styleRaw };
}

function classNameSrc(classExpr, pseudos) {
  if (!pseudos.length) return classExpr;
  if (!classExpr && pseudos.length === 1) return pseudos[0];
  return 'cx(' + (classExpr ? [classExpr, ...pseudos] : pseudos).join(', ') + ')';
}

/* nodes promoted to their own section function: node -> export name */
const SPLIT = new Map();

function walkChildren(node, ind) {
  const out = [];
  for (const c of node.childNodes) {
    const s = walk(c, ind);
    if (s != null) out.push(s);
  }
  return out;
}

function walk(node, ind) {
  if (SPLIT.has(node)) return IND(ind) + '{' + SPLIT.get(node) + '(v)}';
  if (node.nodeType === 3) return walkTextNode(node, ind);
  if (node.nodeType !== 1) return null;
  const el = node;
  const tag = el.tagName.toLowerCase();
  if (tag === 'sc-for') return walkFor(el, ind);
  if (tag === 'sc-if') return walkIf(el, ind);
  if (tag === 'x-import') return walkXImport(el, ind);
  if (tag === 'template') return null;   // __bundler_thumbnail: canvas export metadata
  return walkElement(el, ind);
}

function walkTextNode(node, ind) {
  /* Mirrors support.js walkText(): a text node is dropped only when it is
     whitespace that contains no space character (bare newlines between tags).
     Anything else was emitted raw, and the browser collapsed it — which is how
     the single space survives in `Meet the <span>…</span> greeting card`.
     JSX strips whitespace around newlines, so those spaces are written back
     explicitly as {" "}. Whitespace-only text is never rendered as a flex or
     grid item, so this is safe inside the page's flex layouts. */
  const txt = node.nodeValue ?? '';
  const gap = (s) => (s.includes(' ') ? '{" "}' : '');
  if (!txt.includes('{{')) {
    if (!txt.trim()) return txt.includes(' ') ? IND(ind) + '{" "}' : null;
    return IND(ind) + (/^\s/.test(txt) ? '{" "}' : '') + jsxText(txt.trim())
      + (/\s$/.test(txt) ? '{" "}' : '');
  }
  const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
  let body = '';
  parts.forEach((s, i) => {
    if (i & 1) { body += '{' + expr(s) + '}'; return; }
    if (!s) return;
    if (!s.trim()) { body += gap(s); return; }
    body += (/^\s/.test(s) ? '{" "}' : '') + jsxText(s.trim()) + (/\s$/.test(s) ? '{" "}' : '');
  });
  return body ? IND(ind) + body : null;
}

function walkIf(el, ind) {
  const cond = valueExpr(el.getAttribute('value') || '');
  const code = cond.kind === 'expr' ? cond.code : JSON.stringify(cond.code);
  const kids = walkChildren(el, ind + 2);
  if (!kids.length) return null;
  return IND(ind) + '{' + code + ' ? (\n' + IND(ind + 1) + '<>\n'
    + kids.join('\n') + '\n' + IND(ind + 1) + '</>\n' + IND(ind) + ') : null}';
}

function walkFor(el, ind) {
  const list = valueExpr(el.getAttribute('list') || '');
  const listCode = list.kind === 'expr' ? list.code : JSON.stringify(list.code);
  const as = el.getAttribute('as') || 'item';
  scopes.push(new Set([as, '$index']));
  const kids = walkChildren(el, ind + 2);
  scopes.pop();
  return IND(ind) + '{toArray(' + listCode + ').map((' + as + ': any, $index: number) => (\n'
    + IND(ind + 1) + '<React.Fragment key={$index}>\n'
    + kids.join('\n') + '\n'
    + IND(ind + 1) + '</React.Fragment>\n'
    + IND(ind) + '))}';
}

function walkXImport(el, ind) {
  const name = (el.getAttribute('component-from-global-scope') || '').split('.').pop();
  if (!name) throw new Error('x-import without a resolvable component name');
  curUses.add(name);
  const { props, spreads, pseudos, classExpr, styleRaw } = attrParts(el, 'x-import');
  if (pseudos.length) throw new Error('style-* on x-import is not supported by the runtime');
  const kids = walkChildren(el, ind + 1);
  const attrs = props.map(([k, v]) => k + '=' + v).concat(spreads.map(s => '{...' + s + '}'));
  if (classExpr) attrs.push('className={' + classExpr + '}');
  const open = '<' + name + (attrs.length ? ' ' + attrs.join(' ') : '');
  const inner = kids.length
    ? open + '>\n' + kids.join('\n') + '\n' + IND(ind) + '</' + name + '>'
    : open + ' />';
  /* The runtime wrapped every x-import in a div.sc-host-x — the wrap condition
     was `tplId != null || style != null`, and tplId is set on every node — so
     the wrapper is always there. It generates no box (display: contents) but it
     is still a node in the tree, which is what the page's child-combinator
     selectors were authored against. Kept, so selector matching is identical. */
  const hostStyle = (styleRaw != null && hostPositionStyle(styleRaw)) || "{ display: 'contents' }";
  return IND(ind) + '<div className="sc-host-x" style={' + hostStyle + '}>\n'
    + IND(ind + 1) + inner.replace(/\n/g, '\n  ') + '\n' + IND(ind) + '</div>';
}

function walkElement(el, ind) {
  const tag = RAW_UNWRAP[el.tagName.toLowerCase()] || el.tagName.toLowerCase();
  const { props, pseudos, classExpr, styleRaw } = attrParts(el, 'dom');
  const attrs = [];
  const cls = classNameSrc(classExpr, pseudos);
  if (cls) attrs.push('className={' + cls + '}');
  if (styleRaw != null) {
    const so = styleObject(styleRaw);
    if (so) attrs.push('style={' + so + '}');
  }
  for (const [k, v] of props) attrs.push(k + '=' + v);
  const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';
  const kids = VOID_TAGS.has(tag) ? [] : walkChildren(el, ind + 1);
  if (!kids.length) return IND(ind) + '<' + tag + attrStr + ' />';
  const oneLine = kids.length === 1 && !kids[0].includes('\n')
    && IND(ind).length + attrStr.length + kids[0].length < 150;
  if (oneLine) return IND(ind) + '<' + tag + attrStr + '>' + kids[0].trim() + '</' + tag + '>';
  return IND(ind) + '<' + tag + attrStr + '>\n' + kids.join('\n') + '\n' + IND(ind) + '</' + tag + '>';
}

/* ══════════════ section plan ══════════════ */
const top = [...ROOT.childNodes].filter(n => n.nodeType === 1);
const main = top[1];
const mainKids = [...main.childNodes].filter(n => n.nodeType === 1);
const momentKids = [...mainKids[21].childNodes].filter(n => n.nodeType === 1);

/* [node, file, exportName, one-line description] */
const SECTIONS = [
  [top[0],        'cookie-bar-mobile',  'CookieBarMobile',  'Mobile cookie consent bar'],
  [top[2],        'mobile-nav',         'MobileNav',        'Bottom tab bar, mobile only, revealed on scroll'],
  [top[3],        'cookie-bar-desktop', 'CookieBarDesktop', 'Desktop cookie consent bar'],

  [mainKids[0],   'grid-overlay',       'GridOverlay',      '12-column layout overlay (showGrid prop)'],
  [mainKids[2],   'preloader',          'Preloader',        'Two-layer / counter preloader and its exit'],
  [mainKids[3],   'chat-sentinel',      'ChatSentinel',     '115vh sentinel that arms the Stampy chat reveal'],
  [mainKids[4],   'stampy-bubble',      'StampyBubble',     'Stampy tip bubble above the FAB'],
  [mainKids[5],   'stampy-fab',         'StampyFab',        'Floating Stampy button'],
  [mainKids[6],   'stampy-chat',        'StampyChat',       'Glass chat panel: conversations, suggestions, composer'],
  [mainKids[7],   'banner-video',       'BannerVideo',      'Full-bleed video banner with sound toggle'],
  [mainKids[8],   'chat-teaser',        'ChatTeaser',       'Inline chat teaser with typewriter line'],
  [mainKids[9],   'bottom-glass',       'BottomGlass',      'Progressive-blur glass strip pinned to the viewport foot'],
  [mainKids[10],  'reminders',          'Reminders',        'Reminders sidebar sheet'],
  [mainKids[11],  'app-promo',          'AppPromo',         'Dismissible app promo card'],
  [mainKids[12],  'promo-bar',          'PromoBar',         'Top promo bar with marquee'],
  [mainKids[13],  'top-nav',            'TopNav',           'Sticky header: nav, mega menu, notifications, language'],
  [mainKids[14],  'hero-mobile',        'HeroMobile',       'Mobile hero stack'],
  [mainKids[15],  'hero-desktop',       'HeroDesktop',      'Desktop hero'],
  [mainKids[16],  'categories',         'Categories',       'Explore by category rail'],
  [mainKids[17],  'printed-digital',    'PrintedDigital',   'Printed vs digital comparison'],
  [mainKids[18],  'features',           'Features',         'Tabbed card feature carousel'],
  [mainKids[19],  'deals',              'Deals',            "This week's top deals"],
  [mainKids[20],  'christmas',          'Christmas',        'Christmas in July band'],

  [momentKids[0],  'moments-band',      'MomentsBand',      'Whatever the moment, there\'s a card'],
  [momentKids[1],  'app-ios',           'AppIos',           'HeartStamp on iOS, three-up device row'],
  [momentKids[2],  'editor',            'Editor',           'Advanced editor showcase'],
  [momentKids[3],  'testimonials',      'Testimonials',     'Customer quote carousel'],
  [momentKids[4],  'prompt-to-art',     'PromptToArt',      'Type the feeling, watch a prompt become art'],
  [momentKids[5],  'why-different',     'WhyDifferent',     'Why we are different, nine-cell grid'],
  [momentKids[6],  'seo-cards',         'SeoCards',         'Cards and gifts made easy, SEO copy block'],
  [momentKids[7],  'faq',               'Faq',              'FAQ accordion groups'],
  [momentKids[8],  'letterbox',         'Letterbox',        'Someone\'s letterbox is waiting'],
  [momentKids[9],  'footer',            'Footer',           'Site footer: columns, payments, socials'],
  [mainKids[22],   'spotlight',         'Spotlight',        'Command-K spotlight search overlay'],
];
for (const [node, , name] of SECTIONS) SPLIT.set(node, name);

/* ---------- emit section files ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

function emit(node, file, name, desc) {
  SPLIT.delete(node);                    // so its own body inlines
  curUses = new Set();
  const body = walk(node, 2);
  SPLIT.set(node, name);
  const usesLoop = /React\.Fragment/.test(body);
  const helpers = ['V'];
  if (/\bhv\(/.test(body)) helpers.push('hv');
  if (/\bact\(/.test(body)) helpers.push('act');
  if (/\bfoc\(/.test(body)) helpers.push('foc');
  if (/\bcx\(/.test(body)) helpers.push('cx');
  if (/\btoArray\(/.test(body)) helpers.push('toArray');
  const named = ['type V'].concat(helpers.slice(1));
  const imports = [];
  if (usesLoop) imports.push("import React from 'react';");
  if (curUses.size) imports.push(`import { ${[...curUses].sort().join(', ')} } from '@heartstampxo/design-system/hs';`);
  imports.push(`import { ${named.join(', ')} } from '../lib/dc';`);
  // a section whose root is <sc-if>/<sc-for> compiles to a {…} JSX expression,
  // so every section returns a fragment — layout-neutral, always valid.
  const src = `/* ${desc}
   Ported verbatim from \`HeartStamp Home v5.7.dc.html\`. */
${imports.join('\n')}

export function ${name}(v: V) {
  return (
    <>
${body}
    </>
  );
}
`;
  fs.writeFileSync(path.join(OUT, file + '.tsx'), src);
  return { file, name, lines: src.split('\n').length };
}

const emitted = SECTIONS.map(([node, file, name, desc]) => emit(node, file, name, desc));

/* ---------- emit the main wrapper Home.tsx renders ---------- */
// main wrapper (top[1]) and the moment wrapper (mainKids[21]) keep their own attributes
const mainWrapper = walk(main, 2);
fs.writeFileSync(path.join(W, 'main-wrapper.jsx.txt'), mainWrapper);

console.log('sections emitted:', emitted.length);
console.log(emitted.map(e => `  ${e.file}.tsx  (${e.lines} lines)  ${e.name}`).join('\n'));
console.log('\nmain wrapper written to main-wrapper.jsx.txt');
