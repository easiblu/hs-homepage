/* Cards and gifts made easy, SEO copy block
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function SeoCards(v: V) {
  return (
    <>
    <div style={{ alignSelf: "stretch", width: "100%", background: "var(--color-bg-main)", boxSizing: "border-box", borderTop: "1px solid var(--color-element-subtle)", borderBottom: "1px solid var(--color-element-subtle)", padding: "68px 0", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center" }} ref={v.seoRef}>
      {" "}
      <div className={"m-in20"} style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "flex-start" }} data-reveal-stagger="">
        {" "}
        <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h2)", lineHeight: "1.1", textAlign: "center", color: "var(--color-text-primary)" }}>
          Send greetings cards online
        </span>
        {" "}
        <div className={"m-stack"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--space-6)", alignItems: "stretch" }} data-reveal-stagger="">
          {" "}
          <div style={{ flex: "1", boxSizing: "border-box", padding: "var(--space-6) var(--space-6) var(--space-6) 0", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start", paddingBottom: "var(--space-0)", paddingTop: "var(--space-10)" }}>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
              Cards & gifts made easy
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-body)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
              With our reliable next day delivery service even the most last-minute of gifters can make a great impression. Simply order gifts or flowers by 9pm and we’ll deliver them the very next day. For the more organised gifters who like to get ahead of the game, you can order ahead and select a delivery date that suits you. Easy peasy! How about joining HeartStamp Plus where you can enjoy great savings and perks all year? Don’t forget to take a look at our special offers and download our app for even more ways to spread joy.
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ flex: "1", boxSizing: "border-box", padding: "var(--space-6) var(--space-6) var(--space-6) 0", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start", paddingTop: "var(--space-10)" }}>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
              Greeting cards for every occasion
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)", opacity: "0.7" }}>
              At HeartStamp we’ve got greetings cards for every single occasion, including birthday cards, anniversary cards, and thank you cards. We care about all of life’s moments, from the big celebrations, the not-so-happy-moments and everything in between; we’re here for you through all of them.
            </span>
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
