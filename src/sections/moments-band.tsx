/* Whatever the moment, there's a card
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, hv, toArray } from '../lib/dc';

export function MomentsBand(v: V) {
  return (
    <>
    <div style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)" }}>
      {" "}
      <div style={{ width: "692px", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", justifyContent: "center", alignItems: "center" }}>
          {" "}
          <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "700", fontSize: "var(--font-size-h5)", lineHeight: "28px", color: "var(--color-brand-primary)" }}>
            🎊
          </span>
          {" "}
          <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "16px", lineHeight: "28px", textTransform: "uppercase", color: "var(--color-brand-primary)", whiteSpace: "nowrap" }}>
            First card is 50% off
          </span>
          {" "}
        </div>
        {" "}
        <h2 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h2)", lineHeight: "1.1", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
          Whatever the moment, there’s a card.
        </h2>
        {" "}
      </div>
      {" "}
      <div style={{ position: "relative", alignSelf: "stretch" }} ref={v.mcRef}>
        {" "}
        <div className={"hsx"} style={{ display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center", overflowX: "auto", scrollBehavior: "smooth" }} ref={v.momentTrackRef} data-no-reveal="" data-mc="1">
          {" "}
          {toArray(v.momentCards).map((m: any, $index: number) => (
            <React.Fragment key={$index}>
              {" "}
              <div style={{ width: "288px", height: "346px", flex: "none", animation: m?.rise }}>
                {" "}
                <div style={{ width: "100%", height: "100%", animation: m?.float }}>
                  {" "}
                  <a style={{ position: "relative", width: "100%", height: "100%", background: "var(--hs-n2)", overflow: "hidden", color: "var(--color-text-primary)", display: "block" }} href="#">
                    {" "}
                    <img style={{ position: "absolute", left: "16px", top: "15.5px", width: "256px", height: "263px", objectFit: "cover", display: "block" }} data-lazysrc={m?.img} alt={m?.label} />
                    {" "}
                    <div style={{ position: "absolute", left: "16px", top: "302.5px", width: "256px", height: "20px", display: "flex", flexDirection: "row", gap: "var(--space-2)", alignItems: "center" }}>
                      {" "}
                      <span style={{ flex: "1", fontFamily: "var(--font-family-body)", fontWeight: "var(--font-weight-label-sb-15, 600)", fontSize: "var(--font-size-label-sb-15, 15px)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                        {m?.label}
                      </span>
                      {" "}
                      <span style={{ flex: "none", fontFamily: "var(--font-family-body)", fontWeight: "var(--font-weight-body-15, 400)", fontSize: "var(--font-size-body-15, 15px)", lineHeight: "20px", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
                        {m?.sent}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
        {" "}
        <button className={hv("background: var(--color-state-hover);")} style={{ position: "absolute", left: "-56px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "var(--radius-full)", border: "1px solid rgba(var(--hs-ink),0.15)", background: "rgba(var(--hs-surf),0.92)", boxShadow: "0 2px 10px rgba(0,0,0,0.10)", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" onClick={v.momentPrev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        {" "}
        <button className={hv("background: var(--color-state-hover);")} style={{ position: "absolute", right: "-56px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "var(--radius-full)", border: "1px solid rgba(var(--hs-ink),0.15)", background: "rgba(var(--hs-surf),0.92)", boxShadow: "0 2px 10px rgba(0,0,0,0.10)", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" onClick={v.momentNext} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
