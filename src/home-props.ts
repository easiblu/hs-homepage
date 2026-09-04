/* Props for <Home />.

   These are the canvas file's `data-props` editor schema, one for one, and the
   defaults are that schema's defaults — so an unconfigured <Home /> renders
   exactly what the approved v5.7 canvas rendered.

   Two props the behaviour reads are not in the schema and so were always
   undefined on the canvas: `slideDuration` (the logic falls back to 8s) and
   `iosTileIcons`. Both are declared here so callers can set them. */

export type PreviewMode =
  | 'Desktop'
  | 'iPhone SE — 375×667'
  | 'iPhone 12 Pro — 390×844'
  | 'iPhone 14 Pro Max — 430×932'
  | 'Pixel 7 — 412×915'
  | 'Galaxy S8+ — 360×740'
  | 'Narrow — 320';

export interface HomeProps {
  /** Device frame for responsive review. 'Desktop' renders with no frame. */
  previewMode?: PreviewMode;
  /** 12-column layout overlay. */
  showGrid?: boolean;
  showLoader?: boolean;
  preloaderStyle?: 'Two-layer' | 'Counter';
  /** Show the preloader once per browser session rather than on every load. */
  sessionOnce?: boolean;
  exitDirection?: 'Bottom' | 'Top' | 'Left' | 'Right';
  showPromoBar?: boolean;
  showAskStampy?: boolean;
  /** Vimeo id or url for the 3D deal card. Empty falls back to the local mp4. */
  deal3dVideo?: string;
  /** Hero slide dwell time in seconds. Defaults to 8. */
  slideDuration?: number;
  /** Optional icon overrides for the iOS feature tiles. */
  iosTileIcons?: unknown;
}

export const DEFAULT_PROPS: HomeProps = {
  previewMode: 'Desktop',
  showGrid: false,
  showLoader: true,
  preloaderStyle: 'Two-layer',
  sessionOnce: false,
  exitDirection: 'Bottom',
  showPromoBar: true,
  showAskStampy: true,
  deal3dVideo: '',
};
