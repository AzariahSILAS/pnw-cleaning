export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

// ✅ Only one global declaration of fbq
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

// ✅ Safely fire PageView
export const pageview = (): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

// ✅ Fire a custom event
export const event = (name: string, options: Record<string, unknown> = {}): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, options);
  }
};

