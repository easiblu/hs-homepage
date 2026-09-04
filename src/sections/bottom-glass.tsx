/* Progressive-blur glass strip pinned to the viewport foot
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function BottomGlass(v: V) {
  return (
    <>
    <div style={{ position: "fixed", left: "0", right: "0", bottom: "0", height: "clamp(100px, calc(20vh - 60px), 180px)", zIndex: "8700", pointerEvents: "none", "--hs-g": "0" }} ref={v.glassRef}>
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "0px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 2.6px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 2.6px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "27px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 5.1px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 5.1px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "53px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 9.9px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 9.9px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "80px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 19.2px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 19.2px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "107px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 37.5px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 37.5px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", left: "0", right: "0", top: "133px", bottom: "0", backdropFilter: "blur(calc(var(--hs-g, 0) * 72px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", WebkitBackdropFilter: "blur(calc(var(--hs-g, 0) * 72px)) saturate(calc(100% + var(--hs-g, 0) * 95%))", maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px)" }} />
      {" "}
      <div style={{ position: "absolute", inset: "0", opacity: "0", background: "linear-gradient(180deg, rgba(var(--hs-veil),0) 0%, rgba(var(--hs-veil),0.06) 55%, rgba(var(--hs-veil),0.22) 100%)" }} ref={v.glassVeilRef} />
      {" "}
    </div>
    </>
  );
}
