// src/app/layout.tsx

import SupportUkraineBanner from "react-support-ukraine-banner";
import { TrackingHeadScript } from '@phntms/next-gtm';
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";


const font = Mulish({ subsets: ["latin"] });


// TODO: Default metadata
export const metadata: Metadata = {
  title: `Vasilkoff Ltd - Full-stack Web & Mobile mobile apps and web-development Services`,
  description: `Vasilkoff Ltd - Full-stack Web & Mobile mobile apps and web-development Services.`,
  openGraph: {
    images: [],
  },
  creator: 'Maksym Vasylkov',
  publisher: 'Vasilkoff Ltd',
  metadataBase: new URL('https://vasilkoff.com'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/browserconfig.xml"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <TrackingHeadScript id={"GTM-KQHMWKC"} />
      </head>
      <body className={font.className}>
        <a href="#maincontent" className="skip-link">Skip to main content</a>
        <SupportUkraineBanner />
        <Header />
        <div className="min-h-screen overflow-x-hidden" id="maincontent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
