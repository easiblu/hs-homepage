/* ══════════════════════════════════════════════════════════════════════════
   HeartStamp homepage — behaviour.

   This is `class Component extends DCLogic` from `HeartStamp Home v5.7.dc.html`,
   carried over line for line. Only the class header changed: DCLogic mirrors
   React's class API exactly — props, state, setState, forceUpdate,
   componentDidMount / componentDidUpdate / componentWillUnmount — so
   re-parenting it onto React.Component was the whole port. `renderVals()`
   still returns the flat object the markup renders against; Home.tsx feeds it
   to the JSX in src/sections.

   Preloader, Lenis smooth scroll, the IntersectionObserver reveal cascade,
   marquee, typewriter, hero slides, mega menu, notification swipe, nav
   auto-hide, Stampy chat, spotlight search and the cookie bar all live here.

   ── Why @ts-nocheck ──────────────────────────────────────────────────────
   The port is untyped JavaScript that leans on DOM expando properties
   (`el.__rv`, `el.__vObs`), on `querySelectorAll` results used as
   HTMLElements, and on state keys added as it goes. Type-checking it would
   mean editing roughly 400 sites in code that is meant to stay identical to
   the approved build, so checking is off for this file alone. Every other
   file in src/ — Home.tsx, all 34 sections, lib/, main.tsx — compiles under
   `strict`. Nothing outside this file is exempt.
   ══════════════════════════════════════════════════════════════════════════ */
// @ts-nocheck
import React from 'react';
import type { HomeProps } from './home-props';

