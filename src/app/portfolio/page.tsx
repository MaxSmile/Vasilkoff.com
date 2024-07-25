// src/app/portfolio/page.tsx
import Head from 'next/head';
import PortfolioCard from "@/app/_components/portfolio/PortfolioCard";
import PortfolioFilter from "@/app/_components/portfolio/PortfolioFilter";
import { getAllPortfolios } from '@/lib/api';
import Container from '../_components/Container';
import { Portfolio } from '@/interfaces/docTypes';

interface Props {
  searchParams: { category?: string },
}

export default async function PortfolioListPage({ searchParams }: Props): Promise<JSX.Element> {
    const category = searchParams.category || '';
    const portfolios: Portfolio[] = getAllPortfolios(category);

    const hasPart = portfolios.map((portfolio) => {
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

    const pageTitle = category ? `Portfolio - ${category} - Vasilkoff Ltd` : 'Portfolio - Vasilkoff Ltd';
    const pageDescription = category 
        ? `Explore Vasilkoff's ${category} portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!`
        : `Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!`;

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta property="og:title" content={pageTitle} />
                <meta name="description" content={pageDescription} />
                <meta name="og:description" content={pageDescription} />
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
                        <h1>Our Portfolio {category && `- ${category}`}</h1>
                    </div>
                    <PortfolioFilter  highlight={category}/>

                    <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {portfolios.map((portfolio, index) => (
                            <PortfolioCard key={index} obj={portfolio} />
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
