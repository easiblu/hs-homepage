/* Why we are different, nine-cell grid
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { Btn } from '@heartstampxo/design-system/hs';
import { type V } from '../lib/dc';

export function WhyDifferent(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", boxSizing: "border-box", padding: "56px 0 68px", display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center" }} ref={v.diffRef}>
      {" "}
      <div className={"m-in20"} style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
        {" "}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-12)", alignItems: "center" }}>
          {" "}
          <div style={{ width: "518px", display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "center" }} data-reveal-stagger="">
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "500", fontSize: "16px", lineHeight: "100%", textAlign: "center", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>
              Why We Are different
            </span>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h2)", lineHeight: "1.1", textAlign: "center", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              Anything but off-the-shelf
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ alignSelf: "stretch", display: "grid", gridTemplateColumns: "repeat(3, 384px)", rowGap: "72px", columnGap: "var(--space-6)", justifyContent: "center" }} data-reveal-stagger="">
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter1} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT1, color: v.diffIcoC1 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="13" height="13" x="9" y="9" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Customization is free
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Stop sending generic cards. Let Stampy create a one of a kind design in minutes, and we’ll handle the printing.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter2} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT2, color: v.diffIcoC2 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Design your card in minute
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Stop sending generic cards. Stampy creates custom, full-bleed interior designs in minutes.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter3} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT3, color: v.diffIcoC3 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Creative sidekick
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter4} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT4, color: v.diffIcoC4 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="M15 8a3 3 0 1 0-6 0" />
                  <path d="M9 15a4 4 0 0 1 6 0" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Free address book
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter5} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT5, color: v.diffIcoC5 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2" />
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <path d="m22 8-8.6 5.4a2 2 0 0 1-2.2 0L2 8" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Mail to Multi recipients
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter6} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT6, color: v.diffIcoC6 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                RSVP (coming soon)
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter7} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT7, color: v.diffIcoC7 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Special Day Reminder
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter8} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT8, color: v.diffIcoC8 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                500+ Amazing presets
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center", textAlign: "center", padding: "0 var(--space-2)", boxSizing: "border-box" }} onMouseEnter={v.diffEnter9} onMouseLeave={v.diffLeave}>
              {" "}
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-3)", transition: "transform 150ms ease, color 150ms ease", transform: v.diffIcoT9, color: v.diffIcoC9 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                  <rect width="12" height="8" x="6" y="14" rx="1" />
                </svg>
              </div>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-h4)", lineHeight: "100%", color: "var(--color-text-primary)" }}>
                Printing is customizable
              </span>
              {" "}
              <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "400", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
                Have it shipped to you, or let us mail it straight to your recipient. Perfect for Xmas cards.
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ alignSelf: "stretch", height: "148px", boxSizing: "border-box", background: "var(--hs-n15)", padding: "var(--space-8)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} data-reveal="">
          {" "}
          <div style={{ width: "571px", flex: "none", display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-start" }}>
            {" "}
            <span style={{ fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "var(--font-size-subheadline)", lineHeight: "100%", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              №-stamped. One of one. Never reprinted.
            </span>
            {" "}
            <span style={{ alignSelf: "stretch", fontFamily: "var(--font-family-heading)", fontWeight: "300", fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-primary)" }}>
              Every card gets its own serial number — yours is never printed twice. Not for anyone.
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ flex: "none", display: "flex", flexDirection: "row", gap: "var(--space-3)", alignItems: "flex-start" }}>
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
      </div>
      {" "}
    </div>
    </>
  );
}
