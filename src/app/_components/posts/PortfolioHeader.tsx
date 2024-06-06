// src/app/_components/posts/PortfolioHeader.tsx
import Image from 'next/image';
import DateFormatter from '../DateFormatter';
import { Portfolio } from '@/interfaces/docTypes';
import Container from '../Container';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Link from 'next/link';
import BackHistoryButton from '../BackHistoryButton';

export function PortfolioHeader({ article }: Readonly<{ article: Portfolio }>) {

  return (
    <Container>
      <div className='flex flex-col md:flex-row pt-8 md:mt-14 lg:mt-[128px]'>
        <div className='heading flex-1 text-left'>
          <div className='flex items-center space-x-2'>
          <BackHistoryButton />
          <h1 className='text-secondary pt-1'>{article.title}</h1>
          </div>
          <div className='text-secondary py-4 text-left'>
            <p>{article.description}</p>
            <br />
            <p className='text-secondary'>Categories:&nbsp;</p>
            {article.categories.map((category, index) => (
              <span key={index} className='mr-2'>
                <Link href={`/portfolio?category=${encodeURIComponent(category)}`}>
                  {category}
                </Link>
              </span>
            ))}
            <br />
            <p className='py-4'>Project site:&nbsp;
              <a href={article.url} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                {article.link}
              </a>
            </p>
            <p className='italic text-sm'>{article.extra}</p>
          </div>
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
