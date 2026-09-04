/* Dismissible app promo card
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function AppPromo(v: V) {
  return (
    <>
    {v.showAppPromo ? (
      <>
        {" "}
        <div className={"m-apppromo"} style={{ display: "none", position: "relative", boxSizing: "border-box", background: "var(--hs-n3)", flexDirection: "row", gap: "var(--space-4)", padding: "var(--space-3) var(--space-4)", alignItems: "center" }}>
          {" "}
          <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "10.6875px", background: "linear-gradient(179.252deg, var(--hs-n4) 0.64%, rgb(255,206,214) 100.29%)", boxSizing: "border-box", padding: "var(--space-3) 11px 11px 11px", display: "flex", alignItems: "flex-start" }}>
            {" "}
            <img style={{ width: "25.125px", height: "auto", display: "block" }} src="assets/emblem-brand.svg" alt="" />
            {" "}
          </div>
          {" "}
          <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start" }}>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-primary)" }}>
              50% OFF First Card in our App
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "14px", lineHeight: "1.5", color: "var(--color-text-primary)" }}>
              Create & send beautiful cards, anytime.
            </span>
            {" "}
            <a style={{ fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "14px", lineHeight: "1.5", color: "var(--color-text-primary)", textDecoration: "underline", whiteSpace: "nowrap" }} href="#">
              Download the App
            </a>
            {" "}
          </div>
          {" "}
          <button className={hv("opacity: 0.65;")} style={{ position: "absolute", right: "6px", top: "6px", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-primary)" }} type="button" onClick={v.closeAppPromo} aria-label="Dismiss">
            {" "}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </>
    ) : null}
    </>
  );
}
