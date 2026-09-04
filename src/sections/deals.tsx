/* This week's top deals
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function Deals(v: V) {
  return (
    <>
    <div className={"m-deal"} style={{ background: "var(--hs-panel)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-10)", padding: "64px 0 72px", opacity: "1", animation: v.dealAnim }} ref={v.dealRef}>
      {" "}
      <h2 style={{ margin: "0", alignSelf: "stretch", textAlign: "center", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h3)", lineHeight: "40px", color: "var(--color-text-primary)" }}>
        <span className={"hs-lblfull"}>
          Shop This Week’s{" "}
          <br className={"hs-mbr"} />
          Top Deals
        </span>
        <span className={"hs-lblshort"}>This week’s top deals</span>
      </h2>
      {" "}
      <div style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "row", gap: "var(--space-6)" }} data-reveal-stagger="">
        {" "}
        <div style={{ position: "relative", flex: "1", height: "288px", overflow: "hidden" }}>
          {" "}
          <video style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} src="uploads/banner.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" />
          {" "}
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.9) 70%, rgb(30,41,59) 100%)", pointerEvents: "none" }} />
          {" "}
          <div className={"m-dealcap"} style={{ position: "absolute", left: "32px", bottom: "70px", width: "517px", display: "flex", flexDirection: "column", gap: "var(--space-2)", pointerEvents: "none", height: "55px" }}>
            {" "}
            <h3 style={{ margin: "0", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-subheadline)", lineHeight: "24px", color: "var(--color-text-on-primary)" }}>
              Save more on custom printed cards
            </h3>
            {" "}
            <p style={{ margin: "0", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "rgba(255,255,255,0.9)" }}>
              No need to wait for the holidays, design your cards now using the photos.
            </p>
            {" "}
          </div>
          {" "}
          <div className={hv("background: rgba(255,255,255,0.24);")} style={{ position: "absolute", left: "32px", bottom: "21px", height: "36px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.14)", padding: "0 var(--space-4)", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "20px", color: "var(--color-text-on-primary)", transition: "background 0.15s ease" }}>
            Make My Free Card
          </div>
          {" "}
          <img style={{ position: "absolute", right: "18px", top: "16px", width: "104px", height: "100px", display: "block", pointerEvents: "none" }} src="uploads/discount 1.svg" alt="25% off" />
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", flex: "1", height: "288px", overflow: "hidden", display: "flex", flexDirection: "row" }}>
          {" "}
          <div style={{ width: "47%", background: "rgb(200,32,47)", boxSizing: "border-box", padding: "var(--space-8)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-3)" }}>
            {" "}
            <h3 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-subheadline)", lineHeight: "1.2", color: "var(--color-text-on-primary)", paddingRight: "44px" }}>
              Get 50% off digital cards
            </h3>
            {" "}
            <p style={{ margin: "0", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-body-15)", lineHeight: "1.45", color: "rgba(255,255,255,0.85)" }}>
              No need to wait for the holidays, design your cards now using the photos.
            </p>
            <div className={hv("background: rgba(255,255,255,0.24);")} style={{ marginTop: "var(--space-2)", height: "44px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.14)", padding: "0 22px", display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "var(--font-size-body-15)", color: "var(--color-text-on-primary)", transition: "background 0.15s ease" }}>
              Make My Free Card
            </div>
            {" "}
          </div>
          <div style={{ position: "relative", width: "53%" }} onDragOver={v.dropVideo?.over} onDrop={v.dropVideo?.drop}>
            <img className={"m-dealbadge"} style={{ position: "absolute", left: "0", top: "16px", transform: "translateX(-50%)", width: "104px", height: "100px", display: "block", pointerEvents: "none", zIndex: "1" }} src="uploads/discount 2.svg" alt="50% off" />
            {" "}
            <video style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} src="uploads/3D card.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" />
            {" "}
            {false ? (
              <>
                {" "}
                <video style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} data-lazysrc={v.deal3dVideo} autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" />
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
    </div>
    </>
  );
}
