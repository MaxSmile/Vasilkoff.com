import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import CounterComponent from '../components/CounterComponent';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { IRootState } from '../store';
import TeamMember from '../components/TeamMember';

const Aboutus = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>


            <section className="relative overflow-hidden pt-14 mt-40 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h6>Who are we?</h6>
                            <h4>We thrive to help our clients have global impact</h4>
                        </div>
                        <p className="pb-10 text-lg font-semibold leading-[30px]">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                            typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </p>
                        <Link href="/contact-us" className="btn capitalize text-primary">
                            Work with us
                        </Link>
                    </div>
                </div>
                <img src="/assets/images/about-who-bg.png" alt="about-who-bg" className="-bottom-5 ltr:right-0 rtl:left-0 rtl:rotate-y-180 lg:absolute" />
            </section>

            <section id="team" className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Meet Our Team</h6>
                        <h4>Ingenious Problem-Solvers</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <TeamMember name="Maxim Vasilkov" position="CBDO" picture="/images/maxim-vasilkov.png" />
                        <TeamMember name="Simon Papazov" position="Managing Director" picture="/images/simon-papazov.png" />
                        <TeamMember name="Anastasia Sarlidou" position="Project Manager" picture="/images/anastasia-sarlidou.png" />
                        <TeamMember name="Irina Vasilkova" position="Graphics Designer" picture="/images/irina-vasilkova.png" />
                    </div>
                </div>
            </section>

            {/* <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading mb-10 text-center">
                        <h4>Our Path Leaders</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-1.png"
                                    alt="path-leaders-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Joseph Gonzalez
                            </h4>
                            <h6 className="text-sm font-bold">Director of Operations</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-2.png"
                                    alt="path-leaders-2"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Gregory Hayes
                            </h4>
                            <h6 className="text-sm font-bold">HR Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-3.png"
                                    alt="path-leaders-3"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Brooke Cagle
                            </h4>
                            <h6 className="text-sm font-bold">Team Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-4.png"
                                    alt="path-leaders-4"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Meysam Jarahkar
                            </h4>
                            <h6 className="text-sm font-bold">Asst. Director Sales</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-5.png"
                                    alt="path-leaders-5"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Joel Muniz
                            </h4>
                            <h6 className="text-sm font-bold">Business Development Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-6.png"
                                    alt="path-leaders-6"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Jakob Owens
                            </h4>
                            <h6 className="text-sm font-bold">Senior Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-7.png"
                                    alt="path-leaders-7"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Jonas Kakaroto
                            </h4>
                            <h6 className="text-sm font-bold">Lead Administrator Networking</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-8.png"
                                    alt="path-leaders-8"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Amy Hirschi
                            </h4>
                            <h6 className="text-sm font-bold">Project Manager</h6>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-t from-white/[56%] to-white/0 py-14 dark:!bg-none lg:py-[100px]">
                <CounterComponent title="Company Facts" />
            </section>



            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>Growth</h6>
                        <h4>140% Growth in last year</h4>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 md:gap-[30px]">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        90%
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Clients saw an increase of more of 90% on sales1
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        10x
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Sales went up more than expected
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        4.4M
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        High engagement rate since day one
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center lg:w-2/3 ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="mb-5">Our Awards</h4>
                        <p className="text-lg leading-[23px]">
                            As the world's leading web & mobile app development company have been privileged to win{' '}
                            <span className="font-semibold text-black dark:text-white">13+ numerous awards</span> for our working process. We’re honored to be a
                            recipient of each of these awards for our hard work & customers loyalty.
                        </p>
                    </div>
                    <div className="grid gap-4 pt-5 sm:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:pt-0">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-1.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-2.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-3.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-4.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-5.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-6.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-7.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-8.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <BlogSlider title1="Blog" title2="Unlock the latest trends/news" />


        </div>
    );
};

export default Aboutus;
