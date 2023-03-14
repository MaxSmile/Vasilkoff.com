import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Blogdetail = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Blog Detail | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h6>Project Management</h6>
                                <h4 className="!text-white">Why is JIRA important for managing projects?</h4>
                                <ul className="items-center justify-center pt-6 sm:flex lg:justify-start">
                                    <li className="flex items-center justify-center">
                                        <img src="/assets/images/sophia-avtar.png" alt="avtar" />
                                        <span className="px-4 font-semibold sm:text-lg">Sophia Reyes</span>
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        June 2, 2021
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        3 mins read
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img
                                    src="/assets/images/blog-detail-hero.png"
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
                    <div className="prose max-w-full dark:prose-invert">
                        <h2>Where does it come from?</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>
                        <p>
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                            source.
                        </p>

                        <h2>Where can I get some?</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                        </p>

                        <h2>Where does it come from?</h2>
                        <ul>
                            <li>Vestibulum hendrerit tortor ac rutrum porta.</li>
                            <li>Donec gravida elit a auctor luctus.</li>
                            <li>Integer iaculis odio id blandit varius.</li>
                        </ul>

                        <h4>What is Lorem Ipsum?</h4>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>

                        <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="group h-[400px] overflow-hidden rounded-[32px] lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-1.png"
                                    alt="blog-detail-1"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[400px] overflow-hidden rounded-[32px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="assets/images/blog-detail-2.png"
                                    alt="blog-detail-2"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <h2>1914 translation by H. Rackham</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>

                        <h2>The standard Lorem Ipsum passage</h2>
                        <p>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                        </p>

                        <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2">
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-3.png"
                                    alt="blog-detail-3"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-4.png"
                                    alt="blog-detail-4"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <h2>Nunc et sem vel diam dignissim</h2>
                        <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of
                            pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                            belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogdetail;
