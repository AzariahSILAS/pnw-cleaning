// src/lib/fbpixel.ts

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const pageview = (): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

export const event = (
  name: string,
  options: Record<string, unknown> = {}
): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, options);
  }
};
console.log('FB_PIXEL_ID in browser:', FB_PIXEL_ID);
