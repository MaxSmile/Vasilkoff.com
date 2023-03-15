import { useSelector } from 'react-redux';
import Head from 'next/head';
import Faq from '../components/Faq';
import { IRootState } from '../store';

const FAQs = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>FAQs</title>
            </Head>
\

            <Faq showTitle={true} />


        </div>
    );
};

export default FAQs;
