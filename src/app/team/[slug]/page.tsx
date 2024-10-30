// src/app/team/[slug]/page.tsx
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { getAllMembers, getMemberBySlug } from "@/lib/api";
import { MemberHeader } from "@/app/_components/posts/MemberHeader";
import { BASE_URL } from "@/lib/constants";

// Define dynamic paths for static generation
export async function generateStaticParams() {
  const members = getAllMembers();
  return members.map((member) => ({ slug: member.slug }));
}

// Generate metadata dynamically for each team member
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const member = getMemberBySlug(params.slug);

  if (!member) {
    return notFound();
  }

  const canonicalUrl = `${BASE_URL}/team/${params.slug}`;
  const pageTitle = member.title || "Member of Vasilkoff Ltd";
  const pageDescription = member.subtitle || "Learn more about our team members at Vasilkoff Ltd.";
  const memberImage = member.picture;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: 'profile',
      images: [
        {
          url: memberImage,
          alt: `${member.title} - Vasilkoff Ltd`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      image: memberImage,
    },
    additionalMetaTags: [
      {
        name: 'description',
        content: pageDescription,
      },
    ],
    alternates: { canonical: canonicalUrl },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: member.title,
      url: canonicalUrl,
      image: memberImage,
      jobTitle: member.subtitle || 'Team Member',
      worksFor: {
        '@type': 'Organization',
        name: 'Vasilkoff Ltd',
        url: BASE_URL,
      },
      description: pageDescription,
    },
  };
}

// Component for individual member page
export default async function MemberPage({ params }: { params: { slug: string } }) {
  const member = getMemberBySlug(params.slug);

  if (!member) {
    notFound();
  }

  const content = await markdownToHtml(member.content || "");

  return (
    <main>
      <MemberHeader article={member} />
      <Container>
        <article className="mb-32">
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
