import 'react';

/* The v5.7 markup drives several effects through CSS custom properties set
   inline (`--hs-g` on the bottom glass, `--fx-x` / `--fx-s` on the scaled
   device cells), and uses one non-standard vendor property. React applies both
   at runtime; only its CSSProperties type is narrower than the DOM. */
declare module 'react' {
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number | undefined;
    WebkitUserDrag?: 'none' | 'auto' | 'element';
  }

  /* The hero video carries fetchpriority="high". React's types only offer
     fetchPriority on img/link/script, but React emits the attribute for any
     element, which is what the canvas build rendered. */
  interface VideoHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}
