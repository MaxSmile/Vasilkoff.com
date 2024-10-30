// pages/hall-of-fame.tsx
import Head from 'next/head';
import Container from '../_components/Container';

export default function HallOfFamePage() {
    return (
        <>
            <Head>
                <title>Hall of Fame - Vasilkoff Ltd</title>
                <meta
                    name="description"
                    content="Recognizing the contributions of security researchers who help keep Vasilkoff secure by responsibly disclosing vulnerabilities."
                />
            </Head>

            <section className="max-w-4xl mx-auto py-8">
                <Container>
                    <div className="heading">
                        <h1>Hall of Fame</h1>
                    </div>
                    <p className="py-4">Welcome to the Vasilkoff Hall of Fame.</p>
                    <div className="my-6">
                        <p>
                            At Vasilkoff Ltd, we are dedicated to providing a secure platform for all our users. We believe in the importance of collaboration with the security community and greatly appreciate the efforts of researchers who help us identify and address potential vulnerabilities.
                        </p>
                        <p className="py-4">
                            This page is our way of recognizing those who have responsibly disclosed vulnerabilities to us, contributing to the ongoing security and reliability of our platform. If you’ve found a vulnerability, please feel free to reach out to us securely using our <a href="/pgp-key.txt" className="text-blue-500 underline">PGP key</a>.
                        </p>
                        <p>
                            Thank you to all security researchers who help us keep Vasilkoff secure. We look forward to adding names here as we continue to work together with the community.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
};
