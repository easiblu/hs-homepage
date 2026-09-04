/* Stampy tip bubble above the FAB
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function StampyBubble(v: V) {
  return (
    <>
    {v.stampy?.bubbleOn ? (
      <>
        {" "}
        <div style={{ position: "fixed", right: "28px", bottom: "114px", zIndex: "8810", maxWidth: "320px", opacity: v.stampy?.bubbleOpacity, transform: `translateY(${v.stampy?.bubbleY ?? ""})`, transition: "opacity 0.34s ease, transform 0.34s ease" }}>
          {" "}
          <button style={{ display: "block", width: "100%", textAlign: "center", boxSizing: "border-box", padding: "var(--space-4) var(--space-5)", border: "0", borderRadius: "24px", background: "var(--color-bg-main)", boxShadow: "0 12px 32px rgba(0,0,0,0.16)", fontFamily: "var(--font-family-body)", fontWeight: "400", fontSize: "var(--font-size-body-15)", lineHeight: "1.45", color: "var(--color-text-primary)", cursor: "pointer", textWrap: "pretty" }} type="button" onClick={v.stampy?.open}>
            {v.stampy?.text}
          </button>
          {" "}
          <span style={{ position: "absolute", right: "26px", bottom: "-9px", width: "20px", height: "12px", background: "var(--color-bg-main)", clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
          {" "}
          <button className={hv("color: var(--color-text-primary);")} style={{ position: "absolute", top: "-8px", left: "-8px", display: "flex", width: "24px", height: "24px", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--hs-ink),0.12)", borderRadius: "var(--radius-full)", background: "var(--color-bg-main)", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", color: "var(--hs-ink-faint)", cursor: "pointer" }} type="button" onClick={v.stampy?.dismiss} aria-label="Dismiss">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {" "}
        </div>
        {" "}
      </>
    ) : null}
    </>
  );
}
