/* Inline chat teaser with typewriter line
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function ChatTeaser(v: V) {
  return (
    <>
    {v.chatOn ? (
      <>
        {" "}
        <div className={"hs-chatteaser"} style={{ position: "fixed", left: "50%", bottom: "24px", width: "550px", background: "var(--color-bg-main)", borderRadius: "18px", boxShadow: "0 14px 34px rgba(0,0,0,0.18)", zIndex: "8900", overflow: "hidden", willChange: "transform, width", animation: v.chatAnim, transform: v.chatTransform, transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), width 0.75s cubic-bezier(0.22, 0.9, 0.24, 1)" }} ref={v.chatShellRef}>
          {" "}
          <div style={{ position: "absolute", inset: "-1px", zIndex: "2", borderRadius: "19px", padding: "3px", pointerEvents: "none", filter: "blur(6px)", opacity: "0.9", maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)", maskClip: "content-box, border-box", maskComposite: "exclude", WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)", WebkitMaskClip: "content-box, border-box", WebkitMaskComposite: "xor", overflow: "hidden" }}>
            {" "}
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "760px", height: "760px", marginLeft: "-380px", marginTop: "-380px", background: "conic-gradient(from 0deg, rgba(190,29,44,0) 0deg, rgba(190,29,44,0) 250deg, rgba(245,189,194,0.6) 300deg, rgba(190,29,44,0.95) 340deg, rgba(255,255,255,0.9) 352deg, rgba(190,29,44,0.95) 360deg)", animation: "hs-orbit 4.5s linear infinite" }} />
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", inset: "-1px", zIndex: "4", borderRadius: "19px", padding: "3px", pointerEvents: "none", maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)", maskClip: "content-box, border-box", maskComposite: "exclude", WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)", WebkitMaskClip: "content-box, border-box", WebkitMaskComposite: "xor", overflow: "hidden" }}>
            {" "}
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "760px", height: "760px", marginLeft: "-380px", marginTop: "-380px", background: "conic-gradient(from 0deg, rgba(190,29,44,0) 0deg, rgba(190,29,44,0) 250deg, rgba(245,189,194,0.55) 300deg, rgba(190,29,44,1) 340deg, rgba(255,255,255,0.9) 352deg, rgba(190,29,44,1) 360deg)", animation: "hs-orbit 4.5s linear infinite" }} />
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "0", top: "0", width: "55%", height: "100%", zIndex: "3", background: "linear-gradient(100deg, rgba(var(--hs-ink),0) 0%, rgba(var(--hs-ink),0.09) 38%, rgba(190,29,44,0.16) 50%, rgba(var(--hs-ink),0.09) 62%, rgba(var(--hs-ink),0) 100%)", pointerEvents: "none", opacity: "0", animation: "hs-shine 1.35s cubic-bezier(0.3, 0, 0.2, 1) 0.45s 1 both" }} />
          {" "}
          <div style={{ position: "absolute", left: "0", top: "0", width: "55%", height: "100%", zIndex: "3", background: "linear-gradient(-100deg, rgba(var(--hs-ink),0) 0%, rgba(var(--hs-ink),0.09) 38%, rgba(190,29,44,0.16) 50%, rgba(var(--hs-ink),0.09) 62%, rgba(var(--hs-ink),0) 100%)", pointerEvents: "none", opacity: "0", animation: "hs-shine-rev 1.35s cubic-bezier(0.3, 0, 0.2, 1) 2s 1 both" }} />
          {" "}
          <div style={{ position: "relative", boxSizing: "border-box", padding: "var(--space-4) 18px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "var(--space-3)" }} onClick={v.chat?.openCenter}>
            {" "}
            <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-2-5)", alignItems: "center" }}>
              {" "}
              <img style={{ width: "26px", height: "26px", borderRadius: "50%", display: "block" }} src="uploads/stampy-circle.svg" alt="" />
              {" "}
              <span style={{ flex: "0 1 auto", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                Hi I’m Stampy, let me know what kind of card you are sending!
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-3)", alignItems: "center", height: "44px", borderRadius: "var(--radius-input)", background: "var(--color-bg-editor)", border: "1px solid var(--color-element-subtle)", padding: "0 var(--space-1-5) 0 var(--space-4)" }}>
              {" "}
              <span style={{ flex: "1", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "rgba(var(--hs-ink),0.45)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {v.chatTyped}
              </span>
              {" "}
              <button className={hv("background: var(--color-brand-primary-hover);")} style={{ width: "32px", height: "32px", flex: "none", border: "0", borderRadius: "var(--radius-full)", background: "var(--color-brand-primary)", color: "var(--color-text-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" aria-label="Send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </>
    ) : null}
    </>
  );
}
