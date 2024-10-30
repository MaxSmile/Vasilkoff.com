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
  const headersList = await headers();
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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager (noscript) -->
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQHMWKC"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
                  <!-- End Google Tag Manager (noscript) -->`,
          }}
        />
        <p>
          <a href="#maincontent" className="skip-link">Skip to main content</a>
        </p>

        <SupportUkraineBanner />
        <Header />
        <div className="min-h-screen overflow-x-hidden" id="maincontent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
