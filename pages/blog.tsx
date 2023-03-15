import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';

const Blog = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <section className="bg-gradient-to-t mt-20 from-white/70 to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="heading text-center text-pripary"><h1>Blog</h1></div>
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-1.png" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">UI/UX Design</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Simple & constructive methods to improve your visual/UI design
                                    </h5>
                                    <p className="line-clamp-4">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-2.png" alt="blog-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Project Management</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Why is JIRA important for managing projects?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards
                                        with sprint planning and issue time estimation capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-3.png" alt="blog-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SEO Marketing</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        What is SEO (Search Engine Optimization)?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web
                                        page from search engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-1.png" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">UI/UX Design</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Simple & constructive methods to improve your visual/UI design
                                    </h5>
                                    <p className="line-clamp-4">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-2.png" alt="blog-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Project Management</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Why is JIRA important for managing projects?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards
                                        with sprint planning and issue time estimation capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-3.png" alt="blog-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SEO Marketing</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        What is SEO (Search Engine Optimization)?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web
                                        page from search engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-1.png" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">UI/UX Design</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Simple & constructive methods to improve your visual/UI design
                                    </h5>
                                    <p className="line-clamp-4">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-2.png" alt="blog-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Project Management</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Why is JIRA important for managing projects?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards
                                        with sprint planning and issue time estimation capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-3.png" alt="blog-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SEO Marketing</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        What is SEO (Search Engine Optimization)?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web
                                        page from search engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-1.png" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">UI/UX Design</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Simple & constructive methods to improve your visual/UI design
                                    </h5>
                                    <p className="line-clamp-4">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-2.png" alt="blog-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Project Management</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Why is JIRA important for managing projects?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards
                                        with sprint planning and issue time estimation capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/blog-3.png" alt="blog-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SEO Marketing</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        What is SEO (Search Engine Optimization)?
                                    </h5>
                                    <p className="line-clamp-4">
                                        Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web
                                        page from search engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
