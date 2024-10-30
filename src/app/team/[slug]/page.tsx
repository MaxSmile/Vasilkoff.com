// pages/team/[slug].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import { getAllMembers, getMemberBySlug } from "@/lib/api";
import { MemberHeader } from "@/app/_components/posts/MemberHeader";
import { BASE_URL } from "@/lib/constants";

// Improved type definition with read-only properties
interface Params {
  readonly params: {
    readonly slug: string;
  };
}

interface MemberPageProps {
  readonly member: Member;
  readonly content: string;
}

// Updated to use getStaticProps for static generation
export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const member = getMemberBySlug(params?.slug);

  if (!member) {
    return {
      notFound: true,
    };
  }

  const content = await markdownToHtml(member.content || "");

  return {
    props: {
      member,
      content,
    },
    revalidate: 60, // optional revalidation to update the page every 60 seconds if necessary
  };
};

// Define dynamic routes for each team member
export const getStaticPaths: GetStaticPaths = async () => {
  const members = getAllMembers();

  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: true, // 'true' if you want to generate missing pages on request
  };
};

// Component for individual member page
export default function MemberPage({ member, content }: MemberPageProps) {
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

// Generate metadata dynamically for each team member
export async function generateMetadata({ params }: Params): Promise<any> {
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
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      image: memberImage
    },
    additionalMetaTags: [
      {
        name: 'description',
        content: pageDescription,
      }
    ],
    alternates: { canonical: canonicalUrl },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': member.title,
      'url': canonicalUrl,
      'image': memberImage,
      'jobTitle': member.subtitle || 'Team Member',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Vasilkoff Ltd',
        'url': BASE_URL
      },
      'description': pageDescription,
    },
  };
}
