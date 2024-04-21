import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostHeader } from "@/app/_components/posts/PostHeader";
import { PostBody } from "@/app/_components/posts/PostBody";
import Head from "next/head";





export default async function BlogPage({ params }: Params) {
  const article = getBlogBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");
  const jsonLd = generateBlogJsonLd(article);

  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <PostHeader article={article} />
      <Container>
        <article className="mb-32">
          
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  return {
    title:blog.title,
    description:blog.description,
    openGraph: {
      title:blog.title,
      images: [blog.picture],
      url: `https://vasilkoff.com/blog/${blog.slug}`,
      type: "article",
      description: blog.description,
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}


function generateBlogJsonLd(blog) {
  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.picture,
    url: `https://vasilkoff.com/blog/${blog.slug}`,
    datePublished: blog.date,
    dateModified: blog.dateModified || blog.date,
    author: {
      "@type": "Person",
      name: "Maxim Vasilkov",
      url: "https://vasilkoff.com/team/maxim-vasilkov",
    },
    publisher: {
      "@type": "Organization",
      name: "Vasilkoff Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://vasilkoff.com/static/logo.png",
      },
    },
    description: blog.description,
  };
}
