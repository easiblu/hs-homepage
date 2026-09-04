/* Someone's letterbox is waiting
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { Btn } from '@heartstampxo/design-system/hs';
import { type V } from '../lib/dc';

export function Letterbox(v: V) {
  return (
    <>
    <div style={{ alignSelf: "stretch", boxSizing: "border-box", background: "var(--color-brand-secondary)", borderTop: "1px solid var(--color-brand-secondary-hover)", borderBottom: "1px solid var(--color-brand-secondary-hover)", overflow: "hidden", padding: "68px var(--space-6)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} ref={v.lbRef}>
      {" "}
      <div className={"m-in20"} style={{ width: "790px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "var(--space-10)", alignItems: "center" }}>
        {" "}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center" }}>
          {" "}
          <h2 style={{ margin: "0", alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "700", fontSize: "var(--font-size-h1)", lineHeight: "64px", textAlign: "center", textWrap: "pretty", color: "var(--color-text-on-secondary)", opacity: "1", animation: v.lbAnim1 }}>
            Someone’s letterbox{" "}
            <img style={{ width: "61px", height: "61px", borderRadius: "50%", objectFit: "cover", display: "inline-block", verticalAlign: "-14px" }} src="assets/letterbox/letterbox-photo.jpg" alt="" />
            {" "}is waiting. Send your’s for free
          </h2>
          {" "}
          <span style={{ width: "599px", maxWidth: "100%", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "var(--font-size-h4)", letterSpacing: "-0.02em", lineHeight: "1.3", textAlign: "center", color: "var(--color-text-on-secondary)", opacity: "0.8", animation: v.lbAnim2 }}>
            At Heartstamp we’ve got greetings cards for every single occasion, including birthday cards, anniversary cards, and thank you cards.
          </span>
          {" "}
        </div>
        {" "}
        <div className={"m-cta"} style={{ display: "flex", flexDirection: "row", gap: "var(--space-3)", alignItems: "flex-start", opacity: "1", animation: v.lbAnim3 }}>
          {" "}
          <div className="sc-host-x" style={{ display: 'contents' }}>
            <Btn size="xl">
              Make My Free Card
            </Btn>
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
