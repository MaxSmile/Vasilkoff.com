
import Link from 'next/link';
import Head from 'next/head';
import PortfolioCard from "@/app/_components/portfolio/PortfolioCard";
import { getAllPortfolios } from '@/lib/api';
import Container from '../_components/Container';


export default function PortfolioListPage() {
    // const [activeTab, setActiveTab] = useState<string>('all');
    const portfolios = getAllPortfolios();
    let hasPart = portfolios.map((portfolio) => {
        return {
            "@type": "CreativeWork",
            "name": portfolio.title,
            "url": "https://vasilkoff.com/portfolio/" + portfolio.slug,
            "image": "https://vasilkoff.com/" + portfolio.picture,
            "description": portfolio.description,
            "creator": {
                "@type": "Organization",
                "name": "Vasilkoff",
                "url": "https://vasilkoff.com"
            }
        }
    });
    //Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!
    //t="Explore our diverse portfolio at Vasilkoff. We've developed innovative web and mobile solutions for businesses across various sectors, demonstrating our commitment to excellence and client satisfaction.
    return (
        <div>
            <Head>
                <title>Portfolio - Vasilkoff Ltd</title>
                <meta property="og:title" content="Portfolio - Vasilkoff Ltd" />
                <meta name="description" content="Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!" />
                <meta name="og:description" content="Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!" />
                <meta property="og:image" content="https://vasilkoff.com/portfolio/portfolio.webp" />
                <meta property="og:url" content="https://vasilkoff.com/portfolio" />

                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio",
    "description": "A collection of projects we have developed",
    "hasPart": ${JSON.stringify(hasPart)}
}`
                    }} />

            </Head>

            <section className="pt-12 mt-40 pb-14 md:pb-[100px]">
                <Container>
                    <div className="heading text-center">
                        <h1>Our Portfolio</h1>
                    </div>


                    <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {
                            portfolios.map((portfolio, index) => (
                                <PortfolioCard key={index} obj={portfolio}  />
                            ))
                        }

                    </div>
                </Container>
            </section>
        </div>
    );
}
