import { Jura, Montserrat } from 'next/font/google';

export const jura = Jura({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-jura',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
