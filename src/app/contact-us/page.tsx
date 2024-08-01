// src/app/contact-us/page.tsx

import Head from 'next/head';
import AIContacts from "@/app/_components/contacts/AIContacts";
import Container from '@/app/_components/Container';
import MemberSimon from '@/app/_components/sections/members/Simon';
import MemberMaxim from '@/app/_components/sections/members/Maxim';
import Calendly from "@/app/_components/contacts/Calendly";
import Reviews from '@/app/_components/sections/Reviews';
import Tabs from "@/app/_components/Tabs";
import BugReportForm from "@/app/_components/BugReportForm";
import { CONTACT_US_JSON_LD } from '@/lib/constants';

const ContactUsPage = () => {
    return (
        <main>
            <Head>
                <title>Contact Us - Vasilkoff</title>
                <meta
                    name="description"
                    content="Get in touch with members of Vasilkoff team. Any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more."
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_US_JSON_LD) }}
                />
            </Head>

            <section className="mt-40 bg-gradient-to-b from-white/40 to-transparent">
                <Container>
                    <div className="mx-auto text-center max-w-3xl space-y-8">
                        <h1>Contact Us Now</h1>
                        <p>
                            Get in touch with members of Vasilkoff team. Any inquiries related to our mobile apps and web-development services, partnerships, career opportunities, and more.
                        </p>
                        <div className="grid gap-8 grid-cols-2 max-w-xl mx-auto py-12">
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
