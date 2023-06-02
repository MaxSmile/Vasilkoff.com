import { useSelector } from 'react-redux';
import Head from 'next/head';
import Faq from '../components/Faq';
import GoogleSearch from '../components/GoogleSearch';
import AIContacts from '../components/AIContacts';
import { IRootState } from '../store';

const FAQs = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <>
            <Head>
                <title>FAQs</title>
            </Head>



            <Faq showTitle={true} />

            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Google-powered Search</h6>
                        <h4>Find Your Answers</h4>
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
