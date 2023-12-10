import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import Link from 'next/link';

const ProjectSlider = (props: any) => {

    return (
        <section className="py-15 lg:py-[100px]">
            <div className="container">
                <div className="mb-7 flex flex-col items-center justify-center lg:mb-0 lg:flex-row lg:justify-between">
                    <div className="heading text-center lg:text-left ">
                        <h2>{props.title1}</h2>
                        <h3>{props.title2}</h3>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Link
                            href="/portfolio/detail"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                        </Link>
                        <div>
                            <button
                                type="button"
                                className="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                            >
                                <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black dark:text-white"
                                >
                                    <path
                                        d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                            >
                                <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black dark:text-white"
                                >
                                    <path
                                        d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="overflow-x-auto">
                        <ul className="flex gap-8 lg:gap-10 font-bold mb-10 mt-10 lg:mt-0 w-[700px] md:w-auto">
                            <li className="text-secondary"><button type="button">All Work</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Design</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Website</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Mobile App</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Web Application</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Ecommerce</button></li>
                        </ul>
                    </div>  */}
            </div>
            <div className="swiper project-slider px-6">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.project-slider-button-next',
                            prevEl: '.project-slider-button-prev',
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                        dir={ 'ltr'}
                        key={'false'}
                    >
                        <SwiperSlide>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/portfolio/detail" className="absolute top-0 h-full w-full left-0"></Link>
                                <img src="/assets/images/project-2.png" alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h1 className="mb-1 text-black line-clamp-1 dark:text-white">Crypto Game - UX Interface</h1>
                                    <p>Website, App</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/portfolio/detail" className="absolute top-0 h-full w-full left-0"></Link>
                                <img src="/assets/images/project-3.png" alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h1 className="mb-1 text-black line-clamp-1 dark:text-white">Looking for a quiet place</h1>
                                    <p>Website</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/portfolio/detail" className="absolute top-0 h-full w-full left-0"></Link>
                                <img src="/assets/images/project-4.png" alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h1 className="mb-1 text-black line-clamp-1 dark:text-white">WeTour - Travel Hero Illustration</h1>
                                    <p>Website</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/portfolio/detail" className="absolute top-0 h-full w-full left-0"></Link>
                                <img src="/assets/images/project-5.png" alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h1 className="mb-1 text-black line-clamp-1 dark:text-white">Digital Art Guide</h1>
                                    <p>Branding</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/portfolio/detail" className="absolute top-0 h-full w-full left-0"></Link>
                                <img src="/assets/images/project-6.png" alt="Project" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h1 className="mb-1 text-black line-clamp-1 dark:text-white">Frozeverse - 3D and motion design</h1>
                                    <p>Branding, Website, App</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
