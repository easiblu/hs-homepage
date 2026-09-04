/* Top promo bar with marquee
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function PromoBar(v: V) {
  return (
    <>
    {v.showPromoBar ? (
      <>
        {" "}
        <div className={"m-banner"} style={{ background: "var(--color-brand-lockup-heart)", display: "flex", flexDirection: "row", gap: "5px", padding: "var(--space-1-5) var(--space-2)", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
          {" "}
          <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "16px", lineHeight: "28px", whiteSpace: "nowrap" }}>
            New to HeartStamp? 50% off your first card order — no code needed, it’s already applied
          </span>
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
          {" "}
        </div>
        {" "}
      </>
    ) : null}
    </>
  );
}
