/* Command-K spotlight search overlay
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, hv, toArray } from '../lib/dc';

export function Spotlight(v: V) {
  return (
    <>
    {v.sp?.isOpen ? (
      <>
        {" "}
        <div style={{ position: "fixed", inset: "0", zIndex: "9600", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "10vh var(--space-4) var(--space-10)", background: "rgba(var(--hs-ink),0.30)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", animation: "hsin 0.16s ease both" }} data-m="spotwrap" onClick={v.sp?.close}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", width: "min(780px, 100%)", maxHeight: "78vh", background: "var(--color-bg-main)", border: "1px solid var(--color-element-subtle)", borderRadius: "26px", boxShadow: "0 40px 90px rgba(var(--hs-ink),0.28), 0 2px 8px rgba(var(--hs-ink),0.08)", overflow: "hidden", animation: "hsspot 0.24s cubic-bezier(0.2, 0.9, 0.3, 1) both" }} data-m="spotpanel" onClick={v.sp?.stop}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3-5)", height: "74px", padding: "0 22px", flex: "none" }}>
              {" "}
              <svg style={{ flex: "none" }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--hs-ink),0.45)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              {" "}
              <div style={{ position: "relative", flex: "1", minWidth: "0", display: "flex", alignItems: "center" }}>
                {" "}
                <input style={{ width: "100%", border: "0", outline: "none", background: "transparent", font: "400 21px/1.3 var(--font-family-body)", color: "var(--color-text-primary)", padding: "0" }} id="hs-spot" value={v.sp?.q} onChange={v.sp?.type} onKeyDown={v.sp?.key} />
                {" "}
                {v.sp?.empty ? (
                  <>
                    <span style={{ position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", whiteSpace: "nowrap", overflow: "hidden", font: "400 21px/1.3 var(--font-family-body)", color: "rgba(var(--hs-ink),0.34)" }}>
                      {v.sp?.ghost}
                    </span>
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              {v.sp?.hasLang ? (
                <>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1-5)", flex: "none", height: "26px", padding: "0 var(--space-2-5)", borderRadius: "var(--radius-full)", background: "rgba(190,29,44,0.08)", font: "600 12px var(--font-family-body)", color: "var(--color-brand-primary)", animation: "hsin 0.2s ease both" }}>
                    {v.sp?.langLabel}
                  </span>
                </>
              ) : null}
              {" "}
              <span style={{ display: "inline-flex", alignItems: "center", flex: "none", height: "24px", padding: "0 var(--space-2)", border: "1px solid rgba(var(--hs-ink),0.14)", borderRadius: "var(--radius-sm)", font: "600 11px var(--font-family-body)", color: "rgba(var(--hs-ink),0.45)" }} data-m="spotesc">
                esc
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", height: "1px", background: "rgba(var(--hs-ink),0.10)", flex: "none", overflow: "hidden" }}>
              {v.sp?.thinking ? (
                <>
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(190,29,44,0), var(--color-brand-primary), rgba(190,29,44,0))", backgroundSize: "50% 100%", animation: "hsshim 1.1s linear infinite" }} />
                </>
              ) : null}
            </div>
            {" "}
            <div className={"hsx"} style={{ flex: "1", minHeight: "0", overflowY: "auto" }}>
              {" "}
              {v.sp?.isRest ? (
                <>
                  {" "}
                  <div style={{ padding: "18px 22px var(--space-2)" }}>
                    {" "}
                    <p style={{ margin: "0 0 var(--space-2-5)", font: "700 11px var(--font-family-body)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(var(--hs-ink),0.45)" }}>
                      Ask in your language
                    </p>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)" }}>
                      {" "}
                      {toArray(v.sp?.examples).map((ex: any, $index: number) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <button className={hv("background: var(--color-bg-muted);")} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", width: "100%", height: "44px", padding: "0 var(--space-2-5)", border: "0", borderRadius: "var(--radius-xl)", background: "transparent", cursor: "pointer", textAlign: "left" }} type="button" onClick={ex?.go}>
                            {" "}
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", width: "34px", height: "22px", borderRadius: "5px", background: "var(--color-bg-muted)", font: "700 10px var(--font-family-body)", letterSpacing: "0.06em", color: "rgba(var(--hs-ink),0.55)" }}>
                              {ex?.code}
                            </span>
                            {" "}
                            <span style={{ flex: "1", minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", font: "400 15px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                              {ex?.text}
                            </span>
                            {" "}
                            <svg style={{ flex: "none" }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--hs-ink),0.35)" strokeWidth="2" strokeLinecap="round">
                              <path d="M7 17 17 7" />
                              <path d="M9 7h8v8" />
                            </svg>
                            {" "}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ height: "1px", margin: "var(--space-2-5) 22px 0", background: "var(--color-state-pressed)" }} />
                  {" "}
                  <div style={{ padding: "var(--space-3-5) 22px 18px" }}>
                    {" "}
                    <p style={{ margin: "0 0 var(--space-2)", font: "700 11px var(--font-family-body)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(var(--hs-ink),0.45)" }}>
                      Stampy can
                    </p>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)" }}>
                      {" "}
                      {toArray(v.sp?.skills).map((sk: any, $index: number) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <button className={hv("background: var(--color-bg-muted);")} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", width: "100%", padding: "9px var(--space-2-5)", border: "0", borderRadius: "var(--radius-xl)", background: "transparent", cursor: "pointer", textAlign: "left" }} type="button" onClick={sk?.go}>
                            {" "}
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", width: "26px", height: "26px", borderRadius: "var(--radius-full)", background: "rgba(190,29,44,0.08)", font: "700 12px var(--font-family-body)", color: "var(--color-brand-primary)" }}>
                              {sk?.n}
                            </span>
                            {" "}
                            <span style={{ display: "flex", flexDirection: "column", gap: "1px", flex: "1", minWidth: "0" }}>
                              {" "}
                              <span style={{ font: "500 14px var(--font-family-body)", color: "var(--color-text-primary)", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                                {sk?.title}
                              </span>
                              {" "}
                              <span style={{ font: "400 12px var(--font-family-body)", color: "rgba(var(--hs-ink),0.50)", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                                {sk?.sub}
                              </span>
                              {" "}
                            </span>
                            {" "}
                            <span style={{ flex: "none", font: "600 11px var(--font-family-body)", color: "rgba(var(--hs-ink),0.40)" }}>
                              Try it
                            </span>
                            {" "}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
              {v.sp?.isRes ? (
                <>
                  {" "}
                  <div style={{ padding: "var(--space-5) 22px var(--space-2)", animation: "hsrise 0.22s ease both" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)", flexWrap: "wrap" }}>
                      {" "}
                      <span style={{ font: "700 11px var(--font-family-body)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(var(--hs-ink),0.45)" }}>
                        {v.sp?.tReading}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "var(--font-family-heading)", fontSize: "17px", fontWeight: "600", color: "var(--color-text-primary)" }}>
                        {v.sp?.phrase}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div className={"hs-chiprow"} style={{ display: "flex", flexWrap: "nowrap", gap: "var(--space-2)", marginTop: "var(--space-3-5)", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", scrollSnapType: "x proximity" }}>
                      {" "}
                      {toArray(v.sp?.chips).map((ch: any, $index: number) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <span style={{ display: "inline-flex", flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", alignItems: "center", gap: "7px", height: "28px", padding: "0 var(--space-2) 0 11px", border: `1px solid ${ch?.bcolor ?? ""}`, borderRadius: "var(--radius-full)", background: ch?.bg, font: "500 13px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                            {" "}
                            <span style={{ color: "rgba(var(--hs-ink),0.45)", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                              {ch?.cat}
                            </span>
                            {ch?.val}{" "}
                            <button className={hv("background: rgba(var(--hs-ink),0.16);")} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "17px", height: "17px", border: "0", borderRadius: "var(--radius-full)", background: "rgba(var(--hs-ink),0.07)", cursor: "pointer", color: "rgba(var(--hs-ink),0.6)", font: "600 11px var(--font-family-body)", lineHeight: "1" }} type="button" onClick={ch?.remove} aria-label="Remove">
                              ✕
                            </button>
                            {" "}
                          </span>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  {v.sp?.hasQ ? (
                    <>
                      {" "}
                      <div style={{ margin: "18px 22px 0", padding: "var(--space-3-5) var(--space-4)", border: "1px solid rgba(190,29,44,0.18)", borderRadius: "var(--radius-3xl)", background: "rgba(190,29,44,0.04)", animation: "hsrise 0.24s ease both" }}>
                        {" "}
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2-5)" }}>
                          {" "}
                          <img style={{ width: "26px", height: "26px", flex: "none", objectFit: "contain" }} src="assets/mascot/rosey.png" alt="Stampy" />
                          {" "}
                          <span style={{ flex: "1", minWidth: "0", font: "500 14px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                            {v.sp?.qText}
                          </span>
                          {" "}
                          <button className={hv("color: var(--color-text-primary);")} style={{ flex: "none", border: "0", background: "transparent", cursor: "pointer", font: "500 12px var(--font-family-body)", color: "rgba(var(--hs-ink),0.45)" }} type="button" onClick={v.sp?.qSkip}>
                            {v.sp?.tSkip}
                          </button>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1-5)", margin: "var(--space-2-5) 0 0 36px" }}>
                          {" "}
                          {toArray(v.sp?.qOpts).map((o: any, $index: number) => (
                            <React.Fragment key={$index}>
                              {" "}
                              <button className={hv("border-color: var(--color-brand-primary); color: var(--color-brand-primary);")} style={{ height: "30px", padding: "0 var(--space-3)", border: "1px solid rgba(var(--hs-ink),0.16)", borderRadius: "var(--radius-full)", background: "var(--color-bg-main)", cursor: "pointer", font: "500 13px var(--font-family-body)", color: "var(--color-text-primary)" }} type="button" onClick={o?.pick}>
                                {o?.label}
                              </button>
                              {" "}
                            </React.Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)", padding: "var(--space-7) 22px var(--space-3)" }}>
                    {" "}
                    <span style={{ font: "700 11px var(--font-family-body)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(var(--hs-ink),0.45)" }}>
                      {v.sp?.matchLabel}
                    </span>
                    {" "}
                    <button className={hv("opacity: 0.8;")} style={{ display: "inline-flex", alignItems: "center", gap: "5px", border: "0", background: "transparent", cursor: "pointer", font: "600 13px var(--font-family-body)", color: "var(--color-brand-primary)", padding: "0" }} type="button" onClick={v.sp?.viewMore}>
                      {v.sp?.tViewAll}{" "}{v.sp?.count}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    {" "}
                  </div>
                  {" "}
                  <div className={"hsx"} style={{ display: "flex", gap: "var(--space-3-5)", padding: "var(--space-0-5) 22px var(--space-2)", overflowX: "auto", overflowAnchor: "none", scrollPaddingLeft: "22px", scrollSnapType: "x proximity" }} data-m="spotcar">
                    {" "}
                    {toArray(v.sp?.cards).map((c: any, $index: number) => (
                      <React.Fragment key={$index}>
                        {" "}
                        <button className={hv("opacity: 0.92;")} style={{ display: "flex", flex: "none", width: "132px", padding: "0", border: "0", background: "transparent", cursor: "pointer", scrollSnapAlign: "start" }} type="button" onClick={c?.go}>
                          {" "}
                          <div style={{ width: "132px", aspectRatio: "227/340", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-editor)", border: "1px solid rgba(var(--hs-ink),0.08)" }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} data-lazysrc={c?.img} alt="" />
                          </div>
                          {" "}
                        </button>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                    <button className={hv("border-color: var(--color-brand-primary); color: var(--color-brand-primary);")} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-1-5)", flex: "none", width: "132px", aspectRatio: "227/340", border: "1px dashed rgba(var(--hs-ink),0.22)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-muted)", cursor: "pointer" }} type="button" onClick={v.sp?.viewMore}>
                      {" "}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      {" "}
                      <span style={{ font: "600 12px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                        {v.sp?.tViewAll}{" "}{v.sp?.count}
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ height: "1px", margin: "var(--space-6) 22px 0", background: "var(--color-state-pressed)" }} />
                  {" "}
                  <div style={{ padding: "var(--space-5) 22px var(--space-1)" }}>
                    {" "}
                    <p style={{ margin: "0 0 var(--space-2-5)", font: "700 11px var(--font-family-body)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(var(--hs-ink),0.45)" }}>
                      {v.sp?.tJump}
                    </p>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                      {" "}
                      {toArray(v.sp?.cols).map((col: any, $index: number) => (
                        <React.Fragment key={$index}>
                          {" "}
                          <button style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", width: "100%", height: "48px", padding: "0 var(--space-2-5)", border: "0", borderRadius: "var(--radius-xl)", background: col?.bg, cursor: "pointer", textAlign: "left" }} type="button" onClick={col?.go} onMouseEnter={col?.enter}>
                            {" "}
                            <img style={{ width: "30px", height: "30px", flex: "none", borderRadius: "var(--radius-sm)", objectFit: "cover" }} data-lazysrc={col?.img} alt="" />
                            {" "}
                            <span style={{ flex: "1", minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", font: "500 14px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                              {col?.name}
                            </span>
                            {" "}
                            <span style={{ flex: "none", font: "400 13px var(--font-family-body)", color: "rgba(var(--hs-ink),0.45)" }}>
                              {col?.sub}
                            </span>
                            {" "}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                      <button style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", width: "100%", height: "48px", padding: "0 var(--space-2-5)", border: "0", borderRadius: "var(--radius-xl)", background: v.sp?.makeBg, cursor: "pointer", textAlign: "left" }} type="button" onClick={v.sp?.makeGo} onMouseEnter={v.sp?.makeEnter}>
                        {" "}
                        <img style={{ width: "30px", height: "30px", flex: "none", objectFit: "contain" }} src="assets/mascot/rosey.png" alt="" />
                        {" "}
                        <span style={{ flex: "1", minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", font: "500 14px var(--font-family-body)", color: "var(--color-text-primary)" }}>
                          {v.sp?.makeLabel}
                        </span>
                        {" "}
                        <span style={{ flex: "none", font: "400 13px var(--font-family-body)", color: "rgba(var(--hs-ink),0.45)" }}>
                          {v.sp?.makeSub}
                        </span>
                        {" "}
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ height: "22px" }} />
                  {" "}
                </>
              ) : null}
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)", height: "44px", padding: "0 18px", flex: "none", borderTop: "1px solid rgba(var(--hs-ink),0.08)", background: "var(--color-bg-muted)" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3-5)", font: "500 11px var(--font-family-body)", color: "rgba(var(--hs-ink),0.50)" }}>
                {" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>{v.sp?.tMove}</span>
                {" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>{v.sp?.tEnter}</span>
                {" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>{v.sp?.tEsc}</span>
                {" "}
              </div>
              {" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1-5)", font: "500 11px var(--font-family-body)", color: "rgba(var(--hs-ink),0.50)" }}>
                <img style={{ width: "12px", height: "12px" }} src="assets/emblem-brand.svg" alt="" />
                {v.sp?.tBy}
              </span>
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
