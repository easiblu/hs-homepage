/* Mobile hero stack
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { Btn } from '@heartstampxo/design-system/hs';
import { type V, hv, act, cx } from '../lib/dc';

export function HeroMobile(v: V) {
  return (
    <>
    <div className={"m-heroswrap"} style={{ position: "relative", height: "598px", margin: "var(--space-3) var(--space-4) var(--space-6)" }} data-no-reveal="">
      {" "}
      <div className={"m-hero1"} style={{ position: "absolute", inset: "0", margin: "0", opacity: v.slideAOpacity, pointerEvents: v.slideAPointer, transition: "opacity 0.55s ease", background: "var(--color-bg-main)", border: "1px solid var(--color-element-subtle)", borderRadius: "var(--radius-2xl)", overflow: "hidden", flexDirection: "column", gap: "var(--space-6)", padding: "0", alignItems: "flex-start", boxSizing: "border-box" }} data-screen-label="Hero mobile 1">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6) var(--space-6) 0", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexGrow: "1", alignSelf: "stretch" }}>
          {" "}
          <div style={{ animation: v.mAAnim1, display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "stretch", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <h1 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "32px", lineHeight: "1.16", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-primary)", textWrap: "pretty" }}>
              Snap a selfie, and let our AI handle the rest.
            </h1>
            {" "}
            <p style={{ margin: "0", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)", textWrap: "pretty" }}>
              Meet the{" "}
              <span style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>
                world's first AI-powered
              </span>
              {" "}greeting card platform. Our Stampy designs a one-of-a-kind card for your moment,  we print it on thick 350gsm paper and post it within 24 hours.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ animation: v.mAAnim2, display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "stretch", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <div className="sc-host-x" style={{ display: 'contents' }}>
              <Btn size="xl">
                Make My Free Card
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
        {" "}
        <div style={{ animation: v.mAAnim3, position: "relative", height: "244px", overflow: "hidden", flexShrink: "0", alignSelf: "stretch", background: "var(--hs-n9)" }}>
          {" "}
          <video style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.25)", transformOrigin: "center", display: "block" }} src="uploads/video hero.mp4" preload="auto" autoPlay={true} muted={true} loop={true} playsInline={true} />
          {" "}
        </div>
        {" "}
        <div className={cx("m-slidenext", hv("background: rgba(255,255,255,0.45);"))} style={{ position: "absolute", zIndex: "2", right: "16px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={v.nextSlide} title="Next slide">
          {" "}{v.ringEl}{" "}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-on-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={"m-hero1"} style={{ position: "absolute", inset: "0", margin: "0", opacity: v.slideBOpacity, pointerEvents: v.slideBPointer, transition: "opacity 0.55s ease", background: "var(--color-bg-main)", border: "1px solid var(--color-element-subtle)", borderRadius: "var(--radius-2xl)", overflow: "hidden", flexDirection: "column", gap: "var(--space-6)", padding: "0", alignItems: "flex-start", boxSizing: "border-box" }} data-screen-label="Hero mobile 2">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6) var(--space-6) 0", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexGrow: "1", alignSelf: "stretch" }}>
          {" "}
          <div style={{ animation: v.mBAnim1, display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "stretch", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "32px", lineHeight: "1.16", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-primary)", textWrap: "pretty" }}>
              Pretty in print.
              <br />
              Magic in Digital.
            </h2>
            {" "}
            <p style={{ margin: "0", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)", textWrap: "pretty" }}>
              We could tell you. We'd rather you find out. Your first Digital card is FREE.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ animation: v.mBAnim2, display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "stretch", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <div className="sc-host-x" style={{ display: 'contents' }}>
              <Btn size="xl">
                Make My Free Card
              </Btn>
            </div>
            {" "}
            <div className="sc-host-x" style={{ display: 'contents' }}>
              <Btn variant="outline" size="xl" {...v.inkBtnProps}>
                Browse The Rack
              </Btn>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ animation: v.mBAnim3, position: "relative", height: "244px", overflow: "hidden", flexShrink: "0", alignSelf: "stretch", background: "var(--hs-well)" }}>
          {" "}
          <img style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% center", display: "block" }} src="uploads/ChatGPT-Image-Aug-13,-2026,-03_46_10-AM 5.png" alt="Printed HeartStamp cards collage" />
          {" "}
          <img style={{ position: "absolute", left: "-18px", top: "-12px", width: "132px", display: "block", pointerEvents: "none" }} src="uploads/2.png" alt="" />
          {" "}
          <img style={{ position: "absolute", left: "16px", bottom: "-8px", width: "218px", display: "block", pointerEvents: "none" }} src="uploads/3.png" alt="" />
          {" "}
          <div className={cx("m-slidenext", hv("background: rgba(255,255,255,0.45);"))} style={{ position: "absolute", zIndex: "2", right: "16px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={v.nextSlide} title="Next slide">
            {" "}{v.ringEl}{" "}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-on-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={"m-hero1"} style={{ position: "absolute", inset: "0", margin: "0", opacity: v.slideCOpacity, pointerEvents: v.slideCPointer, transition: "opacity 0.55s ease", background: "var(--color-bg-main)", border: "1px solid var(--color-element-subtle)", borderRadius: "var(--radius-2xl)", overflow: "hidden", flexDirection: "column", gap: "var(--space-6)", padding: "0", alignItems: "flex-start", boxSizing: "border-box" }} data-screen-label="Hero mobile 3">
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6) var(--space-6) 0", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexGrow: "1", alignSelf: "stretch" }}>
          {" "}
          <div style={{ animation: v.mCAnim1, display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "stretch", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "32px", lineHeight: "1.16", letterSpacing: "-0.03em", textAlign: "center", color: "var(--color-text-primary)", textWrap: "pretty" }}>
              Real cards, sent from your couch. Or the beach.
            </h2>
            {" "}
            <p style={{ margin: "0", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", textAlign: "center", color: "var(--color-text-secondary)", textWrap: "pretty" }}>
              Everything lives in the HeartStamp app: tell Stampy the moment, get a custom card in minutes, and we post it for you. No desk, no laptop, no waiting.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ animation: v.mCAnim2, display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "center", flexShrink: "0", alignSelf: "stretch" }}>
            {" "}
            <a className={cx(hv("background: var(--hs-band-hover);"), act("background: var(--color-brand-secondary-pressed);"))} style={{ display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", width: "213px", height: "56px", background: "#000000", border: "1.5px solid rgb(166,166,166)", borderRadius: "var(--radius-xl)", padding: "0 var(--space-5)", boxSizing: "border-box", textDecoration: "none", transition: "background 150ms ease" }} href="https://#">
              {" "}
              <svg style={{ flexShrink: "0" }} width="29" height="35" viewBox="0 0 38.399 47.197" fill="var(--color-text-on-primary)">
                <g transform="translate(0,11.386)">
                  <path d="M 32.072 13.714 C 32.018 7.752 36.954 4.851 37.18 4.716 C 34.384 0.64 30.052 0.083 28.529 0.039 C 24.89 -0.344 21.36 2.216 19.507 2.216 C 17.616 2.216 14.761 0.076 11.685 0.139 C 7.726 0.2 4.022 2.492 1.991 6.052 C -2.201 13.309 0.925 23.974 4.942 29.841 C 6.951 32.714 9.298 35.922 12.371 35.809 C 15.377 35.685 16.5 33.892 20.128 33.892 C 23.723 33.892 24.777 35.809 27.911 35.737 C 31.138 35.685 33.169 32.851 35.108 29.952 C 37.429 26.659 38.362 23.416 38.399 23.249 C 38.323 23.223 32.133 20.861 32.072 13.714 Z" />
                </g>
                <g transform="translate(19.078,0)">
                  <path d="M 7.07 7.565 C 8.687 5.543 9.793 2.792 9.486 0 C 7.146 0.104 4.219 1.619 2.534 3.596 C 1.043 5.339 -0.289 8.195 0.055 10.882 C 2.684 11.078 5.383 9.555 7.07 7.565 Z" />
                </g>
              </svg>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)", alignItems: "flex-start" }}>
                {" "}
                <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "500", fontSize: "11px", lineHeight: "1", color: "var(--color-text-on-primary)" }}>
                  Download on the
                </span>
                {" "}
                <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "600", fontSize: "22px", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--color-text-on-primary)" }}>
                  App Store
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
        <div style={{ animation: v.mCAnim3, position: "relative", height: "244px", overflow: "hidden", flexShrink: "0", alignSelf: "stretch", background: "var(--hs-n7)" }}>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "0", width: "1200px", height: "483px", transform: "scale(0.505)", transformOrigin: "top right" }}>
            {" "}
            <div style={{ position: "absolute", right: "314px", top: "-16px", width: "86px", height: "86px", animation: v.slideCT1 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 5.4s ease-in-out -0.6s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(-18deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>🎓</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "179px", top: "-34px", width: "86px", height: "86px", animation: v.slideCT2 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 6.2s ease-in-out -2.1s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(8deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>🎃</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "34px", top: "-28px", width: "86px", height: "86px", animation: v.slideCT3 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 5.8s ease-in-out -3.4s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(-6deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>🌲</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "422px", top: "66px", width: "86px", height: "86px", animation: v.slideCT4 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 6.6s ease-in-out -1.5s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(10deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>💝</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "498px", top: "168px", width: "86px", height: "86px", animation: v.slideCT5 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 5.1s ease-in-out -4.2s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(-14deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>💍</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "526px", top: "300px", width: "86px", height: "86px", animation: v.slideCT6 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 6s ease-in-out -2.8s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(4deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>🎂</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "520px", top: "412px", width: "86px", height: "86px", animation: v.slideCT7 }}>
              <div style={{ width: "100%", height: "100%", animation: "hs-float-y 5.6s ease-in-out -0.9s infinite alternate" }}>
                <div style={{ width: "86px", height: "86px", borderRadius: "16px", background: "var(--color-bg-main)", boxShadow: "var(--shadow-sm)", transform: "rotate(-8deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "var(--font-size-h2)", lineHeight: "1" }}>🦃</span>
                </div>
              </div>
            </div>
            {" "}
            <div style={{ position: "absolute", right: "138px", top: "124px", width: "267px", height: "534px", animation: v.slideCPhoneAnim }}>
              {" "}
              <div style={{ width: "100%", height: "100%", background: "url('assets/hero3-phone.png') 49.922% 50.208% / 490.909% 245.455% no-repeat", boxShadow: "0px 8px 24px 0px rgba(0,0,0,0.15)" }} />
              {" "}
            </div>
            {" "}
            <div style={{ position: "absolute", right: "370px", top: "154px", width: "114px", animation: v.slideCCard1Anim }}>
              {" "}
              <div style={{ animation: "hs-float-y 6.4s ease-in-out -3.1s infinite alternate" }}>
                {" "}
                <div style={{ width: "114px", height: "128.5px", transform: "rotate(10deg)", borderRadius: "var(--radius-3xl)", background: "var(--color-bg-main)", border: "1px solid rgba(163,45,45,0.2)", display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4) var(--space-3) var(--space-3) var(--space-3)", alignItems: "flex-start", boxSizing: "border-box" }}>
                  {" "}
                  <div style={{ width: "24px", height: "24px", background: "var(--color-brand-primary)", WebkitMask: "url('assets/hero3-printed.svg') center / contain no-repeat", mask: "url('assets/hero3-printed.svg') center / contain no-repeat" }} />
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start" }}>
                    {" "}
                    <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "700", fontSize: "var(--font-size-body-13)", lineHeight: "1", whiteSpace: "nowrap", color: "var(--color-text-primary)" }}>
                      Printed Card
                    </span>
                    {" "}
                    <span style={{ width: "92px", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-label-12)", lineHeight: "18px", color: "var(--color-text-secondary)" }}>
                      Print & deliver from $3.99
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
            <div style={{ position: "absolute", right: "61px", top: "305px", width: "110px", animation: v.slideCCard2Anim }}>
              {" "}
              <div style={{ animation: "hs-float-y 5.9s ease-in-out -1.8s infinite alternate" }}>
                {" "}
                <div style={{ width: "110px", height: "128.5px", transform: "rotate(-10deg)", borderRadius: "var(--radius-3xl)", background: "var(--color-bg-main)", border: "1px solid rgba(0,122,255,0.2)", boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4) var(--space-3) var(--space-3) var(--space-3)", alignItems: "flex-start", boxSizing: "border-box" }}>
                  {" "}
                  <div style={{ width: "20px", height: "24px", background: "rgb(135,55,219)", WebkitMask: "url('assets/hero3-digital.svg') center / contain no-repeat", mask: "url('assets/hero3-digital.svg') center / contain no-repeat" }} />
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "flex-start" }}>
                    {" "}
                    <span style={{ fontFamily: "var(--font-family-body)", fontWeight: "700", fontSize: "var(--font-size-body-13)", lineHeight: "1", whiteSpace: "nowrap", color: "var(--color-text-primary)" }}>
                      Digital Card
                    </span>
                    {" "}
                    <span style={{ width: "82px", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "var(--font-size-label-12)", lineHeight: "18px", color: "var(--color-text-secondary)" }}>
                      Send digital card link instantly
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
          <div className={cx("m-slidenext", hv("background: rgba(var(--hs-ink),0.3);"))} style={{ position: "absolute", zIndex: "3", right: "16px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "var(--radius-full)", background: "rgba(var(--hs-ink),0.18)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={v.nextSlide} title="Next slide">
            {" "}{v.ringEl}{" "}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-on-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
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
