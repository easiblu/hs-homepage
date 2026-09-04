/* 12-column layout overlay (showGrid prop)
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import React from 'react';
import { type V, toArray } from '../lib/dc';

export function GridOverlay(v: V) {
  return (
    <>
    {v.showGrid ? (
      <>
        {" "}
        <div style={{ position: "fixed", left: "0", top: "0", right: "0", bottom: "0", zIndex: "9500", pointerEvents: "none", display: "flex", justifyContent: "center" }}>
          {" "}
          <div style={{ width: "var(--hs-grid, 1200px)", height: "100%", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "var(--space-6)", borderLeft: "1px solid rgba(190,29,44,0.4)", borderRight: "1px solid rgba(190,29,44,0.4)" }}>
            {" "}
            {toArray(v.gridCols).map((c: any, $index: number) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ height: "100%", background: "rgba(190,29,44,0.08)" }} />
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
    </>
  );
}
