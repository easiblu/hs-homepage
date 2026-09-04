/* Glass chat panel: conversations, suggestions, composer
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, hv, toArray } from '../lib/dc';

export function StampyChat(v: V) {
  return (
    <>
    {v.chat?.on ? (
      <>
        {" "}
        <div style={{ position: "fixed", left: v.chat?.left, right: v.chat?.right, bottom: "28px", zIndex: "8900", width: v.chat?.w, maxWidth: "calc(100vw - 32px)", height: "min(533px, calc(100vh - 200px))", boxSizing: "border-box", borderRadius: "22px", overflow: "hidden", transform: v.chat?.shift, boxShadow: "0 28px 70px rgba(var(--hs-ink),0.22), 0 2px 6px rgba(var(--hs-ink),0.08)" }}>
          {" "}
          <div style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "22px", transform: v.chat?.inner, transition: "transform 0.72s cubic-bezier(0.22,1,0.36,1)", background: "linear-gradient(160deg, rgba(var(--hs-surf),0.74) 0%, rgba(var(--hs-surf),0.66) 45%, rgba(var(--hs-surf),0.72) 100%)", backdropFilter: "blur(30px) saturate(140%)", WebkitBackdropFilter: "blur(30px) saturate(140%)", border: "1px solid rgba(var(--hs-surf),0.55)", boxShadow: "inset 0 1px 0 rgba(var(--hs-surf),0.85), inset 0 -1px 0 rgba(var(--hs-surf),0.35)", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "var(--font-family-body)" }}>
            {" "}
            <div style={{ flex: "none", boxSizing: "border-box", padding: "var(--space-3) var(--space-4)", borderBottom: "1px solid var(--color-element-subtle)", display: "flex", flexDirection: "row", gap: "var(--space-4)", alignItems: "center" }}>
              {" "}
              <span style={{ flex: "none", fontWeight: "600", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                Stampy
              </span>
              {" "}
              <div style={{ position: "relative", flex: "1", minWidth: "0" }}>
                {" "}
                <button className={hv("background: rgba(var(--hs-ink),0.10);")} style={{ maxWidth: "180px", height: "32px", boxSizing: "border-box", padding: "0 var(--space-3)", border: "0", borderRadius: "30px", background: "var(--color-state-hover)", display: "inline-flex", gap: "var(--space-2)", alignItems: "center", cursor: "pointer", transition: "background 150ms ease" }} type="button" onClick={v.chat?.toggleMenu}>
                  {" "}
                  <span style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontWeight: "500", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                    {v.chat?.convo}
                  </span>
                  {" "}
                  <svg style={{ flex: "none" }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  {" "}
                </button>
                {" "}
                {v.chat?.menuOn ? (
                  <>
                    {" "}
                    <div style={{ position: "absolute", left: "0", top: "calc(100% + 4px)", zIndex: "50", minWidth: "220px", boxSizing: "border-box", padding: "var(--space-1)", borderRadius: "var(--radius-2xl)", background: "var(--color-bg-main)", boxShadow: "0 12px 32px rgba(var(--hs-ink),0.16), inset 0 0 0 1px var(--color-element-subtle)", display: "flex", flexDirection: "column" }}>
                      {" "}
                      <button className={hv("background: var(--color-state-hover);")} style={{ height: "32px", boxSizing: "border-box", padding: "0 var(--space-3)", border: "0", borderRadius: "var(--radius-sm)", background: "transparent", display: "flex", gap: "var(--space-2)", alignItems: "center", cursor: "pointer", textAlign: "left" }} type="button" onClick={v.chat?.newConvo}>
                        {" "}
                        <svg style={{ flex: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        {" "}
                        <span style={{ fontWeight: "500", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                          New Conversation
                        </span>
                        {" "}
                      </button>
                      {" "}
                      <div style={{ height: "1px", margin: "var(--space-1)", background: "rgba(var(--hs-ink),0.10)" }} />
                      {" "}
                      {toArray(v.chat?.convos).map((c: any, $index: number) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <button className={hv("background: var(--color-state-hover);")} style={{ height: "32px", boxSizing: "border-box", padding: "0 var(--space-3)", border: "0", borderRadius: "var(--radius-sm)", background: c?.bg, display: "flex", alignItems: "center", cursor: "pointer", textAlign: "left" }} type="button" onClick={c?.pick}>
                            {" "}
                            <span style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontWeight: "400", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                              {c?.name}
                            </span>
                            {" "}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              <div style={{ flex: "none", display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                {" "}
                <button className={hv("background: var(--color-state-hover); color: var(--color-text-primary);")} style={{ width: "32px", height: "32px", border: "0", borderRadius: "var(--radius-button)", background: "transparent", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms ease, color 150ms ease" }} type="button" aria-label="Expand">
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <rect x="13" y="11" width="6" height="6" rx="1" />
                  </svg>
                  {" "}
                </button>
                {" "}
                <button className={hv("background: var(--color-state-hover); color: var(--color-text-primary);")} style={{ width: "32px", height: "32px", border: "0", borderRadius: "var(--radius-button)", background: "transparent", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms ease, color 150ms ease" }} type="button" onClick={v.chat?.close} aria-label="Minimize">
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                  {" "}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", display: "flex", flexDirection: "column" }}>
              {" "}
              <div style={{ position: "relative", flex: "none", boxSizing: "border-box", padding: "var(--space-4) var(--space-4) var(--space-3) 60px", display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                {" "}
                <img style={{ position: "absolute", left: "-80px", top: "-8px", width: "150px", height: "135px", objectFit: "contain", pointerEvents: "none", zIndex: "20" }} src="assets/stampy/mascot.webp" alt="" />
                {" "}
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {" "}
                  <span style={{ fontWeight: "400", fontSize: "var(--font-size-h5)", lineHeight: "28px", color: "var(--color-text-primary)" }}>
                    Hi there! I’m Stampy
                  </span>
                  {" "}
                  <span style={{ fontWeight: "400", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-secondary)" }}>
                    Try:{" "}{v.chatTyped}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {v.chat?.sugOn ? (
                <>
                  {" "}
                  <div style={{ flex: "none", position: "sticky", bottom: "0", zIndex: "1", margin: "auto 16px 16px", boxSizing: "border-box", padding: "var(--space-2)", borderRadius: "var(--radius-2xl)", background: "rgba(var(--hs-ink),0.07)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", flexDirection: "column" }}>
                    {" "}
                    <div style={{ boxSizing: "border-box", padding: "var(--space-2)", display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                      {" "}
                      <span style={{ flex: "1", fontWeight: "500", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                        What’s the occasion?
                      </span>
                      {" "}
                      <button className={hv("color: var(--color-text-primary);")} style={{ flex: "none", width: "16px", height: "16px", padding: "0", border: "0", background: "transparent", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" onClick={v.chat?.hideSug} aria-label="Close suggestions">
                        {" "}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                      </button>
                      {" "}
                    </div>
                    {" "}
                    {toArray(v.chat?.sugs).map((s: any, $index: number) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <button className={hv("background: var(--color-state-hover);")} style={{ boxSizing: "border-box", padding: "var(--space-1-5) var(--space-2)", border: "0", borderRadius: "var(--radius-sm)", background: "transparent", display: "flex", gap: "var(--space-2)", alignItems: "center", cursor: "pointer", textAlign: "left", transition: "background 150ms ease" }} type="button" onClick={s?.pick}>
                          {" "}
                          <span style={{ flex: "none", width: "20px", borderRadius: "var(--radius-xs)", background: "rgba(var(--hs-ink),0.10)", fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "var(--color-text-primary)" }}>
                            {s?.n}
                          </span>
                          {" "}
                          <span style={{ flex: "1", fontSize: "14px", lineHeight: "20px", color: "var(--color-text-primary)" }}>
                            {s?.label}
                          </span>
                          {" "}
                        </button>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
            </div>
            {" "}
            <div style={{ flex: "none", margin: "0 var(--space-4) var(--space-4)", boxSizing: "border-box", padding: "var(--space-3) var(--space-2) var(--space-2)", borderRadius: "var(--radius-2xl)", background: "rgba(var(--hs-surf),0.72)", boxShadow: "inset 0 0 0 1px rgba(var(--hs-ink),0.14)", cursor: "text", display: "flex", flexDirection: "column", gap: "var(--space-5)" }} onClick={v.chat?.shellClick}>
              {" "}
              <textarea style={{ width: "100%", boxSizing: "border-box", minHeight: "20px", maxHeight: "96px", padding: "0 var(--space-1-5)", margin: "0", border: "0", background: "transparent", outline: "none", resize: "none", overflowY: "auto", overflowWrap: "break-word", display: "block", fontFamily: "var(--font-family-body)", fontWeight: "400", fontSize: "var(--font-size-body-15)", lineHeight: "20px", color: "var(--color-text-primary)" }} rows={1} value={v.chat?.value} onChange={v.chat?.change} placeholder="Ask, search or create your card" />
              {" "}
              <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", justifyContent: "space-between", alignItems: "flex-end" }}>
                {" "}
                <button className={hv("background: rgba(var(--hs-ink),0.10);")} style={{ height: "32px", boxSizing: "border-box", padding: "var(--space-1-5) var(--space-2)", border: "0", borderRadius: "100px", background: "var(--color-state-hover)", color: "var(--color-text-primary)", display: "flex", gap: "var(--space-1-5)", alignItems: "center", cursor: "pointer", transition: "background 150ms ease" }} type="button">
                  {" "}
                  <svg style={{ flex: "none" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 5h6" />
                    <path d="M19 2v6" />
                    <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                  {" "}
                  <span style={{ fontWeight: "500", fontSize: "var(--font-size-label-12)", lineHeight: "18px", whiteSpace: "nowrap" }}>
                    Add reference images
                  </span>
                  {" "}
                </button>
                {" "}
                <div style={{ flex: "none", display: "flex", gap: "var(--space-1)", alignItems: "center" }}>
                  {" "}
                  <button className={hv("background: var(--color-state-hover);")} style={{ width: "32px", height: "32px", padding: "var(--space-2)", border: "0", borderRadius: "20px", background: "transparent", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms ease" }} type="button" aria-label="Voice input">
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19v3" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <rect x="9" y="2" width="6" height="13" rx="3" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <button style={{ width: "32px", height: "32px", padding: "var(--space-2)", border: "0", borderRadius: "20px", background: v.chat?.sendBg, color: v.chat?.sendColor, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms ease" }} type="button" aria-label="Send">
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                    {" "}
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
      </>
    ) : null}
    </>
  );
}
