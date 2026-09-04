import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import { Home } from './Home';
import { startLazySrc } from './lib/dc';

/* The ported logic reads smooth scroll off `window.Lenis`, the way the canvas
   got it from a CDN script tag. Same library, same pinned version (1.1.13),
   just bundled instead of fetched at runtime. */
declare global {
  interface Window {
    Lenis?: typeof Lenis;
  }
}
window.Lenis = Lenis;

/* Resolves `data-lazysrc` into `src`, the way the canvas head script did.
   Started before mount so the first paint has it. */
startLazySrc();

const host = document.getElementById('dc-root');
if (!host) throw new Error('#dc-root is missing from index.html');

/* No StrictMode: the ported behaviour drives imperative DOM work from
   componentDidMount — observers, rafs, timers, one-shot reveal animations —
   and StrictMode's double invoke in development would run those twice and
   change the motion. */
createRoot(host).render(<Home />);
