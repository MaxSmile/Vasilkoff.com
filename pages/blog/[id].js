import { useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Error404 from '../404';
import { ProjectorFill } from 'react-bootstrap-icons';
import BlogSlider from '../../components/BlogSlider';

const Blogdetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const blog = blogs[id];
    if (!blog) {
        return <Error404 />;
    }
    return (
        <div>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h6><u><a href="/blog">Blog</a></u>/{id}</h6>
                                <h4 className="!text-white">{blog.title}</h4>
                                <ul className="items-center justify-center pt-6 sm:flex lg:justify-start">
                                    <li className="flex items-center justify-center">
                                        <ProjectorFill />
                                        <span className="px-4 font-semibold sm:text-lg">Maxim Vasilkov</span>
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        March 16, 2023
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        2 mins read
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos='fade-left'
                                data-aos-duration="1000"
                            >
                                <img
                                    src={blog.picture}
                                    alt="blog-detail-hero"
                                    className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                
                <div className="prose max-w-full">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown></div>
                </div>
            </section>
            <BlogSlider title2="Related articles" />
        </div>
    );
};

export default Blogdetail;
