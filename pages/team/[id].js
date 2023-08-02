import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';
import { members } from '../../data/members';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftCircle } from 'react-bootstrap-icons';


export const getServerSideProps = async ({ params }) => {
    const blog = members[params.id];

    if (!blog) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            blog,
            slug: params.id
        },
    }
}

const MemberPage = ({ blog, slug }) => {
    return (
        <div>
            <Head>
                <title>Team - {blog.title}</title>
                <meta name="description" content={blog.description} />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `

  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${blog.title}",
    "author": {
        "@type": "Person",
        "name": "Maxim Vasilkov",
        "url": "https://about.me/maxim.vasilkov"
      },
    "publisher": {
      "@type": "Organization",
      "name": "Vasilkoff",
      "url": "https://vasilkoff.com"
    },
    "url": "https://vasilkoff.com/blog/${slug}",
    "image": "https://vasilkoff.com/${blog.picture}",
    "description": "${blog.description}",
    "datePublished": "${blog.date}"
  }
`
                    }} />

            </Head>

            <div className=" bg-black bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <p className="!text-white py-4"><Link href='/#team'><ArrowLeftCircle className="text-2xl" /></Link></p>
                                <h1 className="!text-white">{blog.title}</h1>
                                <ul className="items-center text-light justify-center pt-6 sm:flex lg:justify-start">
                
                                    <li className="relative px-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        Date: {blog.date}
                                    </li>
                                    <li className="relative px-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        Time to read: {blog.time}
                                    </li>
                                </ul>
                                <p className='text-light p-4'>
                                    {blog.description}
                                </p>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos='fade-left'
                                data-aos-duration="1000"
                            >
                                <Image
                                    src={blog.picture}
                                    width={160}
                                    height={160}
                                    loading='lazy'
                                    alt={blog.subtitle}
                                    className="mx-auto rounded-[16px] border border-gray"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberPage;
