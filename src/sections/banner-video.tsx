/* Full-bleed video banner with sound toggle
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function BannerVideo(v: V) {
  return (
    <>
    {v.banner?.on ? (
      <>
        {" "}
        <div style={{ position: "fixed", left: "28px", bottom: "28px", zIndex: "8850", width: "226px", opacity: v.banner?.op, transform: v.banner?.shift, transition: "opacity 0.45s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}>
          {" "}
          <div style={{ position: "relative", width: "226px", height: "249px", borderRadius: "16px", overflow: "hidden", background: "#0a0a0a", boxShadow: "0 14px 34px rgba(0,0,0,0.22)" }}>
            {" "}
            <video style={{ position: "absolute", left: "0", bottom: "0", width: "100%", height: "152px", objectFit: "cover", display: "block" }} ref={v.banner?.videoRef} src="uploads/Create_a_captivating_floating.mp4" data-allow-sound="1" autoPlay={true} muted={true} playsInline={true} preload="auto" />
            {" "}
            <button className={hv("background: rgba(255,255,255,0.28);")} style={{ position: "absolute", right: "10px", bottom: "10px", width: "30px", height: "30px", border: "0", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.16)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-on-primary)" }} type="button" onClick={v.banner?.toggleSound} aria-label="Toggle sound">
              {" "}
              {v.banner?.muted ? (
                <>
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                    <path d="m17 9-6 6" />
                    <path d="m11 9 6 6" />
                  </svg>
                  {" "}
                </>
              ) : null}
              {" "}
              {v.banner?.unmuted ? (
                <>
                  {" "}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                    <path d="M16 9a5 5 0 0 1 0 6" />
                    <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                  </svg>
                  {" "}
                </>
              ) : null}
              {" "}
            </button>
            {" "}
            <p style={{ position: "absolute", left: "20px", right: "20px", top: "24px", margin: "0", fontFamily: "var(--font-family-body)", fontWeight: "600", fontSize: "17px", lineHeight: "24px", color: "rgba(255,255,255,0.55)" }}>
              <span style={{ color: "var(--color-text-on-primary)" }}>Keep Calm</span>
              {" "}Let me handle the{" "}
              <span style={{ color: "var(--color-text-on-primary)" }}>design</span>
            </p>
            {" "}
          </div>
          {" "}
          <button className={hv("color: var(--color-text-primary);")} style={{ position: "absolute", right: "-8px", top: "-8px", width: "26px", height: "26px", border: "0", borderRadius: "var(--radius-full)", background: "var(--color-bg-main)", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-secondary)" }} type="button" onClick={v.banner?.close} aria-label="Dismiss">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {" "}
        </div>
        {" "}
      </>
    ) : null}
    </>
  );
}
