import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostHeader } from "@/app/_components/posts/PostHeader";
import { PostBody } from "@/app/_components/posts/PostBody";


export default async function BlogPage({ params }: Params) {
  const article = getBlogBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <main>
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
    openGraph: {
      title: blog.title,
      images: [blog.picture],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
