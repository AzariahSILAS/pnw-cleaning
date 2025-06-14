import type { AppProps } from 'next/app';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/lib/fbpixel';

// Extend the global window object safely


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="fb-pixel-loader"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <Script
        id="fb-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (!window.fbq) {
              window.fbq = function () {
                window.fbq.callMethod
                  ? window.fbq.callMethod.apply(window.fbq, arguments)
                  : window.fbq.queue.push(arguments);
              };
              window.fbq.queue = [];
              window.fbq.loaded = true;
              window.fbq.version = '2.0';
              window.fbq.push = window.fbq;
            }
            window.fbq('init', '${FB_PIXEL_ID}');
            window.fbq('track', 'PageView');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
