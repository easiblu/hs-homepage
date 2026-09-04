/* Floating Stampy button
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function StampyFab(v: V) {
  return (
    <>
    {v.stampy?.fabOn ? (
      <>
        {" "}
        <button className={hv("opacity: 0.9;")} style={{ position: "fixed", right: "28px", bottom: "28px", zIndex: "8800", width: "72px", height: "72px", padding: "0", border: "0", background: "transparent", cursor: "pointer", opacity: v.stampy?.fabOpacity, transform: v.stampy?.fabTransform, transition: "transform 0.62s cubic-bezier(0.2, 0.9, 0.24, 1), opacity 0.4s ease" }} type="button" onClick={v.stampy?.open} aria-label="Ask Stampy AI">
          {" "}
          <img style={{ width: "72px", height: "72px", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.22))" }} src="assets/mascot/expr-rosey.png" alt="" ref={v.stampy?.faceRef} />
          {" "}
        </button>
        {" "}
      </>
    ) : null}
    </>
  );
}
