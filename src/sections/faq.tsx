/* FAQ accordion groups
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, toArray } from '../lib/dc';

export function Faq(v: V) {
  return (
    <>
    <div style={{ alignSelf: "stretch", boxSizing: "border-box", background: "var(--color-bg-main)", padding: "68px var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-10)", alignItems: "center" }} ref={v.faqRef}>
      {" "}
      <div className={"m-in20"} style={{ width: "var(--hs-grid, 1200px)", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "flex-start" }}>
        {" "}
        {toArray(v.faqGroups).map((g: any, $index: number) => (
          <React.Fragment key={$index}>
            {" "}
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "flex-start" }}>
              {" "}
              {g?.divider ? (
                <>
                  {" "}
                  <div style={{ alignSelf: "stretch", height: "1px", background: "rgba(var(--hs-ink),0.1)" }} data-reveal="" />
                  {" "}
                </>
              ) : null}
              {" "}
              <div className={"m-faqrow"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                {" "}
                <span style={{ flex: "none", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", whiteSpace: "nowrap", color: "var(--color-text-primary)" }} data-reveal="">
                  {g?.label}
                </span>
                {" "}
                <div style={{ width: "872px", maxWidth: "72%", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "flex-start" }} data-reveal-stagger="">
                  {" "}
                  {toArray(g?.items).map((it: any, $index: number) => (
                    <React.Fragment key={$index}>
                      {" "}
                      <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer" }} onClick={it?.toggle}>
                        {" "}
                        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--space-6)", justifyContent: "space-between", alignItems: "flex-start" }}>
                          {" "}
                          <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "130%", color: "var(--color-text-primary)" }}>
                            {it?.q}
                          </span>
                          {" "}
                          <div style={{ position: "relative", width: "24px", height: "24px", flex: "none", marginTop: "1px" }}>
                            {" "}
                            <div style={{ position: "absolute", left: "3px", top: "11.5px", width: "18px", height: "1.6px", borderRadius: "1px", background: "var(--color-text-primary)" }} />
                            {" "}
                            <div style={{ position: "absolute", left: "11.2px", top: "3px", width: "1.6px", height: "18px", borderRadius: "1px", background: "var(--color-text-primary)", transition: "transform 320ms cubic-bezier(0.22,1,0.36,1)", transform: it?.barT }} />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ alignSelf: "stretch", display: "grid", transition: "grid-template-rows 380ms cubic-bezier(0.22,1,0.36,1)", gridTemplateRows: it?.rows }}>
                          {" "}
                          <div style={{ overflow: "hidden", minHeight: "0", transition: "opacity 260ms ease", opacity: it?.aOpacity }}>
                            {" "}
                            <div style={{ paddingTop: "var(--space-4)", paddingRight: "var(--space-12)", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                              {it?.a}
                            </div>
                            {" "}
                          </div>
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
              </div>
              {" "}
            </div>
            {" "}
          </React.Fragment>
        ))}
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
