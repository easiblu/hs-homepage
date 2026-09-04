/* Site footer: columns, payments, socials
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, hv, toArray } from '../lib/dc';

export function Footer(v: V) {
  return (
    <>
    <div style={{ alignSelf: "stretch", marginTop: "-32px", display: "flex", flexDirection: "column", alignItems: "flex-start" }} ref={v.ftRef}>
      {" "}
      <div style={{ alignSelf: "stretch", boxSizing: "border-box", background: "var(--color-brand-secondary)", padding: "56px 0 0", display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {" "}
        <div className={"m-in20"} style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column" }}>
          {" "}
          <div className={"m-stack"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", opacity: "1", animation: v.ftAnim1 }}>
            {" "}
            <div style={{ width: "253px", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-secondary)" }}>
                About HeartStamp
              </span>
              {" "}
              <span style={{ width: "253px", whiteSpace: "pre-line", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-on-secondary)", opacity: "0.7" }}>
                {"HeartStamp helps you make personalized greeting cards built around real emotional moments: modern, emotionally literate, design-led.\n\nLas Vegas, NV, US"}
              </span>
              {" "}
            </div>
            {" "}
            <div className={"m-ftcols"} style={{ width: "calc((100% - 264px) / 12 * 7 + 144px)", flex: "none", display: "flex", flexDirection: "row", gap: "var(--space-6)", justifyContent: "flex-end", alignItems: "flex-start" }}>
              {" "}
              {toArray(v.ftCols).map((fc: any, $index: number) => (
                <React.Fragment key={$index}>
                  {" "}
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-secondary)" }}>
                      {fc?.title}
                    </span>
                    {" "}
                    <span style={{ alignSelf: "stretch", whiteSpace: "pre-line", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "2.2", color: "var(--color-text-on-secondary)", opacity: "0.7" }}>
                      {fc?.links}
                    </span>
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
          <div style={{ position: "relative", alignSelf: "stretch", height: "306px", overflow: "hidden", marginTop: "-30px", opacity: "1", animation: v.ftAnim2 }}>
            {" "}
            <div style={{ position: "absolute", left: "50%", top: "0", width: "1199px", height: "306px", transform: "translateX(-50%)" }}>
              {" "}
              <div style={{ position: "absolute", left: "0", top: "0", width: "306px", height: "306px", background: "linear-gradient(180deg, var(--hs-mark-a) 0%, var(--hs-mark-b) 86.44%)", WebkitMask: "url(assets/footer/emblem.svg) center / contain no-repeat", mask: "url(assets/footer/emblem.svg) center / contain no-repeat" }} role="img" aria-label="HeartStamp" />
              {" "}
              <div style={{ position: "absolute", left: "51px", top: "47px", width: "1148px", height: "226px", background: "linear-gradient(180deg, var(--hs-mark-a2) 0%, var(--hs-mark-b) 68.81%)", WebkitMask: "url(assets/footer/wordmark.svg) center / contain no-repeat", mask: "url(assets/footer/wordmark.svg) center / contain no-repeat" }} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div style={{ alignSelf: "stretch", boxSizing: "border-box", background: "var(--color-brand-secondary)", borderTop: "1px solid var(--color-brand-secondary-hover)", padding: "var(--space-4) 0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        {" "}
        <div className={"m-stack m-in20"} style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", opacity: "1", animation: v.ftAnim3 }}>
          {" "}
          <div className={"m-stack"} style={{ width: "578px", flex: "none", display: "flex", flexDirection: "row", gap: "64px", alignItems: "center" }}>
            {" "}
            <div style={{ width: "379px", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "100%", color: "var(--color-text-on-secondary)" }}>
                Payment Methods
              </span>
              {" "}
              <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", alignItems: "center" }}>
                {" "}
                {toArray(v.ftPay).map((p: any, $index: number) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <div style={{ height: "32px", boxSizing: "border-box", borderRadius: "var(--radius-full)", background: "var(--hs-pay-chip)", boxShadow: "inset 0 0 0 1px rgba(36,36,35,0.10)", padding: "var(--space-2) 11px", display: "flex", alignItems: "center" }}>
                      {" "}
                      <img style={{ height: "16px", width: "auto", display: "block", filter: p?.filter }} data-lazysrc={p?.src} alt={p?.alt} />
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
            <div style={{ width: "135px", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "100%", color: "var(--color-text-on-secondary)" }}>
                Our Apps
              </span>
              {" "}
              <a className={hv("opacity: 0.88;")} style={{ width: "135px", height: "40px", boxSizing: "border-box", borderRadius: "var(--radius-sm)", background: "#000000", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", flexDirection: "row", gap: "var(--space-2)", padding: "0 var(--space-2-5)", alignItems: "center", color: "#ffffff" }} href="#">
                {" "}
                <svg style={{ flex: "none", marginTop: "-2px" }} width="19" height="19" viewBox="0 0 24 24" fill="var(--color-text-on-primary)">
                  <path d="M17.05 12.536c-.026-2.606 2.128-3.854 2.225-3.917-1.211-1.771-3.096-2.014-3.767-2.042-1.604-.163-3.131.944-3.945.944-.813 0-2.069-.92-3.4-.895-1.75.026-3.362 1.017-4.262 2.583-1.816 3.15-.464 7.816 1.306 10.373.865 1.252 1.897 2.657 3.252 2.607 1.305-.052 1.797-.844 3.375-.844 1.578 0 2.021.844 3.401.818 1.404-.026 2.293-1.274 3.152-2.531.993-1.452 1.402-2.858 1.426-2.93-.031-.014-2.736-1.05-2.763-4.166zM14.44 4.9c.72-.87 1.204-2.08 1.072-3.285-1.036.042-2.29.69-3.033 1.559-.667.77-1.25 2.001-1.093 3.182 1.155.09 2.334-.587 3.054-1.456z" />
                </svg>
                {" "}
                <span style={{ display: "flex", flexDirection: "column" }}>
                  {" "}
                  <span style={{ fontFamily: "var(--font-family-body)", fontSize: "8px", lineHeight: "10px", letterSpacing: "0.02em" }}>
                    Download on the
                  </span>
                  {" "}
                  <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-body-15)", lineHeight: "18px" }}>
                    App Store
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ width: "192px", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "100%", color: "var(--color-text-on-secondary)", whiteSpace: "nowrap" }}>
              Keep in Touch
            </span>
            {" "}
            <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", alignItems: "center" }}>
              {" "}
              <a className={hv("background: var(--color-brand-secondary-hover);")} style={{ width: "32px", height: "32px", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-on-secondary)" }} href="#" aria-label="Facebook">
                <svg width="7" height="16" viewBox="0 0 7 16" fill="currentColor">
                  <path d="M 4.313 3.425 C 4.313 2.781 4.835 2.55 5.419 2.55 C 6.002 2.55 6.626 2.75 6.626 2.75 L 7 0.3 C 7 0.3 6.206 0 4.313 0 C 3.151 0 2.477 0.487 1.984 1.206 C 1.519 1.887 1.502 2.981 1.502 3.688 L 1.502 5.294 L 0 5.294 L 0 7.688 L 1.502 7.688 L 1.502 16 L 4.313 16 L 4.313 7.688 L 6.541 7.688 L 6.705 5.294 L 4.313 5.294 L 4.313 3.425 Z" />
                </svg>
              </a>
              {" "}
              <a className={hv("background: var(--color-brand-secondary-hover);")} style={{ width: "32px", height: "32px", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-on-secondary)" }} href="#" aria-label="X">
                <svg width="16" height="14" viewBox="0 0 16.005 14" fill="currentColor">
                  <path d="M 12.645 0 L 15.099 0 L 9.712 5.941 L 16.005 14 L 11.067 14 L 7.2 9.103 L 2.773 14 L 0.32 14 L 6.027 7.646 L 0 0 L 5.061 0 L 8.555 4.474 L 12.645 0 Z M 11.787 12.605 L 13.147 12.605 L 4.347 1.343 L 2.885 1.343 L 11.787 12.605 Z" />
                </svg>
              </a>
              {" "}
              <a className={hv("background: var(--color-brand-secondary-hover);")} style={{ width: "32px", height: "32px", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-on-secondary)" }} href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {" "}
              <a className={hv("background: var(--color-brand-secondary-hover);")} style={{ width: "32px", height: "32px", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-on-secondary)" }} href="#" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-3.16 19.5" />
                  <path d="M9 21c1-3 2-6 2-6" />
                  <path d="M8.5 13.5A4 4 0 1 1 16 11c0 3-2 5-4 5" />
                </svg>
              </a>
              {" "}
              <a className={hv("background: var(--color-brand-secondary-hover);")} style={{ width: "32px", height: "32px", borderRadius: "var(--radius-full)", boxShadow: "inset 0 0 0 1px var(--color-brand-secondary-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-on-secondary)" }} href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
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
