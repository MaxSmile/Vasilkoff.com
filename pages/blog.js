import Head from 'next/head';
import {blogs} from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Blog = () => {

    const keys = Object.keys(blogs);

    let hasPart = keys.map((key) => {
        let blog=blogs[key];
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
                <title>Blog</title>
                
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
                    
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

                        {keys.map((item, index) => (
                            <BlogCard key={index} blog={blogs[item]} slug={item}/>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
