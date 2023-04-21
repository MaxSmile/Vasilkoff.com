import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';

import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react'


export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Suspense>
                <Head>
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
            <meta property="og:description" content="Full-stack software development company offering outsourcing and outstaffing web & mobile apps development of simple and complex projects. Can use blockchain, AI and machine learning" />
            <meta property="og:type" content="product" />
            <meta property="og:image" content="/vasilkoff-cover-1024x583.jpg" />
            <meta content="origin" name="referrer" />
            <meta content="/images/cover.png" itemProp="image" />
                    
                    
                </Head>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </Suspense>
            <Analytics />
        </Provider>
    );
}
