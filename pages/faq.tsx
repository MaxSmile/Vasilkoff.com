import { useSelector } from 'react-redux';
import Head from 'next/head';
import Faq from '../components/Faq';
import GoogleSearch from '../components/GoogleSearch';
import AIContacts from '../components/AIContacts';
import { IRootState } from '../store';

const FAQs = () => {
    return (
        <>
            <Head>
                <title>FAQs - Vasilkoff Ltd</title>
                <meta name="description" content="Get answers to common questions about Vasilkoff's full-stack software development services, blockchain technology, outsourcing, and outstaffing in our comprehensive FAQ." />
            </Head>



            <Faq showTitle={true} />

            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="heading text-center">
                        <h1>Google-powered Search</h1>
                        <h2>Find Your Answers</h2>
                        <p className="mt-5 text-lg font-bold">Looking for something specific? Use our search feature to find exactly what you need!</p>
                    </div>
                    <div className="mt-8 justify-center">
                        <GoogleSearch />
                    </div>
                </div>
            </section>




            <AIContacts />
        </>
    );
};


export default FAQs;
