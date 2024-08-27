// src/app/layout.tsx

import SupportUkraineBanner from "react-support-ukraine-banner";
import { TrackingHeadScript } from '@phntms/next-gtm';
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { headers } from "next/headers";
import { BASE_URL } from "@/lib/constants";



const font = Mulish({ subsets: ["latin"] });

const GTM_ID = "GTM-KQHMWKC";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const canonicalUrl = `${BASE_URL}${pathname}`;
  return {
    title: `Vasilkoff Ltd - Full-stack Web & Mobile mobile apps and web-development Services`,
    description: `Vasilkoff Ltd - Full-stack Web & Mobile mobile apps and web-development Services.`,
    openGraph: {
      images: [],
    },
    creator: 'Maksym Vasylkov',
    publisher: 'Vasilkoff Ltd',
    metadataBase: new URL(BASE_URL),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: { canonical: canonicalUrl },
  }
}

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
        <TrackingHeadScript id={GTM_ID} isGTM={true} />
      </head>
      <body className={font.className}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager (noscript) -->
                  <noscript>
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQHMWKC"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
                  </noscript>
                  <!-- End Google Tag Manager (noscript) -->`,
        }}
      />
        <a href="#maincontent" className="skip-link">Skip to main content</a>
        <SupportUkraineBanner />
        <Header />
        <div className="min-h-screen overflow-x-hidden" id="maincontent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
