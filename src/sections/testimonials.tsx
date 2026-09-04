/* Customer quote carousel
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function Testimonials(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", boxSizing: "border-box", padding: "88px 0", display: "flex", flexDirection: "column", alignItems: "center", opacity: "1", animation: v.quoteAnim, paddingTop: "88px", paddingBottom: "64px" }} ref={v.quoteRef}>
      {" "}
      <div style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column", gap: "var(--space-10)", alignItems: "center" }}>
        {" "}
        <div style={{ width: "956px", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "center" }}>
          {" "}
          <p style={{ margin: "0", alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h2)", lineHeight: "1.2", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-primary)" }}>
            My nan kept it on the mantelpiece for a month. She thought{" "}
            <span style={{ color: "var(--color-brand-primary)" }}>I’d drawn it myself.</span>
          </p>
          {" "}
          <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-h4)", lineHeight: "28px", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
            Priya,  sent a get-well card to grandma
          </span>
          {" "}
        </div>
        {" "}
        <div className={"m-stats"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "64px", justifyContent: "center", alignItems: "flex-start" }} ref={v.statsRef}>
          {" "}
          <div style={{ width: "122px", display: "flex", flexDirection: "column", gap: "13px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "60px", lineHeight: "55px", textAlign: "center", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              {v.statA}
            </span>
            {" "}
            <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", lineHeight: "100%", textAlign: "center", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Cards posted
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ width: "122px", display: "flex", flexDirection: "column", gap: "13px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "60px", lineHeight: "55px", textAlign: "center", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              {v.statB}
            </span>
            {" "}
            <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", lineHeight: "100%", textAlign: "center", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              One-of-a-kind
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ width: "122px", display: "flex", flexDirection: "column", gap: "13px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "60px", lineHeight: "55px", textAlign: "center", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              {v.statC}
            </span>
            {" "}
            <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", lineHeight: "100%", textAlign: "center", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Print to postbox
            </span>
            {" "}
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
