// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;700;800&display=swap" rel="stylesheet" />  
            </Head>
            <body>
                <a href="#maincontent" className="skip-link">Skip to main content</a>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
