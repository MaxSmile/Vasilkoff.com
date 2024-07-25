// src/app/portfolio/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPortfolios, getPortfolioBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { PortfolioHeader } from "@/app/_components/posts/PortfolioHeader";

type Params = {
  params: {
    slug: string;
  };
};

export default async function PortfolioPage({ params }: Params) {
  const article = getPortfolioBySlug(params.slug);

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

export function generateMetadata({ params }: Params): Metadata {
  const article = getPortfolioBySlug(params.slug);

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
      url: `https://vasilkoff.com/portfolio/${article.slug}`
    }
  };
}

export async function generateStaticParams() {
  const portfolios = getAllPortfolios();

  return portfolios.map((article) => ({
    slug: article.slug,
  }));
}
