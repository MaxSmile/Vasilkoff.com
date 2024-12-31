import AIContacts from "@/app/_components/contacts/AIContacts";
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
            <section className="mt-16 bg-gradient-to-b from-white/40 to-transparent">
                <Container>
                    <div className="mx-auto text-center max-w-3xl space-y-8">
                        <h1>Contact Us Now</h1>
                        <p>
                            Get in touch with members of Vasilkoff team. Any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more.
                        </p>
                        <div className="grid gap-8 sm:grid-cols-2 grid-cols-1 max-w-xl mx-auto py-12">
                            <MemberSimon />
                            <MemberMaxim />
                        </div>
                    </div>
                    <Tabs
                        tabs={[
                            { label: 'Contact Us', content: <AIContacts />, id: 'contact' },
                            { label: 'Report a Bug', content: <BugReportForm />, id: 'report' },
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
            </section>
        </main>
    );
};

export default ContactUsPage;
