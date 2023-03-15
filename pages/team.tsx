import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../components/Testimonial';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Team = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Team</title>
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
                        <Link href="/career" className="btn capitalize text-white">
                            Join Our Team
                        </Link>
                    </div>
                </div>
                <img src="/assets/images/about-who-bg.png" alt="about-who-bg" className="-bottom-5 ltr:right-0 rtl:left-0 rtl:rotate-y-180 lg:absolute" />
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h4>Our Visionary Leaders</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-1.png" alt="leader-1" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Aditya Patel
                            </h4>
                            <h6 className="text-sm font-bold">Chief Executive Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-2.png" alt="leader-2" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Audrey Ramirez
                            </h4>
                            <h6 className="text-sm font-bold">Chief Operating Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-3.png" alt="leader-3" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                James Robinson
                            </h4>
                            <h6 className="text-sm font-bold">Chief Financial Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-4.png" alt="leader-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Daniel Allen
                            </h4>
                            <h6 className="text-sm font-bold">Chief Marketing Officer</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none lg:py-[100px]">
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

            <Testimonial />
        </div>
    );
};

export default Team;