export class HomeBehavior extends React.Component<HomeProps, any> {
  state = { videoStarted: false, videoPlaying: false, slide: 0, cycle: 0, px: 0, py: 0 };
  remLock() {
    if (this._remUnlock) return;
    const html = document.documentElement;
    const prevGutter = html.style.scrollbarGutter;
    const prevOverflow = html.style.overflow;
    html.style.scrollbarGutter = "stable";
    html.style.overflow = "hidden";
    const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
    const keys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);
    const onKey = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); this.rem_close(); return; }
      if (keys.has(e.key)) stop(e);
    };
    const opts = { passive: false, capture: true };
    window.addEventListener("wheel", stop, opts);
    window.addEventListener("touchmove", stop, opts);
    window.addEventListener("keydown", onKey, opts);
    this._remUnlock = () => {
      html.style.scrollbarGutter = prevGutter;
      html.style.overflow = prevOverflow;
      window.removeEventListener("wheel", stop, opts);
      window.removeEventListener("touchmove", stop, opts);
      window.removeEventListener("keydown", onKey, opts);
      this._remUnlock = null;
    };
  }
  remUnlock() { if (this._remUnlock) this._remUnlock(); }
  rem_close() {
    this.remUnlock();
    this.setState({ remIn: false });
    this._remT = setTimeout(() => this.setState({ remOn: false }), 460);
  }
  runLoader() {
    let seen = false;
    if (this.props.sessionOnce) { try { seen = sessionStorage.getItem("hs-preloader") === "seen"; } catch (e) {} }
    if (this.props.showLoader === false || seen) { this.setState({ ldGone: true, chatOn: true, chatSettled: true }); return; }
    this._ldT = [];
    const at = (ms, fn) => this._ldT.push(setTimeout(fn, ms));

    // scroll lock: event trap, no layout shift
    const html = document.documentElement;
    html.style.scrollbarGutter = "stable";
    html.style.overflow = "hidden";
    const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
    const keys = new Set(["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "]);
    const onKey = (e) => { if (keys.has(e.key)) stop(e); };
    const opts = { passive: false, capture: true };
    window.addEventListener("wheel", stop, opts);
    window.addEventListener("touchmove", stop, opts);
    window.addEventListener("keydown", onKey, opts);
    this._unlock = () => {
      html.style.overflow = "";
      window.removeEventListener("wheel", stop, opts);
      window.removeEventListener("touchmove", stop, opts);
      window.removeEventListener("keydown", onKey, opts);
    };

    if ((this.props.preloaderStyle || "Two-layer") === "Two-layer") {
      at(1150, () => this.finishLoader());
      return;
    }
    // Slow-Step / Slow-Warp timeline
    const steps = 5, revealTime = 2200, startDelay = 150;
    const weights = Array.from({ length: steps }, (_, i) => 1 + Math.sin((i / (steps - 1)) * Math.PI) * 1.35);
    const wSum = weights.reduce((a, b) => a + b, 0);
    const moveBudget = revealTime * 0.78, holdBudget = revealTime * 0.22;
    let acc = 0;
    const segs = weights.map((w, i) => {
      const share = w / wSum, last = i === steps - 1;
      acc += share * 100;
      return {
        from: last ? Math.min(99, Math.round(acc - share * 100)) : Math.min(99, Math.round(acc - share * 100)),
        to: last ? 100 : Math.min(99, Math.round(acc)),
        dur: last ? moveBudget * share * 0.55 : moveBudget * share,
        hold: last ? 0 : (holdBudget / (steps - 1)) * (0.6 + (i / steps) * 0.8),
      };
    });
    const bez = (t) => { // cubic-bezier(0.16, 1, 0.3, 1) approx via Newton on x
      let u = t;
      for (let i = 0; i < 5; i++) {
        const x = 3 * (1 - u) * (1 - u) * u * 0.16 + 3 * (1 - u) * u * u * 0.3 + u * u * u;
        const dx = 3 * (1 - u) * (1 - u) * 0.16 + 6 * (1 - u) * u * (0.3 - 0.16) + 3 * u * u * (1 - 0.3);
        u -= (x - t) / (dx || 1e-4);
        u = Math.min(1, Math.max(0, u));
      }
      return 3 * (1 - u) * (1 - u) * u * 1 + 3 * (1 - u) * u * u * 1 + u * u * u;
    };
    let idx = 0, segStart = null;
    const tick = (now) => {
      if (this._ldDone) return;
      const seg = segs[idx];
      if (segStart === null) segStart = now;
      const t = Math.min(1, (now - segStart) / seg.dur);
      const v = seg.from + (seg.to - seg.from) * bez(t);
      if (Math.round(v) !== this.state.ldPct) this.setState({ ldPct: Math.round(v) });
      if (t < 1) { this._raf = requestAnimationFrame(tick); return; }
      idx += 1;
      if (idx >= segs.length) { this.finishLoader(); return; }
      segStart = null;
      this._ldT.push(setTimeout(() => { this._raf = requestAnimationFrame(tick); }, seg.hold));
    };
    at(startDelay, () => { this._raf = requestAnimationFrame(tick); });
  }
  finishLoader() {
    this._ldDone = true;
    if (this.props.sessionOnce) { try { sessionStorage.setItem("hs-preloader", "seen"); } catch (e) {} }
    this.setState({ ldPct: 100, ldExit: true });
    if (this._unlock) this._unlock();
    this._ldT.push(setTimeout(() => this.setState({ chatOn: true }), 700));
    this._ldT.push(setTimeout(() => this.setState({ chatSettled: true }), 1500));
    this._ldT.push(setTimeout(() => this.setState({ ldGone: true }), 1080));
    this._ldT.push(setTimeout(() => { if (this._revealGo) this._revealGo(); }, 780));
  }
  initLazyMedia() {
    // attach off-screen video sources only when they are about to be seen
    const attach = (v) => {
      const src = v.getAttribute("data-vsrc");
      if (!src) return;
      v.removeAttribute("data-vsrc");
      v.preload = "auto";
      v.src = src;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    this._vIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        this._vIO.unobserve(e.target);
        attach(e.target);
      });
    }, { rootMargin: "1400px 0px" });
    this._scanVideos = () => document.querySelectorAll("video[data-vsrc]").forEach((v) => {
      if (v.__vObs) return;
      v.__vObs = true;
      this._vIO.observe(v);
    });
    this._scanVideos();
    this._vScan = setInterval(this._scanVideos, 800);
  }
  initMotion() {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia && window.matchMedia("(hover: none)").matches;
    // --- smooth scroll (Lenis) ---
    if (!reduce && !touch && window.Lenis && !this._lenis) {
      this._lenis = new window.Lenis({ duration: 0.25, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true, smoothTouch: false });
      const raf = (time) => { this._lenis.raf(time); this._lenisRaf = requestAnimationFrame(raf); };
      this._lenisRaf = requestAnimationFrame(raf);
    }
    // --- staggered reveals ---
    if (reduce || this._revealIO) return;
    const DUR = 950, DIST = 56, EASE = "cubic-bezier(0.22, 1, 0.36, 1)", STEP = 130;
    const skip = (el) => !!(el.hasAttribute && (el.hasAttribute("data-no-reveal") || el.closest("[data-no-reveal]")));
    const prep = (el, delay, idx) => {
      if (el.__rv) return false;
      // never adopt an element whose opacity/transition is authored by the design (hero crossfade)
      if (skip(el)) { el.__rv = true; return false; }
      const io = el.style && el.style.opacity;
      if (io !== "" && io !== "1") { el.__rv = true; return false; }
      if (el.style && el.style.transition && el.style.transition.indexOf("opacity") > -1) { el.__rv = true; return false; }
      el.__rv = true;
      el.style.opacity = "0";
      // each successive item starts a little lower — reads as a diagonal cascade
      el.style.transform = "translateY(" + (DIST + Math.min(idx || 0, 9) * 8) + "px)";
      el.style.transition = "opacity " + DUR + "ms " + EASE + " " + delay + "ms, transform " + DUR + "ms " + EASE + " " + delay + "ms";
      el.style.willChange = "opacity, transform";
      return true;
    };
    const show = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      setTimeout(() => {
        el.style.willChange = "auto";
        // drop the reveal transition so it can't leak into hover states
        el.style.transition = "";
        el.style.transform = "";
      }, DUR + 500);
    };
    this._revealIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const host = e.target;
        this._revealIO.unobserve(host);
        if (host.hasAttribute("data-no-reveal") || host.closest("[data-no-reveal]")) return;
        if (host.hasAttribute("data-reveal-stagger")) {
          Array.prototype.forEach.call(host.children, (c) => show(c));
        } else {
          show(host);
        }
      });
    }, { threshold: [0, 0.1], rootMargin: "0px 0px -12% 0px" });
    // failsafe: if an observer callback never fires, nothing may stay invisible
    clearTimeout(this._revealFailsafe);
    clearInterval(this._revealFailsafe);
    // scoped to what is actually on screen — a blanket sweep would pre-reveal the
    // whole page a few seconds after load, so nothing below the fold ever animates
    this._revealFailsafe = setInterval(() => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((host) => {
        const r = host.getBoundingClientRect();
        if (r.top >= vh || r.bottom <= 0) return;
        if (host.hasAttribute("data-reveal-stagger")) {
          Array.prototype.forEach.call(host.children, (c) => {
            if (!c.style || c.style.opacity !== "0") return;
            // a tall stacked host (mobile single column) can be "in view" while most of
            // its cards are still far below — only force the ones actually on screen
            if (host.__rvSolo) { const cr = c.getBoundingClientRect(); if (cr.top >= vh || cr.bottom <= 0) return; }
            show(c);
          });
        } else if (host.style && host.style.opacity === "0") {
          show(host);
        }
      });
    }, 1500);
    // anything already inside the viewport on load reveals after one paint of its start state
    this._inView = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      return r.top < vh && r.bottom > 0;
    };
    // the first cascade must wait for the preloader to clear the page,
    // otherwise it plays behind the loader and the user only sees the end state
    this._revealReady = new Promise((res) => {
      let done = false;
      this._revealGo = () => { if (!done) { done = true; setTimeout(res, 120); } };
      if (this.state.ldGone || this._ldDone || this.props.showLoader === false) this._revealGo();
      setTimeout(this._revealGo, 5000);
    });
    this._revealNow = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (r.top >= vh || r.bottom <= 0) return;
      this._revealIO.unobserve(el);
      if (el.hasAttribute("data-reveal-stagger")) Array.prototype.forEach.call(el.children, (c) => show(c));
      else show(el);
    };
    this._scanReveal = () => {
      document.querySelectorAll("[data-reveal-stagger]").forEach((host) => {
        if (host.__rvHost) return;
        if (skip(host)) { host.__rvHost = true; host.removeAttribute("data-reveal-stagger"); return; }
        host.__rvHost = true;
        let i = 0;
        Array.prototype.forEach.call(host.children, (c) => { if (prep(c, i * STEP, i)) i++; });
        // On phones a 3-up grid becomes one tall column: observing the host means all
        // nine cards fire the moment its top edge appears, so everything is already
        // revealed by the time you scroll to it. Taller than the viewport → observe
        // each child on its own so each card animates as it comes in.
        const tall = host.getBoundingClientRect().height > (window.innerHeight || 800) * 0.85;
        if (tall) {
          host.__rvSolo = true;
          Array.prototype.forEach.call(host.children, (c) => {
            if (!c.style || c.style.opacity !== "0") return;
            c.style.transform = "translateY(" + DIST + "px)";
            c.style.transition = "opacity " + DUR + "ms " + EASE + ", transform " + DUR + "ms " + EASE;
            if (this._inView(c)) this._revealReady.then(() => { if (this._inView(c)) show(c); });
            else this._revealIO.observe(c);
          });
          return;
        }
        if (this._inView(host)) this._revealReady.then(() => this._revealNow(host));
        else this._revealIO.observe(host);
      });
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (el.__rv) return;
        prep(el, 0);
        if (this._inView(el)) this._revealReady.then(() => this._revealNow(el));
        else this._revealIO.observe(el);
      });
    };
    // auto-tag section content rows that were not tagged by hand
    this._autoTag = () => {
      const root = document.querySelector("#dc-root > div > div") || document.querySelector("#dc-root");
      if (!root) return;
      Array.prototype.forEach.call(root.children, (section) => {
        if (section.__rvScan) return;
        section.__rvScan = true;
        const r = section.getBoundingClientRect();
        if (r.height < 120) return; // skip bars, overlays
        if (getComputedStyle(section).position === "fixed") return;
        if (section.querySelector("[data-reveal-stagger],[data-reveal]")) return;
        if (section.querySelector("[data-no-reveal]") || section.closest("[data-no-reveal]")) return;
        // prefer inner grid container, else the section itself
        // never animate the section shell itself — find the deepest wrapper
        // that actually holds the repeated/stacked content
        let host = section;
        for (let d = 0; d < 4; d++) {
          if (host.children.length >= 2) break;
          const only = host.children[0];
          if (!only || only.tagName === "IMG" || only.tagName === "VIDEO") break;
          host = only;
        }
        if (host === section || host.children.length < 2) {
          const inner = section.querySelector(":scope > div");
          if (!inner) return;
          host = inner.children.length >= 2 ? inner : inner;
        }
        if (!host || host.children.length < 1) return;
        host.setAttribute("data-reveal-stagger", "");
      });
    };
    this._autoTag();
    this._scanReveal();
    this._revealScan = setInterval(() => { this._autoTag(); this._scanReveal(); }, 600);
  }
  MEGA_MENUS() {
    if (this._megaMenus) return this._megaMenus;
    const c = (title, items) => ({ title, items: items.map((t) => ({ t })) });
    const styles = ["Cute", "Funky", "Giant", "Multi Photo Upload", "Create Own", "Premium Cards", "Traditional", "Trending", "Romantic"];
    this._megaMenus = {
      "Bday": {
        filters: ["Photo Cards", "Top Picks", "Special Offers", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Mum", "For Dad", "For Kids", "For Friends", "For Daughter", "For Son", "A to Z of Recipients"]),
          c("By Age", ["1st Birthday", "10 th Birthday", "13 th Birthday", "18 th Birthday", "21 th Birthday", "30 th Birthday", "40 th Birthday", "50 th Birthday", "All Ages"]),
          c("Customize Styles", styles),
          c("Most Popular", ["Top Picks", "New Designs", "Top Suggestions", "Birthday By Month", "Milestone"]),
        ],
      },
      "Congrats": {
        filters: ["Photo Cards", "New Job", "Big Wins", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Friends", "For Colleague", "For Team", "For Family", "For Couples"]),
          c("By Milestone", ["New Job", "Promotion", "New Home", "Engagement", "Driving Test", "Retirement", "Exam Results"]),
          c("Customize Styles", ["Confetti", "Bold Type", "Photo Collage", "Minimal", "Create Own", "Premium Cards", "Gold Foil"]),
          c("Most Popular", ["Top Picks", "New Designs", "Work Wins", "Life Wins", "Group Signed"]),
        ],
      },
      "Thank you": {
        filters: ["Handwritten", "Same Day Post", "Top Picks", "Bulk Orders"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Friends", "For Family", "For Teachers", "For Colleague", "For Neighbours"]),
          c("By Reason", ["Gifts", "Hospitality", "Kindness", "Wedding Gifts", "Support", "Mentoring", "Just Because"]),
          c("Customize Styles", ["Minimal", "Floral", "Handwriting", "Photo Upload", "Create Own", "Premium Cards", "Gold Foil"]),
          c("Most Popular", ["Top Picks", "New Designs", "Packs of Ten", "Business Thanks", "Thank You Notes"]),
        ],
      },
      "Cards for Kids": {
        filters: ["Photo Cards", "Age 0-12", "Activity Cards", "Special Cards"],
        cols: [
          c("By Recipient", ["For Daughter", "For Son", "For Grandchild", "For Niece", "For Nephew", "For Classmates", "For Godchild"]),
          c("By Moment", ["Birthday", "Well Done", "First Day", "Sports Day", "Sleepover", "Get Well", "Tooth Fairy"]),
          c("Customize Styles", ["Cartoon", "Storybook", "Dinosaurs", "Animals", "Create Own", "Sticker Sheets", "Colour In"]),
          c("Most Popular", ["Top Picks", "New Designs", "Age 1-5", "Age 6-9", "Age 10-12"]),
        ],
      },
      "Anniversary": {
        filters: ["Photo Cards", "Milestone Years", "Special Offers", "Handwritten"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Wife", "For Husband", "For Partner", "For Parents", "For Couples"]),
          c("By Year", ["1st Year", "5th Year", "10th Year", "20th Year", "25th Silver", "40th Ruby", "50th Golden", "All Years"]),
          c("Customize Styles", ["Elegant", "Romantic", "Photo Collage", "Minimal", "Create Own", "Premium Cards", "Gold Foil"]),
          c("Most Popular", ["Top Picks", "New Designs", "First Anniversary", "Milestone", "Renewal Vows"]),
        ],
      },
      "Wedding": {
        filters: ["Save The Dates", "Invitations", "On The Day", "Bespoke"],
        cols: [
          c("By Recipient", ["For The Couple", "For Bride", "For Groom", "For Friends", "For Daughter", "For Son", "For Guests"]),
          c("By Moment", ["Engagement", "Save The Date", "Invitation", "Wedding Day", "Hen & Stag", "Renewal Vows", "Thank You"]),
          c("Customize Styles", ["Monogram", "Script", "Botanical", "Art Deco", "Create Own", "Premium Cards", "Gold Foil"]),
          c("Most Popular", ["Top Picks", "New Designs", "Wedding Suites", "Letterpress", "Luxe Stock"]),
        ],
      },
      "Thinking of you": {
        filters: ["Handwritten", "Same Day Post", "Top Picks", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Partner", "For Friend", "For Family", "For Colleague"]),
          c("By Tone", ["Sincere", "Light Hearted", "Formal", "Heartfelt", "Short & Simple", "Poetic"]),
          c("Customize Styles", ["Minimal", "Handwriting", "Floral", "Muted", "Create Own", "Premium Cards"]),
          c("Most Popular", ["Top Picks", "New Designs", "Get Well", "Sympathy", "Just Because"]),
        ],
      },
      "Baby": {
        filters: ["Photo Cards", "New Baby", "Baby Shower", "Gender Reveal", "Christening", "Gift Sets", "Special Cards"],
        cols: [
          c("By Recipient", ["For Mum", "For Dad", "For Parents", "For Sister", "For Friends", "For Grandparents"]),
          c("By Moment", ["New Baby", "Baby Shower", "Gender Reveal", "Christening", "Naming Day", "1st Birthday", "Adoption"]),
          c("Customize Styles", ["Pastel", "Storybook", "Animals", "Multi Photo Upload", "Create Own", "Premium Cards"]),
          c("Most Popular", ["Top Picks", "New Designs", "Twins", "Baby Girl", "Baby Boy"]),
        ],
      },
      "New Home": {
        filters: ["Photo Cards", "Housewarming", "Top Picks", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Couples", "For Friends", "For Family", "For Neighbours", "For Flatmates"]),
          c("By Moment", ["First Home", "Moving Day", "Housewarming", "New Build", "Renting", "Downsizing"]),
          c("Customize Styles", ["Illustrated House", "Photo Upload", "Minimal", "Bold Type", "Create Own", "Premium Cards"]),
          c("Most Popular", ["Top Picks", "New Designs", "Keys & Doors", "With Address Label", "Group Signed"]),
        ],
      },
      "Graduation": {
        filters: ["Photo Cards", "Class of 2026", "Bulk Orders", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Daughter", "For Son", "For Friends", "For Students", "For Teachers", "For Grandchild"]),
          c("By Level", ["Nursery", "Primary School", "High School", "College", "University", "Masters", "PhD", "Trade School"]),
          c("Customize Styles", ["Classic", "Photo Collage", "Confetti", "Minimal", "Create Own", "Premium Cards", "Gold Foil", "Trending"]),
          c("Most Popular", ["Top Picks", "New Designs", "Cap & Gown", "With Photo", "Money Holders"]),
        ],
      },
      "Retirement": {
        filters: ["Photo Cards", "Group Signed", "Bulk Orders", "Special Cards"],
        cols: [
          c("By Recipient", ["For Her", "For Him", "For Colleague", "For Boss", "For Team", "For Friends", "For Family"]),
          c("By Tone", ["Heartfelt", "Funny", "Formal", "Grateful", "Cheeky", "Short & Simple"]),
          c("Customize Styles", ["Classic", "Photo Collage", "Bold Type", "Minimal", "Create Own", "Premium Cards", "Gold Foil"]),
          c("Most Popular", ["Top Picks", "New Designs", "Last Day", "Big Signable", "From The Team"]),
        ],
      },
    };
    return this._megaMenus;
  }
  runStats() {
    const dur = 1600, start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur), e = ease(t);
      this.setState({ statP: e });
      if (t < 1) this._statRaf = requestAnimationFrame(step);
    };
    this._statRaf = requestAnimationFrame(step);
  }
  runTypewriter() {
    const lines = [
      "I'm looking for a birthday card for my son who's turning 10.",
      "I need graduation greeting cards for my daughter — she just finished med school.",
      "Something for my wife for our 25th anniversary. Make it sweet.",
      "A baby shower card for my sister. She's having a girl.",
      "A get-well card for my grandma who's in hospital.",
      "Something funny for my best mate turning 40.",
      "A thank-you card for the nurse who looked after my dad.",
      "A card for my parents' ruby wedding anniversary.",
      "Something cheeky for my boyfriend on Valentine's Day.",
      "A congratulations card — my brother just landed his dream job.",
      "A new-home card for my daughter and her partner.",
      "An 'I'm sorry' card for a friend I let down.",
      "A christening card for my godson.",
      "A retirement card for my boss after 30 years.",
      "Just a 'thinking of you' card for my mum, no occasion.",
    ];
    let li = 0, ci = 0, dir = 1;
    const tick = () => {
      const line = lines[li];
      ci += dir;
      this.setState({ typed: line.slice(0, ci) });
      let wait = dir > 0 ? 55 : 26;
      if (dir > 0 && ci >= line.length) { dir = -1; wait = 1700; }
      else if (dir < 0 && ci <= 0) { dir = 1; li = (li + 1) % lines.length; wait = 420; }
      this._twT = setTimeout(tick, wait);
    };
    this._twT = setTimeout(tick, 900);
  }
  STAMPY_LINES() {
    return [
      { text: "Hey Jack, I am here. let me know what you want to create.", face: "expr-excited.png" },
      { text: "I’ll design you the rarest card on earth, one of one", face: "expr-excited.png" },
      { text: "Custom design costs hundreds. I do it for free.", face: "expr-wink.png" },
      { text: "Hi, it's Stampy, I can help you to design a card", face: "expr-excited.png" },
      { text: "Tell me what you want and I’ll design it from scratch", face: "rosey.png" },
      { text: "Send me a photo, I’ll turn it into a rare gem card", face: "pose-hearts.png" },
      { text: "Nobody else will ever send this card. Only you.", face: "expr-wink.png" },
      { text: "Describe the person. I’ll do the rest in 30 seconds.", face: "expr-excited.png" },
      { text: "Every card here is one of one. Yours will be too.", face: "expr-rosey.png" },
      { text: "Say it awkwardly, I’ll make it sound perfect", face: "expr-excited.png" },
    ];
  }
  stampyShow = () => {
    if (this.state.stOff || !this.state.chatAway) return;
    const pool = this.STAMPY_LINES();
    const i = this._stIdx == null ? 0 : this._stIdx;
    const item = i < 3 ? pool[i] : pool[3 + Math.floor(Math.random() * (pool.length - 3))];
    this._stIdx = i + 1;
    const hold = 11000;
    [this._st1, this._st2, this._st3].forEach(clearTimeout);
    this.setState({ stText: item.text, stFace: "assets/mascot/" + item.face, stIn: false });
    if (this.stFaceRef && this.stFaceRef.current) this.stFaceRef.current.src = "assets/mascot/" + item.face;
    this._st1 = setTimeout(() => this.setState({ stIn: true }), 40);
    this._st2 = setTimeout(() => this.setState({ stIn: false }), hold);
    this._st3 = setTimeout(() => this.setState({ stText: null, stFace: null }), hold + 400);
  };
  stampyStop() {
    [this._st1, this._st2, this._st3, this._stFirst].forEach(clearTimeout);
    clearInterval(this._stLoop);
  }
  startMarquee() {
    const base = -0.9;
    let last = performance.now();
    const step = (now) => {
      const el = this.mqTrack && this.mqTrack.current;
      const dt = Math.min(3, (now - last) / 16.67);
      last = now;
      if (el) {
        const half = el.scrollWidth / 2 || 1;
        if (this._mqDrag) {
          this._mqBoost = 0;
        } else {
          const b = this._mqBoost || 0;
          // inertia: exponential drag + small constant friction so it coasts, then settles
          const damped = b * Math.pow(0.982, dt) - Math.sign(b) * 0.045 * dt;
          this._mqBoost = Math.sign(b) === Math.sign(damped) ? damped : 0;
          if (Math.abs(this._mqBoost) < 0.03) this._mqBoost = 0;
        }
        this._mqOffset = ((this._mqOffset || 0) + (base + this._mqBoost) * dt) % half;
        if (this._mqOffset > 0) this._mqOffset -= half;
        el.style.transform = `translateX(${this._mqOffset}px)`;
      }
      this._mqRaf = requestAnimationFrame(step);
    };
    this._mqRaf = requestAnimationFrame(step);
  }
  constructor(props) {
    super(props);
    window.remVideoLoop = window.remVideoLoop || ((e) => {
      const v = e.currentTarget;
      if (v.currentTime >= 3 || v.currentTime < 1) { try { v.currentTime = 1; } catch (err) {} }
    });
  }
  ckSeen() { return false; } // prototype: banner returns on every reload
  ckClose(choice) {
    this._ckChoice = choice;
    this._ckDone = true;
    this.setState({ ckIn: false });
    clearTimeout(this._ckT);
    this._ckT = setTimeout(() => this.setState({ ckOn: false }), 420);
  }
  stipChime() {
    const a = this._stipSfx;
    if (!a) return;
    // desktop hides the mobile nav (and with it the tip) — don't chime for a bubble nobody sees
    const tip = this.stipRef && this.stipRef.current;
    if (!tip || !tip.getClientRects().length) return;
    try { a.currentTime = 0; const p = a.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
  }
  stipDismiss() {
    this._stipDone = true;
    const n = this.stipRef && this.stipRef.current;
    document.body.classList.remove("stip-on");
    if (n) {
      n.style.transition = "transform 280ms ease-out, opacity 220ms ease-out";
      n.style.transform = "translateX(-50%) translateY(30px)";
      n.style.opacity = "0";
    }
    clearTimeout(this._stipT);
    this._stipT = setTimeout(() => {
      document.body.classList.add("stip-off");
      if (n) { n.style.transition = ""; n.style.transform = ""; n.style.opacity = ""; }
    }, 300);
  }
  componentDidMount() {
    this._ckTick = setInterval(() => {
      if (this.state.ckCust) return;
      this.setState(s => ({ ckLine: ((s.ckLine || 0) + 1) % 3 }));
    }, 3600);
    try {
      this._stipSfx = new Audio("uploads/universfield-new-notification-059-494262.mp3");
      this._stipSfx.preload = "auto";
      this._stipSfx.volume = 0.25;
      this._stipUnlock = () => {
        const a = this._stipSfx;
        if (!a) return;
        const p = a.play();
        if (p && p.then) p.then(() => { a.pause(); a.currentTime = 0; }).catch(() => {});
        document.removeEventListener("touchstart", this._stipUnlock, true);
        document.removeEventListener("pointerdown", this._stipUnlock, true);
      };
      document.addEventListener("touchstart", this._stipUnlock, { capture: true, once: true, passive: true });
      document.addEventListener("pointerdown", this._stipUnlock, { capture: true, once: true });
    } catch (e) {}
    this.startMarquee();
    this._onScrollBanner = () => {
      const d = document.documentElement;
      const box = document.body.classList.contains("m-force") ? document.getElementById("dc-root") : null;
      const max = (box ? box.scrollHeight - box.clientHeight : d.scrollHeight - window.innerHeight) || 1;
      const past = (box ? box.scrollTop : window.scrollY || d.scrollTop || 0) / max >= 0.65;
      if (past && !this.state.bannerOn) {
        this.setState({ bannerOn: true });
        requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ bannerIn: true })));
      } else if (!past && this.state.bannerOn) {
        this.setState({ bannerIn: false });
        clearTimeout(this._bannerT);
        this._bannerT = setTimeout(() => this.setState({ bannerOn: false }), 500);
      }
    };
    window.addEventListener("scroll", this._onScrollBanner, { passive: true });
    const mbox = document.getElementById("dc-root");
    if (mbox) mbox.addEventListener("scroll", this._onScrollBanner, { passive: true });
    this._onScrollBanner();
    // the pill sticks below whatever the sticky header currently shows —
    // its bottom edge moves as the promo bar scrolls off and the nav hides/returns
    this._measureNavH = () => {
      if (!this.state.ckOn) return;
      const nav = document.querySelector('#dc-root [style*="z-index: 9200"]');
      if (!nav) return;
      const box = document.body.classList.contains("m-force") ? document.getElementById("dc-root") : null;
      const originTop = box ? box.getBoundingClientRect().top : 0;
      // clamp: the header stack briefly includes the app-promo bar, which would
      // otherwise park the pill ~160px down, floating over page content
      const b = Math.max(0, Math.min(120, Math.round(nav.getBoundingClientRect().bottom - originTop)));
      if (b !== this.state.ckNavH) this.setState({ ckNavH: b });
    };
    this._navHPoll = setInterval(this._measureNavH, 120);
    window.addEventListener("scroll", this._measureNavH, { passive: true });
    document.addEventListener("scroll", this._measureNavH, { passive: true, capture: true });
    this._measureNavH();
    this._onScrollCookie = () => {
      if (this._ckDone || this.state.ckOn) return;
      const box = document.body.classList.contains("m-force") ? document.getElementById("dc-root") : null;
      const top = box ? box.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      const vh = (box ? box.clientHeight : window.innerHeight) || 800;
      const mob = !!box || window.innerWidth <= 768;
      if (mob) {
        // mobile: 2% of the page, not a full viewport
        const max = (box ? box.scrollHeight - box.clientHeight : document.documentElement.scrollHeight - window.innerHeight) || 1;
        if (top / max < 0.03) return;
      } else if (top < vh) return;
      if (this.ckSeen()) { this._ckDone = true; return; }
      this.setState({ ckOn: true });
      requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ ckIn: true })));
    };
    window.addEventListener("scroll", this._onScrollCookie, { passive: true });
    document.addEventListener("scroll", this._onScrollCookie, { passive: true, capture: true });
    this._ckPoll = setInterval(this._onScrollCookie, 400);
    this._onScrollMnav = () => {
      const box = document.body.classList.contains("m-force") ? document.getElementById("dc-root") : null;
      const top = box ? box.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      const max = box
        ? box.scrollHeight - box.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? top / max : 0;
      document.body.classList.toggle("mnav-on", pct >= 0.015);
      if (!this._stipDone) {
        const on = pct >= 0.06;
        document.body.classList.toggle("stip-on", on);
        if (on && !this._stipShown) { this._stipShown = true; this.stipChime(); }
      }
    };
    window.addEventListener("scroll", this._onScrollMnav, { passive: true });
    document.addEventListener("scroll", this._onScrollMnav, { passive: true, capture: true });
    this._mnavPoll = setInterval(this._onScrollMnav, 300);
    this._onScrollMnav();
    this._onScrollGlass = () => {
      if (this._glassRaf) return;
      this._glassRaf = requestAnimationFrame(() => {
        this._glassRaf = null;
        const el = this.glassRef && this.glassRef.current;
        if (!el) return;
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        let t = Math.max(0, Math.min(1, y / 460));
        t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // ease-in-out
        const ft = this.ftRef && this.ftRef.current;
        if (ft) {
          const vh = window.innerHeight || 800;
          const band = Math.min(200, vh * 0.26);
          // start dissolving well before the footer reaches the glass band
          const fade = Math.max(0, Math.min(1, (ft.getBoundingClientRect().top - (vh - band)) / 220));
          t = Math.min(t, fade);
        }
        el.style.setProperty("--hs-g", t.toFixed(3));
        const veil = this.glassVeilRef && this.glassVeilRef.current;
        if (veil) veil.style.opacity = t.toFixed(3);
        const shell = this.chatShellRef && this.chatShellRef.current;
        if (shell) shell.style.width = y > 100 ? "468px" : "550px";
      });
    };
    window.addEventListener("scroll", this._onScrollGlass, { passive: true });
    this._onScrollGlass();
    this._onScrollChat = () => {
      const hide = (window.scrollY || document.documentElement.scrollTop || 0) > window.innerHeight * 1.15;
      if (hide !== !!this.state.chatAway) {
        this.setState({ chatAway: hide }, () => {
          if (hide && !this.state.stOff && !this.state.stText) {
            clearTimeout(this._stFirst);
            this._stFirst = setTimeout(this.stampyShow, 500);
          }
        });
      }
    };
    window.addEventListener("scroll", this._onScrollChat, { passive: true });
    document.addEventListener("scroll", this._onScrollChat, { passive: true, capture: true });
    this._chatPoll = setInterval(this._onScrollChat, 250);
    this._onScrollChat();

    this._stLoop = setInterval(this.stampyShow, 40000);
    this._mascotInt = setInterval(() => {
      if (!this.state.chatAway) return;
      this.setState({ mascotSwap: true });
      setTimeout(() => this.setState((s) => ({ mascotBeat: (s.mascotBeat || 0) + 1, mascotSwap: false })), 380);
    }, 5200);
    this._closeNotif = () => {
      if (this.state.kebab != null) this.setState({ kebab: null });
      if (this.state.langOpen) this.setState({ langOpen: false });
      if (this.state.notifOpen) this.setState({ notifOpen: false });
    };
    document.addEventListener("click", this._closeNotif);
    this.runTypewriter();
    this.setupNavAutoHide();
    this.setupNotifSwipe();
    setTimeout(() => this.initMotion(), 200);
    this.observeCats();
    this._obsRetry = setInterval(() => this.observeCats(), 400);
    setTimeout(() => clearInterval(this._obsRetry), 6000);
    this.runLoader();
    this._muteAll = () => document.querySelectorAll("video").forEach((v) => {
      if (v.dataset && v.dataset.allowSound && this.state.bannerSound) return;
      v.muted = true; v.defaultMuted = true; v.volume = 0;
    });
    this._muteAll();
    this._muteInt = setInterval(this._muteAll, 800);
    // mobile: reflect muted/playsinline as ATTRIBUTES (React sets only the property,
    // and iOS checks the attribute before it will honour autoplay)
    this._iosAutoplay = () => document.querySelectorAll("video[autoplay], video").forEach((v) => {
      if (v.dataset && v.dataset.allowSound && this.state.bannerSound) return;
      if (!v.hasAttribute("muted")) v.setAttribute("muted", "");
      if (!v.hasAttribute("playsinline")) { v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", ""); }
      if (v.autoplay && v.paused && !v.ended) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    });
    this._iosAutoplay();
    document.addEventListener("touchstart", this._iosAutoplay, { once: true, passive: true });
    // keep the hero clip running on slide 0 (autoplay can be refused on first try)
    this._heroKeep = setInterval(() => {
      const hv = this.videoRef && this.videoRef.current;
      if (!hv) return;
      // hold the clip at frame 0 while the preloader still covers the page
      if (!this.state.ldGone) { if (!hv.paused) hv.pause(); try { hv.currentTime = 0; } catch (e) {} return; }
      if (this.state.slide !== 0 || !hv.paused || hv.readyState < 2 || hv.ended) return;
      const p = hv.play();
      if (p && p.catch) p.catch(() => {});
    }, 900);
    // the slide clock must not start while the preloader still covers the page,
    // otherwise slide 1's time is spent behind it and slide 2 is what the user first sees
    const start = () => {
      if (this.state.videoStarted) return;
      if (!this.state.ldGone) { clearTimeout(this._startWait); this._startWait = setTimeout(start, 200); return; }
      this.setState({ videoStarted: true });
      const v2 = this.videoRef && this.videoRef.current;
      if (v2) { try { v2.currentTime = 0; } catch (e) {} const p2 = v2.play(); if (p2 && p2.catch) p2.catch(() => {}); }
      this.armTimer(0);
    };
    const v = this.videoRef && this.videoRef.current;
    if (v) {
      v.muted = true; v.loop = false;
      v.setAttribute("fetchpriority", "high");
      const reveal = () => { if (!this.state.videoPlaying) this.setState({ videoPlaying: true }); };
      // show the clip the moment a frame exists, not only once "playing" fires
      if (v.readyState >= 2) reveal();
      v.addEventListener("loadeddata", reveal);
      v.addEventListener("canplay", reveal);
      v.addEventListener("timeupdate", reveal);
      v.addEventListener("playing", () => { reveal(); start(); }, { once: true });
      // clip loops within its slide; the ring loader owns the handover
      v.addEventListener("ended", () => { try { v.currentTime = 0; } catch (e) {} const p = v.play(); if (p && p.catch) p.catch(() => {}); });
      v.load();
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      v.addEventListener("canplay", tryPlay, { once: true });
    }
    // never leave slide 1 until the clip has actually run — the video is the first impression
    this._fallback = setTimeout(() => {
      const hv = this.videoRef && this.videoRef.current;
      if (hv && hv.paused) { const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
      start();
    }, 9000);
    this.setupSpot();
    this.setupFeKeys();
    this.setupProfileNav();
  }
  /* Profile menu behind the top-nav avatar. Closes on outside click or Escape.
     Pointerdown rather than click so it shuts before the underlying control
     reacts, and capture phase so a stopPropagation() elsewhere cannot trap it. */
  setupProfileNav() {
    this._onProfileDown = (e) => {
      if (!this.state.pnOpen) return;
      const panel = this.pnPanelRef && this.pnPanelRef.current;
      const btn = this.pnBtnRef && this.pnBtnRef.current;
      if ((panel && panel.contains(e.target)) || (btn && btn.contains(e.target))) return;
      this.setState({ pnOpen: false });
    };
    this._onProfileKey = (e) => {
      if (e.key === "Escape" && this.state.pnOpen) {
        this.setState({ pnOpen: false });
        const btn = this.pnBtnRef && this.pnBtnRef.current;
        if (btn) btn.focus();
      }
    };
    document.addEventListener("pointerdown", this._onProfileDown, true);
    document.addEventListener("keydown", this._onProfileKey);
    // same 767px breakpoint the rest of the page switches on
    /* The avatar now lives inside WebsiteNavV2, so the desktop menu can no
       longer be a child of it. It is rendered at the page root instead and
       pinned under the nav — which is sticky, so its bottom edge moves as the
       promo bar scrolls away. Measured while the menu is open, and only then. */
    this._pnAnchor = () => {
      const nav = document.querySelector(".hs-nav-v2") || document.querySelector("header");
      const bottom = nav ? Math.round(nav.getBoundingClientRect().bottom) : 158;
      if (bottom !== this.state.pnTop) this.setState({ pnTop: bottom });
    };
    this._pnMq = window.matchMedia("(max-width: 767px)");
    this._onPnMq = () => this.setState({ pnMobile: this._pnMq.matches });
    this._onPnMq();
    this._pnMq.addEventListener("change", this._onPnMq);
  }
  /* The page owns its dark mode on #dc-root: the OS block is guarded with
     :not(.hs-light), and .hs-dark forces dark. So "system" is simply neither
     class present. */
  applyTheme(t) {
    const root = document.getElementById("dc-root");
    if (!root) return;
    root.classList.toggle("hs-dark", t === "dark");
    root.classList.toggle("hs-light", t === "light");
  }
  /* Arrow-key carousel for the featured-cards row. Scrolls by one card, the
     same step the on-hover arrow buttons use, so both routes agree.

     The key is only claimed when the row is under the pointer or holds focus.
     Bound globally it would swallow ordinary arrow-key page scrolling, and
     typing in the Stampy prompt or the spotlight would move the carousel. */
  setupFeKeys() {
    this._onFeKey = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const el = this.feTrackRef && this.feTrackRef.current;
      if (!el) return;
      const t = e.target;
      if (t && (t.isContentEditable || /^(input|textarea|select|button)$/i.test(t.tagName || ""))) return;
      if (!this.state.feRowHover && !(t && el.contains(t))) return;
      e.preventDefault();
      this.feStepTab(e.key === "ArrowLeft" ? -1 : 1);
    };
    window.addEventListener("keydown", this._onFeKey);
  }
  FE_TABS() { return ["Birthday", "Graduation", "Valentine\u2019s Day", "Anniversary", "Party Invites"]; }
  /* Move the featured row to a tab and slide the incoming products in.
     `dir` is "r" when the new set arrives from the right, "l" from the left.
     feSlideN flips every call so the keyframe NAME changes: without that a
     second press while the first is still running is treated as the same
     animation and never restarts. */
  feGoTab(label, dir, extra) {
    this.setState((s) => Object.assign(
      { feTab: label, feSlide: dir, feSlideN: ((s.feSlideN || 0) + 1) % 2 }, extra || {}));
    const el = this.feTrackRef && this.feTrackRef.current;
    if (el) el.scrollTo({ left: 0, behavior: "smooth" });
    clearTimeout(this._feSlideT);
    this._feSlideT = setTimeout(() => this.setState({ feSlide: null }), 700);
  }
  /* Arrow keys walk the tab row, wrapping at both ends. */
  feStepTab(delta) {
    const all = this.FE_TABS();
    const i = Math.max(0, all.indexOf(this.state.feTab || all[0]));
    const j = (i + delta + all.length) % all.length;
    // keep the mobile chip row honest: anything past the first two sits behind "Others"
    this.feGoTab(all[j], delta > 0 ? "r" : "l", { feOtherOpen: false, feOther: j >= 2 ? all[j] : null });
  }
  componentWillUnmount() {
    if (this._onFeKey) window.removeEventListener("keydown", this._onFeKey);
    if (this._onProfileDown) document.removeEventListener("pointerdown", this._onProfileDown, true);
    if (this._onProfileKey) document.removeEventListener("keydown", this._onProfileKey);
    if (this._pnMq && this._onPnMq) this._pnMq.removeEventListener("change", this._onPnMq);
    if (this._pnScroll) { window.removeEventListener("scroll", this._pnScroll); window.removeEventListener("resize", this._pnScroll); }
    clearTimeout(this._feSlideT);
    clearTimeout(this._fallback); clearTimeout(this._timer); clearTimeout(this._spT);
    clearInterval(this._revealFailsafe);
    clearInterval(this.ghostTimer);
    if (this._catsIO) this._catsIO.disconnect();
    if (this._pinkIO) this._pinkIO.disconnect();
    if (this._feIO) this._feIO.disconnect();
    if (this._dealIO) this._dealIO.disconnect();
    if (this._promoIO) this._promoIO.disconnect();
    if (this._momentIO) this._momentIO.disconnect();
    if (this._stepsIO) this._stepsIO.disconnect();
    if (this._quoteIO) this._quoteIO.disconnect();
    if (this._promptIO) this._promptIO.disconnect();
    if (this._diffIO) this._diffIO.disconnect();
    if (this._seoIO) this._seoIO.disconnect();
    if (this._ftIO) this._ftIO.disconnect();
    if (this._lbIO) this._lbIO.disconnect();
    if (this._statRaf) cancelAnimationFrame(this._statRaf);
    if (this._statsIO) this._statsIO.disconnect();
    if (this._closeNotif) document.removeEventListener("click", this._closeNotif);
    if (this._revealIO) this._revealIO.disconnect();

    if (this._revealScan) clearInterval(this._revealScan);
    if (this._lenisRaf) cancelAnimationFrame(this._lenisRaf);
    if (this._lenis) { this._lenis.destroy(); this._lenis = null; }
    (this._ldT || []).forEach(clearTimeout);
    if (this._obsRetry) clearInterval(this._obsRetry);
    if (this._twT) clearTimeout(this._twT);
    if (this._onScrollChat) {
      window.removeEventListener("scroll", this._onScrollChat);
      document.removeEventListener("scroll", this._onScrollChat, true);
    }
    if (this._chatPoll) clearInterval(this._chatPoll);
    if (this._chatSentIO) this._chatSentIO.disconnect();
    if (this._remT) clearTimeout(this._remT);
    if (this._megaT) clearTimeout(this._megaT);
    if (this._mqRaf) cancelAnimationFrame(this._mqRaf);
    if (this._onScrollMnav) {
      window.removeEventListener("scroll", this._onScrollMnav);
      document.removeEventListener("scroll", this._onScrollMnav, true);
    }
    if (this._mnavPoll) clearInterval(this._mnavPoll);
    if (this._stipT) clearTimeout(this._stipT);
    if (this._stipUnlock) {
      document.removeEventListener("touchstart", this._stipUnlock, true);
      document.removeEventListener("pointerdown", this._stipUnlock, true);
    }
    if (this._stipSfx) { try { this._stipSfx.pause(); } catch (e) {} this._stipSfx = null; }
    if (this._stipDragT) clearTimeout(this._stipDragT);
    document.body.classList.remove("mnav-on", "stip-on", "stip-off");
    if (this._onScrollGlass) window.removeEventListener("scroll", this._onScrollGlass);
    if (this._onScrollBanner) window.removeEventListener("scroll", this._onScrollBanner);
    if (this._bannerT) clearTimeout(this._bannerT);
    if (this._onScrollCookie) {
      window.removeEventListener("scroll", this._onScrollCookie);
      document.removeEventListener("scroll", this._onScrollCookie, true);
    }
    if (this._ckPoll) clearInterval(this._ckPoll);
    if (this._navHPoll) clearInterval(this._navHPoll);
    if (this._measureNavH) {
      window.removeEventListener("scroll", this._measureNavH);
      document.removeEventListener("scroll", this._measureNavH, true);
    }
    if (this._ckT) clearTimeout(this._ckT);
    if (this._glassRaf) cancelAnimationFrame(this._glassRaf);
    this.remUnlock();
    if (this._mascotInt) clearInterval(this._mascotInt);
    this.stampyStop();
    if (this._muteInt) clearInterval(this._muteInt);
    if (this._heroKeep) clearInterval(this._heroKeep);
    if (this._startWait) clearTimeout(this._startWait);
    this._ldDone = true;
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._unlock) this._unlock();
    if (this.onSpotKey) document.removeEventListener("keydown", this.onSpotKey, true);
  }
  SPOT0() { return { open: false, q: "", chips: [], lang: null, thinking: false, view: "rest", asked: [], sel: -1, ghost: 0 }; }
  spS() { return this.state.spot || this.SPOT0(); }
  spotSet(patch) { this.setState(s => ({ spot: Object.assign({}, s.spot || this.SPOT0(), patch) })); }
  setupSpot() {
    this.onSpotKey = e => {
      const k = (e.key || "").toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") { e.preventDefault(); this.spS().open ? this.spotClose() : this.spotOpen(); }
      else if (k === "escape" && this.spS().open) { e.preventDefault(); this.spotClose(); }
    };
    document.addEventListener("keydown", this.onSpotKey, true);
    this.ghostTimer = setInterval(() => { if (this.spS().open && !this.spS().q) this.spotSet({ ghost: (this.spS().ghost + 1) % this.SP_GHOSTS().length }); }, 2800);
  }
  SP_GHOSTS() { return ["Ask for a card in English, Spanish or French…", "Tarjeta divertida para mi hermana…", "Carte drôle pour mon frère…", "Funny 30th for my best friend…"]; }
  SP_EXAMPLES() {
    return [
      { code: "EN", text: "heartfelt 40th birthday card for my brother" },
      { code: "ES", text: "tarjeta de cumpleaños divertida para mi hermana" },
      { code: "FR", text: "carte d'anniversaire drôle pour ma grand-mère" }
    ];
  }
  SP_LEX() {
    return [
      ["Occasion", "Birthday", /birthday|cumplea|geburtstag|anniversaire|anivers[aá]rio|compleanno|verjaardag|urodziny|誕生日/],
      ["Occasion", "Anniversary", /\banniversary\b|jubil[äa]um|記念日/],
      ["Occasion", "Wedding", /wedding|boda|hochzeit|mariage|casamento|結婚/],
      ["Occasion", "Thank you", /thank you|gracias|danke|merci|obrigad|ありがとう/],
      ["Occasion", "New baby", /new baby|beb[ée]|naissance|赤ちゃん/],
      ["Occasion", "Get well", /get well|mej[óo]rate|gute besserung|r[ée]tablissement|お大事/],
      ["Occasion", "Congrats", /congrat|felicidades|gl[üu]ckwunsch|f[ée]licitations|parab[ée]ns|おめでとう/],
      ["Relationship", "Sister", /sister|hermana|schwester|s(œ|oe)ur|irm[ãa]|sorella|姉|妹/],
      ["Relationship", "Brother", /brother|hermano|bruder|fr[èe]re|irm[ãa]o|fratello|兄|弟/],
      ["Relationship", "Grandma", /grandma|granny|\bnan\b|abuela|\boma\b|grand-?m[èe]re|mamie|av[óo]|nonna|祖母|おばあ/],
      ["Relationship", "Grandpa", /grandpa|abuelo|\bopa\b|grand-?p[èe]re|papi\b|av[ôo]|nonno|祖父|おじい/],
      ["Relationship", "Mum", /\bmum\b|\bmom\b|mother|mam[áa]|madre|mutter|maman|m[èe]re|m[ãa]e|mamma|母|お母/],
      ["Relationship", "Dad", /\bdad\b|father|pap[áa]|padre|vater|p[èe]re|\bpai\b|父/],
      ["Relationship", "Friend", /friend|amig|freund|copain|copine|\bami\b|amico|友/],
      ["Relationship", "Partner", /partner|boyfriend|girlfriend|novi[ao]|pareja|namorad|彼女|彼氏/],
      ["Tone", "Funny", /funny|hilarious|joke|divertid|gracios|lustig|witzig|dr[ôo]le|marrant|engra[çc]ad|divertente|面白/],
      ["Tone", "Heartfelt", /heartfelt|sentimental|emotional|sincer|emotiv|herzlich|touchant|carinhos|心/],
      ["Tone", "Cheeky", /cheeky|rude|savage|atrevid|grosero|frech|coquin|safad/],
      ["Tone", "Sweet", /\bcute\b|sweet|bonit[ao]|tierno|s[üu][ßs]|mignon|fofo|優し|かわいい/],
      ["Style", "Watercolour", /watercolou?r|acuarela|aquarell|aquarela|水彩/],
      ["Style", "Pop art", /pop.?art/],
      ["Style", "Botanical", /botanic|floral|flores|blumen|fleurs|花/],
      ["Style", "Minimal", /minimal|schlicht|[ée]pur[ée]/],
      ["Style", "Retro pixel", /pixel|8.?bit/]
    ];
  }
  SP_LANGS() {
    return [
      { code: "ES", name: "Spanish", re: /cumplea|tarjeta|para mi|herman|abuel|divertid|gracios|mam[áa]|pap[áa]|felicidades|amig[ao]/ },
      { code: "FR", name: "French", re: /carte|anniversaire|pour ma|pour mon|s(œ|oe)ur|fr[èe]re|dr[ôo]le|mamie|joyeux|copain|copine/ }
    ];
  }
  FACT() { return { Occasion: 1, Relationship: 0.32, Tone: 0.45, Age: 0.38, Style: 0.30 }; }
  countOf(chips) { const F = this.FACT(); return Math.max(3, Math.round(2592 * chips.reduce((n, c) => n * (F[c.cat] == null ? 1 : F[c.cat]), 1))); }
  spotRead(raw) {
    const t = (raw || "").toLowerCase();
    const chips = [];
    this.SP_LEX().forEach(([cat, val, re]) => { if (re.test(t) && !chips.some(c => c.cat === cat)) chips.push({ cat: cat, val: val, src: "ai" }); });
    const age = t.match(/\b(16|18|21|30|40|50|60|65|70|80|90|100)\b/);
    if (age) chips.push({ cat: "Age", val: "Turning " + age[1], src: "ai" });
    const lang = this.SP_LANGS().find(l => l.re.test(t)) || null;
    if (!chips.some(c => c.cat === "Occasion") && t.trim()) chips.unshift({ cat: "Occasion", val: "Birthday", src: "ai" });
    return { chips: chips, lang: lang };
  }
  spotPhrase(chips) {
    const g = c => (chips.find(x => x.cat === c) || {}).val;
    const occ = g("Occasion") || "Birthday", tone = g("Tone"), rel = g("Relationship"), age = g("Age"), style = g("Style");
    let t = (tone ? tone.toLowerCase() + " " : "") + occ.toLowerCase() + " cards";
    if (rel) t += " for your " + rel.toLowerCase();
    if (age) t += ", " + age.toLowerCase();
    if (style) t += " · " + style.toLowerCase();
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  SP_QS() {
    return [
      { cat: "Relationship", q: "Quick one — who is it for?", opts: ["Sister", "Brother", "Mum", "Friend", "Partner"] },
      { cat: "Tone", q: "How should it land?", opts: ["Funny", "Heartfelt", "Cheeky", "Sweet"] },
      { cat: "Age", q: "Is it a milestone birthday?", opts: ["Thirties (30–39)", "Forties (40–49)", "Fifties (50–59)", "Not a milestone"] },
      { cat: "Style", q: "Any art direction in mind?", opts: ["Watercolour", "Pop art", "Botanical", "Minimal", "Surprise me"] }
    ];
  }
  SP_IMGS() { const a = []; for (let i = 125; i <= 134; i++) a.push("uploads/cards/image%20" + i + ".png"); return a; }
  spotOpen() {
    this._spQ = "";
    this.setState({ spot: Object.assign(this.SPOT0(), { open: true }) });
    setTimeout(() => { const el = document.getElementById("hs-spot"); if (el) el.focus({ preventScroll: true }); }, 60);
  }
  spotClose() { clearTimeout(this._spT); this.spotSet({ open: false, thinking: false }); }
  spotInput(v) { this._spQ = v; this.spotSet({ q: v }); this.spotQuery(v, 420); }
  spotQuery(v, delay) {
    clearTimeout(this._spT);
    if (!(v || "").trim()) { this.spotSet({ view: "rest", thinking: false, chips: [], lang: null, asked: [], sel: -1 }); return; }
    if (!this.spS().thinking) this.spotSet({ thinking: true });
    this._spT = setTimeout(() => {
      const r = this.spotRead(v);
      const kept = this.spS().chips.filter(c => c.src === "ask" && !r.chips.some(x => x.cat === c.cat));
      this.spotSet({ thinking: false, view: "res", chips: r.chips.concat(kept), lang: r.lang, sel: -1 });
      setTimeout(() => { const car = document.querySelector('[data-m="spotcar"]'); if (car) car.scrollLeft = 0; }, 30);
    }, delay);
  }
  spotDemo(text) {
    clearTimeout(this._spT);
    this._spQ = text;
    this.spotSet({ q: text, chips: [], asked: [], view: "rest", thinking: false, lang: null });
    const el = document.getElementById("hs-spot"); if (el) el.focus({ preventScroll: true });
    this.spotQuery(text, 180);
  }
  spotAnswer(cat, val) {
    const skip = /^not |^surprise/i.test(val);
    this.spotSet({ thinking: true, asked: this.spS().asked.concat([cat]) });
    clearTimeout(this._spT);
    this._spT = setTimeout(() => {
      const chips = skip ? this.spS().chips : this.spS().chips.filter(c => c.cat !== cat).concat([{ cat: cat, val: val, src: "ask" }]);
      this.spotSet({ thinking: false, chips: chips });
      setTimeout(() => { const car = document.querySelector('[data-m="spotcar"]'); if (car) car.scrollLeft = 0; }, 30);
    }, 200);
  }
  spotGo() { this.spotClose(); }
  SP_UI() {
    return {
      EN: { reading: "Reading that as", matches: "Best matches", cards: "cards", viewAll: "View all", jump: "Jump to", skip: "Skip", make: "Make this one from scratch with Stampy", credits: "30 credits", move: "↑↓ move", enter: "⏎ open", esc: "esc close", by: "Understood by Stampy", badge: "" },
      ES: { reading: "Lo entiendo así", matches: "Mejores resultados", cards: "tarjetas", viewAll: "Ver las", jump: "Ir a", skip: "Omitir", make: "Que Stampy la cree desde cero", credits: "30 créditos", move: "↑↓ moverte", enter: "⏎ abrir", esc: "esc cerrar", by: "Stampy te responde en español", badge: "Español" },
      FR: { reading: "Voici ce que je comprends", matches: "Meilleurs résultats", cards: "cartes", viewAll: "Voir les", jump: "Aller à", skip: "Passer", make: "Stampy la crée de zéro", credits: "30 crédits", move: "↑↓ naviguer", enter: "⏎ ouvrir", esc: "esc fermer", by: "Stampy te répond en français", badge: "Français" }
    };
  }
  SP_VOCAB() {
    return {
      ES: {
        occ: { Birthday: "cumpleaños", Anniversary: "aniversario", Wedding: "boda", "Thank you": "agradecimiento", "New baby": "nacimiento", "Get well": "ánimo", Congrats: "felicitación" },
        tone: { Funny: "divertidas", Heartfelt: "sinceras", Cheeky: "atrevidas", Sweet: "tiernas" },
        rel: { Sister: "tu hermana", Brother: "tu hermano", Mum: "tu madre", Dad: "tu padre", Grandma: "tu abuela", Grandpa: "tu abuelo", Friend: "tu amiga", Partner: "tu pareja" },
        relShort: { Sister: "Hermana", Brother: "Hermano", Mum: "Madre", Dad: "Padre", Grandma: "Abuela", Grandpa: "Abuelo", Friend: "Amiga", Partner: "Pareja" },
        toneShort: { Funny: "Divertida", Heartfelt: "Sincera", Cheeky: "Atrevida", Sweet: "Tierna" },
        style: { Watercolour: "acuarela", "Pop art": "pop art", Botanical: "botánico", Minimal: "minimalista", "Retro pixel": "píxel retro" },
        cat: { Occasion: "Ocasión", Relationship: "Para", Tone: "Tono", Age: "Edad", Style: "Estilo" },
        age: n => n + " años"
      },
      FR: {
        occ: { Birthday: "d'anniversaire", Anniversary: "de mariage", Wedding: "de mariage", "Thank you": "de remerciement", "New baby": "de naissance", "Get well": "de rétablissement", Congrats: "de félicitations" },
        tone: { Funny: "drôles", Heartfelt: "touchantes", Cheeky: "coquines", Sweet: "tendres" },
        rel: { Sister: "ta sœur", Brother: "ton frère", Mum: "ta mère", Dad: "ton père", Grandma: "ta grand-mère", Grandpa: "ton grand-père", Friend: "ton ami", Partner: "ton partenaire" },
        relShort: { Sister: "Sœur", Brother: "Frère", Mum: "Mère", Dad: "Père", Grandma: "Grand-mère", Grandpa: "Grand-père", Friend: "Ami", Partner: "Partenaire" },
        toneShort: { Funny: "Drôle", Heartfelt: "Touchante", Cheeky: "Coquine", Sweet: "Tendre" },
        style: { Watercolour: "aquarelle", "Pop art": "pop art", Botanical: "botanique", Minimal: "minimaliste", "Retro pixel": "pixel rétro" },
        cat: { Occasion: "Occasion", Relationship: "Pour", Tone: "Ton", Age: "Âge", Style: "Style" },
        age: n => n + " ans"
      }
    };
  }
  SP_QS_L(code) {
    if (code === "ES") return [
      { cat: "Relationship", q: "Una cosita — ¿para quién es?", opts: [["Hermana", "Sister"], ["Hermano", "Brother"], ["Madre", "Mum"], ["Amiga", "Friend"], ["Pareja", "Partner"]] },
      { cat: "Tone", q: "¿Cómo quieres que suene?", opts: [["Divertida", "Funny"], ["Sincera", "Heartfelt"], ["Atrevida", "Cheeky"], ["Tierna", "Sweet"]] },
      { cat: "Age", q: "¿Es un cumpleaños redondo?", opts: [["30 años", "Thirties (30–39)"], ["40 años", "Forties (40–49)"], ["50 años", "Fifties (50–59)"], ["No es especial", "Not a milestone"]] },
      { cat: "Style", q: "¿Tienes algún estilo en mente?", opts: [["Acuarela", "Watercolour"], ["Pop art", "Pop art"], ["Botánico", "Botanical"], ["Minimalista", "Minimal"], ["Sorpréndeme", "Surprise me"]] }
    ];
    if (code === "FR") return [
      { cat: "Relationship", q: "Petite question — pour qui est-elle ?", opts: [["Sœur", "Sister"], ["Frère", "Brother"], ["Mère", "Mum"], ["Ami", "Friend"], ["Partenaire", "Partner"]] },
      { cat: "Tone", q: "Quel ton veux-tu donner ?", opts: [["Drôle", "Funny"], ["Touchante", "Heartfelt"], ["Coquine", "Cheeky"], ["Tendre", "Sweet"]] },
      { cat: "Age", q: "Un anniversaire marquant ?", opts: [["30 ans", "Thirties (30–39)"], ["40 ans", "Forties (40–49)"], ["50 ans", "Fifties (50–59)"], ["Pas spécial", "Not a milestone"]] },
      { cat: "Style", q: "Un style en tête ?", opts: [["Aquarelle", "Watercolour"], ["Pop art", "Pop art"], ["Botanique", "Botanical"], ["Minimaliste", "Minimal"], ["Surprends-moi", "Surprise me"]] }
    ];
    return this.SP_QS().map(q => ({ cat: q.cat, q: q.q, opts: q.opts.map(o => [o, o]) }));
  }
  spotNextQL(code) {
    const s = this.spS();
    if (s.thinking || s.view !== "res") return null;
    return this.SP_QS_L(code).find(q => !s.asked.includes(q.cat) && !s.chips.some(c => c.cat === q.cat)) || null;
  }
  spotPhraseL(chips, code) {
    if (code !== "ES" && code !== "FR") return this.spotPhrase(chips);
    const V = this.SP_VOCAB()[code];
    const g = c => (chips.find(x => x.cat === c) || {}).val;
    const occ = g("Occasion") || "Birthday", tone = g("Tone"), rel = g("Relationship"), age = g("Age"), style = g("Style");
    const num = age && age.match(/\d+/);
    let t;
    if (code === "ES") {
      t = "Tarjetas de " + (V.occ[occ] || "cumpleaños") + (tone ? " " + V.tone[tone] : "");
      if (rel) t += " para " + (V.rel[rel] || rel.toLowerCase());
      if (num) t += ", " + V.age(num[0]);
    } else {
      t = "Cartes " + (tone ? V.tone[tone] + " " : "") + (V.occ[occ] || "d'anniversaire");
      if (rel) t += " pour " + (V.rel[rel] || rel.toLowerCase());
      if (num) t += ", " + V.age(num[0]);
    }
    if (style) t += " · " + (V.style[style] || style.toLowerCase());
    return t;
  }
  spotChipText(c, code) {
    if (code !== "ES" && code !== "FR") return { cat: c.cat, val: c.val };
    const V = this.SP_VOCAB()[code];
    const cap = t => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    let val = c.val;
    if (c.cat === "Occasion") val = cap((V.occ[c.val] || c.val).replace(/^(de |d')/, ""));
    else if (c.cat === "Tone") val = V.toneShort[c.val] || c.val;
    else if (c.cat === "Relationship") val = V.relShort[c.val] || c.val;
    else if (c.cat === "Style") val = cap(V.style[c.val] || c.val);
    else if (c.cat === "Age") { const n = c.val.match(/\d+/); val = n ? V.age(n[0]) : c.val; }
    return { cat: V.cat[c.cat] || c.cat, val: val };
  }
  spotCols(chips, code, count) {
    const g = c => (chips.find(x => x.cat === c) || {}).val;
    const occ = g("Occasion") || "Birthday", tone = g("Tone") || "Funny", rel = g("Relationship"), style = g("Style") || "Watercolour";
    const V = this.SP_VOCAB()[code];
    const n = [Math.round(count * 1.6), Math.round(count * 0.7), Math.round(count * 0.4)];
    if (code === "ES") return [
      { name: "Tarjetas " + V.tone[tone] + " de " + V.occ[occ], sub: n[0] + " tarjetas" },
      { name: rel ? "Cumpleaños para " + V.rel[rel] : "Cumpleaños redondos", sub: n[1] + " tarjetas" },
      { name: "Colección " + V.style[style], sub: n[2] + " tarjetas" }
    ];
    if (code === "FR") return [
      { name: "Cartes " + V.tone[tone] + " " + V.occ[occ], sub: n[0] + " cartes" },
      { name: rel ? "Anniversaires pour " + V.rel[rel] : "Grands anniversaires", sub: n[1] + " cartes" },
      { name: "Collection " + V.style[style], sub: n[2] + " cartes" }
    ];
    return [
      { name: tone + " " + occ.toLowerCase() + " cards", sub: n[0] + " cards" },
      { name: rel ? rel + " birthdays, handpicked" : "Milestone birthdays", sub: n[1] + " cards" },
      { name: style + " collection", sub: n[2] + " cards" }
    ];
  }
  spotVals() {
    const s = this.spS();
    const code = s.lang ? s.lang.code : "EN";
    const T = this.SP_UI()[code] || this.SP_UI().EN;
    const q = this.spotNextQL(code);
    const chips = s.chips;
    const count = this.countOf(chips.map(c => ({ cat: c.cat, val: c.val })));
    const imgs = this.SP_IMGS();
    const seed = chips.reduce((n, c) => n + c.val.length * 7 + c.cat.length, 3);
    const cards = [];
    for (let i = 0; i < 8; i++) cards.push({ img: imgs[(seed + i * 3) % imgs.length], go: () => this.spotGo() });
    const cols = this.spotCols(chips, code, count).map((c, i) => ({
      name: c.name, sub: c.sub, img: imgs[(seed + i * 7) % imgs.length],
      bg: s.sel === i ? "var(--color-bg-muted)" : "transparent",
      enter: () => this.spotSet({ sel: i }),
      go: () => this.spotGo()
    }));
    return {
      isOpen: !!s.open, q: s.q || "", empty: !(s.q || "").trim(), ghost: this.SP_GHOSTS()[s.ghost % 4],
      thinking: !!s.thinking, isRest: s.view === "rest", isRes: s.view === "res",
      hasLang: !!s.lang, langLabel: T.badge,
      phrase: this.spotPhraseL(chips, code), count: count,
      matchLabel: T.matches + " · " + count + " " + T.cards,
      tReading: T.reading, tJump: T.jump, tSkip: T.skip, tViewAll: T.viewAll,
      tMove: T.move, tEnter: T.enter, tEsc: T.esc, tBy: T.by,
      makeLabel: T.make, makeSub: T.credits,
      close: () => this.spotClose(),
      stop: e => e.stopPropagation(),
      type: e => this.spotInput(e.target.value),
      key: e => {
        const n = cols.length + 1;
        if (e.key === "ArrowDown") { e.preventDefault(); this.spotSet({ sel: (s.sel + 1) % n }); }
        else if (e.key === "ArrowUp") { e.preventDefault(); this.spotSet({ sel: (s.sel - 1 + n) % n }); }
        else if (e.key === "Enter") { e.preventDefault(); this.spotGo(); }
      },
      chips: chips.map(c => ({
        cat: this.spotChipText(c, code).cat, val: this.spotChipText(c, code).val,
        bcolor: c.src === "ask" ? "rgba(190,29,44,.28)" : "rgba(var(--hs-ink),.16)",
        bg: c.src === "ask" ? "rgba(190,29,44,.05)" : "#fff",
        remove: () => this.spotSet({ chips: chips.filter(x => x !== c), asked: s.asked.filter(a => a !== c.cat) })
      })),
      hasQ: !!q, qText: q ? q.q : "", qSkip: () => q && this.spotSet({ asked: s.asked.concat([q.cat]) }),
      qOpts: q ? q.opts.map(o => ({ label: o[0], pick: () => this.spotAnswer(q.cat, o[1]) })) : [],
      cards: cards, cols: cols,
      makeBg: s.sel === cols.length ? "var(--color-bg-muted)" : "transparent",
      makeEnter: () => this.spotSet({ sel: cols.length }),
      makeGo: () => this.spotGo(),
      viewMore: () => this.spotGo(),
      examples: this.SP_EXAMPLES().map(ex => ({ code: ex.code, text: ex.text, go: () => this.spotDemo(ex.text) })),
      skills: [
        { title: "Describe a person, not a category", sub: "Sister, plant obsessed, turning 30", demo: "card for my sister who is obsessed with plants, turning 30" },
        { title: "Say how it should feel", sub: "Funny, heartfelt, a little cheeky", demo: "a cheeky birthday card that still feels warm" },
        { title: "Nothing fits? Stampy draws it", sub: "A one-off card from your idea · 30 credits", demo: "a card of a dinosaur eating birthday cake for my dad" }
      ].map((s2, i) => ({ title: s2.title, sub: s2.sub, n: String(i + 1), go: () => this.spotDemo(s2.demo) }))
    };
  }
  slideDuration() { return (this.props.slideDuration ?? 8) * 1000; }
  armTimer(slide) {
    clearTimeout(this._timer);
    const cur = slide == null ? (this.state.slide || 0) : slide;
    // both slides advance when the ring loader completes
    this._timer = setTimeout(() => this.nextSlide(), this.slideDuration());
  }
  isSafari() {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent;
    return /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua);
  }

  nextSlide() {
    const next = ((this.state.slide || 0) + 1) % 3;
    this.setState((s) => ({ slide: next, cycle: s.cycle + 1 }));
    const v = this.videoRef && this.videoRef.current;
    if (v) {
      if (next === 0) {
        try { v.currentTime = 0; } catch (e) {}
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        v.pause();
      }
    }
    this.armTimer(next);
  }
  observeCats() {
    if (!this._t0) this._t0 = Date.now();
    if (!this._heroIOWired && this.videoRef && this.videoRef.current) {
      this._heroIOWired = true;
      const hv = this.videoRef.current;
      this._heroIO = new IntersectionObserver((e) => {
        if (!e[0].isIntersecting) { if (!hv.paused) hv.pause(); }
        else if ((this.state.slide || 0) === 0 && hv.paused) { const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
      }, { threshold: 0.05 });
      this._heroIO.observe(hv);
    }
    {
      const row = document.querySelector(".hs-fxrow");
      if (row) {
        this._fxFit = () => {
          document.querySelectorAll(".hs-fxcell").forEach((c) => {
            c.style.height = ""; // measure the column, not last run's height (aspect-ratio would feed back)
            const w = c.clientWidth;
            if (!w) return;
            const s = Math.min(w / 384, 1.15);
            const fit = c.querySelector(".hs-fxfit");
            if (fit) {
              fit.style.setProperty("--fx-s", s.toFixed(5));
              fit.style.setProperty("--fx-x", ((w - 384 * s) / 2).toFixed(2) + "px");
            }
            c.style.height = Math.round(644 * s) + "px";
          });
        };
        if (!this._fxFitWired) {
          this._fxFitWired = true;
          const run = () => { if (this._fxFit) this._fxFit(); };
          window.addEventListener("resize", run);
          window.addEventListener("orientationchange", run);
          if (window.ResizeObserver) {
            this._fxRO = new ResizeObserver(run);
            this._fxRO.observe(row);
          }
        }
      }
    }
    if (this._fxFit) this._fxFit();
    if (!this._bvWired && this.bannerVideoRef && this.bannerVideoRef.current) {
      this._bvWired = true;
      const bv = this.bannerVideoRef.current;
      const seek = () => { try { bv.currentTime = 1; } catch (err) {} };
      if (bv.readyState >= 1) seek(); else bv.addEventListener("loadedmetadata", seek, { once: true });
      bv.addEventListener("ended", () => { seek(); const p = bv.play(); if (p && p.catch) p.catch(() => {}); });
    }
    if (this.ipRef && this.ipRef.current && this._ipObserved !== this.ipRef.current) {
      if (this._ipIO) this._ipIO.disconnect();
      this._ipObserved = this.ipRef.current;
      const v = this.ipRef.current;
      v.muted = true;
      const tryPlay = () => { if (this._ipVisible === false) return; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
      v.addEventListener("loadeddata", tryPlay);
      v.addEventListener("canplay", tryPlay);
      this._ipIO = new IntersectionObserver((e) => {
        this._ipVisible = e[0].isIntersecting;
        if (e[0].isIntersecting) tryPlay();
        else if (!v.paused) v.pause();
      }, { threshold: 0.3 });
      this._ipIO.observe(v);
    }
    if (!this._tabletKick && this.tabletRef && this.tabletRef.current) {
      this._tabletKick = true;
      const v = this.tabletRef.current;
      v.muted = true;
      const play = () => { if (this._tbRev || this._tbVisible === false) return; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
      const rewind = (ts) => {
        if (!v.isConnected || !this._tbRev || this._tbVisible === false) return;
        const prev = this._tbRevTs || ts;
        this._tbRevTs = ts;
        const nt = v.currentTime - Math.min((ts - prev) / 1000, 0.1);
        if (nt <= 0.03) {
          this._tbRev = false;
          this._tbRevTs = 0;
          try { v.currentTime = 0; } catch (e) {}
          play();
          return;
        }
        try { v.currentTime = nt; } catch (e) {}
        this._tbRAF = requestAnimationFrame(rewind);
      };
      v.addEventListener("loadeddata", play);
      v.addEventListener("canplay", play);
      v.addEventListener("ended", () => {
        this._tbRev = true;
        this._tbRevTs = 0;
        v.pause();
        cancelAnimationFrame(this._tbRAF);
        if (this._tbVisible !== false) this._tbRAF = requestAnimationFrame(rewind);
      });
      this._tbIO = new IntersectionObserver((e) => {
        this._tbVisible = e[0].isIntersecting;
        if (e[0].isIntersecting) { if (this._tbRev) { cancelAnimationFrame(this._tbRAF); this._tbRevTs = 0; this._tbRAF = requestAnimationFrame(rewind); } else play(); }
        else { cancelAnimationFrame(this._tbRAF); if (!v.paused) v.pause(); }
      }, { threshold: 0.25 });
      this._tbIO.observe(v);
      play();
    }
    if (!this._mcObserved && this.mcRef && this.mcRef.current) {
      this._mcObserved = true;
      this._mcIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ momentCardsVisible: true }); this._mcIO.disconnect(); }
      }, { threshold: 0.25 });
      this._mcIO.observe(this.mcRef.current);
    }
    if (!this._fxObserved && this.fxRef && this.fxRef.current) {
      this._fxObserved = true;
      this._fxIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ fxVisible: true }); this._fxIO.disconnect(); }
      }, { threshold: 0.15 });
      this._fxIO.observe(this.fxRef.current);
    }
    if (!this._catsObserved && this.catsRef && this.catsRef.current) {
      this._catsObserved = true;
      this._catsIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ catsVisible: true, catsDelay: Date.now() - this._t0 < 1500 ? 0.45 : 0 }); this._catsIO.disconnect(); }
      }, { threshold: 0.25 });
      this._catsIO.observe(this.catsRef.current);
    }
    if (!this._chatSentObserved && this.chatSentinelRef && this.chatSentinelRef.current) {
      this._chatSentObserved = true;
      this._chatSentIO = new IntersectionObserver((e) => {
        const away = !e[0].isIntersecting;
        if (away !== !!this.state.chatAway) {
          this.setState({ chatAway: away }, () => {
            if (away && !this.state.stOff && !this.state.stText) {
              clearTimeout(this._stFirst);
              this._stFirst = setTimeout(this.stampyShow, 600);
            }
          });
        }
      }, { threshold: 0 });
      this._chatSentIO.observe(this.chatSentinelRef.current);
    }
    if (!this._ftObserved && this.ftRef && this.ftRef.current) {
      this._ftObserved = true;
      this._ftIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ ftVisible: true }); this._ftIO.disconnect(); }
      }, { threshold: 0.08 });
      this._ftIO.observe(this.ftRef.current);
    }
    if (!this._vimeoWired && this.vimeoRef && this.vimeoRef.current && !window.Vimeo && !this._vimeoPoll) {
      this._vimeoPoll = setInterval(() => {
        if (!window.Vimeo) return;
        clearInterval(this._vimeoPoll); this._vimeoPoll = null;
        this.observeCats();
      }, 300);
    }
    if (!this._vimeoWired && this.vimeoRef && this.vimeoRef.current && window.Vimeo) {
      this._vimeoWired = true;
      const el = this.vimeoRef.current;
      this._vp = new window.Vimeo.Player(el);
      this._vp.setMuted(true).catch(() => {});
      this._vpIO = new IntersectionObserver((e) => {
        if (!this._vp) return;
        if (e[0].isIntersecting) this._vp.play().catch(() => {});
        else this._vp.pause().catch(() => {});
      }, { threshold: 0.35 });
      this._vpIO.observe(el);
    }
    if (!this._faqObserved && this.faqRef && this.faqRef.current) {
      this._faqObserved = true;
      this._faqIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ faqVisible: true }); this._faqIO.disconnect(); }
      }, { threshold: 0.1 });
      this._faqIO.observe(this.faqRef.current);
    }
    if (!this._seoObserved && this.seoRef && this.seoRef.current) {
      this._seoObserved = true;
      this._seoIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ seoVisible: true }); this._seoIO.disconnect(); }
      }, { threshold: 0.1 });
      this._seoIO.observe(this.seoRef.current);
    }
    if (!this._lbObserved && this.lbRef && this.lbRef.current) {
      this._lbObserved = true;
      this._lbIO = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) { this.setState({ lbVisible: true }); this._lbIO.disconnect(); }
      }, { threshold: 0.1 });
      this._lbIO.observe(this.lbRef.current);
    }
    if (!this._diffObserved && this.diffRef && this.diffRef.current) {
      this._diffObserved = true;
      this._diffIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ diffVisible: true }); this._diffIO.disconnect(); }
      }, { threshold: 0.1 });
      this._diffIO.observe(this.diffRef.current);
    }
    if (!this._promptObserved && this.promptRef && this.promptRef.current) {
      this._promptObserved = true;
      this._promptIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ promptVisible: true }); this._promptIO.disconnect(); }
      }, { threshold: 0.12 });
      this._promptIO.observe(this.promptRef.current);
    }
    if (!this._quoteObserved && this.quoteRef && this.quoteRef.current) {
      this._quoteObserved = true;
      this._quoteIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ quoteVisible: true }); this._quoteIO.disconnect(); }
      }, { threshold: 0.12 });
      this._quoteIO.observe(this.quoteRef.current);
    }
    if (!this._statsObserved && this.statsRef && this.statsRef.current) {
      this._statsObserved = true;
      this._statsIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.runStats(); this._statsIO.disconnect(); }
      }, { threshold: 0.6 });
      this._statsIO.observe(this.statsRef.current);
    }
    if (!this._stepsObserved && this.stepsRef && this.stepsRef.current) {
      this._stepsObserved = true;
      this._stepsIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ stepsVisible: true }); this._stepsIO.disconnect(); }
      }, { threshold: 0.12 });
      this._stepsIO.observe(this.stepsRef.current);
    }
    if (!this._momentObserved && this.momentRef && this.momentRef.current) {
      this._momentObserved = true;
      this._momentIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ momentVisible: true }); this._momentIO.disconnect(); }
      }, { threshold: 0.12 });
      this._momentIO.observe(this.momentRef.current);
    }
    if (!this._promoObserved && this.promoRef && this.promoRef.current) {
      this._promoObserved = true;
      this._promoIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ promoVisible: true }); this._promoIO.disconnect(); }
      }, { threshold: 0.12 });
      this._promoIO.observe(this.promoRef.current);
    }
    if (!this._dealObserved && this.dealRef && this.dealRef.current) {
      this._dealObserved = true;
      this._dealIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ dealVisible: true }); this._dealIO.disconnect(); }
      }, { threshold: 0.15 });
      this._dealIO.observe(this.dealRef.current);
    }
    if (!this._feObserved && this.feRef && this.feRef.current) {
      this._feObserved = true;
      this._feIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ feVisible: true }); this._feIO.disconnect(); }
      }, { threshold: 0.15 });
      this._feIO.observe(this.feRef.current);
    }
    if (!this._pinkObserved && this.pinkRef && this.pinkRef.current) {
      this._pinkObserved = true;
      this._pinkIO = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { this.setState({ pinkVisible: true, pinkDelay: Date.now() - this._t0 < 1500 ? 0.9 : 0 }); this._pinkIO.disconnect(); }
      }, { threshold: 0.2 });
      this._pinkIO.observe(this.pinkRef.current);
    }
  }
  componentDidUpdate() {
    if (this.state.pnOpen && !this._pnScroll) {
      this._pnScroll = () => this._pnAnchor();
      window.addEventListener("scroll", this._pnScroll, { passive: true });
      window.addEventListener("resize", this._pnScroll);
    } else if (!this.state.pnOpen && this._pnScroll) {
      window.removeEventListener("scroll", this._pnScroll);
      window.removeEventListener("resize", this._pnScroll);
      this._pnScroll = null;
    }
    this.observeCats();
    if (this.state.notifOpen) this.tagNotifRows();
    if (this.state.bannerOn) this.kickBannerVideo(); else this._bkicked = null;
    requestAnimationFrame(() => this.syncSheetToFrame());

    if (this.state.chatWinOn && !this.state.chatWinIn && !this._chatRaf) {
      this._chatRaf = requestAnimationFrame(() => {
        this._chatRaf = null;
        if (this.state.chatWinOn) this.setState({ chatWinIn: true });
      });
    }
  }
  // mobile: swipe a notification row — right marks read, left archives
  tagNotifRows() {
    const panel = document.querySelector('[style*="max-height: 620px"]');
    if (!panel) return;
    const ICON_READ = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8'/><path d='m3 8 8.4-5.6a2 2 0 0 1 2.2 0L22 8'/><path d='m3 8 9 6 9-6'/></svg>";
    const ICON_ARCH = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='5' rx='1'/><path d='M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8'/><path d='M10 12h4'/></svg>";
    panel.querySelectorAll('div:is([style*="padding: 20px 24px"],[style*="padding: 20px 24px 20px 24px"])').forEach((row) => {
      if (row.hasAttribute("data-nrow")) return;
      const st = row.getAttribute("style") || "";
      if (st.indexOf("border-top") < 0) return; // header row, not a notification
      row.setAttribute("data-nrow", "");
      const parent = row.parentNode;
      if (!parent || (parent.classList && parent.classList.contains("nsw"))) return;
      const wrap = document.createElement("div");
      wrap.className = "nsw";
      const read = document.createElement("div");
      read.className = "nsw-pane nsw-read";
      read.innerHTML = ICON_READ;
      const arch = document.createElement("div");
      arch.className = "nsw-pane nsw-arch";
      arch.innerHTML = ICON_ARCH;
      parent.insertBefore(wrap, row);
      wrap.appendChild(read);
      wrap.appendChild(arch);
      wrap.appendChild(row);
    });
  }
  setupNotifSwipe() {
    if (this._nswipe) return;
    this._nswipe = true;
    const mobile = () => document.body.classList.contains("m-force") || (window.matchMedia && window.matchMedia("(max-width: 767px)").matches);
    let row = null, x0 = 0, y0 = 0, dx = 0, locked = null;
    const px = (e) => (e.touches ? e.touches[0] : e);
    const start = (e) => {
      if (!mobile()) return;
      const t = e.target.closest && e.target.closest("[data-nrow]");
      if (!t) return;
      row = t; dx = 0; locked = null;
      if (t.parentNode && t.parentNode.classList) t.parentNode.classList.add("nsw-clip");
      const p = px(e); x0 = p.clientX; y0 = p.clientY;
      row.style.transition = "none";
    };
    const move = (e) => {
      if (!row) return;
      const p = px(e);
      const mx = p.clientX - x0, my = p.clientY - y0;
      if (locked === null) {
        if (Math.abs(mx) < 8 && Math.abs(my) < 8) return;
        locked = Math.abs(mx) > Math.abs(my) ? "x" : "y";
        if (locked === "y") { if (row.parentNode && row.parentNode.classList) row.parentNode.classList.remove("nsw-clip"); this.resetNRow(row); row = null; return; }
      }
      if (locked !== "x") return;
      if (e.cancelable) e.preventDefault();
      dx = Math.max(-104, Math.min(104, mx));
      row.style.transform = "translateX(" + dx + "px)";
      this.nswSet(row, dx);
    };
    const end = () => {
      if (!row) return;
      const r = row; row = null;
      r.style.transition = "transform 0.26s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.26s ease, height 0.26s ease";
      const ease = "width 0.26s cubic-bezier(0.22, 1, 0.36, 1)";
      if (dx > 56) { // mark read
        r.style.transform = "translateX(0)";
        this.nswSet(r, 0, ease);
        r.style.background = "var(--color-bg-main)";
        r.setAttribute("data-nread", "");
        this.setState({ notifRead: true });
      } else if (dx < -56) { // archive
        r.style.transform = "translateX(-100%)";
        this.nswSet(r, -(r.offsetWidth || 400), ease);
        r.style.opacity = "0";
        setTimeout(() => { r.style.display = "none"; }, 260);
      } else {
        r.style.transform = "translateX(0)";
        this.nswSet(r, 0, ease);
      }
      const wasArchive = dx < -56;
      setTimeout(() => { if (!wasArchive && r.parentNode && r.parentNode.classList) r.parentNode.classList.remove("nsw-clip"); }, 280);
      dx = 0;
    };
    const opts = { passive: false };
    document.addEventListener("touchstart", start, { passive: true });
    document.addEventListener("touchmove", move, opts);
    document.addEventListener("touchend", end, { passive: true });
    document.addEventListener("mousedown", start);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", end);
  }
  // iOS blocks autoplay unless the muted ATTRIBUTE is present at load —
  // React only sets the property, so the promo clip never starts on a phone.
  kickBannerVideo() {
    const v = this.bannerVideoRef && this.bannerVideoRef.current;
    if (!v || this._bkicked === v) return;
    this._bkicked = v;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("autoplay", "");
    v.muted = true; v.defaultMuted = true;
    const play = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    play();
    v.addEventListener("loadeddata", play);
    v.addEventListener("canplay", play);
    document.addEventListener("touchstart", play, { once: true, passive: true });
    clearInterval(this._bkickT);
    this._bkickT = setInterval(() => { if (v.paused && !v.ended) play(); else clearInterval(this._bkickT); }, 700);
    setTimeout(() => clearInterval(this._bkickT), 8000);
  }
  // preview frame only: #dc-root is the scroller, so the chat sheet (fixed on a real
  // phone) has to be re-anchored to the visible part of the frame on every scroll
  syncSheetToFrame() {
    const box = document.getElementById("dc-root");
    if (!box || !document.body.classList.contains("m-force")) return;
    const place = () => {
      document.querySelectorAll('[style*="z-index: 8900"][style*="bottom: 28px"]').forEach((el) => {
        if ((el.getAttribute("style") || "").includes("width: 550px")) return; // desktop-only centred shell
        // translate rather than offset `top`: a large top would grow the frame's
        // scrollHeight and let the page scroll past its own end
        el.style.removeProperty("top");
        el.style.setProperty("transform", "translateY(" + Math.round(box.scrollTop) + "px)", "important");
      });
    };
    place();
    requestAnimationFrame(place); // second pass: the sheet's mobile height lands after the first
    setTimeout(place, 80);
    if (this._sheetPlace) box.removeEventListener("scroll", this._sheetPlace);
    this._sheetPlace = place;
    {
      box.addEventListener("scroll", place, { passive: true });
      window.addEventListener("resize", place);
    }
  }
  nswPanes(r) {
    const w = r && r.parentNode && r.parentNode.classList && r.parentNode.classList.contains("nsw") ? r.parentNode : null;
    return w ? { read: w.querySelector(".nsw-read"), arch: w.querySelector(".nsw-arch") } : { read: null, arch: null };
  }
  nswSet(r, dx, trans) {
    const p = this.nswPanes(r);
    [p.read, p.arch].forEach((el) => { if (el) el.style.transition = trans || "none"; });
    if (p.read) p.read.style.width = dx > 0 ? dx + "px" : "0px";
    if (p.arch) p.arch.style.width = dx < 0 ? -dx + "px" : "0px";
  }
  resetNRow(r) { if (r) { r.style.transition = "transform 0.2s ease"; r.style.transform = "translateX(0)"; this.nswSet(r, 0, "width 0.2s ease"); } }
  // mobile: header hides on scroll down, returns on scroll up
  setupNavAutoHide() {
    if (this._navAH) return;
    this._navAH = true;
    const mobile = () => document.body.classList.contains("m-force") || (window.matchMedia && window.matchMedia("(max-width: 767px)").matches);
    let last = 0;
    const onScroll = (e) => {
      const t = e && e.target;
      const y = t && t !== document && t.scrollTop != null ? t.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      if (!mobile()) { if (this.state.navHidden) this.setState({ navHidden: false }); last = y; return; }
      const d = y - last;
      if (Math.abs(d) < 6) return;
      const hide = d > 0 && y > 90 && document.body.classList.contains("mnav-on");
      if (hide !== !!this.state.navHidden) this.setState({ navHidden: hide });
      last = y;
    };
    const root = document.getElementById("dc-root");
    window.addEventListener("scroll", onScroll, { passive: true });
    if (root) root.addEventListener("scroll", onScroll, { passive: true });
    this._navAHOff = () => {
      window.removeEventListener("scroll", onScroll);
      if (root) root.removeEventListener("scroll", onScroll);
    };
  }
  syncPreviewMode() {
    const mode = this.props.previewMode || "Desktop";
    const sizes = {
      "iPhone SE — 375×667": ["375px", "667px"],
      "iPhone 12 Pro — 390×844": ["390px", "844px"],
      "iPhone 14 Pro Max — 430×932": ["430px", "932px"],
      "Pixel 7 — 412×915": ["412px", "915px"],
      "Galaxy S8+ — 360×740": ["360px", "740px"],
      "Narrow — 320": ["320px", "720px"],
      "Mobile 390": ["390px", "844px"], "Mobile 375": ["375px", "667px"], "Mobile 320": ["320px", "720px"],
    };
    const [w, h] = sizes[mode] || [];
    const b = document.body;
    const root = document.getElementById("dc-root");
    if (w) {
      b.classList.add("m-force"); b.style.setProperty("--m-w", w); b.style.setProperty("--m-h", h);
      // the device frame is its own scroll container — keep Lenis (window smooth scroll) out of it
      if (root) root.setAttribute("data-lenis-prevent", "");
      if (this._lenis) { if (this._lenisRaf) cancelAnimationFrame(this._lenisRaf); this._lenisRaf = null; this._lenis.destroy(); this._lenis = null; }
    } else {
      b.classList.remove("m-force"); b.style.removeProperty("--m-w"); b.style.removeProperty("--m-h");
      if (root) root.removeAttribute("data-lenis-prevent");
    }
  }
  renderVals() {
    this.syncPreviewMode();
    if (!this.videoRef) this.videoRef = React.createRef();
    if (!this.catsRef) { this.catsRef = React.createRef(); }
    if (!this.pinkRef) { this.pinkRef = React.createRef(); setTimeout(() => this.observeCats(), 0); }
    const ease = "0.65s cubic-bezier(0.22, 1.18, 0.36, 1)";
    const catVals = {};
    for (let i = 0; i < 9; i++) {
      catVals["catAnim" + i] = this.state.catsVisible ? `hs-hero-up ${ease} ${(this.state.catsDelay || 0) + 0.1 + i * 0.09}s both` : "none";
    }
    const on = this.state.videoStarted;
    const deck = [];
    for (let i = 125; i <= 134; i++) deck.push({ src: `uploads/cards/image ${i}.png`, alt: "HeartStamp card" });
    return {
      ...catVals,
      marqueeCards: deck.concat(deck),
      catsRef: this.catsRef,
      sp: this.spotVals(),
      spOpen: () => this.spotOpen(),
      /* `none` rather than translateY(0) when shown. An identity transform is
         still a transform, and a transformed ancestor becomes the containing
         block for fixed-position descendants — which collapsed the design
         system's full-height mobile notification panel to 13px. `none` and
         translateY(-100%) interpolate fine, so the auto-hide is unchanged. */
      navShift: this.state.navHidden ? "translateY(-100%)" : "none",
      pinkRef: this.pinkRef,
      feRef: this.feRef = this.feRef || React.createRef(),
      ld: (() => {
        const p = this.state.ldPhase || 0;
        const pct = this.state.ldPct || 0;
        const dirs = { Top: "translateY(-100%)", Bottom: "translateY(100%)", Left: "translateX(-100%)", Right: "translateX(100%)" };
        const two = (this.props.preloaderStyle || "Two-layer") === "Two-layer";
        const out = dirs[this.props.exitDirection] || dirs.Bottom;
        return {
          on: !this.state.ldGone,
          pct: pct,
          barScale: (pct / 100).toFixed(3),
          counterDisplay: two ? "none" : "flex",
          twoLayerDisplay: two ? "block" : "none",
          exit: this.state.ldExit ? out : "none",
          backExit: this.state.ldExit ? out : "none",
        };
      })(),
      chatOn: !this.state.chatWinIn && (this.props.showLoader === false ? true : !!this.state.chatOn),
      dealRef: this.dealRef = this.dealRef || React.createRef(),
      promoRef: this.promoRef = this.promoRef || React.createRef(),
      momentRef: this.momentRef = this.momentRef || React.createRef(),
      stepsRef: this.stepsRef = this.stepsRef || React.createRef(),
      fxRef: this.fxRef = this.fxRef || React.createRef(),
      ipRef: this.ipRef = this.ipRef || React.createRef(),
      tabletRef: this.tabletRef = this.tabletRef || React.createRef(),
      mcRef: this.mcRef = this.mcRef || React.createRef(),
      fxCol1: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 0ms both" : "none",
      fxCol2: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 110ms both" : "none",
      fxCol3: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 220ms both" : "none",
      fxRise1: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 420ms both" : "none",
      fxRise2: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 560ms both" : "none",
      fxRise3: this.state.fxVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) 700ms both" : "none",
      fxFloat1: this.state.fxVisible ? "hs-fx-float 6.2s ease-in-out 1.45s infinite" : "none",
      fxFloat2: this.state.fxVisible ? "hs-fx-float2 7.4s ease-in-out 1.6s infinite" : "none",
      fxFloat3: this.state.fxVisible ? "hs-fx-float 6.8s ease-in-out 1.75s infinite" : "none",
      quoteRef: this.quoteRef = this.quoteRef || React.createRef(),
      promptRef: this.promptRef = this.promptRef || React.createRef(),
      profile: {
        open: !!this.state.pnOpen,
        btnRef: this.pnBtnRef = this.pnBtnRef || React.createRef(),
        panelRef: this.pnPanelRef = this.pnPanelRef || React.createRef(),
        toggle: () => this.setState((st) => {
          if (!st.pnOpen) setTimeout(() => this._pnAnchor(), 0);
          return { pnOpen: !st.pnOpen };
        }),
        top: (this.state.pnTop || 158) + 12 + "px",
        close: () => this.setState({ pnOpen: false }),
        // the two branches render in different places in the tree, so each
        // carries the open check itself
        openDesktop: !!this.state.pnOpen && !this.state.pnMobile,
        openMobile: !!this.state.pnOpen && !!this.state.pnMobile,
        theme: this.state.pnTheme || "system",
        setTheme: (t) => { this.setState({ pnTheme: t }); this.applyTheme(t); },
      },
      feRow: {
        track: this.feTrackRef = this.feTrackRef || React.createRef(),
        prev: () => { const el = this.feTrackRef.current; if (el) el.scrollBy({ left: -304, behavior: "smooth" }); },
        next: () => { const el = this.feTrackRef.current; if (el) el.scrollBy({ left: 304, behavior: "smooth" }); },
        veil: this.state.feRowHover ? 1 : 0,
        enter: () => this.setState({ feRowHover: true }),
        leave: () => this.setState({ feRowHover: false }),
      },
      showGrid: !!this.props.showGrid,
      gridCols: [0,1,2,3,4,5,6,7,8,9,10,11],
      typedPrompt: this.state.typed ?? "",
      navTyped: this.state.typed == null ? "Search for cards, invitations, digital cards..." : (this.state.typed || "\u00a0"),
      chatTyped: this.state.typed == null ? "Try: I’m making a card for my girlfriend that will make her laugh for her birthday" : (this.state.typed || "\u00a0"),
      prompt: {
        value: this.state.promptValue ?? "",
        hintDisplay: (this.state.promptActive || (this.state.promptValue || "").length) ? "none" : "block",
        focus: () => { if (this._twT) clearTimeout(this._twT); this.setState({ promptActive: true }); },
        blur: () => {
          if ((this.state.promptValue || "").trim()) return;
          this.setState({ promptActive: false, promptValue: "" });
          clearTimeout(this._twT);
          this.runTypewriter();
        },
        shellClick: (e) => {
          if (e.target.closest("button")) return;
          const inp = e.currentTarget.querySelector("textarea");
          if (inp) inp.focus();
        },
        change: (e) => {
          const el = e.target;
          el.style.height = "20px";
          el.style.height = Math.min(60, el.scrollHeight) + "px";
          this.setState({ promptValue: el.value, promptActive: true });
        },
        sendBg: (this.state.promptValue || "").trim() ? "var(--color-text-primary)" : "var(--hs-tint-2)",
        sendColor: (this.state.promptValue || "").trim() ? "var(--color-text-on-primary)" : "var(--color-text-disabled)",
      },
      stipRef: this.stipRef = this.stipRef || React.createRef(),
      ckOn: !!this.state.ckOn,
      ckO: this.state.ckIn ? 1 : 0,
      ckT: this.state.ckIn ? "translateY(0)" : "translateY(24px)",
      ckTm: this.state.ckIn ? "translateY(0)" : "translateY(-24px)",
      // scrolling up brings the sticky header back — sit under it, not over it
      // header visible: sit under it. header hidden: slide up into the nav's slot.
      ckTopS: (this.state.navHidden ? 8 : (this.state.ckNavH == null ? 64 : this.state.ckNavH) + 8) + "px",
      ckOm: this.state.ckIn && !this.state.navHidden ? 1 : 0,
      ckAccept: () => this.ckClose("all"),
      ckReject: () => this.ckClose("none"),
      ckCustomize: () => this.setState({ ckCust: true }),
      ckSave: () => this.ckClose("custom"),
      ckCust: !!this.state.ckCust,
      ckRadM: this.state.ckCust ? "24px" : "999px",
      ckWideM: this.state.ckCust ? "ck-wide" : "",
      ckSlide: "translateX(" + (-100 * (this.state.ckCust ? 0 : (this.state.ckLine || 0))) + "%)",
      ckNotCust: !this.state.ckCust,
      ckNoop: (e) => { if (e) e.preventDefault(); },
      ckFunc: !!this.state.ckFunc,
      ckMkt: !!this.state.ckMkt,
      ckFuncBg: this.state.ckFunc ? "var(--color-text-primary)" : "rgba(var(--hs-ink),0.2)",
      ckFuncK: this.state.ckFunc ? "translateX(18px)" : "translateX(0)",
      ckFuncT: () => this.setState(s => ({ ckFunc: !s.ckFunc })),
      ckMktBg: this.state.ckMkt ? "var(--color-text-primary)" : "rgba(var(--hs-ink),0.2)",
      ckMktK: this.state.ckMkt ? "translateX(18px)" : "translateX(0)",
      ckMktT: () => this.setState(s => ({ ckMkt: !s.ckMkt })),
      stipClose: (e) => {
        if (e) { e.stopPropagation(); e.preventDefault(); }
        this.stipDismiss();
      },
      stipOpen: () => {
        if (this._stipDrag) return;
        this.stipDismiss();
        this.stampyStop();
        this.setState({ stText: null, stIn: false, chatWinOn: true, chatWinAnchor: "right" });
        this.spotGo();
      },
      stipKey: (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        this.stipDismiss();
        this.stampyStop();
        this.setState({ stText: null, stIn: false, chatWinOn: true, chatWinAnchor: "right" });
        this.spotGo();
      },
      stipDown: (e) => {
        const t = e.touches && e.touches[0];
        if (!t) return;
        this._stipY0 = t.clientY;
        this._stipDy = 0;
        this._stipDrag = false;
        const n = this.stipRef.current;
        if (n) n.style.transition = "none";
      },
      stipMove: (e) => {
        if (this._stipY0 == null) return;
        const t = e.touches && e.touches[0];
        if (!t) return;
        const dy = Math.max(0, t.clientY - this._stipY0);
        this._stipDy = dy;
        if (dy > 4) this._stipDrag = true;
        const n = this.stipRef.current;
        if (n) {
          n.style.transform = "translateX(-50%) translateY(" + dy + "px)";
          n.style.opacity = String(Math.max(0, 1 - dy / 90));
        }
      },
      stipUp: () => {
        const n = this.stipRef.current;
        const dy = this._stipDy || 0;
        this._stipY0 = null;
        if (dy > 36) { this.stipDismiss(); }
        else if (n) {
          n.style.transition = "transform 260ms cubic-bezier(0.16,0.84,0.24,1), opacity 200ms ease-out";
          n.style.transform = "";
          n.style.opacity = "";
        }
        clearTimeout(this._stipDragT);
        this._stipDragT = setTimeout(() => { this._stipDrag = false; }, 320);
      },
      stampy: (() => {
        const away = !!this.state.chatAway;
        return {
          bubbleOn: away && !this.state.chatWinIn && !this.state.stOff && !!this.state.stText,
          text: this.state.stText || "",
          bubbleOpacity: this.state.stIn ? 1 : 0,
          bubbleY: this.state.stIn ? "0px" : "10px",
          fabOn: !this.state.chatWinIn,
          fabOpacity: away ? 1 : 0,
          fabTransform: away ? "translateY(0)" : "translateY(calc(100% + 40px))",
          faceRef: this.stFaceRef = this.stFaceRef || React.createRef(),
          open: () => {
            this.stampyStop();
            this.setState({ stText: null, stIn: false, chatWinOn: true, chatWinAnchor: "right" });
            this.spotGo();
          },
          dismiss: (e) => { e.preventDefault(); e.stopPropagation(); this.stampyStop(); this.setState({ stText: null, stIn: false, stOff: true }); },
        };
      })(),
      ...(() => {
        const beats = [
          { line: "Hi, it’s Stampy, I can help you to design a card", img: "assets/mascot/expr-excited.png" },
          { line: "Tell me who it’s for and I’ll draw the rest", img: "assets/mascot/expr-wink.png" },
          { line: "Every card is a first edition — yours only", img: "assets/mascot/expr-rosey.png" },
          { line: "Printed on 350gsm and posted within 24 hours", img: "assets/mascot/expr-excited.png" },
        ];
        const i = (this.state.mascotBeat || 0) % beats.length;
        const away = !this.state.chatAway || this.state.mascotClosed;
        return {
          mascot: {
            line: beats[i].line,
            img: beats[i].img,
            transform: away ? "translateY(calc(100% + 40px))" : "translateY(0)",
            opacity: away ? 0 : 1,
            events: away ? "none" : "auto",
            bubbleOpacity: this.state.mascotSwap ? 0 : 1,
            bubbleShift: this.state.mascotSwap ? "translateY(6px)" : "none",
            go: () => this.spotGo(),
            close: (e) => { e.preventDefault(); e.stopPropagation(); this.setState({ mascotClosed: true }); },
          },
        };
      })(),
      chat: (() => {
        const names = ["Jack's Birthday Bi...", "Lupe's Luau", "Mom's Anniversary"];
        const convo = this.state.chatConvo ?? names[0];
        const val = this.state.chatValue ?? "";
        const center = this.state.chatWinAnchor === "center";
        const baseX = center ? "translateX(-50%) " : "";
        return {
          on: !!this.state.chatWinOn,
          op: 1,
          inner: this.state.chatWinIn ? "translateY(0)" : "translateY(100%)",
          w: center ? "550px" : "420px",
          left: center ? "50%" : "auto",
          right: center ? "auto" : "28px",
          openCenter: () => this.setState({ chatWinOn: true, chatWinAnchor: "center" }),
          origin: center ? "50% 100%" : "100% 100%",
          blur: "none",
          shift: baseX || "none",
          convo,
          menuOn: !!this.state.chatMenuOn,
          toggleMenu: () => this.setState(s => ({ chatMenuOn: !s.chatMenuOn })),
          newConvo: () => this.setState({ chatMenuOn: false, chatConvo: "New conversation", chatValue: "", chatSugOff: false }),
          convos: names.map(n => ({
            name: n,
            bg: n === convo ? "rgba(var(--hs-ink),0.06)" : "transparent",
            pick: () => this.setState({ chatConvo: n, chatMenuOn: false }),
          })),
          sugOn: !this.state.chatSugOff,
          hideSug: () => this.setState({ chatSugOff: true }),
          sugs: ["Thank you", "Get well soon", "Graduation", "Good luck"].map((label, i) => ({
            label, n: i + 1,
            pick: () => this.setState({ chatValue: "A " + label.toLowerCase() + " card for ", chatSugOff: true }),
          })),
          value: val,
          sendBg: val.trim() ? "var(--color-text-primary)" : "rgba(var(--hs-ink),0.06)",
          sendColor: val.trim() ? "var(--color-text-on-primary)" : "var(--color-text-disabled)",
          change: (e) => {
            const el = e.target;
            el.style.height = "20px";
            el.style.height = Math.min(96, el.scrollHeight) + "px";
            this.setState({ chatValue: el.value });
          },
          shellClick: (e) => {
            if (e.target.closest("button")) return;
            const ta = e.currentTarget.querySelector("textarea");
            if (ta) ta.focus();
          },
          close: () => this.setState({ chatWinOn: false, chatWinIn: false, chatMenuOn: false }),
        };
      })(),
      glassRef: this.glassRef = this.glassRef || React.createRef(),
      glassVeilRef: this.glassVeilRef = this.glassVeilRef || React.createRef(),
      chatShellRef: this.chatShellRef = this.chatShellRef || React.createRef(),
      banner: {
        on: !!this.state.bannerOn && !this.state.bannerOff,
        op: this.state.bannerIn ? 1 : 0,
        shift: this.state.bannerIn ? "translateY(0)" : "translateY(20px)",
        close: (e) => { e.preventDefault(); e.stopPropagation(); this.setState({ bannerOff: true }); },
        videoRef: this.bannerVideoRef = this.bannerVideoRef || React.createRef(),
        muted: !this.state.bannerSound,
        unmuted: !!this.state.bannerSound,
        toggleSound: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const v = this.bannerVideoRef && this.bannerVideoRef.current;
          const on = !this.state.bannerSound;
          this.setState({ bannerSound: on });
          if (v) {
            v.muted = !on;
            v.defaultMuted = !on;
            v.volume = on ? 1 : 0;
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          }
        },
      },
      mq: {
        track: this.mqTrack = this.mqTrack || React.createRef(),
        wheel: (e) => {
          const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          if (Math.abs(e.deltaX) > 2) e.preventDefault();
          this._mqBoost = Math.max(-90, Math.min(90, (this._mqBoost || 0) - d * 0.14));
        },
        down: (e) => {
          e.preventDefault();
          if (e.currentTarget.setPointerCapture) { try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {} }
          e.currentTarget.style.cursor = "grabbing";
          this._mqDrag = { x: e.clientX, t: performance.now() };
          this._mqFlick = 0;
          this._mqBoost = 0;
        },
        move: (e) => {
          if (!this._mqDrag) return;
          const now = performance.now();
          const dx = e.clientX - this._mqDrag.x;
          const dt = Math.max(1, now - (this._mqDrag.t || now));
          this._mqDrag.x = e.clientX;
          this._mqDrag.t = now;
          this._mqOffset = (this._mqOffset || 0) + dx;
          // px/frame flick velocity, smoothed
          const v = (dx / dt) * 16.67;
          this._mqFlick = (this._mqFlick || 0) * 0.6 + v * 0.4;
          this._mqBoost = 0;
        },
        up: (e) => {
          if (this._mqDrag) this._mqBoost = Math.max(-90, Math.min(90, this._mqFlick || 0));
          this._mqDrag = null;
          this._mqFlick = 0;
          if (e && e.currentTarget) e.currentTarget.style.cursor = "grab";
        },
      },
      remVideoLoop: window.remVideoLoop,
      ...(() => {
        const o = {};
        for (let i = 0; i < 7; i++) {
          const k = i;
          o["nk" + i] = {
            open: this.state.kebab === k,
            toggle: (e) => { e.preventDefault(); e.stopPropagation(); this.setState((s) => ({ kebab: s.kebab === k ? null : k })); },
          };
        }
        return o;
      })(),
      mega: (() => {
        const open = !!this.state.megaOpen;
        const o = {
          h: open ? "372px" : "0px",
          pe: open ? "auto" : "none",
          shift: open ? "translateY(0)" : "translateY(-14px)",
          op: open ? 1 : 0,
          enter: (e) => {
            clearTimeout(this._megaT);
            const label = e.currentTarget.textContent;
            this.setState({ megaOpen: true, megaLabel: label });
          },
          leave: () => {
            clearTimeout(this._megaT);
            this._megaT = setTimeout(() => this.setState({ megaOpen: false, megaLabel: null }), 140);
          },
        };
        const labels = ["Bday","Congrats","Thank you","Cards for Kids","Anniversary","Wedding","Thinking of you","Baby","New Home","Graduation","Retirement"];
        labels.forEach((l, i) => { o["c" + i] = this.state.megaLabel === l ? "var(--color-element-link)" : "var(--color-text-primary)"; });
        const promos = {
          "Bday": ["assets/promo/card-1.png", "Your First Digital Card Is Free"],
          "Congrats": ["uploads/greeting cards 4.png", "Celebrate The Big News"],
          "Thank you": ["assets/moment/thankyou.png", "Two Words, Posted Today"],
          "Cards for Kids": ["uploads/greeting cards 1.png", "Made For Little Hands"],
          "Anniversary": ["assets/promo/card-2.png", "Another Year Together"],
          "Wedding": ["assets/promo/card-3.png", "Foil, Letterpress, Linen"],
          "Thinking of you": ["uploads/greeting cards 3.png", "A Note That Lands Well"],
          "Baby": ["assets/moment/birthday.png", "Welcome The Little One"],
          "New Home": ["uploads/greeting cards 1.png", "Keys, Boxes, And A Card"],
          "Graduation": ["assets/moment/graduations.png", "Cap, Gown, And A Card"],
          "Retirement": ["assets/moment/anniversary.png", "Send Them Off Properly"],
        };
        const p = promos[this.state.megaLabel] || promos["Bday"];
        o.promo = p[0];
        o.promoText = p[1];
        const M = this.MEGA_MENUS()[this.state.megaLabel] || this.MEGA_MENUS()["Bday"];
        o.filters = M.filters;
        o.colA = M.cols[0]; o.colB = M.cols[1]; o.colC = M.cols[2]; o.colD = M.cols[3];
        return o;
      })(),
      lang: {
        open: !!this.state.langOpen,
        btnBg: this.state.langOpen ? "rgba(var(--hs-ink),0.12)" : "rgba(var(--hs-ink),0.06)",
        toggle: (e) => { e.preventDefault(); e.stopPropagation(); this.setState((s) => ({ langOpen: !s.langOpen })); },
        items: [["🇬🇧", "English"], ["🇪🇸", "Spanish"], ["🇫🇷", "French"]].map(([flag, label], li) => ({
          label,
          flag,
          delay: (0.05 + li * 0.05).toFixed(2) + "s",
          bg: "transparent",
          check: (this.state.language || "English") === label ? 1 : 0,
          pick: (e) => { e.preventDefault(); e.stopPropagation(); this.setState({ language: label, langOpen: false }); },
        })),
      },
      /* Notifications come from the design system now. The component owns the
         trigger, the panel, unread state, archiving and dismissal, so the page
         only mirrors "is it open" (other menus close against notifOpen) and
         keeps its own read flag in step. The item hooks are where real data
         handling goes; today they are the extension points the panel calls. */
      /* Built once and reused, the way the refs above are. The component's
         outside-click/Escape effect lists onOpenChange in its deps, and this
         page re-renders constantly (typewriter, marquee, hero slides) — a
         fresh closure each render would tear that effect down and rebuild it
         on every tick. */
      nav2: this._nav2 = this._nav2 || {
        search: () => this.spotOpen(),
        categoryHover: (label) => { void label; },
        askStampy: () => this.setState({ chatOn: true }),
        notifications: () => this.setState({ notifOpen: true }),
      },
      notif: this._notif = this._notif || {
        openChange: (open) => this.setState({ notifOpen: !!open }),
        markAllRead: () => this.setState({ notifRead: true }),
        openItem: (item) => { void item; },
        archive: (item) => { void item; },
      },
      rem: {
        on: !!this.state.remOn,
        veil: this.state.remIn ? 1 : 0,
        shift: this.state.remIn ? "translateX(0)" : "translateX(100%)",
        open: (e) => {
          e.preventDefault();
          this.remLock();
          this.setState({ remOn: true });
          requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ remIn: true })));
        },
        close: (e) => {
          if (e) e.preventDefault();
          this.remUnlock();
          this.setState({ remIn: false });
          this._remT = setTimeout(() => this.setState({ remOn: false }), 460);
        },
      },
      chatSentinelRef: this.chatSentinelRef = this.chatSentinelRef || React.createRef(),
      chatAnim: this.state.chatSettled ? "none" : "hs-chat-swipe-up 0.72s cubic-bezier(0.2, 0.9, 0.24, 1) both",
      chatTransform: this.state.chatAway ? "translate(-50%, calc(100% + 40px))" : "translate(-50%, 0)",
      ftRef: this.ftRef = this.ftRef || React.createRef(),
      ftAnim: this.state.ftVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      ftAnim1: this.state.ftVisible ? `hs-hero-up ${ease} 0.15s both` : "none",
      ftAnim2: this.state.ftVisible ? `hs-hero-up ${ease} 0.32s both` : "none",
      ftAnim3: this.state.ftVisible ? `hs-hero-up ${ease} 0.49s both` : "none",
      ftLogo: (() => {
        const hot = !!this.state.ftLogoHot;
        return {
          enter: () => this.setState({ ftLogoHot: true }),
          leave: () => this.setState({ ftLogoHot: false }),
          emblemImg: hot
            ? "linear-gradient(180deg, var(--hs-mark-hot) 0%, var(--hs-mark-b) 86.44%)"
            : "linear-gradient(180deg, var(--hs-mark-a) 0%, var(--hs-mark-b) 86.44%)",
          wordImg: hot
            ? "linear-gradient(180deg, var(--hs-mark-hot) 0%, var(--hs-mark-b) 68.81%)"
            : "linear-gradient(180deg, var(--hs-mark-a2) 0%, var(--hs-mark-b) 68.81%)",
          emblem: "var(--color-text-primary)",
          word: "var(--color-text-primary)",
        };
      })(),
      ftCols: [
        { title: "My HeartStamp", links: "Create Account\nSign In\nAddress Book\nReminders\nOrder History" },
        { title: "Need Some Help?", links: "Contact Us\nWhere is My Order?\nDelivery Information\nFAQs" },
        { title: "About Us", links: "Our Story\nBlog\nPress Enquiries\nCareers\nSustainability" },
        { title: "The Small Details", links: "Privacy Notice\nResponsible Disclosure\nSite Map\nTerms & Conditions\nPromotional Terms & Conditions\nUser Generated Content\nCookies\nAccessibility" },
      ],
      ftPay: [
        { src: "assets/footer/visa.svg", alt: "Visa", filter: "none" },
        { src: "assets/footer/amex.svg", alt: "American Express", filter: "none" },
        { src: "assets/footer/google-pay.svg", alt: "Google Pay", filter: "none" },
        { src: "assets/footer/apple-pay.svg", alt: "Apple Pay", filter: "brightness(0)" },
      ],
      ...(() => {
        const cur = this.state.mnav || 0;
        const col = (i) => (cur === i ? "var(--color-text-primary)" : "var(--color-text-secondary)");
        const bg = (i) => (cur === i ? "rgba(var(--hs-ink),0.1)" : "transparent");
        const fw = (i) => (cur === i ? 700 : 600);
        const go = (i, fn) => () => { this.setState({ mnav: i }); if (fn) fn(); };
        return {
          mnavCol0: col(0), mnavCol1: col(1), mnavCol3: col(3), mnavCol4: col(4),
          mnavBg0: bg(0), mnavBg1: bg(1), mnavBg3: bg(3), mnavBg4: bg(4),
          mnavFw0: fw(0), mnavFw1: fw(1), mnavFw3: fw(3), mnavFw4: fw(4),
          mnavCur0: cur === 0 ? "page" : undefined, mnavCur1: cur === 1 ? "page" : undefined,
          mnavCur3: cur === 3 ? "page" : undefined, mnavCur4: cur === 4 ? "page" : undefined,
          mnavGo0: go(0, () => window.scrollTo({ top: 0, behavior: "smooth" })),
          mnavGo1: go(1, () => { const el = this.catsRef && this.catsRef.current; if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" }); }),
          mnavGo3: go(3), // TODO: route → My Creation
          mnavGo4: go(4), // TODO: route → Invitation
        };
      })(),
      vimeoRef: this.vimeoRef = this.vimeoRef || React.createRef(),
      vidMuteLabel: this.state.vidUnmuted ? "Mute" : "Unmute",
      vidMuteIcon: (() => {
        const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
        const body = this.state.vidUnmuted
          ? ["M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", "M16 9a5 5 0 0 1 0 6", "M19.364 18.364a9 9 0 0 0 0-12.728"]
          : ["M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", "M22 9l-6 6", "M16 9l6 6"];
        return React.createElement("svg", p, body.map((d, i) => React.createElement("path", { key: i, d })));
      })(),
      vidToggleMute: () => {
        const next = !this.state.vidUnmuted;
        this.setState({ vidUnmuted: next });
        if (this._vp) {
          this._vp.setMuted(!next).catch(() => {});
          if (next) this._vp.setVolume(1).catch(() => {});
        }
      },
      faqRef: this.faqRef = this.faqRef || React.createRef(),
      faqTitleAnim: this.state.faqVisible ? `hs-hero-up ${ease} 0.05s both` : "none",
      faqBtnAnim: this.state.faqVisible ? `hs-hero-up ${ease} 0.55s both` : "none",
      faqGroups: (() => {
        const openKey = this.state.faqOpenKey === undefined ? "0-0" : this.state.faqOpenKey;
        const data = [
          ["General", [
            ["What is Heartstamp?", "Heartstamp is a creative platform that helps you create and personalize beautiful digital cards for birthdays, celebrations, thank-yous, invitations, and special moments."],
            ["What can I create with Heartstamp?", "Printed cards we post for you, animated digital cards you send by link, and invitations — all built around the occasion you pick."],
            ["What is Stampy Chat?", "Stampy is our fox assistant. Tell it who the card is for and what you want to say, and it drafts the cover art and the message with you."],
          ]],
          ["Printed Cards", [
            ["Do I need design skills to use Heartstamp?", "No. Pick an illustration style and Stampy handles the layout, art and typesetting. You can adjust anything you like afterwards."],
            ["How does AI card creation work?", "You describe the moment, we generate cover art in your chosen style using Heart credits. Every new account starts with 200."],
            ["Can I customize my card after creating it?", "Yes. Swap the art style, rewrite the message, change the handwriting, or regenerate the cover until it feels right."],
          ]],
          ["Digital Cards", [
            ["Is Heartstamp available on mobile?", "Yes. The studio works in any mobile browser, and there is an iOS app for creating and sending on the go."],
            ["Can AI create the message for my card too?", "It can. Tell Stampy the tone and a few details and it drafts the message — you always get the final edit."],
            ["Is my card design private?", "Your cards and messages are yours. Nothing you create is shared publicly or shown to other people."],
          ]],
          ["Orders & Credits", [
            ["How do Heart credits work?", "Credits pay for art generation. New accounts start with 200, and referring a friend earns you more."],
            ["When will my card arrive?", "Printed cards leave us the next working day. We can post straight to your recipient or send it to you first."],
            ["Can I get a refund?", "If a printed card arrives damaged or wrong, tell us and we will reprint and repost it at no cost."],
          ]],
        ];
        const shown = data;
        return shown.map(([label, items], gi) => ({
          label,
          divider: gi > 0,
          anim: this.state.faqVisible ? `hs-hero-up ${ease} ${(0.15 + gi * 0.13).toFixed(2)}s both` : "none",
          items: items.map(([q, a], ii) => {
            const key = gi + "-" + ii;
            const isOpen = openKey === key;
            return {
              q, a,
              rows: isOpen ? "1fr" : "0fr",
              aOpacity: isOpen ? 1 : 0,
              barT: isOpen ? "scaleY(0) rotate(90deg)" : "scaleY(1) rotate(0deg)",
              toggle: () => this.setState((s) => {
                const cur = s.faqOpenKey === undefined ? "0-0" : s.faqOpenKey;
                return { faqOpenKey: cur === key ? null : key };
              }),
            };
          }),
        }));
      })(),
      seoRef: this.seoRef = this.seoRef || React.createRef(),
      seoAnim: this.state.seoVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      lbRef: this.lbRef = this.lbRef || React.createRef(),
      lbAnim: this.state.lbVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      lbAnim1: this.state.lbVisible ? `hs-hero-up ${ease} 0.15s both` : "none",
      lbAnim2: this.state.lbVisible ? `hs-hero-up ${ease} 0.32s both` : "none",
      lbAnim3: this.state.lbVisible ? `hs-hero-up ${ease} 0.49s both` : "none",
      lbCards: ["c0","c1","c2","c3","c4","c5","c6","c7","c8"].map((n, i) => ({
        img: `assets/letterbox/${n}.png`,
        left: (i % 3) * 190 + "px",
        top: Math.floor(i / 3) * 156 + "px",
      })),
      diffRef: this.diffRef = this.diffRef || React.createRef(),
      diffAnim: this.state.diffVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      diffAnim1: this.state.diffVisible ? `hs-hero-up ${ease} 0.15s both` : "none",
      diffAnim2: this.state.diffVisible ? `hs-hero-up ${ease} 0.32s both` : "none",
      ...Object.fromEntries(Array.from({ length: 9 }, (_, i) => [
        `diffC${i + 1}`,
        this.state.diffVisible ? `hs-hero-up ${ease} ${(0.26 + i * 0.07).toFixed(2)}s both` : "none",
      ])),
      ...Object.fromEntries(Array.from({ length: 9 }, (_, i) => {
        const n = i + 1, on = this.state.diffHov === n;
        return [
          [`diffIcoT${n}`, on ? "translateY(-4px)" : "translateY(0)"],
          [`diffIcoC${n}`, on ? "var(--color-brand-primary, #be1d2c)" : "var(--color-text-primary)"],
          [`diffEnter${n}`, () => this.setState({ diffHov: n })],
        ];
      }).flat()),
      diffLeave: () => this.setState({ diffHov: null }),
      diffAnim3: this.state.diffVisible ? `hs-hero-up ${ease} 0.49s both` : "none",
      ...(() => {
        const rows = [
          { title: "Printed Cards", body: "Stop sending generic cards. Let Stampy create a one of a kind design in minutes, and we’ll handle the printing.", img: "assets/diff/card.png" },
          { title: "Digital card", body: "Stop sending generic cards. Stampy creates custom, full-bleed interior designs in minutes.", img: "assets/diff/card.png" },
          { title: "Your Own Designer", body: "Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.", img: "assets/diff/card.png" },
          { title: "Full-Panel Interiors", body: "Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.", img: "assets/diff/card.png" },
          { title: "Delivered Your Way", body: "Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.", img: "assets/diff/card.png" },
          { title: "Physical Cards", body: "Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.", img: "assets/diff/card.png" },
        ];
        const active = this.state.diffTab ?? 1;
        const c = this.state.diffCycle || 0;
        const par = c % 2 === 0 ? "hs-wipe-a" : "hs-wipe-b";
        const par2 = c % 2 === 0 ? "hs-wipe-b" : "hs-wipe-a";
        return {
          diffImg: rows[active].img,
          diffWipeB: c === 0 ? "none" : `${par2} 0.85s cubic-bezier(0.76, 0, 0.24, 1) both`,
          diffWipeA: c === 0 ? "none" : `${par} 0.85s cubic-bezier(0.76, 0, 0.24, 1) 0.12s both`,
          diffRows: rows.map((r, i, a) => ({
            title: r.title,
            body: r.body,
            weight: i === active ? 600 : 400,
            color: i === active ? "var(--color-element-link)" : "var(--color-text-primary)",
            bodyColor: i === active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
            bg: "transparent",
            bar: "none",
            shift: "none",
            ruleDisplay: i === a.length - 1 ? "none" : "block",
            go: () => { if (i === active) return; this.setState((s) => ({ diffCycle: (s.diffCycle || 0) + 1 })); setTimeout(() => this.setState({ diffTab: i }), 340); },
          })),
        };
      })(),
      promptAnim: this.state.promptVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      statsRef: this.statsRef = this.statsRef || React.createRef(),
      statA: Math.round((this.state.statP || 0) * 12) + "k+",
      statB: Math.round((this.state.statP || 0) * 100) + "%",
      statC: Math.round((this.state.statP || 0) * 24) + "h",
      quoteAnim: this.state.quoteVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      stepsAnim: this.state.stepsVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      momentTrackRef: this.momentTrackRef = this.momentTrackRef || React.createRef(),
      momentAnim: this.state.momentVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      iosTiles: (this.props.iosTileIcons || "").split(",").map((s) => s.trim()).filter(Boolean).slice(0, 7).map((icon, i) => ({
        icon,
        left: [552, 862, 986, 560, 1070, 606, 1042][i] + "px",
        top: [148, -6, 96, 30, 208, 258, 330][i] + "px",
      })),
      momentCards: [
        { img: "assets/moment/birthday.png", label: "Birthday", sent: "7.2k sent 😮" },
        { img: "assets/moment/thankyou.png", label: "Thank you", sent: "4.9k sent 😎" },
        { img: "assets/moment/anniversary.png", label: "Anniversary", sent: "6.8k sent 😍" },
        { img: "assets/moment/graduations.png", label: "Graduations", sent: "5.2k sent 🎓" },
        { img: "assets/moment/thankyou.png", label: "Just because", sent: "3.4k sent ✨" },
        { img: "assets/moment/birthday.png", label: "Congrats", sent: "2.8k sent 🎉" },
      ].map((c, i) => Object.assign({}, c, {
        rise: this.state.momentCardsVisible ? "hs-fx-rise 900ms cubic-bezier(0.22,1,0.36,1) " + (120 + i * 110) + "ms both" : "none",
        float: "none",
      })),
      momentPrev: () => { const el = this.momentTrackRef.current; if (el) el.scrollBy({ left: -304, behavior: "smooth" }); },
      momentNext: () => { const el = this.momentTrackRef.current; if (el) el.scrollBy({ left: 304, behavior: "smooth" }); },
      promoAnim: this.state.promoVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      deal3dVideo: this.state.deal3dDropped || this.props.deal3dVideo || "",
      deal3dNoVideo: !(this.state.deal3dDropped || this.props.deal3dVideo),
      dropVideo: {
        over: (e) => { if (e.dataTransfer && Array.from(e.dataTransfer.items || []).some((i) => i.type.startsWith("video/"))) e.preventDefault(); },
        drop: (e) => {
          const f = e.dataTransfer && Array.from(e.dataTransfer.files || []).find((x) => x.type.startsWith("video/"));
          if (!f) return;
          e.preventDefault();
          const url = URL.createObjectURL(f);
          this.setState({ deal3dDropped: url });
        },
      },
      dealAnim: this.state.dealVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      feAnim: this.state.feVisible ? `hs-hero-up 0.75s ${ease.slice(6)} 0.05s both` : "none",
      feCards: (() => {
        const imgs = ["uploads/greeting cards 2.png", "uploads/greeting cards 1.png", "uploads/greeting cards 4.png", "uploads/greeting cards 3.png"];
        const sets = {
          "Birthday": ["Birthday to mum", "Birthday to dad", "Birthday to partner", "Birthday to friend"],
          "Graduation": ["Graduation for daughter", "Graduation for son", "Graduation for best friend", "Thank you, teacher"],
          "Valentine\u2019s Day": ["Valentine\u2019s for my love", "Valentine\u2019s for my crush", "Valentine\u2019s for wife", "Valentine\u2019s for husband"],
          "Anniversary": ["First anniversary", "Ten years together", "Anniversary for parents", "Anniversary just because"],
          "Party Invites": ["Birthday party invite", "Dinner party invite", "Baby shower invite", "Housewarming invite"],
        };
        const counts = ["400+", "395+", "395+", "395+"];
        const tab = this.state.feTab || "Birthday";
        const titles = sets[tab] || sets["Birthday"];
        return titles.map((title, i) => {
          const key = tab + i;
          const deck = imgs.slice(i).concat(imgs.slice(0, i));
          const idx = (this.state.feIdx && this.state.feIdx[key]) || 0;
          const setIdx = (n) => this.setState((s) => ({ feIdx: Object.assign({}, s.feIdx, { [key]: (n + deck.length) % deck.length }) }));
          const slide = this.state.feSlide
            ? `hs-fe-slide-${this.state.feSlide}${this.state.feSlideN ? "b" : ""} 460ms cubic-bezier(0.22,1,0.36,1) ${i * 55}ms both`
            : "none";
          return {
            slide,
            title,
            count: "Choose from " + counts[i] + " Cards",
            img: deck[idx % deck.length],
            veil: this.state.feHover === key ? 1 : 0,
            // artwork is square at rest and rounds on hover, same treatment the
            // marquee thumbnails use. Driven by the panel's own enter/leave so it
            // also holds while the pointer is on the deck arrows.
            radius: this.state.feHover === key ? "var(--radius-2xl)" : "0",
            enter: () => this.setState({ feHover: key }),
            leave: () => this.setState((s) => ({ feHover: s.feHover === key ? null : s.feHover })),
            prev: (e) => { e.preventDefault(); e.stopPropagation(); setIdx(idx - 1); },
            next: (e) => { e.preventDefault(); e.stopPropagation(); setIdx(idx + 1); },
          };
        });
      })(),
      feTabs: ["Birthday", "Graduation", "Valentine’s Day", "Anniversary", "Party Invites"].map((label) => {
        const active = (this.state.feTab || "Birthday") === label;
        return {
          label,
          bg: active ? "var(--color-bg-main)" : "var(--hs-tint-2)",
          color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
          // active chip is outlined, not filled: 1px brand-secondary drawn inside
          // the border box, so the pill does not shift when selection moves
          shadow: active ? "inset 0 0 0 1px var(--color-brand-secondary)" : "none",
          go: () => { this.setState({ feTab: label }); const el = this.feTrackRef.current; if (el) el.scrollTo({ left: 0, behavior: "smooth" }); },
        };
      }),
      feTabsM: (() => {
        const all = ["Birthday", "Graduation", "Valentine’s Day", "Anniversary", "Party Invites"];
        const cur = this.state.feTab || "Birthday";
        const picked = this.state.feOther || null;
        const otherLit = !!this.state.feOtherOpen || (picked && cur === picked);
        return all.slice(0, 2).map((label) => {
          const act = cur === label && !otherLit;
          return {
          label,
          bg: act ? "var(--color-bg-main)" : "var(--hs-tint-2)",
          ring: act ? "inset 0 0 0 1px var(--color-text-primary)" : "none",
          weight: act ? 600 : 500,
          color: act ? "var(--color-text-primary)" : "var(--color-text-secondary)",
          go: () => { this.setState({ feTab: label, feOtherOpen: false }); const el = this.feTrackRef.current; if (el) el.scrollTo({ left: 0, behavior: "smooth" }); },
          };
        });
      })(),
      feOther: (() => {
        const all = ["Birthday", "Graduation", "Valentine’s Day", "Anniversary", "Party Invites"];
        const rest = all.slice(2);
        const picked = this.state.feOther || null;
        const label = picked || "Others";
        const lit = !!this.state.feOtherOpen || (picked && (this.state.feTab || "Birthday") === picked);
        return {
          label,
          open: !!this.state.feOtherOpen,
          caret: this.state.feOtherOpen ? "rotate(180deg)" : "rotate(0deg)",
          bg: lit ? "var(--color-bg-main)" : "var(--hs-tint-2)",
          fg: lit ? "var(--color-text-primary)" : "var(--color-text-secondary)",
          ring: lit ? "inset 0 0 0 1px var(--color-text-primary)" : "none",
          weight: lit ? 600 : 500,
          toggle: () => this.setState((s) => ({ feOtherOpen: !s.feOtherOpen })),
          items: rest.filter((l) => l !== picked).map((l) => ({
            label: l,
            go: () => { this.setState({ feTab: l, feOther: l, feOtherOpen: false }); const el = this.feTrackRef.current; if (el) el.scrollTo({ left: 0, behavior: "smooth" }); },
          })),
        };
      })(),
      pinkAnim: this.state.pinkVisible ? `hs-hero-up 0.75s ${ease.slice(6)} ${(this.state.pinkDelay || 0) + 0.05}s both` : "none",
      videoRef: this.videoRef,
      // mobile hero: same staggered slide-up as desktop, re-fired per slide change
      ...(() => {
        const out = {};
        ["A", "B", "C"].forEach((k, si) => {
          [0.12, 0.24, 0.36].forEach((d, i) => {
            out[`m${k}Anim${i + 1}`] = this.state.slide === si ? `hs-hero-up ${ease} ${d}s both` : "none";
          });
        });
        return out;
      })(),
      heroAnim1: on ? `hs-hero-up ${ease} 0.15s both` : "none",
      heroAnim2: on ? `hs-hero-up ${ease} 0.32s both` : "none",
      heroAnim3: on ? `hs-hero-up ${ease} 0.49s both` : "none",
      videoOpacity: this.state.videoPlaying ? 1 : 0,
      imageOpacity: this.state.videoPlaying ? 0 : 1,
      mSlideA: this.state.slide === 0,
      mSlideB: this.state.slide === 1,
      mSlideC: this.state.slide === 2,
      slideAOpacity: this.state.slide === 0 ? 1 : 0,
      slideBOpacity: this.state.slide === 1 ? 1 : 0,
      slideAPointer: this.state.slide === 0 ? "auto" : "none",
      slideBPointer: this.state.slide === 1 ? "auto" : "none",
      inkBtnProps: { style: { background: "transparent", borderColor: "var(--color-text-primary)", color: "var(--color-text-primary)" } },
      slideBImgAnim: this.state.slide === 1 ? `hs-slide-in-right 0.9s ${ease.slice(6)} 0.1s both` : "none",
      deco1Anim: this.state.slide === 1 ? `hs-in-left 0.85s ${ease.slice(6)} 0.2s both` : "none",
      deco2Anim: this.state.slide === 1 ? `hs-in-top 0.85s ${ease.slice(6)} 0.32s both` : "none",
      deco3Anim: this.state.slide === 1 ? `hs-in-bottom 0.85s ${ease.slice(6)} 0.44s both` : "none",
      slideBAnim1: this.state.slide === 1 ? `hs-hero-up ${ease} 0.15s both` : "none",
      slideBAnim2: this.state.slide === 1 ? `hs-hero-up ${ease} 0.32s both` : "none",
      slideBAnim3: this.state.slide === 1 ? `hs-hero-up ${ease} 0.49s both` : "none",
      // Safari has no VP8/VP9 alpha support: the transparent webm renders as an opaque
      // gray box, so those browsers get the still PNG instead.
      remAlphaVideoOk: !this.isSafari(),
      remAlphaVideoFallback: this.isSafari(),
      slideCOpacity: this.state.slide === 2 ? 1 : 0,
      slideCPointer: this.state.slide === 2 ? "auto" : "none",
      slideCAnim1: this.state.slide === 2 ? `hs-hero-up ${ease} 0.15s both` : "none",
      slideCAnim2: this.state.slide === 2 ? `hs-hero-up ${ease} 0.32s both` : "none",
      slideCAnim3: this.state.slide === 2 ? `hs-hero-up ${ease} 0.49s both` : "none",
      slideCPhoneAnim: this.state.slide === 2 ? `hs-in-bottom 0.9s ${ease.slice(6)} 0.12s both` : "none",
      slideCCard1Anim: this.state.slide === 2 ? `hs-tile-pop 0.7s ${ease.slice(6)} 0.6s both` : "none",
      slideCCard2Anim: this.state.slide === 2 ? `hs-tile-pop 0.7s ${ease.slice(6)} 0.75s both` : "none",
      slideCT1: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.2s both` : "none",
      slideCT2: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.28s both` : "none",
      slideCT3: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.36s both` : "none",
      slideCT4: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.44s both` : "none",
      slideCT5: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.52s both` : "none",
      slideCT6: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.6s both` : "none",
      slideCT7: this.state.slide === 2 ? `hs-tile-pop 0.6s ${ease.slice(6)} 0.68s both` : "none",

      nextSlide: () => this.nextSlide(),
      ringEl: React.createElement("svg", {
        key: this.state.cycle,
        width: 44, height: 44, viewBox: "0 0 44 44",
        style: { position: "absolute", left: -4, top: -4, transform: "scaleX(-1) rotate(-90deg)", pointerEvents: "none" },
      },
        React.createElement("circle", { cx: 22, cy: 22, r: 19.5, fill: "none", stroke: "rgba(255,255,255,0.35)", strokeWidth: 3 }),
        on ? React.createElement("circle", {
          cx: 22, cy: 22, r: 19.5, fill: "none", stroke: "var(--color-text-on-primary)", strokeWidth: 3, strokeLinecap: "round",
          strokeDasharray: 122.5,
          style: { animation: `hs-ring-deplete ${this.slideDuration()}ms linear forwards` },
        }) : null,
      ),
      showAppPromo: !this.state.appPromoClosed,
      closeAppPromo: () => this.setState({ appPromoClosed: true }),
      showPromoBar: this.props.showPromoBar ?? true,
      showAskStampy: this.props.showAskStampy ?? true,
      ghostBtnProps: { style: { background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.5)", color: "var(--color-text-on-primary)" } },
    };
  }
}
