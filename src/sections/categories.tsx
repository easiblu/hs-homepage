/* Explore by category rail
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V, hv } from '../lib/dc';

export function Categories(v: V) {
  return (
    <>
    <div style={{ background: "var(--color-bg-main)", display: "flex", flexDirection: "column", alignItems: "center", padding: "var(--space-10) 0 64px" }} ref={v.catsRef}>
      {" "}
      <div style={{ width: "var(--hs-grid, 1200px)", display: "flex", flexDirection: "column", gap: "var(--space-10)", alignItems: "center" }}>
        {" "}
        <h2 className={"m-h2match"} style={{ margin: "0", fontFamily: "var(--font-family-heading)", fontWeight: "600", fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }} data-reveal="">
          Explore by category
        </h2>
        {" "}
        <div className={"m-chips"} style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }} data-reveal-stagger="">
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593.png" alt="Birthday" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Birthday</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-1.png" alt="Valentine’s Day" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Valentine’s Day</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-2.png" alt="Baby" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Baby</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-3.png" alt="Graduation" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Graduation</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-4.png" alt="Anniversary" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Anniversary</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-5.png" alt="Congrats" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Congrats</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-6.png" alt="Funny" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Funny</span>
            {" "}
          </a>
          {" "}
          <a className={hv("transform: translateY(-5px); filter: drop-shadow(0 8px 14px rgba(var(--hs-ink),0.08));")} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", alignItems: "center", color: "var(--color-text-primary)", willChange: "transform" }} href="#">
            {" "}
            <img style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }} src="uploads/category/Frame 9593-7.png" alt="Multicultural" />
            {" "}
            <span style={{ fontWeight: "500", fontSize: "16px" }}>Multicultural</span>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
}
