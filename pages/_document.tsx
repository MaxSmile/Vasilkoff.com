// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

import SupportUkraineBanner from 'react-support-ukraine-banner';
import Script from 'next/script';
import SmartAiChatsLiveChat from 'react-smartaichats-livechat';

export default function Document() {
    const chatBaseAPIurl = process.env.ENV != 'dev'
        ? "https://smrtaichats.com"
        : "http://127.0.0.1:5001/smrtai/us-central1/s";
    return (
        <Html lang="en">
            <Head>
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;700;800&display=swap" rel="stylesheet" />
                <meta charSet="UTF-8" />
                <title>Software Development Services</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta property="og:title" content="Vasilkoff Ltd - Software Development Services" />
                <meta property="og:site_name" content="Vasilkoff Ltd" />
                <meta property="og:url" content="https://vasilkoff.com" />
                <meta property="og:description" content="Crafting cutting-edge web and mobile apps with a focus on the latest technologies. Explore our full-stack expertise and elevate your digital presence today!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vasilkoff.com/vasilkoff-cover.webp" />
                <meta content="origin" name="referrer" />
                <meta content="https://vasilkoff.com/vasilkoff-cover.webp" itemProp="image" />
                <meta property="og:article:author" content="©Vasilkoff CY Ltd" />
                <meta property="og:article:published_time" content="2023-08-04T15:30:00Z" />
                <meta property="og:image:alt" content="Vasilkoff Ltd" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body>
                <a href="#maincontent" className="skip-link">Skip to main content</a>

                <Main />

                {/* e5a5be3448783ace3494609d270a91d3|default */}

                {/* <SmartAiChatsLiveChat 
                    chatId="ZTVhNWJlMzQ0ODc4M2FjZTM0OTQ2MDlkMjcwYTkxZDN8ZGVmYXVsdA=="
                    base_url={chatBaseAPIurl} />   */}
                <NextScript />
                <SupportUkraineBanner />
            </body>
        </Html>
    );
}
