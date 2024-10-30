// src/app/blog/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostHeader } from "@/app/_components/posts/PostHeader";
import { PostBody } from "@/app/_components/posts/PostBody";
import { BASE_URL } from "@/lib/constants";


export default async function BlogPage({ params }: any) {
  const { slug } = params;
  const article = getBlogBySlug(slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  // Generate JSON-LD for Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.picture,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Maxim Vasilkov",
      url: `${BASE_URL}/team/maxim-vasilkov`,
    },
    publisher: {
      "@type": "Organization",
      name: "Vasilkoff Ltd",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/vasilkoff-logo-512x512.png`,
      },
    },
    description: article.description,
  };

  return (
    <main>
      <PostHeader article={article} />
      <Container>
        <article className="mb-32">
          <PostBody content={content} />
        </article>
      </Container>
      
      {/* JSON-LD Script for structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

// Metadata Function
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const canonicalUrl = `${BASE_URL}/blog/${params.slug}`;
  const pageTitle = blog.title;
  const pageDescription = blog.description;
  const blogImage = blog.picture || `${BASE_URL}/assets/blog/blog.webp`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: `${blog.title} - Vasilkoff Ltd`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [blogImage],
    },
    alternates: { canonical: canonicalUrl },
  };
}

// Generate Static Params for Each Blog Post
export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
