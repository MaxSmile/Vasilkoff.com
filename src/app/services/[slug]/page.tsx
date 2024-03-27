import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { getAllServices, getServiceBySlug } from "@/lib/api";
import { ServiceHeader } from "@/app/_components/posts/ServiceHeader";


export default async function ServicePage({ params }: Params) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return notFound();
  }

  const content = await markdownToHtml(service.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <ServiceHeader article={service} />
          
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
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return notFound();
  }
  return {
    openGraph: {
      title:service.title,
      images: [service.picture],
    },
  };
}

export async function generateStaticParams() {
  const services = getAllServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}
