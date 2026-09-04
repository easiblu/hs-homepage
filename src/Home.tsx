/* ══════════════════════════════════════════════════════════════════════════
   HeartStamp homepage.

   A React port of `HeartStamp Home v5.7.dc.html`, the approved design-canvas
   build — same structure, same styling, same motion and timing.

   The canvas format split a page in two: a bound HTML template, and a
   behaviour class. Both halves are preserved:

     · behaviour  → home-behavior.ts   (the class, verbatim)
     · template   → sections/*.tsx     (the markup, compiled to JSX)
     · styling    → home.css           (the five <style> blocks, verbatim)
     · runtime    → lib/dc.ts          (what the canvas provided, React doesn't)

   Every section is a plain function of `v`, the `renderVals()` output, which
   is how the canvas template read its bindings too.
   ══════════════════════════════════════════════════════════════════════════ */
import { hv } from './lib/dc';
import type { V } from './lib/dc';
import { HomeBehavior } from './home-behavior';
import { DEFAULT_PROPS } from './home-props';
import './home.css';

import { ProfileNavDesktop, ProfileNavMobile } from '@heartstampxo/design-system/hs';
import { CookieBarMobile } from './sections/cookie-bar-mobile';
import { MobileNav } from './sections/mobile-nav';
import { CookieBarDesktop } from './sections/cookie-bar-desktop';
import { GridOverlay } from './sections/grid-overlay';
import { Preloader } from './sections/preloader';
import { ChatSentinel } from './sections/chat-sentinel';
import { StampyBubble } from './sections/stampy-bubble';
import { StampyFab } from './sections/stampy-fab';
import { StampyChat } from './sections/stampy-chat';
import { BannerVideo } from './sections/banner-video';
import { ChatTeaser } from './sections/chat-teaser';
import { BottomGlass } from './sections/bottom-glass';
import { Reminders } from './sections/reminders';
import { AppPromo } from './sections/app-promo';
import { PromoBar } from './sections/promo-bar';
import { TopNav } from './sections/top-nav';
import { HeroMobile } from './sections/hero-mobile';
import { HeroDesktop } from './sections/hero-desktop';
import { Categories } from './sections/categories';
import { PrintedDigital } from './sections/printed-digital';
import { Features } from './sections/features';
import { Deals } from './sections/deals';
import { Christmas } from './sections/christmas';
import { MomentsBand } from './sections/moments-band';
import { AppIos } from './sections/app-ios';
import { Editor } from './sections/editor';
import { Testimonials } from './sections/testimonials';
import { PromptToArt } from './sections/prompt-to-art';
import { WhyDifferent } from './sections/why-different';
import { SeoCards } from './sections/seo-cards';
import { Faq } from './sections/faq';
import { Letterbox } from './sections/letterbox';
import { Footer } from './sections/footer';
import { Spotlight } from './sections/spotlight';

export type { HomeProps, PreviewMode } from './home-props';

export class Home extends HomeBehavior {
  render() {
    /* The canvas rendered its template against `{ ...props, ...renderVals() }`. */
    const v: V = { ...DEFAULT_PROPS, ...this.props, ...this.renderVals() };
    return (
      <>
        {CookieBarMobile(v)}
        <div style={{ width: "100%", minWidth: "0", overflowX: "clip", fontFamily: "var(--font-family-body)", color: "var(--color-text-primary)", display: "flex", flexDirection: "column", alignItems: "stretch" }}>
          {" "}
          {GridOverlay(v)}
          {" "}
          {" "}
          {Preloader(v)}
          {" "}
          {ChatSentinel(v)}
          {" "}
          {StampyBubble(v)}
          {" "}
          {StampyFab(v)}
          {" "}
          {StampyChat(v)}
          {" "}
          {BannerVideo(v)}
          {" "}
          {ChatTeaser(v)}
          {" "}
          {BottomGlass(v)}
          {" "}
          {Reminders(v)}
          {" "}
          {AppPromo(v)}
          {" "}
          {PromoBar(v)}
          {" "}
          {TopNav(v)}
          {" "}
          {HeroMobile(v)}
          {" "}
          {HeroDesktop(v)}
          {" "}
          {Categories(v)}
          {" "}
          {PrintedDigital(v)}
          {" "}
          {Features(v)}
          {" "}
          {Deals(v)}
          {" "}
          {Christmas(v)}
          {" "}
          <div style={{ background: "var(--color-bg-main)", boxSizing: "border-box", padding: "56px 0 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)", opacity: "1", animation: v.momentAnim }} ref={v.momentRef}>
            {" "}
            {MomentsBand(v)}
            {" "}
            {AppIos(v)}
            {" "}
            {Editor(v)}
            {" "}
            {Testimonials(v)}
            {" "}
            {PromptToArt(v)}
            {" "}
            {WhyDifferent(v)}
            {" "}
            {SeoCards(v)}
            {" "}
            {Faq(v)}
            {" "}
            {Letterbox(v)}
            {" "}
            {Footer(v)}
          </div>
          {" "}
          {Spotlight(v)}
          {" "}
          {" "}
          {v.profile?.openDesktop ? (
            <>
              <div className={"hs-ds-scope hs-pn-desk"} style={{ position: "fixed", top: v.profile?.top, zIndex: "9300" }} ref={v.profile?.panelRef}>
                <div className="sc-host-x" style={{ display: 'contents' }}>
                  <ProfileNavDesktop theme={v.profile?.theme} setTheme={v.profile?.setTheme} />
                </div>
              </div>
            </>
          ) : null}
          {v.profile?.openMobile ? (
            <>
              <div className={"hs-ds-scope"} style={{ position: "fixed", inset: "0", zIndex: "9300", overflowY: "auto", display: "flex", justifyContent: "center", alignItems: "flex-start", background: "var(--color-bg-main)" }} ref={v.profile?.panelRef}>
                <div className="sc-host-x" style={{ display: 'contents' }}>
                  <ProfileNavMobile theme={v.profile?.theme} setTheme={v.profile?.setTheme} onClose={v.profile?.close} />
                </div>
                <button className={hv("color: var(--color-text-primary);")} style={{ position: "absolute", right: "var(--space-4)", top: "var(--space-4)", zIndex: "1", display: "flex", width: "32px", height: "32px", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--hs-ink),0.12)", borderRadius: "var(--radius-full)", background: "var(--color-bg-main)", color: "var(--color-text-secondary)", cursor: "pointer" }} type="button" onClick={v.profile?.close} aria-label="Close">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </>
          ) : null}
        </div>
        {MobileNav(v)}
        {CookieBarDesktop(v)}
      </>
    );
  }
}

export default Home;
