// src/app/contact-us/page.tsx
import Head from 'next/head';
import AIContacts from "@/app/_components/contacts/AIContacts";
import Container from '@/app/_components/Container';
import MemberSimon from '@/app/_components/sections/members/Simon';
import MemberMaxim from '@/app/_components/sections/members/Maxim';
import Calendly from "@/app/_components/contacts/Calendly";
//import OfficeSwiper from '@/app/_components/OfficeSwiper';
import Reviews from '@/app/_components/sections/Reviews';
import Prefooter from '../_components/sections/Prefooter';

const ContactUsPage = () => {

    return (
        <main>
            <Head>
                <title>Contact Us - Vasilkoff</title>
                <meta
                    name="description"
                    content="Get in touch with memebers of Vasilkoff team. Any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more."
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

            <section className="mt-40 bg-gradient-to-b from-white/40 to-transparent ">
                <Container>
                    <div className="mx-auto text-center max-w-3xl mx-auto space-y-8">
                        <h1>Contact Us Now</h1>

                        <p>
                            Get in touch with memebers of Vasilkoff team.
                            Any inquiries related to our mobile apps and web-development services,
                            partnerships, career opportunities, and more.
                        </p>
                        <div className='grid gap-8 grid-cols-2 max-w-xl mx-auto py-12'>
                            <MemberSimon />
                            <MemberMaxim />
                        </div>
                    </div>

                    <AIContacts />
                    <div className="mx-auto text-center">
                        <h2 className="mb-6 text-3xl">Or Book your initial 30 minute online consultation</h2>
                    </div>
                </Container>
                <div className='w-[110%] overflow-hidden'>
                    <Calendly />
                </div>

                <Reviews />
                {/* <OfficeSwiper /> */}

            </section>
        </main>
    );
};

export default ContactUsPage;
