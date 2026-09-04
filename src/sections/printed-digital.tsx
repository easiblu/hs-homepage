/* Printed vs digital comparison
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, hv, cx, toArray } from '../lib/dc';

export function PrintedDigital(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 0 64px" }}>
      {" "}
      <div className={"m-pv68"} style={{ width: "var(--hs-grid, 1200px)", background: "var(--hs-n11)", display: "flex", flexDirection: "column", gap: "var(--space-12)", padding: "68px 0", overflow: "hidden" }} ref={v.pinkRef}>
        {" "}
        <div className={"m-stack"} style={{ alignSelf: "stretch", boxSizing: "border-box", padding: "0 var(--space-10)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: "64px" }} data-reveal-stagger="">
          {" "}
          <h2 style={{ margin: "0", width: "384px", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "30px", lineHeight: "40px", color: "var(--color-text-primary)" }}>
            Where the beautiful design meets effortless event management.
          </h2>
          {" "}
          <div className={"hs-pillrow"} style={{ position: "relative", display: "flex", flexDirection: "row", gap: "var(--space-3)", alignItems: "flex-start" }}>
            {" "}
            <div className={cx("m-fmtpill", hv("background: var(--hs-n5);"))} style={{ borderRadius: "var(--radius-full)", background: "var(--hs-n4)", border: "1px solid var(--color-text-primary)", padding: "var(--space-3) var(--space-6)", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "24px", color: "var(--color-text-primary)", boxSizing: "border-box" }}>
              <span className={"hs-lblfull"}>Printed Card</span>
              <span className={"hs-lblshort"}>Printed</span>
            </div>
            {" "}
            <div className={cx("m-fmtpill", hv("background: var(--hs-n5);"))} style={{ borderRadius: "var(--radius-full)", background: "var(--hs-n4)", border: "1px solid var(--color-text-primary)", padding: "var(--space-3) var(--space-6)", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "24px", color: "var(--color-text-primary)", boxSizing: "border-box" }}>
              <span className={"hs-lblfull"}>Digital card</span>
              <span className={"hs-lblshort"}>Digital card</span>
            </div>
            {" "}
            <div className={cx("m-fmtpill", hv("background: var(--hs-n5);"))} style={{ borderRadius: "var(--radius-full)", background: "var(--hs-n4)", border: "1px solid var(--color-text-primary)", padding: "var(--space-3) var(--space-6)", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "24px", color: "var(--color-text-primary)", boxSizing: "border-box" }}>
              <span style={{ position: "absolute", left: "396px", top: "38px", background: "var(--color-brand-primary)", color: "var(--color-text-on-primary)", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-label-12)", lineHeight: "1", padding: "var(--space-1) var(--space-2-5)", borderRadius: "var(--radius-full)", whiteSpace: "nowrap", textAlign: "center" }}>
                <span className={"hs-lblfull"}>Coming Soon</span>
                <span className={"hs-lblshort"}>Coming</span>
              </span>
              <span className={"hs-lblfull"}>Invitation Card</span>
              <span className={"hs-lblshort"}>Invitation</span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {" "}
          <p style={{ margin: "0", alignSelf: "flex-end", width: "580px", boxSizing: "content-box", paddingRight: "52px", textAlign: "right", fontFamily: "'Oldstyle Italic', 'Iowan Old Style', Palatino, Georgia, serif", fontStyle: "italic", fontWeight: "400", fontSize: "var(--font-size-h5)", lineHeight: "20px", color: "var(--color-text-primary)" }} data-reveal="">
            We have 100+ categories and a collection of 30,000+ cards available. Plus, you can create a custom card as many as you want ...
          </p>
          {" "}
          <div style={{ alignSelf: "stretch", overflow: "hidden", cursor: "grab", touchAction: "pan-y", userSelect: "none", WebkitUserSelect: "none" }} data-no-reveal="" onWheel={v.mq?.wheel} onPointerDown={v.mq?.down} onPointerMove={v.mq?.move} onPointerUp={v.mq?.up} onPointerCancel={v.mq?.up}>
            {" "}
            <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-4)", width: "max-content", willChange: "transform" }} ref={v.mq?.track}>
              {" "}
              {toArray(v.marqueeCards).map((card: any, $index: number) => (
                <React.Fragment key={$index}>
                  {" "}
                  <img className={hv("border-radius: var(--radius-2xl);")} style={{ width: "108px", height: "148px", pointerEvents: "auto", WebkitUserDrag: "none", objectFit: "cover", flexShrink: "0", display: "block", borderRadius: "0", transition: "border-radius 0.2s ease" }} data-lazysrc={card?.src} alt={card?.alt} draggable={false} />
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
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
