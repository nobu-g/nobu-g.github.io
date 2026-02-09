import "../styles/default.css";
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/media-queries.css";
import type { AppProps } from "next/app";
import { Libre_Baskerville, Noto_Sans_JP, Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const fontRootClassName = `${openSans.variable} ${notoSansJP.variable} ${libreBaskerville.variable} font-root`;

  useEffect(() => {
    if (!GA_ID) {
      return;
    }

    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== "function") {
        return;
      }
      window.gtag("config", GA_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      ) : null}
      <div className={fontRootClassName}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
