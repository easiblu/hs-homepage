/* Reminders sidebar sheet
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function Reminders(v: V) {
  return (
    <>
    {v.rem?.on ? (
      <>
        {" "}
        <div style={{ position: "fixed", inset: "0", zIndex: "9400", background: "rgba(var(--hs-ink),0.45)", opacity: v.rem?.veil, transition: "opacity 0.35s ease" }} onClick={v.rem?.close} />
        {" "}
        <div style={{ position: "fixed", right: "0", top: "0", bottom: "0", zIndex: "9401", width: "456px", background: "var(--hs-panel)", boxShadow: "-12px 0 40px rgba(0,0,0,0.14)", display: "flex", flexDirection: "column", transform: v.rem?.shift, transition: "transform 0.45s cubic-bezier(0.2, 0.9, 0.24, 1)" }}>
          {" "}
          <div style={{ flex: "none", boxSizing: "border-box", padding: "var(--space-6) var(--space-7)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h4)", lineHeight: "28px", color: "var(--color-text-primary)" }}>
              Reminders
            </span>
            {" "}
            <button className={hv("opacity: 0.7;")} style={{ width: "32px", height: "32px", border: "0", background: "transparent", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-primary)" }} type="button" onClick={v.rem?.close} aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            {" "}
          </div>
          {" "}
          <div style={{ flex: "1", minHeight: "0", overflowY: "auto", boxSizing: "border-box", padding: "var(--space-8) var(--space-7) var(--space-10)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-7)" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
              {" "}
              {v.remAlphaVideoOk ? (
                <>
                  {" "}
                  <video style={{ width: "300px", height: "auto", display: "block" }} src="uploads/wytr58bsnnrmt0d03jssfpzegw.webm" autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" onTimeUpdate={v.remVideoLoop} />
                  {" "}
                </>
              ) : null}
              {" "}
              {v.remAlphaVideoFallback ? (
                <>
                  {" "}
                  <img style={{ width: "300px", height: "auto", display: "block" }} src="uploads/reminder.png" alt="" />
                  {" "}
                </>
              ) : null}
              {" "}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
                {" "}
                <h3 style={{ margin: "0", width: "340px", textAlign: "center", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "26px", lineHeight: "32px", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
                  80% of our customers have got a reminder.
                </h3>
                {" "}
                <p style={{ margin: "0", width: "340px", textAlign: "center", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-h4)", lineHeight: "28px", color: "var(--color-text-secondary)" }}>
                  Set a reminder below and never forget an important occasion again — phew!
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingTop: "var(--space-3)" }}>
              {" "}
              <a className={hv("background: var(--color-brand-primary-hover);")} style={{ height: "50px", borderRadius: "var(--radius-button)", background: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", color: "var(--color-text-on-primary)", transition: "background 0.15s ease" }} href="#">
                Set Reminders
              </a>
              {" "}
              <a className={hv("background: var(--color-state-hover);")} style={{ height: "50px", borderRadius: "var(--radius-button)", background: "var(--color-bg-main)", boxShadow: "inset 0 0 0 1px var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", color: "var(--color-text-primary)", transition: "background 0.15s ease" }} href="#">
                View All Reminders
              </a>
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
