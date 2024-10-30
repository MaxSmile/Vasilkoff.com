// src/app/portfolio/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPortfolios, getPortfolioBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { PortfolioHeader } from "@/app/_components/posts/PortfolioHeader";

// Page Component
export default async function PortfolioPage({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;  // Access 'slug' after resolving

  const article = getPortfolioBySlug(slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PortfolioHeader article={article} />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

// Metadata Function
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;  // Access 'slug' after resolving

  const article = getPortfolioBySlug(slug);

  if (!article) {
    return notFound();
  }

  const pageTitle = `${article.title} - Vasilkoff Portfolio`;
  const pageDescription = article.description || '';

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: article.picture,
          alt: article.title
        }
      ],
      url: `https://vasilkoff.com/portfolio/${slug}`
    },
  };
}

// Static Params Function
export async function generateStaticParams() {
  const portfolios = getAllPortfolios();

  return portfolios.map((article) => ({
    slug: article.slug,
  }));
}
