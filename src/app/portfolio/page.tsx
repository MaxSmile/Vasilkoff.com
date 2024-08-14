// src/app/portfolio/page.tsx
import PortfolioCard from "@/app/_components/portfolio/PortfolioCard";
import PortfolioFilter from "@/app/_components/portfolio/PortfolioFilter";
import { getAllPortfolios } from '@/lib/api';
import Container from '../_components/Container';
import { Portfolio } from '@/interfaces/docTypes';
import { headers } from "next/headers";
import { BASE_URL } from "@/lib/constants";

interface SearchParams {
  category?: string;
}

interface Props {
  searchParams: SearchParams;
}

export async function generateMetadata({ searchParams }: Props) {
  const category = searchParams.category || '';
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const canonicalUrl = `${BASE_URL}${pathname}${ category ? '?category=' + category: ''}`;

  const pageTitle = category ? `Portfolio - ${category} - Vasilkoff Ltd` : 'Portfolio - Vasilkoff Ltd';
  const pageDescription = category 
    ? `Explore Vasilkoff's ${category} portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!`
    : `Explore Vasilkoff's portfolio: A showcase of web & mobile apps, ML projects, and innovative blockchain solutions. Witness our tech prowess firsthand!`;

  const portfolios: Portfolio[] = getAllPortfolios(category);

  const hasPart = portfolios.map(portfolio => ({
    '@type': 'CreativeWork',
    'name': portfolio.title,
    'url': `${BASE_URL}/portfolio/${portfolio.slug}`,
    'image': `https://vasilkoff.com/${portfolio.picture}`,
    'description': portfolio.description,
    'creator': {
      '@type': 'Organization',  
      'name': 'Vasilkoff Ltd',
      'url': BASE_URL
    }
  }));

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: 'https://vasilkoff.com/portfolio/portfolio.webp',
          alt: 'Vasilkoff Portfolio'
        }
      ],
      url: canonicalUrl
    },
    additionalMetaTags: [
      {
        name: 'description',
        content: pageDescription,
      }
    ],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Portfolio',
      'description': 'A collection of projects developed by Vasilkoff Ltd',
      'hasPart': hasPart
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function PortfolioListPage({ searchParams }: Readonly<Props>): Promise<JSX.Element> {
  const category = searchParams.category || '';
  const portfolios: Portfolio[] = getAllPortfolios(category);

  return (
    <div>
      <section className="pt-12 mt-40 pb-14 md:pb-[100px]">
        <Container>
          <div className="heading text-center">
            <h1>Our Portfolio {category && `- ${category}`}</h1>
          </div>
          <PortfolioFilter highlight={category} />

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
