/* Advanced editor showcase
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { Btn } from '@heartstampxo/design-system/hs';
import { type V, hv } from '../lib/dc';

export function Editor(v: V) {
  return (
    <>
    <div style={{ alignSelf: "stretch", marginTop: "36px", boxSizing: "border-box", background: "var(--hs-n2)", padding: "68px var(--space-6) 0", display: "flex", flexDirection: "column", gap: "29px", alignItems: "center" }}>
      {" "}
      <div style={{ width: "792px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center" }} data-reveal-stagger="">
        {" "}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
          {" "}
          <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "16px", lineHeight: "100%", textAlign: "center", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>
            Advanced editor
          </span>
          {" "}
          <h2 style={{ margin: "0", alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h2)", lineHeight: "1.1", textAlign: "center", color: "var(--color-text-primary)" }}>
            The AI-native cutting edge platform
            <br />
            for greeting cards
          </h2>
          {" "}
          <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-h4)", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)" }}>
            Chat with Stampy to create a card that feels truly yours. Describe the occasion, the person, the mood or just share what you want to say. Stampy helps turn your words into a one-of-a-kind card, right inside the editor.
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ height: "32px", display: "flex", flexDirection: "row", gap: "9px", justifyContent: "center", alignItems: "flex-start" }}>
          {" "}
          <div style={{ height: "32px", boxSizing: "border-box", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-text-primary)", padding: "0 var(--space-4)", whiteSpace: "nowrap", display: "flex", flexDirection: "row", gap: "var(--space-1-5)", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "14px", color: "var(--color-text-primary)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
            Printed Cards
          </div>
          {" "}
          <div className={hv("background: var(--hs-n13);")} style={{ height: "32px", boxSizing: "border-box", borderRadius: "var(--radius-full)", background: "var(--hs-n12)", padding: "0 var(--space-4)", whiteSpace: "nowrap", display: "flex", flexDirection: "row", gap: "var(--space-1-5)", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "14px", color: "var(--color-text-secondary)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
              <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
              <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
            </svg>
            Digital Cards
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div style={{ position: "relative", width: "var(--hs-grid, 1200px)", maxWidth: "100%", aspectRatio: "16 / 9", background: "var(--hs-n14)", borderRadius: "var(--radius-2xl, 12px) var(--radius-2xl, 12px) 0 0", overflow: "hidden" }} data-reveal="">
        {" "}
        <iframe style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0", display: "block" }} ref={v.vimeoRef} src="https://player.vimeo.com/video/1221461929?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&playsinline=1&autopause=0&dnt=1" title="HeartStamp card editor" allow="autoplay; fullscreen" />
        {" "}
        <div style={{ position: "absolute", left: "40px", bottom: "20px" }} onClick={v.vidToggleMute}>
          {" "}
          <div className="sc-host-x" style={{ display: 'contents' }}>
            <Btn variant="secondary" size="xl">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>{v.vidMuteIcon}{v.vidMuteLabel}</span>
            </Btn>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
