/* HeartStamp on iOS, three-up device row
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function AppIos(v: V) {
  return (
    <>
    <div className={"hs-fxrow"} style={{ position: "relative", width: "var(--hs-grid, 1200px)" }} data-reveal-stagger="">
      {" "}
      <div className={"hs-fxcell"} style={{ background: "var(--hs-n2)" }}>
        {" "}
        <div className={"hs-fxfit"} style={{ boxSizing: "border-box", padding: "var(--space-12) 23px 0", display: "flex", flexDirection: "column", gap: "var(--space-6)", justifyContent: "center", alignItems: "center" }}>
          {" "}
          <div style={{ alignSelf: "stretch", flex: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "center" }}>
            {" "}
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-4)", justifyContent: "center", alignItems: "center" }}>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-subheadline)", lineHeight: "1.2", textAlign: "center", color: "var(--color-text-primary)" }}>
                Meet HeartStamp on IOS
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)" }}>
                Send a card from the couch, the queue, or the car. No desk, no laptop, no waiting.
              </span>
              {" "}
            </div>
            {" "}
            <a className={hv("background: var(--hs-band-hover);")} style={{ width: "176px", height: "52px", flex: "none", display: "block", borderRadius: "var(--radius-lg)", background: "#000000", transition: "background 150ms ease" }} href="#" aria-label="Download on the App Store">
              {" "}
              <img style={{ width: "176px", height: "52px", display: "block" }} src="assets/feature/appstore-badge.svg" alt="Download on the App Store" />
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          {v.remAlphaVideoOk ? (
            <>
              {" "}
              <video style={{ width: "84.3750%", height: "405px", flex: "none", marginTop: "auto", objectFit: "cover", objectPosition: "center top", display: "block", background: "transparent" }} ref={v.ipRef} src="uploads/iphone0banner.webm" muted={true} loop={true} playsInline={true} preload="auto" />
              {" "}
            </>
          ) : null}
          {" "}
          {v.remAlphaVideoFallback ? (
            <>
              {" "}
              <video style={{ width: "84.3750%", height: "405px", flex: "none", marginTop: "auto", objectFit: "cover", objectPosition: "center top", display: "block", background: "transparent" }} ref={v.ipRef} src="uploads/iphone_banner-v1.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" />
              {" "}
            </>
          ) : null}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={"hs-fxcell"} style={{ background: "var(--hs-n2)" }}>
        {" "}
        <div className={"hs-fxfit"} ref={v.fxRef}>
          {" "}
          <div style={{ position: "absolute", left: "5.2083%", top: "31px", width: "89.5833%", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "center" }}>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-subheadline)", lineHeight: "1.2", textAlign: "center", color: "var(--color-text-primary)" }}>
              Tell us the moment. We’ll handle the rest
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)" }}>
              Meet the{" "}
              <span style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>
                world's first AI-powered
              </span>
              {" "}greeting card platform. Our Stampy designs a one-of-a-kind card for your moment,  we print it on thick 350gsm paper and post it within 24 hours.
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "7.4016%", top: "212px", transform: "rotate(3.556deg)", transformOrigin: "0 0", width: "89.5833%", height: "120px", zIndex: "1" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: v.fxRise1 }}>
              {" "}
              <div style={{ width: "100%", height: "100%", animation: v.fxFloat1 }}>
                {" "}
                <div className={hv("transform: translateY(-6px) rotate(-1.2deg); box-shadow: inset 0 0 0 1px rgba(var(--hs-ink),0.26), 0 16px 32px rgba(var(--hs-ink),0.13); background: rgba(var(--hs-surf),0.95);")} style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "16px", background: "rgba(var(--hs-surf),0.7)", boxShadow: "inset 0 0 0 1px rgba(var(--hs-ink),0.2)", display: "flex", flexDirection: "row", gap: "var(--space-3)", padding: "var(--space-6) var(--space-4)", alignItems: "flex-start", cursor: "default", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease, background-color 300ms ease" }}>
                  {" "}
                  <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
                    {" "}
                    <div style={{ position: "absolute", left: "5.335px", top: "5.333px", width: "48px", height: "48px", background: "url(assets/steps/icons.png) 2.332% 44.560% / 331.035% 230.112% no-repeat" }} />
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start", flex: "1" }}>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "1.2", color: "var(--color-text-primary)" }}>
                      Share the moment.
                    </span>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-body-13)", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                      Who it’s for, what happened, the inside joke only you two get.
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
          </div>
          {" "}
          <div style={{ position: "absolute", left: "17.0919%", top: "351.227px", transform: "rotate(-6.6deg)", transformOrigin: "0 0", width: "74.9294%", height: "90.473px", zIndex: "0" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: v.fxRise2 }}>
              {" "}
              <div style={{ width: "100%", height: "100%", borderRadius: "var(--radius-2xl)", background: "rgba(82,82,91,0.1)", filter: "blur(12px)", willChange: "filter, transform", animation: v.fxFloat2 }} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "5.2083%", top: "353.383px", transform: "rotate(-3.727deg)", transformOrigin: "0 0", width: "89.5833%", height: "120px", zIndex: "1" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: v.fxRise2 }}>
              {" "}
              <div style={{ width: "100%", height: "100%", animation: v.fxFloat2 }}>
                {" "}
                <div className={hv("transform: translateY(-6px) rotate(1.2deg); box-shadow: inset 0 0 0 1px rgba(var(--hs-ink),0.26), 0 16px 32px rgba(var(--hs-ink),0.13); background: rgba(var(--hs-surf),0.95);")} style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "16px", background: "rgba(var(--hs-surf),0.7)", boxShadow: "inset 0 0 0 1px rgba(var(--hs-ink),0.2)", display: "flex", flexDirection: "row", gap: "var(--space-3)", padding: "var(--space-6) var(--space-4)", alignItems: "flex-start", cursor: "default", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease, background-color 300ms ease" }}>
                  {" "}
                  <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
                    {" "}
                    <div style={{ position: "absolute", left: "7.998px", top: "5.334px", width: "42.218px", height: "48px", background: "url(assets/steps/icons.png) 50.131% 41.267% / 396.899% 232.727% no-repeat" }} />
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start", flex: "1" }}>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "1.2", color: "var(--color-text-primary)" }}>
                      Stampy design in minute
                    </span>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-body-13)", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                      Stampy drafts artwork and a message made just for them.
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
          </div>
          {" "}
          <div style={{ position: "absolute", left: "82.2917%", top: "576px", transform: "rotate(-169.66deg)", transformOrigin: "0 0", width: "75.0000%", height: "144px", zIndex: "0" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: v.fxRise3 }}>
              {" "}
              <div style={{ width: "100%", height: "100%", borderRadius: "var(--radius-2xl)", background: "rgba(82,82,91,0.1)", filter: "blur(12px)", willChange: "filter, transform", animation: v.fxFloat3 }} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "7.1208%", top: "453.758px", transform: "rotate(6.373deg)", transformOrigin: "0 0", width: "89.5833%", height: "120px", zIndex: "1" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: v.fxRise3 }}>
              {" "}
              <div style={{ width: "100%", height: "100%", animation: v.fxFloat3 }}>
                {" "}
                <div className={hv("transform: translateY(-6px) rotate(-1.4deg); box-shadow: inset 0 0 0 1px rgba(var(--hs-ink),0.26), 0 16px 32px rgba(var(--hs-ink),0.13); background: rgba(var(--hs-surf),0.95);")} style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "16px", background: "rgba(var(--hs-surf),0.7)", boxShadow: "inset 0 0 0 1px rgba(var(--hs-ink),0.2)", display: "flex", flexDirection: "row", gap: "var(--space-3)", padding: "var(--space-6) var(--space-4)", alignItems: "flex-start", cursor: "default", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease, background-color 300ms ease" }}>
                  {" "}
                  <div style={{ position: "relative", width: "64px", height: "64px", flex: "none" }}>
                    {" "}
                    <div style={{ position: "absolute", left: "5.331px", top: "5.334px", width: "48px", height: "48px", background: "url(assets/steps/icons.png) 97.927% 48.700% / 323.368% 229.083% no-repeat" }} />
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start", flex: "1" }}>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "var(--font-size-h5)", lineHeight: "1.2", color: "var(--color-text-primary)" }}>
                      We print and send it.
                    </span>
                    {" "}
                    <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-body-13)", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                      Thick 350gsm paper, a real stamp, and first-class post straight.
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
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={"hs-fxcell"} style={{ background: "var(--hs-n2)" }}>
        {" "}
        <div className={"hs-fxfit"}>
          {" "}
          <div style={{ position: "absolute", left: "5.2083%", top: "-28px", width: "89.5833%", height: "380px", borderRadius: "0 0 20px 20px", background: "linear-gradient(146.144deg, var(--hs-n2) 41.21%, var(--hs-n12) 99.07%)" }} />
          {" "}
          <video style={{ position: "absolute", left: "0", top: "14px", width: "97.1354%", height: "210px", objectFit: "cover", objectPosition: "100% 100%", display: "block" }} ref={v.tabletRef} src="uploads/digital3d.mp4" autoPlay={true} muted={true} loop={false} playsInline={true} preload="auto" poster="assets/feature/tablet.png" />
          {" "}
          <div style={{ position: "absolute", left: "5.2083%", top: "383px", width: "89.5833%", boxSizing: "border-box", padding: "0 var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-subheadline)", lineHeight: "1.2", textAlign: "center", color: "var(--color-text-primary)" }}>
              A digital card unlike anything you’ve seen
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "var(--font-size-body-15)", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)", whiteSpace: "pre-line" }}>
              500+ animated backgrounds, effects, and stamps that sparkle, shimmer, and snow. Realistic, fun to edit, all yours. Send by link or QR, no printing, no waiting.
            </span>
            {" "}
            <a className={hv("background: var(--hs-band-hover);")} style={{ alignSelf: "center", marginTop: "var(--space-2)", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "44px", padding: "0 var(--space-6)", borderRadius: "var(--radius-button)", background: "var(--hs-band)", fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "var(--font-size-body-15)", lineHeight: "1", color: "var(--color-text-on-primary)", textDecoration: "none", transition: "background 150ms ease" }} href="#">
              Get started for free
            </a>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "6.4026%", top: "238.389px", transform: "rotate(-4.588deg)", transformOrigin: "0 0", width: "87.1190%", height: "102px" }} data-no-reveal="">
            {" "}
            <div style={{ width: "100%", height: "100%", animation: "hs-fx-float 7.6s ease-in-out infinite" }}>
              {" "}
              <div style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "var(--radius-2xl)", background: "var(--color-bg-main)", boxShadow: "inset 0 0 0 1px rgb(169,168,164)", padding: "var(--space-3)", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
                {" "}
                <div style={{ alignSelf: "stretch", height: "20px", boxSizing: "border-box", padding: "0 var(--space-1-5)", marginTop: "7px", display: "flex", flexDirection: "row", gap: "var(--space-2-5)", alignItems: "center" }}>
                  {" "}
                  <svg style={{ flex: "none" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  </svg>
                  {" "}
                  <span style={{ flex: "1", fontFamily: "var(--font-family-body)", fontWeight: "400", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-secondary)" }}>
                    Make me a digital graduation card for my daughter.
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ alignSelf: "stretch", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                  {" "}
                  <div style={{ width: "32px", height: "32px", borderRadius: "100px", background: "var(--color-state-hover)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    {" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                      <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      <circle cx="9" cy="9" r="2" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-1)", alignItems: "center", flex: "none" }}>
                    {" "}
                    <div style={{ width: "32px", height: "32px", borderRadius: "100px", background: "var(--color-state-hover)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      {" "}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19v3" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <rect x="9" y="2" width="6" height="13" rx="3" />
                      </svg>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ width: "32px", height: "32px", borderRadius: "20px", background: "var(--color-state-hover)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      {" "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
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
