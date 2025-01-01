// src/app/about-us/page.tsx
import Link from 'next/link';
import ContactUsForm from '../_components/contacts/ContactUsForm';
import Container from '../_components/Container';
import { BASE_URL } from '@/lib/constants';

export const metadata = {
    title: 'About Us - Vasilkoff',
    description: "Discover Vasilkoff Ltd's commitment to providing blockchain and AI solutions from our bases in Cyprus and Ukraine, as well as globally through remote team members. Our projects like NFTTRX, SMRT16, SMRTSGN, SmartAIChats, Bella Chess, and Calculator Lock exemplify our innovative approach to technology.",
    alternates: { canonical: `${BASE_URL}/about-us` },
};

export default function AboutUsPage() {
    return (
        <section className="overflow-hidden py-8">
            <Container>
                <div className="mx-auto lg:w-3/4 text-center lg:text-left">
                    <header className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <h2 className="text-2xl font-semibold">Empowering Innovation, Together</h2>
                    </header>
                    <article>
                        <p className="mb-6">
                            At Vasilkoff Ltd, our seasoned team, anchored in Cyprus' Paphos and Ukraine's Cherkasy and Kropyvnytskyi, with a global network of remote professionals, focuses on crafting tailored technology solutions. Our work spans blockchain and AI innovations, illustrated by projects such as <Link href="/portfolio/nfttrx">NFTTRX</Link> for NFT-based intellectual property protection, and <Link href="/portfolio/smrt16">SMRT16</Link>, a marketing DApp on the Polygon blockchain.
                        </p>
                        <p className="mb-6">
                            Our initiatives, like <Link href="/portfolio/smrtsgn">SMRTSGN</Link> for document verification, <Link href="/portfolio/smartAI">SmartAIChats</Link> for AI-driven customer support, <Link href="/portfolio/bellachess">Bella Chess</Link> for the classic game's enthusiasts, and <Link href="/portfolio/calculator-lock">Calculator Lock</Link> for personal privacy, reflect our ethos of user-centered development.
                        </p>
                        <p className="font-semibold mb-6">
                            🇺🇦 Our support for Ukraine underscores our dedication to our colleagues and communities, embodying the values of integrity, resilience, and unity.
                        </p>
                        <p className="mb-6">
                            Vasilkoff Ltd transcends the traditional IT role, seeking to forge lasting partnerships. Our collective expertise positions us to tackle complex challenges with tailored strategies that resonate with our clients' ambitions.
                        </p>
                        <p className="mb-6">
                            Adapting to the tech world's fluidity, we're committed to continual learning and employing state-of-the-art technologies. Our aim is to be proactive contributors, equipping clients to remain competitive and visionary.
                        </p>
                        <p className="mb-6">
                            We believe in the synergy of transparency and cooperation, integral to transforming ideas into effective digital solutions. Our methods keep clients engaged throughout the development process, ensuring alignment with their objectives and market expectations.
                        </p>
                        <p className="mb-6">
                            Our diverse projects demonstrate our capability to address intricate technical landscapes, striving to surpass client expectations with every venture.
                        </p>
                        <p>
                            If you’re seeking an IT partner for your next venture, Vasilkoff Ltd is prepared to assist. Whether innovating within your industry or charting new markets, we’re ready to embark on this creative journey with you. Reach out to discover how our expertise can serve your business.
                        </p>
                    </article>
                </div>
                <ContactUsForm />
            </Container>
        </section>
    );
}
