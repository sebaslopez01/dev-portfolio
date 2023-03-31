import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-7235SXXVY4" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7235SXXVY4');`}
      </Script>
      <main className={poppins.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
