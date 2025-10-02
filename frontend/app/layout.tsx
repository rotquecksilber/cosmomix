import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { seoData } from '@/lib/seo';
import Header from '@/components/Header/Header';
import { montserrat } from '@/lib/fonts';
import Footer from '@/components/Footer/Footer';



export const metadata: Metadata = seoData.home;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" >
      <body className={` ${montserrat.variable}`}>
        <Header/>

        {children}
        <Footer />


      </body>
    </html>
  );
}
