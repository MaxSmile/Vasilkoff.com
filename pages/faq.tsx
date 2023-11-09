import Head from 'next/head';
import Faq from '../components/Faq';
import AIContacts from '../components/AIContacts';

const FAQs = () => {
    return (
        <>
            <Head>
                <title>FAQs - Vasilkoff Ltd</title>
                <meta name="description" content="Get answers to common questions about Vasilkoff's full-stack software development services, blockchain technology, outsourcing, and outstaffing in our comprehensive FAQ." />
            </Head>



            <Faq showTitle={true} />

            
            <AIContacts />
        </>
    );
};


export default FAQs;
