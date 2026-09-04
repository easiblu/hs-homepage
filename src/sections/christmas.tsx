/* Christmas in July band
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function Christmas(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", boxSizing: "border-box", padding: "0", display: "flex", flexDirection: "column", alignItems: "center" }} ref={v.promoRef}>
      {" "}
      <div style={{ position: "relative", alignSelf: "stretch", boxSizing: "border-box", background: "rgb(14,51,30)", overflow: "hidden", padding: "140px 0 96px", display: "flex", flexDirection: "column", alignItems: "center", gap: "56px" }}>
        {" "}
        <div style={{ position: "absolute", left: "6px", right: "6px", top: "6px", height: "63px", background: "url(assets/promo/xmas-pixel-band-tile.svg) top left / auto 63px repeat-x", pointerEvents: "none" }} data-no-reveal="" />
        {" "}
        <div className={"m-in20"} style={{ position: "relative", width: "var(--hs-grid, 1200px)", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-12)" }}>
          {" "}
          <div style={{ width: "611px", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }} data-reveal-stagger="">
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "16px", lineHeight: "100%", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-text-on-primary)", whiteSpace: "nowrap" }}>
              For the real holiday lovers
            </span>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h2)", lineHeight: "1.1", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-on-primary)" }}>
              It’s Christmas in July!
              <br />
              Get a super early jumpstart.
            </h2>
            {" "}
          </div>
          {" "}
          <div className={"m-promo3"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--space-6)", alignItems: "flex-start" }} data-reveal-stagger="">
            {" "}
            <div style={{ flex: "1", minWidth: "0", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <img style={{ alignSelf: "stretch", height: "200px", objectFit: "cover", display: "block" }} src="assets/promo/card-1.png" alt="Free Address Collector" />
              {" "}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
                {" "}
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "21px", lineHeight: "1.2", color: "var(--color-text-on-primary)" }}>
                    Free Address Collector
                  </span>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.72)" }}>
                    Missing addresses? Just text or email, and your Shutterfly address book updates automatically.
                  </span>
                  {" "}
                </div>
                {" "}
                <a className={hv("opacity: 0.8;")} style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "700", fontSize: "var(--font-size-body-13)", lineHeight: "20px", color: "var(--color-text-on-primary)", textDecoration: "underline" }} href="#">
                  Get Started
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ flex: "1", minWidth: "0", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <img style={{ alignSelf: "stretch", height: "200px", objectFit: "cover", display: "block" }} src="assets/promo/card-2.png" alt="Holiday Cards" />
              {" "}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
                {" "}
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "21px", lineHeight: "1.2", color: "var(--color-text-on-primary)" }}>
                    Holiday Cards
                  </span>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.72)" }}>
                    No need to wait for the holidays, design your cards now using the photos already on your phone.
                  </span>
                  {" "}
                </div>
                {" "}
                <a className={hv("animation: hs-ul-draw 0.72s cubic-bezier(0.33,0,0.15,1) both;")} style={{ alignSelf: "flex-start", fontFamily: "var(--font-family-heading)", fontWeight: "700", fontSize: "var(--font-size-body-13)", lineHeight: "20px", color: "var(--color-text-on-primary)", textDecoration: "none", paddingBottom: "3px", backgroundImage: "linear-gradient(var(--color-bg-main), var(--color-bg-main))", backgroundRepeat: "no-repeat", backgroundSize: "100% 1.5px", backgroundPosition: "0 100%" }} href="#">
                  Shop All Holiday Cards
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ flex: "1", minWidth: "0", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start" }}>
              {" "}
              <img style={{ alignSelf: "stretch", height: "200px", objectFit: "cover", display: "block" }} src="assets/promo/card-3.png" alt="Free Dedicated Designer" />
              {" "}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
                {" "}
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "21px", lineHeight: "1.2", color: "var(--color-text-on-primary)" }}>
                    Free Dedicated Designer
                  </span>
                  {" "}
                  <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.72)" }}>
                    No need to wait for the holidays, design your cards now using the photos already on your phone.
                  </span>
                  {" "}
                </div>
                {" "}
                <a className={hv("animation: hs-ul-draw 0.72s cubic-bezier(0.33,0,0.15,1) both;")} style={{ alignSelf: "flex-start", fontFamily: "var(--font-family-heading)", fontWeight: "700", fontSize: "var(--font-size-body-13)", lineHeight: "20px", color: "var(--color-text-on-primary)", textDecoration: "none", paddingBottom: "3px", backgroundImage: "linear-gradient(var(--color-bg-main), var(--color-bg-main))", backgroundRepeat: "no-repeat", backgroundSize: "100% 1.5px", backgroundPosition: "0 100%" }} href="#">
                  Shop All Holiday Cards
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
        <div style={{ position: "relative", width: "var(--hs-grid, 1200px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "var(--space-6)", rowGap: "0" }} data-reveal-stagger="">
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "8px", top: "5.334px", width: "46.09px", height: "53.333px", background: "url(assets/promo/icon-printing.png) 58.811% 45.597% / 161.850% 134.830% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                Printing
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                Experience premium printing techniques like letterpress & foil-press
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "5.333px", top: "5.334px", width: "50.901px", height: "53.333px", background: "url(assets/promo/icons-sprite.png) 35.695% 34.249% / 639.706% 317.193% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                Premium paper
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                We craft our stationery from the best paper stock
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "1px", top: "5px", width: "61px", height: "53px", background: "url(assets/promo/icon-digital.png) 0 0 / 100% 100% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                Digital
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                Book a 1:1 appointment with our concierge for free support
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "5.333px", top: "5.334px", width: "53.512px", height: "53.333px", background: "url(assets/promo/icons-sprite.png) 89.660% 35.479% / 581.940% 303.356% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                One of one.
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                Each card has a unique serial number, yours is one of a kind.
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "8px", top: "5.334px", width: "48.155px", height: "53.333px", background: "url(assets/promo/icon-bulk-cards.png) 0 0 / 100% 100% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                Bulk cards, delivered for you.
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                One order, many cards. We mail each one for you.
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ boxSizing: "border-box", padding: "var(--space-3) 0", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
              {" "}
              <div style={{ position: "absolute", left: "5.334px", top: "5.334px", width: "53.512px", height: "53.333px", background: "url(assets/promo/icon-custom-envelope.png) 0 0 / 100% 100% no-repeat" }} />
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start", flex: "1" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-on-primary)" }}>
                Custom Envelope
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.8)" }}>
                Add personal notes, add your return address, recipient address, everything is customizable
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div style={{ alignSelf: "stretch", height: "52px", boxSizing: "border-box", background: "var(--color-brand-lockup-heart)", display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
        {" "}
        <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h5)", lineHeight: "28px", textTransform: "uppercase", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
          Christmas in July: 50% off holiday cards, printed and posted for you
        </span>
        {" "}
        <svg style={{ display: "block", flex: "none" }} width="24" height="25" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
