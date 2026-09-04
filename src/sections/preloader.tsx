/* Two-layer / counter preloader and its exit
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function Preloader(v: V) {
  return (
    <>
    {v.ld?.on ? (
      <>
        {" "}
        <div style={{ position: "fixed", inset: "0", background: "var(--color-brand-primary)", zIndex: "9790", transform: v.ld?.backExit, transition: "transform 0.95s cubic-bezier(0.87, 0, 0.13, 1) 0.14s", willChange: "transform", display: v.ld?.twoLayerDisplay }} />
        {" "}
        <div style={{ position: "fixed", inset: "0", background: "var(--color-bg-muted)", zIndex: "9800", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-7)", transform: v.ld?.exit, transition: "transform 0.9s cubic-bezier(0.87, 0, 0.13, 1)", willChange: "transform" }}>
          {" "}
          <img style={{ width: "76px", height: "auto", display: v.ld?.counterDisplay, animation: "hs-chat-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both" }} src="assets/emblem-brand.svg" alt="HeartStamp" />
          {" "}
          <div style={{ display: v.ld?.counterDisplay, flexDirection: "column", alignItems: "center", gap: "var(--space-7)" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", color: "var(--color-brand-primary)", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "120px", lineHeight: "1", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
              {" "}
              <span>{v.ld?.pct}</span>
              {" "}
              <span style={{ fontSize: "41px", marginTop: "0.35em", marginLeft: "0.08em" }}>%</span>
              {" "}
            </div>
            {" "}
            <div style={{ width: "220px", height: "2px", background: "rgba(190,29,44,0.15)", overflow: "hidden" }}>
              {" "}
              <div style={{ width: "100%", height: "100%", background: "var(--color-brand-primary)", transform: `scaleX(${v.ld?.barScale ?? ""})`, transformOrigin: "left center" }} />
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
