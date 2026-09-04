/* Bottom tab bar, mobile only, revealed on scroll
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function MobileNav(v: V) {
  return (
    <>
    <nav className={"hs-mnav"} style={{ display: "none" }} role="navigation" aria-label="Primary">
      {" "}
      <button className={"hs-mtab"} style={{ color: v.mnavCol0, background: v.mnavBg0, fontWeight: v.mnavFw0 }} type="button" onClick={v.mnavGo0} aria-current={v.mnavCur0}>
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9.5 14.5c.7.6 1.6 1 2.5 1s1.8-.4 2.5-1" />
        </svg>
        {" "}
        <span>
          <span className={"hs-lblfull"}>For You</span>
          <span className={"hs-lblshort"}>Home</span>
        </span>
        {" "}
      </button>
      {" "}
      <button className={"hs-mtab"} style={{ color: v.mnavCol1, background: v.mnavBg1, fontWeight: v.mnavFw1 }} type="button" onClick={v.mnavGo1} aria-current={v.mnavCur1}>
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88z" />
        </svg>
        {" "}
        <span>Discover</span>
        {" "}
      </button>
      {" "}
      <div className={"hs-stip"} role="button" tabIndex={0} ref={v.stipRef} onClick={v.stipOpen} onKeyDown={v.stipKey} onTouchStart={v.stipDown} onTouchMove={v.stipMove} onTouchEnd={v.stipUp} onTouchCancel={v.stipUp}>
        <span className={"hs-stiptxt"}>Hi, its Stampy, I can help you to design a card</span>
        <svg className={"hs-stiparrow"} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.07107H7.07107H14.1421L8.48528 12.7279C7.70423 13.509 6.4379 13.509 5.65685 12.7279L0 7.07107Z" fill="var(--color-text-primary)" />
        </svg>
        <button style={{ position: "absolute", right: "-6px", top: "-6px", width: "20px", height: "20px", padding: "0", border: "0", borderRadius: "50%", background: "var(--color-bg-main)", boxShadow: "0 1px 4px rgba(var(--hs-ink),0.28)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} type="button" aria-label="Dismiss" onClick={v.stipClose}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      {" "}
      <button className={"hs-mfabwrap"} type="button" onClick={v.stampy?.open} aria-label="Create a card with Stampy">
        {" "}
        <span className={"hs-mhalo"} />
        <span className={"hs-mfab"}><span className={"hs-mfabimg"} /></span>
        {" "}
        <span>Stampy</span>
        {" "}
      </button>
      {" "}
      <button className={"hs-mtab"} style={{ color: v.mnavCol3, background: v.mnavBg3, fontWeight: v.mnavFw3 }} type="button" onClick={v.mnavGo3} aria-current={v.mnavCur3}>
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
          <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        </svg>
        {" "}
        <span>
          <span className={"hs-lblfull"}>My Creation</span>
          <span className={"hs-lblshort"}>Creation</span>
        </span>
        {" "}
      </button>
      {" "}
      <button className={"hs-mtab"} style={{ color: v.mnavCol4, background: v.mnavBg4, fontWeight: v.mnavFw4 }} type="button" onClick={v.mnavGo4} aria-current={v.mnavCur4}>
        {" "}
        <img style={{ width: "20px", height: "20px", borderRadius: "50%", objectFit: "cover" }} src="assets/avatar.png" alt="" />
        {" "}
        <span>Profile</span>
        {" "}
      </button>
      {" "}
    </nav>
    </>
  );
}
