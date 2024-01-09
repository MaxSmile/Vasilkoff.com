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
