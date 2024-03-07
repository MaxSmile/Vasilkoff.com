import Head from 'next/head';
import Faq from '../components/Faq';
import AIContacts from '../components/AIContacts';
import Prefooter from '../components/Layouts/Prefooter';

const FAQs = () => {
    return (
        <>
            <Head>
                <title>FAQs - Vasilkoff Ltd</title>
                <meta name="description" content="Get answers to common questions about Vasilkoff's full-stack mobile apps and web-development services, blockchain technology, outsourcing, and outstaffing in our comprehensive FAQ." />
            </Head>


            <div className='mt-12'>
            <Faq showTitle={true} />
            </div>
            
            
            <Prefooter />
        </>
    );
};


export default FAQs;
