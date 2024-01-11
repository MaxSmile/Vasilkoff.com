import Head from 'next/head';
import { blogs } from '../data/blogs';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogsList = ({ page }) => {
    const blogsPerPage = 18;
    const start = (page - 1) * blogsPerPage;
    const end = page * blogsPerPage;
    const totalPages = Math.ceil(Object.keys(blogs).length / blogsPerPage);
    const keys = Object.keys(blogs).slice(start, end);

    const pagination = <Pagination limit={totalPages} baseLink="/blog" current={page} />;

    let hasPart = keys.map((key) => {
        let blog = blogs[key];
        return {
            "@type": "Article",
            "name": blog.title,
            "headline": blog.title,
            "url": "https://vasilkoff.com/blog/" + key,
            "image": "https://vasilkoff.com/" + blog.picture,
            "description": blog.description,
            "author": {
                "@type": "Organization",
                "name": "Vasilkoff",
                "url": "https://vasilkoff.com"
            }
        }
    });
    return (
        <div>
            <Head>
                <title>Vasilkoff Blogs {page}</title>
                <meta
                    name="description"
                    content="Explore the latest in mobile apps and web-development, blockchain, and AI on Vasilkoff's blog. Dive into insights, trends, and stay ahead with our expert articles."
                />
                <meta property="og:url" content="https://vasilkoff.com/blog" />
                <meta property="og:image" content="https://vasilkoff.com/assets/blog/blog.webp" />
                <meta property="og:description" content="Explore the latest in mobile apps and web-development, blockchain, and AI on Vasilkoff's blog. Dive into insights, trends, and stay ahead with our expert articles." />

                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog",
    "description": "A collection of blog posts written by our team",
    "hasPart": ${JSON.stringify(hasPart)}
}`
                    }} />
            </Head>
            
            <section className="bg-gradient-to-t mt-20 from-white/70 to-transparent py-14 md:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h1>Our Blog</h1>
                    </div>
                    {pagination}
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

                        {keys.map((item, index) => (
                            <BlogCard key={index} blog={blogs[item]} slug={item} />
                        ))}

                    </div>
                    {pagination}
                </div>

            </section>

        </div>
    );
};

export default BlogsList;
