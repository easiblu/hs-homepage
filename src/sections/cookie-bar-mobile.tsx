/* Mobile cookie consent bar
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { Swt } from '@heartstampxo/design-system/hs';
import { type V } from '../lib/dc';

export function CookieBarMobile(v: V) {
  return (
    <>
    {v.ckOn ? (
      <>
        {" "}
        <div className={`hs-ckbar-m ${v.ckWideM ?? ""}`} style={{ position: "fixed", zIndex: "9400", left: "20px", right: "20px", top: v.ckTopS, boxSizing: "border-box", display: "none", alignItems: "center", flexWrap: "wrap", gap: "var(--space-1-5)", padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3-5)", borderRadius: v.ckRadM, background: "var(--bg-editor, var(--color-bg-editor))", opacity: v.ckO, transform: v.ckTm, transition: "opacity 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1), top 300ms cubic-bezier(0.22,1,0.36,1)" }} role="dialog" aria-label="Cookie preferences" data-no-reveal="">
          {" "}
          <div style={{ flex: "1 0 100%", minWidth: "0", display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", gap: "var(--space-1-5)" }}>
            {" "}
            <div style={{ flex: "1 1 auto", minWidth: "0", overflow: "hidden" }} aria-label="We value your privacy">
              {" "}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", transform: v.ckSlide, transition: "transform 520ms cubic-bezier(0.22,1,0.36,1)" }}>
                {" "}
                <span style={{ flex: "0 0 100%", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "var(--font-family-heading)", fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                  We value your privacy
                </span>
                {" "}
                <span style={{ flex: "0 0 100%", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "var(--font-family-heading)", fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                  Cookies help us make better cards
                </span>
                {" "}
                <span style={{ flex: "0 0 100%", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "var(--font-family-heading)", fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                  You choose what we remember
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {v.ckNotCust ? (
              <>
                {" "}
                <button style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "36px", padding: "0 var(--space-3-5)", border: "1px solid transparent", borderRadius: "var(--radius-button)", background: "var(--color-state-hover)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-13)", lineHeight: "1", fontWeight: "500", color: "var(--color-text-primary)", whiteSpace: "nowrap", cursor: "pointer", transition: "all 150ms ease-in-out" }} type="button" onClick={v.ckCustomize}>
                  More
                </button>
                {" "}
              </>
            ) : null}
            {" "}
            {v.ckCust ? (
              <>
                {" "}
                <button style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "36px", padding: "0 var(--space-3-5)", border: "1px solid transparent", borderRadius: "var(--radius-button)", background: "var(--color-state-hover)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-13)", lineHeight: "1", fontWeight: "500", color: "var(--color-text-primary)", whiteSpace: "nowrap", cursor: "pointer", transition: "all 150ms ease-in-out" }} type="button" onClick={v.ckSave}>
                  Save
                </button>
                {" "}
              </>
            ) : null}
            {" "}
            <button style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "36px", padding: "0 var(--space-3-5)", border: "1px solid transparent", borderRadius: "var(--radius-button)", background: "var(--color-brand-primary)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-13)", lineHeight: "1", fontWeight: "500", borderColor: "var(--color-brand-primary)", color: "var(--color-text-on-primary)", whiteSpace: "nowrap", cursor: "pointer", transition: "all 150ms ease-in-out" }} type="button" onClick={v.ckAccept}>
              Accept
            </button>
            {" "}
          </div>
          {" "}
          {v.ckCust ? (
            <>
              {" "}
              <div className={"hs-cksw"} style={{ flex: "1 0 100%", display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", justifyContent: "space-between", gap: "var(--space-0-5)", padding: "var(--space-2) 0 0", overflowX: "auto", scrollbarWidth: "none", margin: "var(--space-0-5) 0 0", borderTop: "1px solid var(--color-element-subtle)" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-0-5)", flex: "none" }}>
                  {" "}
                  <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "var(--font-weight-body-13-bd, 700)", fontSize: "var(--font-size-body-13-bd, 13px)", lineHeight: "1.5", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
                    Necessary
                  </span>
                  {" "}
                  <div className="sc-host-x" style={{ display: 'contents' }}>
                    <Swt size="sm" checked={true} onChange={v.ckNoop} disabled={true} />
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-0-5)", flex: "none" }}>
                  {" "}
                  <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "var(--font-weight-body-13-bd, 700)", fontSize: "var(--font-size-body-13-bd, 13px)", lineHeight: "1.5", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
                    Functional
                  </span>
                  {" "}
                  <div className="sc-host-x" style={{ display: 'contents' }}>
                    <Swt size="sm" checked={v.ckFunc} onChange={v.ckFuncT} />
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-0-5)", flex: "none" }}>
                  {" "}
                  <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "var(--font-weight-body-13-bd, 700)", fontSize: "var(--font-size-body-13-bd, 13px)", lineHeight: "1.5", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
                    Marketing
                  </span>
                  {" "}
                  <div className="sc-host-x" style={{ display: 'contents' }}>
                    <Swt size="sm" checked={v.ckMkt} onChange={v.ckMktT} />
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </>
          ) : null}
          {" "}
        </div>
      </>
    ) : null}
    </>
  );
}
