import './globals.css';
import React from 'react';
import Script from 'next/script';

import Header from '@/components/Header/Header';
import { montserrat } from '@/lib/fonts';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';


export const metadata: Metadata = seoData.home;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/*Icons*/}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="manifest" href="/site.webmanifest"/>
        {/* ✅ Google tag (gtag.js)*/}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-08GTJVQYZ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-08GTJVQYZ7');
          `}
        </Script>

        {/* ✅ Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) return;
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104649880', 'ym');

            ym(104649880, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
      </head>
      <body className={montserrat.variable}>

        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
