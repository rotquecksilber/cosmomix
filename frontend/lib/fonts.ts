import { Jura, Montserrat } from 'next/font/google';

export const jura = Jura({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-jura',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
