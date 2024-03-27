import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/posts/PostBody";
import {  getAllMembers, getMemberBySlug } from "@/lib/api";
import { MemberHeader } from "@/app/_components/posts/MemberHeader";


export default async function MemberPage({ params }: Params) {
  const member = getMemberBySlug(params.slug);

  if (!member) {
    return notFound();
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

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const member = getMemberBySlug(params.slug);

  if (!member) {
    return notFound();
  }
  return {
    openGraph: {
      title:member.title,
      images: [member.picture],
    },
  };
}

export async function generateStaticParams() {
  const members = getAllMembers();

  return members.map((member) => ({
    slug: member.slug,
  }));
}
