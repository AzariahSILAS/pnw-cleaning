import type { AppProps } from 'next/app';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/lib/fbpixel';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load Facebook Pixel script from Meta */}
      <Script
        id="fb-pixel-loader"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          if (typeof window.fbq === 'undefined') {
            window.fbq = function () {
              (window.fbq as any).callMethod
                ? (window.fbq as any).callMethod.apply(window.fbq, arguments)
                : (window.fbq as any).queue.push(arguments);
            };
            (window.fbq as any).queue = [];
            (window.fbq as any).loaded = true;
            (window.fbq as any).version = '2.0';
            (window.fbq as any).push = window.fbq;
          }

          window.fbq('init', FB_PIXEL_ID);
          window.fbq('track', 'PageView');

          console.log('✅ FB Pixel initialized');
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

