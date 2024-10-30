// src/app/blog/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs } from "@/lib/api";
import Container from "@/app/_components/Container";
import { Blog } from "@/interfaces/docTypes";
import { BlogsList } from "@/app/_components/posts/BlogsList";
import { BASE_URL } from "@/lib/constants";

const title = "Vasilkoff Blogs - Insights on Web Development, Blockchain, and AI";
const description = "Explore Vasilkoff's blog. Dive into insights, trends, and stay ahead with expert articles about web-development, blockchain, and AI.";

type Params = {
  params: {
    page: string;
  };
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// Dynamic metadata generation for SEO and Open Graph
export function generateMetadata(): Metadata {
  const allBlogs = getAllBlogs();
  const primaryImage = allBlogs[0]?.picture
    ? `${BASE_URL}/${allBlogs[0].picture}`
    : `${BASE_URL}/assets/blog/blog.webp`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/blog` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog`,
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 630,
          alt: "Vasilkoff Blog Cover Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [primaryImage],
    },
  };
}

export default async function BlogsListPage({ params }: Params) {
  const page = params.page;
  const blogs = getAllBlogs();
  const hasPart = blogs.map((blog: Blog) => ({
    "@type": "Article",
    name: blog.title,
    headline: blog.title,
    url: `${BASE_URL}/blog/${blog.slug}`,
    image: `${BASE_URL}/${blog.picture}`,
    description: blog.description,
    author: {
      "@type": "Organization",
      name: "Vasilkoff",
      url: BASE_URL,
    },
  }));

  // Handle invalid page requests
  if (!!page) return notFound();

  return (
    <main>
      <Container>
        <h1 className="m-8">{title}</h1>
        <BlogsList blogs={blogs} />
      </Container>

      {/* Structured Data for Blog Collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog",
            description: "A collection of blog posts written by our team",
            hasPart,
          }),
        }}
      />
    </main>
  );
}
