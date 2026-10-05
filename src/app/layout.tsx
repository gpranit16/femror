import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Fermor — See your money clearly. Then make it move.',
  description: 'Understand where your money stands, model financial decisions, track investments, and grow your wealth with clarity. Built for India.',
  keywords: [
    'personal finance India',
    'SIP calculator',
    'mutual funds India',
    'financial health check',
    'Nifty 50 tracking',
    'FIRE calculator',
    'wealth planning',
    'Indian tax regime comparison',
  ],
  authors: [{ name: 'Fermor Design & Engineering' }],
  creator: 'Fermor',
  metadataBase: new URL('https://fermor.in'),
  openGraph: {
    title: 'Fermor — See your money clearly. Then make it move.',
    description: 'Understand where you stand, what your money is doing, and what your next financial decision could look like.',
    url: 'https://fermor.in',
    siteName: 'Fermor',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fermor — Smart financial decisions for India',
    description: 'Free calculators, portfolio clarity, and mathematical forecasting for Indian personal finance.',
    creator: '@fermor_in',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body 
        suppressHydrationWarning
        className="min-h-screen bg-[var(--surface)] text-[var(--ink)] font-sans antialiased selection:bg-[var(--mint-soft)] selection:text-[var(--forest)]"
      >
        {children}
      </body>
    </html>
  );
}
