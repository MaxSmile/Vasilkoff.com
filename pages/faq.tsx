import { useSelector } from 'react-redux';
import Head from 'next/head';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import { IRootState } from '../store';
import Contactus from '../components/ContactUs';

const FAQs = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>FAQs</title>
            </Head>
\

            <Faq showTitle={true} />

            {/* <Contactus />

            <Testimonial /> */}
        </div>
    );
};

export default FAQs;
