/* Type the feeling, watch a prompt become art
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function PromptToArt(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", boxSizing: "border-box", padding: "var(--space-6) 0 60px", display: "flex", flexDirection: "column", alignItems: "center", opacity: "1", animation: v.promptAnim, paddingBottom: "var(--space-0)" }} ref={v.promptRef}>
      {" "}
      <div className={"m-band"} style={{ width: "var(--hs-grid, 1200px)", height: "388px", boxSizing: "border-box", overflow: "hidden", background: "url(assets/prompt/band.png) center / cover no-repeat", padding: "var(--space-12) var(--space-10)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        {" "}
        <div style={{ width: "498px", flex: "0 1 498px", minWidth: "0", display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
          {" "}
          <span style={{ width: "498px", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "30px", lineHeight: "40px", color: "var(--hs-band-ink)" }}>
            Type the feeling.
            <br />
            We’ll draw the rest.
          </span>
          {" "}
          <span style={{ width: "430px", fontFamily: "var(--font-family-body)", fontWeight: "500", fontSize: "16px", lineHeight: "1.5", color: "var(--hs-band-ink)" }}>
            Watch a prompt become a card. Pick a moment to see how Stampy reads between the lines.
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ width: "524px", minHeight: "174px", boxSizing: "border-box", paddingRight: "var(--space-12)", flex: "0 1 524px", minWidth: "0", display: "flex", flexDirection: "column", gap: "var(--space-2)", justifyContent: "flex-start", alignItems: "flex-start" }}>
          {" "}
          <div style={{ alignSelf: "stretch", minHeight: "128px", boxSizing: "border-box", borderRadius: "var(--radius-2xl)", background: "var(--color-bg-main)", boxShadow: "0 1px 3px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(var(--hs-ink),0.06)", padding: "var(--space-3)", cursor: "text", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }} onClick={v.prompt?.shellClick}>
            {" "}
            <div style={{ alignSelf: "stretch", minHeight: "20px", boxSizing: "border-box", padding: "0 var(--space-1-5)", display: "flex", flexDirection: "row", gap: "var(--space-2-5)", alignItems: "flex-start" }}>
              {" "}
              <svg style={{ flex: "none", transformOrigin: "50% 50%", animation: "hs-pump 3.2s ease-in-out infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
              {" "}
              <div style={{ position: "relative", flex: "1", minWidth: "0", minHeight: "20px" }}>
                {" "}
                <span style={{ position: "absolute", left: "0", top: "0", right: "0", display: v.prompt?.hintDisplay, fontFamily: "var(--font-family-body)", fontWeight: "400", fontSize: "16px", lineHeight: "20px", color: "var(--color-text-secondary)", whiteSpace: "normal", overflowWrap: "break-word", pointerEvents: "none" }}>
                  {v.typedPrompt}
                  <span style={{ display: "inline-block", width: "1px", height: "15px", marginLeft: "var(--space-0-5)", background: "var(--color-text-secondary)", animation: "hs-caret 1s steps(1, end) infinite" }} />
                </span>
                {" "}
                <textarea style={{ width: "100%", minHeight: "20px", maxHeight: "60px", boxSizing: "border-box", border: "0", padding: "0", margin: "0", background: "transparent", outline: "none", resize: "none", overflowY: "auto", overflowWrap: "break-word", wordBreak: "break-word", whiteSpace: "pre-wrap", display: "block", fontFamily: "var(--font-family-body)", fontWeight: "400", fontSize: "16px", lineHeight: "20px", color: "var(--color-text-primary)" }} rows={1} value={v.prompt?.value} onFocus={v.prompt?.focus} onBlur={v.prompt?.blur} onChange={v.prompt?.change} aria-label="Ask, search or create your card" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ alignSelf: "stretch", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
              {" "}
              <button className={hv("background: rgba(var(--hs-ink),0.12);")} style={{ height: "32px", boxSizing: "border-box", padding: "var(--space-1-5) var(--space-2)", gap: "var(--space-1-5)", flex: "none", border: "0", borderRadius: "100px", background: "var(--color-state-hover)", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" aria-label="Add reference image">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <path d="M16 5h6" />
                  <path d="M19 2v6" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </button>
              {" "}
              <div style={{ width: "68px", height: "32px", flex: "none", display: "flex", flexDirection: "row", gap: "var(--space-1)", alignItems: "center" }}>
                {" "}
                <button className={hv("background: rgba(var(--hs-ink),0.12);")} style={{ height: "32px", boxSizing: "border-box", padding: "var(--space-1-5) var(--space-2)", gap: "var(--space-1-5)", flex: "none", border: "0", borderRadius: "100px", background: "var(--color-state-hover)", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" aria-label="Voice input">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19v3" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <rect x="9" y="2" width="6" height="13" rx="3" />
                  </svg>
                </button>
                {" "}
                <button className={hv("opacity: 0.9;")} style={{ width: "32px", height: "32px", flex: "none", boxSizing: "border-box", border: "0", borderRadius: "20px", background: v.prompt?.sendBg, padding: "var(--space-2-5)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: v.prompt?.sendColor, transition: "background 0.2s ease, color 0.2s ease" }} type="button" aria-label="Send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                </button>
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
