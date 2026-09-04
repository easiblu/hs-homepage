/* Tabbed card feature carousel
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { Btn } from '@heartstampxo/design-system/hs';
import { type V, hv, toArray } from '../lib/dc';

export function Features(v: V) {
  return (
    <>
    <div className={"m-fepad"} style={{ background: "var(--hs-panel)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-10)", padding: "56px 0 64px" }} ref={v.feRef}>
      {" "}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }} data-reveal-stagger="">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-2)" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "700", fontSize: "var(--font-size-h5)", lineHeight: "28px" }}>
              🎉
            </span>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "16px", lineHeight: "28px", textTransform: "uppercase", color: "var(--color-brand-primary)" }}>
              <span className={"hs-lblfull"}>30% off 2 cards or more use code 30OFF2</span>
              <span className={"hs-lblshort"}>30% off 2+ cards · 30OFF2</span>
            </span>
            {" "}
          </div>
          {" "}
          <h2 className={"m-h2match"} style={{ margin: "0", alignSelf: "stretch", textAlign: "center", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h3)", lineHeight: "40px", color: "var(--color-text-primary)" }}>
            Every card is a first edition
          </h2>
          {" "}
        </div>
        {" "}
        <div className={"m-fetabs-desk"} style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", alignItems: "center" }}>
          {" "}
          {toArray(v.feTabs).map((t: any, $index: number) => (
            <React.Fragment key={$index}>
              {" "}
              <button style={{ height: "32px", padding: "0 var(--space-4)", border: "0", borderRadius: "var(--radius-full)", background: t?.bg, boxShadow: t?.shadow, cursor: "pointer", fontFamily: "var(--font-family-body)", fontWeight: "700", fontSize: "var(--font-size-label-12)", color: t?.color, whiteSpace: "nowrap" }} type="button" onClick={t?.go}>
                {t?.label}
              </button>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
        {" "}
        <div className={"m-fetabs"} style={{ display: "none", flexDirection: "row", gap: "var(--space-2)", justifyContent: "center", alignItems: "flex-start" }}>
          {" "}
          {toArray(v.feTabsM).map((t: any, $index: number) => (
            <React.Fragment key={$index}>
              {" "}
              <button style={{ height: "32px", flex: "none", padding: "0 var(--space-3)", border: "0", borderRadius: "var(--radius-full)", background: t?.bg, boxShadow: t?.ring, cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: t?.weight, fontSize: "var(--font-size-body-13)", lineHeight: "1", color: t?.color, whiteSpace: "nowrap" }} type="button" onClick={t?.go}>
                {t?.label}
              </button>
              {" "}
            </React.Fragment>
          ))}
          {" "}
          <div style={{ position: "relative", flex: "none" }}>
            {" "}
            <button style={{ height: "32px", padding: "0 var(--space-3)", border: "0", borderRadius: "var(--radius-full)", background: v.feOther?.bg, boxShadow: v.feOther?.ring, display: "flex", flexDirection: "row", gap: "var(--space-2)", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "var(--font-family-heading)", fontWeight: v.feOther?.weight, fontSize: "var(--font-size-body-13)", lineHeight: "1", color: v.feOther?.fg, whiteSpace: "nowrap" }} type="button" onClick={v.feOther?.toggle}>
              {" "}
              <span>{v.feOther?.label}</span>
              {" "}
              <svg style={{ flex: "none", transform: v.feOther?.caret, transition: "transform 0.2s ease" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
              {" "}
            </button>
            {" "}
            {v.feOther?.open ? (
              <>
                {" "}
                <div style={{ position: "absolute", left: "50%", marginLeft: "-90px", top: "calc(100% + 6px)", zIndex: "20", width: "180px", boxSizing: "border-box", padding: "var(--space-1-5)", borderRadius: "var(--radius-2xl)", background: "var(--color-bg-main)", boxShadow: "0 12px 32px rgba(var(--hs-ink),0.18)", display: "flex", flexDirection: "column", gap: "var(--space-0-5)" }}>
                  {" "}
                  {toArray(v.feOther?.items).map((o: any, $index: number) => (
                    <React.Fragment key={$index}>
                      {" "}
                      <button className={hv("background: var(--color-state-hover);")} style={{ height: "40px", padding: "0 var(--space-3)", border: "0", borderRadius: "var(--radius-lg)", background: "transparent", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-body-15)", color: "var(--color-text-primary)", whiteSpace: "nowrap" }} type="button" onClick={o?.go}>
                        {o?.label}
                      </button>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div style={{ position: "relative", width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-6)", boxSizing: "border-box" }} onMouseEnter={v.feRow?.enter} onMouseLeave={v.feRow?.leave}>
        {" "}
        <button className={hv("background: var(--color-state-hover);")} style={{ opacity: v.feRow?.veil, transition: "opacity 0.2s ease", position: "absolute", left: "-56px", top: "50%", transform: "translateY(-50%)", zIndex: "2", width: "40px", height: "40px", border: "1px solid rgba(var(--hs-ink),0.14)", borderRadius: "var(--radius-full)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-primary)", flex: "none" }} type="button" onClick={v.feRow?.prev} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        {" "}
        <div className={"hsx"} style={{ flex: "1", minWidth: "0", boxSizing: "border-box", padding: "var(--space-6) var(--space-10) 64px", margin: "-20px -40px -56px", display: "flex", flexDirection: "row", gap: "var(--space-4)", overflowX: "auto", scrollBehavior: "smooth" }} data-reveal-stagger="" ref={v.feRow?.track} tabIndex={0} role="region" aria-label="Featured cards, use the left and right arrow keys to scroll">
          {" "}
          {toArray(v.feCards).map((c: any, $index: number) => (
            <React.Fragment key={$index}>
              {" "}
              <a className={hv("border-radius: 16px; transform: translateY(-4px);")} style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)", width: "var(--hs-card, 288px)", padding: "var(--space-6) 0 var(--space-8)", background: "var(--color-bg-main)", color: "var(--color-text-primary)", transition: "border-radius 0.25s ease, transform 0.25s ease", animation: c?.slide }} href="#">
                {" "}
                <div style={{ position: "relative", width: "var(--hs-card-img, 256px)", height: "var(--hs-card-img-h, 309px)", marginBottom: "var(--space-4)" }} onMouseEnter={c?.enter} onMouseLeave={c?.leave}>
                  {" "}
                  <img style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", borderRadius: c?.radius, transition: "border-radius 0.2s ease" }} data-lazysrc={c?.img} alt={c?.title} />
                  {" "}
                  <button style={{ position: "absolute", left: "-6px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", border: "0", borderRadius: "var(--radius-full)", background: "var(--hs-band)", color: "var(--color-text-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: c?.veil, transition: "opacity 0.2s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.28)" }} type="button" onClick={c?.prev} aria-label="Previous card">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  {" "}
                  <button style={{ position: "absolute", right: "-6px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", border: "0", borderRadius: "var(--radius-full)", background: "var(--hs-band)", color: "var(--color-text-on-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: c?.veil, transition: "opacity 0.2s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.28)" }} type="button" onClick={c?.next} aria-label="Next card">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  {" "}
                </div>
                {" "}
                <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "var(--font-size-h4)", lineHeight: "24px", color: "var(--color-text-primary)" }}>
                  {c?.title}
                </span>
                {" "}
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "var(--font-size-label-12)", color: "var(--color-text-disabled)" }}>
                  {c?.count}
                </span>
                {" "}
              </a>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
        {" "}
        <button className={hv("background: var(--color-state-hover);")} style={{ opacity: v.feRow?.veil, transition: "opacity 0.2s ease", position: "absolute", right: "-56px", top: "50%", transform: "translateY(-50%)", zIndex: "2", width: "40px", height: "40px", border: "1px solid rgba(var(--hs-ink),0.14)", borderRadius: "var(--radius-full)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-primary)", flex: "none" }} type="button" onClick={v.feRow?.next} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        {" "}
      </div>
      {" "}
      <div className={"m-cta"} style={{ display: "flex", flexDirection: "row", gap: "var(--space-3)", alignItems: "center" }} data-reveal="">
        {" "}
        <div className="sc-host-x" style={{ display: 'contents' }}>
          <Btn size="xl">
            Talk to Stampy AI
          </Btn>
        </div>
        {" "}
        <div className="sc-host-x" style={{ display: 'contents' }}>
          <Btn variant="outline" size="xl">
            Browse The Rack
          </Btn>
        </div>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
