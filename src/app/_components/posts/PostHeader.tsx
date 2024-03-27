// src/app/_components/blogs/PostHeader.tsx
import Image from "next/image";
import DateFormatter from "../DateFormatter";
import Link from "next/link";
import { Blog } from "@/interfaces/docTypes";
import Container from "../Container";
import BackHistoryButton from "../BackHistoryButton";

export function PostHeader({ article }: { article: Blog }) {
  return (
    <Container>
      <div className='flex flex-col md:flex-row md:items-center pt-8 md:mt-14 lg:mt-[128px]'>
      <div className='heading flex-1 text-center lg:text-left '>
          <BackHistoryButton />
          <h1 className='text-secondary'>{article.title}</h1>
          <h2 className="text-secondary text-lg py-2">{article.subtitle}</h2>
          <div className='text-secondary py-4'>
            <p>{article.description}</p>
          </div>
          <p className='text-secondary py-4 text-sm'>
            Date:&nbsp;<DateFormatter dateString={article.date} />
            {article.time && <> | Time to read: {article.time}</>}
          </p>
        </div>
        <div className='flex-1 m-1' data-aos='fade-left' data-aos-duration='1000'>
          <Image
            width={0}
            height={0}
            loading='lazy'
            src={article.picture}
            alt={article.title}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            style={{ width: '460px', minWidth: '260px', height: 'auto' }}
            className="mx-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
}
