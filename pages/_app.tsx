// pages/_app.tsx
import '../styles/tailwind.css';
import 'react-support-ukraine-banner/dist/SupportUkraineBanner.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '../components/Layouts/DefaultLayout';

import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {

    return (
        <DefaultLayout>
            <Component {...pageProps} />
            <Analytics />
        </DefaultLayout>
    );
}
