// src/app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { getAllServices, getServiceBySlug } from "@/lib/api";
import { ServiceHeader } from "@/app/_components/posts/ServiceHeader";
import { BASE_URL } from "@/lib/constants";


export default async function ServicePage({ params }: any) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  const content = await markdownToHtml(service.content || "");
  const canonicalUrl = `${BASE_URL}/services/${slug}`;
  const pageDescription = service.description || "Learn more about our specialized services at Vasilkoff Ltd.";
  const serviceImage = service.picture || `${BASE_URL}/assets/default-service-image.webp`;

  return (
    <main>
      <Container>
        <article className="mb-32">
          <ServiceHeader article={service} />
          <PostBody content={content} />
        </article>
      </Container>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: pageDescription,
            url: canonicalUrl,
            image: serviceImage,
            provider: {
              "@type": "Organization",
              name: "Vasilkoff Ltd",
              url: BASE_URL,
            },
          }),
        }}
      />
    </main>
  );
}

// Metadata for SEO and Open Graph
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;  // Access 'slug' after resolving
  const service = getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  const canonicalUrl = `${BASE_URL}/services/${slug}`;
  const pageTitle = service.title || "Vasilkoff Services";
  const pageDescription = service.description || "Learn more about our specialized services at Vasilkoff Ltd.";
  const serviceImage = service.picture || `${BASE_URL}/assets/ai-development.webp`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: serviceImage,
          width: 1200,
          height: 630,
          alt: `${service.title} - Vasilkoff Ltd`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [serviceImage],
    },
  };
}

// Generate static paths for each service based on its slug
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}
