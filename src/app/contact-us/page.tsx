// src/app/contact-us/page.tsx
import ContactUsForm from "@/app/_components/contacts/ContactUsForm";
import Container from '@/app/_components/Container';
import MemberSimon from '@/app/_components/sections/members/Simon';
import MemberMaxim from '@/app/_components/sections/members/Maxim';
import Calendly from "@/app/_components/contacts/Calendly";
import Reviews from '@/app/_components/sections/Reviews';
import Tabs from "@/app/_components/Tabs";
import BugReportForm from "@/app/_components/BugReportForm";
import { BASE_URL } from '@/lib/constants';

export async function generateMetadata() {
    const pageTitle = "Contact Us - Vasilkoff Ltd";
    const pageDescription = "Contact Vasilkoff for mobile app and web development inquiries, partnerships, careers, and more. Reach out to our expert team today.";
    const canonicalUrl = `${BASE_URL}/contact-us`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: `${BASE_URL}/images/contact-us-banner.jpg`,
                    alt: 'Contact Us - Vasilkoff'
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            image: `${BASE_URL}/images/contact-us-banner.jpg`,
        },
        additionalMetaTags: [
            {
                name: 'description',
                content: pageDescription,
            }
        ],
        alternates: { canonical: canonicalUrl },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'mainEntity': {
                '@type': 'Organization',
                'name': 'Vasilkoff CY Ltd',
                'url': BASE_URL,
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+35799169229',
                    'contactType': 'Customer Service',
                    'areaServed': 'Global',
                    'availableLanguage': ['English', 'Ukrainian']
                }
            }
        }
    };
}

const ContactUsPage = () => {
    return (
        <main>
            <section className="relative overflow-x-hidden border-t-2 border-transparent bg-gradient-to-b from-white/40 to-transparent px-4 ">
                <div className="items-center justify-center lg:flex">
                    <div className="text-center" data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/images/contact-text.webp" alt="Contact us" width={"393px"} height={"90px"} className="mx-auto sm:pt-4 xl:mx-0" />
                    </div>
                </div>
            </section>
            <Container>
                <div className="mx-auto text-center max-w-3xl pb-4 border-b-2 border-primary mb-4">
                    <h1>Contact Us Now</h1>
                    <div className="grid gap-8 sm:grid-cols-2 grid-cols-1 max-w-xl mx-auto py-4">
                        <MemberSimon />
                        <MemberMaxim />
                    </div>
                    <p>
                        Get in touch with members of Vasilkoff team. Any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more.
                    </p>
                </div>
                <Tabs
                    tabs={[
                        { label: 'Contact Us Form', content: <ContactUsForm />, id: 'contact' },
                        { label: 'Report a Bug Form', content: <BugReportForm />, id: 'report' },
                    ]}
                />
                <div className="mx-auto text-center">
                    <h2 className="mb-6 text-3xl">Or Book your initial 30-minute online consultation</h2>
                </div>
            </Container>
            <div className="w-[110%] overflow-hidden">
                <Calendly />
            </div>
            <Reviews />
        </main>
    );
};

export default ContactUsPage;
