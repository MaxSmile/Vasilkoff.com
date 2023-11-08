import Head from "next/head";
import Link from "next/link";
import { ArrowLeftCircle, Link45deg } from "react-bootstrap-icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const BlogPage = ({ blog, slug }) => {
    return (
        <div>
            <Head>
                <title>{blog.title}</title>
                <meta name="description" content={blog.description} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:site_name" content="Vasilkoff Ltd" />
                <meta property="og:url" content={"https://vasilkoff.com/blog/" + slug} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:article:published_time" content={blog.date}/>
                <meta property="og:image" content={blog.picture} />
                <meta content="origin" name="referrer" />
                <meta content={blog.picture} itemProp="image" />
                <meta property="og:image:alt" content={blog.title} />
                
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
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left">
                                <p className="!text-white py-4"><a href="javascript:history.back()"><ArrowLeftCircle className="text-2xl" /></a></p>
                                <h1 className="!text-white">{blog.title}</h1>
                                <p className="!text-white py-4">
                                    <Link href="/team/maxim-vasilkov">
                                        
                                        Author: <span className="px-4 font-semibold sm:text-lg"><Link45deg className='inline-block' />Maxim Vasilkov</span>
                                    </Link>
                                </p>
                                <p className="!text-white py-4">
                                    Date:&nbsp;{blog.date}&nbsp;
                                    <br/>Time&nbsp;to&nbsp;read:&nbsp;{blog.time}
                                </p>
                            </div>
                            <div
                                className="top-0 mt-6 right-0 md:mt-0 lg:absolute"
                                data-aos='fade-left'
                                data-aos-duration="1000"
                            >
                                <img
                                    src={blog.picture}
                                    alt="blog-detail-hero"
                                    className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px] border border-gray"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-[740px]">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            </section>
            {/* <BlogSlider title2="Related articles" /> */}
        </div>
    );
};

export default BlogPage;
