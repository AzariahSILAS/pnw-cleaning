import type { AppProps } from 'next/app';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/lib/fbpixel';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load Facebook Pixel script */}
      <Script
        id="fb-pixel-loader"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          if (!window.fbq) {
            const fbq: (...args: unknown[]) => void = function (...args) {
              (window.fbq as any).callMethod
                ? (window.fbq as any).callMethod(...args)
                : (window.fbq as any).queue.push(args);
            };

            fbq.queue = [];
            fbq.loaded = true;
            fbq.version = '2.0';
            fbq.push = fbq;

            window.fbq = fbq;
          }

          window.fbq('init', FB_PIXEL_ID);
          window.fbq('track', 'PageView');

          console.log('✅ Facebook Pixel initialized');
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
