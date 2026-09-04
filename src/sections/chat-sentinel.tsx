/* 115vh sentinel that arms the Stampy chat reveal
   Ported verbatim from `HeartStamp Home v5.7.dc.html`. */
import { type V } from '../lib/dc';

export function ChatSentinel(v: V) {
  return (
    <>
    <div style={{ position: "absolute", left: "0", top: "0", width: "1px", height: "115vh", pointerEvents: "none" }} ref={v.chatSentinelRef} />
    </>
  );
}
