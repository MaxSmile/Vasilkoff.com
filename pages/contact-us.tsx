import OfficeSwiper from '../components/OfficeSwiper';
import Head from 'next/head';
import AIContacts from '../components/AIContacts';

const Contactus = () => {

    return (
        <div>
            <Head>
                <title>Contact Us - Vasilkoff</title>
                <meta
                    name="description"
                    content="Get in touch with Vasilkoff. Contact us for any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more."
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vasilkoff Ltd",
    "description": "This page contains contact details for Vasilkoff Ltd",
    "url": "https://vasilkoff.com/contact-us",
    "mainEntity": {
        "@type": "Organization",
        "name": "Vasilkoff Ltd",
        "headline": "Vasilkoff Ltd",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Glastonos 12-14",
            "addressLocality": "Paphos",
            "addressRegion": "Paphos",
            "postalCode": "8046",
            "addressCountry": "CY"
        },
        "email": "maxim@vasilkoff.com",
        "telephone": "+35799169229",
        "url": "https://vasilkoff.com",
        "sameAs": ["https://www.facebook.com/vasilkoff.software", 
        "https://www.instagram.com/vasilkoff"]
    }
}
`
                    }} />

            </Head>

            <div id="talkToUs" className="relative -top-20">&nbsp;</div>
            <section className="mt-40 bg-gradient-to-b from-white/40 to-transparent dark:from-white/[0.03] lg:py-[100px]">
                <div className="container">
                    <div className="mx-auto text-center sm:w-[430px]">
                        <div className="mb-6">
                            <h1 className="blackheading">Contact Us Today</h1>
                        </div>
                    </div>
                    <AIContacts />
                </div>
            </section>

            

            <OfficeSwiper />
           

        </div>
    );
};

export default Contactus;
