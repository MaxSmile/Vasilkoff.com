import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import BlogSlider from '../components/BlogSlider';
import Faq from '../components/Faq';
import LogoSlider from '../components/LogoSlider';
import Testimonial from '../components/Testimonial';

const ModernSaas = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const faqs: any = [
        {
            id: 1,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/modern-saas/client-1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];

    const blogs = [
        {
            id: 1,
            thumbnail: '/assets/images/modern-saas/design.png',
            title: '3 experiments to improve your mobile app funnel',
            excerpt: 'Funnels don’t just provide you with conversion numbers, they provide you with insight into how your users behave.',
            description: '',
            date: 'Dec 15, 2022',
            tag: 'Design',
        },
        {
            id: 2,
            thumbnail: '/assets/images/modern-saas/marketing.png',
            title: 'What’s growth hacking? 8 great books to learn more about it',
            excerpt: 'The use of resource-light and cost-effective digital marketing tactics to help grow and retain an active user base, sell products and...',
            description: '',
            date: 'Dec 25, 2022',
            tag: 'Marketing',
        },
        {
            id: 3,
            thumbnail: '/assets/images/modern-saas/integration.png',
            title: '6 new interesting mobile apps to grow your audience on',
            excerpt: 'Before I get into the advice, here’s a bit about my background and experience with growing audiences for creative work.',
            description: '',
            date: 'Nov 06, 2022',
            tag: 'Integration',
        },
    ];

    return (
        <div>
            <Head>
                <title>Real Estate | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="overflow-x-hidden">
                <section className="bg-black bg-[url(/assets/images/modern-saas/banner-bg.png)] bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px]">
                    <div className="container lg:pt-7">
                        <div className="relative">
                            <div className="pt-14 pb-8 text-center text-white lg:w-3/5 lg:py-20 ltr:lg:text-left rtl:lg:text-right">
                                <div className="mb-10 inline-flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3.5">
                                    <div className="inline-flex items-center gap-1">
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.31233 11.0019C6.57598 10.8428 6.90609 10.8428 7.16975 11.0019L9.88155 12.6387C10.5099 13.0179 11.285 12.4546 11.1182 11.7399L10.3985 8.65535C10.3285 8.35543 10.4304 8.04142 10.6632 7.83976L13.0602 5.76327C13.6149 5.28274 13.3184 4.37155 12.5871 4.30953L9.43297 4.04202C9.12635 4.01602 8.8593 3.82243 8.73921 3.53911L7.5049 0.626969C7.21901 -0.0475323 6.26307 -0.0475302 5.97718 0.626969L4.74286 3.53911C4.62277 3.82243 4.35573 4.01602 4.04911 4.04202L0.894962 4.30953C0.163677 4.37155 -0.13286 5.28273 0.421853 5.76327L2.81888 7.83976C3.05166 8.04142 3.15358 8.35543 3.0836 8.65535L2.36388 11.7399C2.19712 12.4546 2.97221 13.0179 3.60053 12.6387L6.31233 11.0019Z"
                                                fill="#FDB52A"
                                            />
                                        </svg>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.31233 11.0019C6.57598 10.8428 6.90609 10.8428 7.16975 11.0019L9.88155 12.6387C10.5099 13.0179 11.285 12.4546 11.1182 11.7399L10.3985 8.65535C10.3285 8.35543 10.4304 8.04142 10.6632 7.83976L13.0602 5.76327C13.6149 5.28274 13.3184 4.37155 12.5871 4.30953L9.43297 4.04202C9.12635 4.01602 8.8593 3.82243 8.73921 3.53911L7.5049 0.626969C7.21901 -0.0475323 6.26307 -0.0475302 5.97718 0.626969L4.74286 3.53911C4.62277 3.82243 4.35573 4.01602 4.04911 4.04202L0.894962 4.30953C0.163677 4.37155 -0.13286 5.28273 0.421853 5.76327L2.81888 7.83976C3.05166 8.04142 3.15358 8.35543 3.0836 8.65535L2.36388 11.7399C2.19712 12.4546 2.97221 13.0179 3.60053 12.6387L6.31233 11.0019Z"
                                                fill="#FDB52A"
                                            />
                                        </svg>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.31233 11.0019C6.57598 10.8428 6.90609 10.8428 7.16975 11.0019L9.88155 12.6387C10.5099 13.0179 11.285 12.4546 11.1182 11.7399L10.3985 8.65535C10.3285 8.35543 10.4304 8.04142 10.6632 7.83976L13.0602 5.76327C13.6149 5.28274 13.3184 4.37155 12.5871 4.30953L9.43297 4.04202C9.12635 4.01602 8.8593 3.82243 8.73921 3.53911L7.5049 0.626969C7.21901 -0.0475323 6.26307 -0.0475302 5.97718 0.626969L4.74286 3.53911C4.62277 3.82243 4.35573 4.01602 4.04911 4.04202L0.894962 4.30953C0.163677 4.37155 -0.13286 5.28273 0.421853 5.76327L2.81888 7.83976C3.05166 8.04142 3.15358 8.35543 3.0836 8.65535L2.36388 11.7399C2.19712 12.4546 2.97221 13.0179 3.60053 12.6387L6.31233 11.0019Z"
                                                fill="#FDB52A"
                                            />
                                        </svg>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.31233 11.0019C6.57598 10.8428 6.90609 10.8428 7.16975 11.0019L9.88155 12.6387C10.5099 13.0179 11.285 12.4546 11.1182 11.7399L10.3985 8.65535C10.3285 8.35543 10.4304 8.04142 10.6632 7.83976L13.0602 5.76327C13.6149 5.28274 13.3184 4.37155 12.5871 4.30953L9.43297 4.04202C9.12635 4.01602 8.8593 3.82243 8.73921 3.53911L7.5049 0.626969C7.21901 -0.0475323 6.26307 -0.0475302 5.97718 0.626969L4.74286 3.53911C4.62277 3.82243 4.35573 4.01602 4.04911 4.04202L0.894962 4.30953C0.163677 4.37155 -0.13286 5.28273 0.421853 5.76327L2.81888 7.83976C3.05166 8.04142 3.15358 8.35543 3.0836 8.65535L2.36388 11.7399C2.19712 12.4546 2.97221 13.0179 3.60053 12.6387L6.31233 11.0019Z"
                                                fill="#FDB52A"
                                            />
                                        </svg>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.31233 11.0019C6.57598 10.8428 6.90609 10.8428 7.16975 11.0019L9.88155 12.6387C10.5099 13.0179 11.285 12.4546 11.1182 11.7399L10.3985 8.65535C10.3285 8.35543 10.4304 8.04142 10.6632 7.83976L13.0602 5.76327C13.6149 5.28274 13.3184 4.37155 12.5871 4.30953L9.43297 4.04202C9.12635 4.01602 8.8593 3.82243 8.73921 3.53911L7.5049 0.626969C7.21901 -0.0475323 6.26307 -0.0475302 5.97718 0.626969L4.74286 3.53911C4.62277 3.82243 4.35573 4.01602 4.04911 4.04202L0.894962 4.30953C0.163677 4.37155 -0.13286 5.28273 0.421853 5.76327L2.81888 7.83976C3.05166 8.04142 3.15358 8.35543 3.0836 8.65535L2.36388 11.7399C2.19712 12.4546 2.97221 13.0179 3.60053 12.6387L6.31233 11.0019Z"
                                                fill="#FDB52A"
                                            />
                                        </svg>
                                    </div>
                                    <span>
                                        <b>4.9 / 5 </b>ratings
                                    </span>
                                </div>
                                <h2 className="text-3xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                                    <span className="text-secondary">Your website, </span>
                                    <span className="text-primary">growth reimagined</span>
                                </h2>
                                <p className="my-8 text-lg lg:w-3/4">
                                    Plurk is fully equipped with everything you need to build a high performing website for your SaaS.
                                </p>
                                <Link href="" className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                                    Free trial
                                </Link>
                            </div>
                            <div
                                className="top-[70px] w-full pb-7 ltr:right-0 rtl:left-0 rtl:right-auto lg:absolute lg:max-w-[630px] lg:pb-0 xl:ltr:-right-52 xl:rtl:-left-52"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img src="/assets/images/modern-saas/banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-14 dark:bg-gray-dark lg:py-[100px]">
                    <h3 className="mb-10 text-center text-2xl font-bold text-black dark:text-white lg:mb-14">
                        Used and <span className="text-secondary">loved</span> by industry leaders
                    </h3>
                    <LogoSlider />
                </section>

                <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none lg:py-20">
                    <div className="container">
                        <div className="lg:w-1/2">
                            <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h6 className="!text-secondary">OUR FEATURES</h6>
                                <h4>A robust set of features</h4>
                                <p className="mt-4 text-lg font-semibold">
                                    We will help a client's problems to develop the products they have with high quality Change the appearance.
                                </p>
                            </div>
                        </div>
                        <div className="mt-16 grid gap-x-7 gap-y-12 text-lg font-semibold sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.25175 22.8926H2.67813C1.58662 22.8926 0.701782 23.7774 0.701782 24.8689V36.8477C0.701782 37.9392 1.58662 38.8241 2.67813 38.8241H9.25175C10.3433 38.8241 11.2281 37.9392 11.2281 36.8477V24.8689C11.2281 23.7774 10.3433 22.8926 9.25175 22.8926Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M22.936 12.0098H16.3623C15.2708 12.0098 14.386 12.8946 14.386 13.9861V36.8482C14.386 37.9397 15.2708 38.8245 16.3623 38.8245H22.936C24.0275 38.8245 24.9123 37.9397 24.9123 36.8482V13.9861C24.9123 12.8946 24.0275 12.0098 22.936 12.0098Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M36.6202 0.929688H30.0465C28.955 0.929688 28.0702 1.81453 28.0702 2.90604V36.8481C28.0702 37.9396 28.955 38.8244 30.0465 38.8244H36.6202C37.7117 38.8244 38.5965 37.9396 38.5965 36.8481V2.90604C38.5965 1.81453 37.7117 0.929688 36.6202 0.929688Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">Realtime analytics</h3>
                                    <p className="line-clamp-3">Real-time analytics is the discipline that applies logic and mathematics to data....</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.01127 0.318359H0.938767C0.4203 0.318359 0 0.738659 0 1.25713V35.0798C0 35.5983 0.4203 36.0186 0.938767 36.0186H5.01127C5.52973 36.0186 5.95003 35.5983 5.95003 35.0798V1.25713C5.95003 0.738659 5.52973 0.318359 5.01127 0.318359Z"
                                            fill="#B476E5"
                                        />
                                        <mask id="mask0_733_15588" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="0" width="28" height="23">
                                            <path
                                                d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                                fill="#01B969"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_733_15588)">
                                            <path
                                                d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                                fill="#47BDFF"
                                            />
                                            <path d="M34.2428 10.6993L22.2819 22.6602L34.2428 34.621L46.2036 22.6602L34.2428 10.6993Z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">User journey</h3>
                                    <p className="line-clamp-3">A customer journey map is a visual representation of a customer’s experience with a company.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.1366 3.02539C22.5757 3.02539 22.9135 3.38362 22.9135 3.8101V9.30304C22.9135 12.4248 25.4639 14.9836 28.5547 15.0007C29.8384 15.0007 30.8518 15.0178 31.6287 15.0178L31.9165 15.0165C32.4357 15.0125 33.1347 15.0007 33.7399 15.0007C34.1622 15.0007 34.5 15.3418 34.5 15.7683V29.4836C34.5 33.7142 31.1051 37.143 26.9164 37.143H13.4721C9.08067 37.143 5.5 33.5436 5.5 29.1083V10.7189C5.5 6.48833 8.91173 3.02539 13.1173 3.02539H22.1366ZM23.9438 25.0312H14.7557C14.0632 25.0312 13.4889 25.5942 13.4889 26.2936C13.4889 26.993 14.0632 27.573 14.7557 27.573H23.9438C24.6363 27.573 25.2105 26.993 25.2105 26.2936C25.2105 25.5942 24.6363 25.0312 23.9438 25.0312ZM20.4645 16.5018H14.7557C14.0632 16.5018 13.4889 17.0818 13.4889 17.7812C13.4889 18.4807 14.0632 19.0436 14.7557 19.0436H20.4645C21.1569 19.0436 21.7312 18.4807 21.7312 17.7812C21.7312 17.0818 21.1569 16.5018 20.4645 16.5018ZM25.3747 4.57092C25.3747 3.83568 26.2581 3.47062 26.7631 4.00116C28.5889 5.91856 31.7794 9.27064 33.5629 11.1437C34.0561 11.6606 33.6947 12.5186 32.9836 12.5203C31.5953 12.5254 29.9587 12.5203 28.7814 12.5084C26.9134 12.5084 25.3747 10.9543 25.3747 9.06764V4.57092Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M20.4648 16.502H14.756C14.0635 16.502 13.4893 17.082 13.4893 17.7814C13.4893 18.4808 14.0635 19.0438 14.756 19.0438H20.4648C21.1573 19.0438 21.7315 18.4808 21.7315 17.7814C21.7315 17.082 21.1573 16.502 20.4648 16.502Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M23.9441 25.0312H14.756C14.0635 25.0312 13.4893 25.5942 13.4893 26.2937C13.4893 26.9931 14.0635 27.573 14.756 27.573H23.9441C24.6366 27.573 25.2109 26.9931 25.2109 26.2937C25.2109 25.5942 24.6366 25.0312 23.9441 25.0312Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.7627 4.00153C26.2577 3.471 25.3743 3.83606 25.3743 4.57129V9.068C25.3743 10.9547 26.913 12.5087 28.7811 12.5087C29.9583 12.5207 31.5949 12.5258 32.9833 12.5207C33.6943 12.519 34.0558 11.6609 33.5626 11.1441C32.6721 10.2089 31.4309 8.905 30.1839 7.59513C28.9333 6.28142 27.6769 4.96162 26.7627 4.00153Z"
                                            fill="#47BDFF"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">Automated reports</h3>
                                    <p className="line-clamp-3">
                                        Let’s take a deeper look into what report automation is, why your agency should automate its..
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.4885 2.06836H5.20114C3.85481 2.06836 2.75861 3.16457 2.75861 4.51089V7.52888C2.75861 9.7887 3.77665 11.8864 5.5509 13.2844L14.8765 20.6316H25.8122L35.1378 13.2844C36.9129 11.8864 37.931 9.78774 37.931 7.52888V4.51089C37.931 3.16457 36.8348 2.06836 35.4885 2.06836Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M15.46 23.5625V35.7752C15.46 36.3242 15.7668 36.8274 16.2543 37.0785C16.4664 37.187 16.696 37.2407 16.9255 37.2407C17.2255 37.2407 17.5244 37.1488 17.7775 36.9681L24.6166 32.0831C25.0015 31.8075 25.2302 31.363 25.2302 30.8901V23.5625H15.46Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">Funnel optimization</h3>
                                    <p className="line-clamp-3">Real-time analytics is the discipline that applies logic and mathematics to data....</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.0335 14.25H7.50748C4.44768 14.25 1.96722 16.7305 1.96722 19.7903V32.3163C1.96722 35.3761 4.44768 37.8566 7.50748 37.8566H20.0335C23.0933 37.8566 25.5738 35.3761 25.5738 32.3163V19.7903C25.5738 16.7305 23.0933 14.25 20.0335 14.25Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M31.8368 2.44531H19.3108C16.251 2.44531 13.7705 4.92577 13.7705 7.98557V20.5116C13.7705 23.5714 16.251 26.0519 19.3108 26.0519H31.8368C34.8966 26.0519 37.3771 23.5714 37.3771 20.5116V7.98557C37.3771 4.92577 34.8966 2.44531 31.8368 2.44531Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M25.5738 26.0533H19.3108C16.251 26.0533 13.7705 23.5728 13.7705 20.513V14.25H20.0335C23.0933 14.25 25.5738 16.7305 25.5738 19.7903V26.0533Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">A/B Testing</h3>
                                    <p className="line-clamp-3">A customer journey map is a visual representation of a customer’s experience with a company.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M23.5351 15.8717C23.2033 15.3029 22.5943 14.9531 21.9358 14.9531H11.102C10.4434 14.9531 9.83448 15.3029 9.50267 15.8717L4.10235 25.1294C3.76606 25.706 3.76606 26.4188 4.10235 26.9953L9.50267 36.253C9.83448 36.8218 10.4434 37.1716 11.102 37.1716H21.9358C22.5943 37.1716 23.2033 36.8218 23.5351 36.253L28.9354 26.9953C29.2717 26.4188 29.2717 25.706 28.9354 25.1294L23.5351 15.8717ZM16.5189 31.2741C19.4351 31.2741 21.7992 28.91 21.7992 25.9938C21.7992 23.0776 19.4351 20.7135 16.5189 20.7135C13.6027 20.7135 11.2386 23.0776 11.2386 25.9938C11.2386 28.91 13.6027 31.2741 16.5189 31.2741Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M30.6374 3.67673C30.386 3.25889 29.9245 3.00195 29.4255 3.00195H21.2154C20.7164 3.00195 20.2549 3.25889 20.0034 3.67673L15.911 10.4771C15.6561 10.9006 15.6561 11.4242 15.911 11.8477L20.0034 18.6481C20.2549 19.066 20.7164 19.3229 21.2154 19.3229H29.4255C29.9245 19.3229 30.386 19.066 30.6374 18.6481L34.7299 11.8477C34.9847 11.4242 34.9847 10.9006 34.7299 10.4771L30.6374 3.67673ZM25.3205 14.9908C27.5304 14.9908 29.3219 13.2542 29.3219 11.1121C29.3219 8.96989 27.5304 7.23331 25.3205 7.23331C23.1105 7.23331 21.3189 8.96989 21.3189 11.1121C21.3189 13.2542 23.1105 14.9908 25.3205 14.9908Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M25.5491 19.3244L23.5351 15.8717C23.2032 15.3029 22.5943 14.9531 21.9358 14.9531H17.7791L20.0036 18.6496C20.255 19.0675 20.7165 19.3244 21.2155 19.3244H25.5491Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-white">Integrations</h3>
                                    <p className="text-lg font-semibold line-clamp-3">
                                        Let’s take a deeper look into what report automation is, why your agency should automate its..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-t from-white/[55%] to-transparent py-8 dark:bg-white/[0.03] dark:bg-none lg:py-20 px-5">
                    <div className="relative mx-auto max-w-[1440px] bg-black pt-14 rounded-[32px]">
                        <img src="/assets/images/modern-saas/perfomance-design.svg" alt="" className="absolute bottom-0 ltr:right-0 rtl:left-0" />
                        <img src="/assets/images/modern-saas/dollers-icon.svg" alt="" className="absolute top-0 ltr:right-14 rtl:left-14" />
                        <div className="container">
                            <div className="relative">
                                <img src="/assets/images/modern-saas/perfomance-doller-icon.svg" alt="" className="absolute bottom-0 ltr:left-0 rtl:right-0" />
                                <div className="grid gap-4 lg:grid-cols-2">
                                    <div className="pt-28 lg:pb-10 lg:pt-0">
                                        <div className="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                            <h6 className="!text-secondary">WHAT WE DO</h6>
                                            <h4 className="pb-4 leading-normal !text-white lg:!leading-[50px]">Increase your performance</h4>
                                            <p className="text-lg font-semibold xl:w-11/12">
                                                We take step wise for your every platform. We helping to client with our talented expert.
                                            </p>
                                        </div>
                                        <ul className="space-y-8 text-lg font-semibold text-white">
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Grow your product</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Organize your workflow</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Discover a new way with us.</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Embedded Analytics</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pb-20 lg:pt-20 lg:pb-8" data-aos="fade-up" data-aos-duration="1000">
                                        <img src="/assets/images/modern-saas/perfomance-img.png" alt="" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-14 dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent lg:py-20">
                    <div className="container">
                        <div className="relative">
                            <div className="lg:w-2/3">
                                <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                                    <h6 className="!text-secondary">THOUSANDS OF BENIFITS</h6>
                                    <h4 className="">We make it easy to track all user analytics</h4>
                                    <p className="mt-4 text-lg font-semibold">
                                        We analyze step wise for your every platform. You will get best reports and analytics. We helping to client with our
                                        talented expert.
                                    </p>
                                </div>
                                <ul className="mt-14 space-y-14 lg:w-2/3">
                                    <li className="flex gap-5 sm:gap-8">
                                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary p-2 sm:h-[72px] sm:w-[72px]">
                                            <img src="/assets/images/modern-saas/tracking-icon.svg" alt="" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[22px] font-extrabold text-black dark:text-white">Advanced tracking</h4>
                                            <p className="pt-4 text-lg font-semibold">
                                                Use our analytics, reporting, and AI-assisted optimization tools to monitor trends, track.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-5 sm:gap-8">
                                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-secondary p-2 sm:h-[72px] sm:w-[72px]">
                                            <img src="assets/images/modern-saas/monitoring-icon.svg" alt="" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[22px] font-extrabold text-black dark:text-white">In-depth monitoring</h4>
                                            <p className="pt-4 text-lg font-semibold">Time Tracking is never been easier. Just let the stopwatch run.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                src="/assets/images/modern-saas/benifits-img.png"
                                alt=""
                                className="top-0 mx-auto mt-10 h-full ltr:-right-[125px] rtl:-left-[125px] lg:absolute lg:mt-0"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-14 lg:py-20">
                    <div className="container">
                        <div className="relative grid items-center gap-y-10 lg:grid-cols-2 lg:gap-4">
                            <img
                                src="/assets/images/modern-saas/analysis-icon.svg"
                                alt=""
                                className="absolute top-0 block w-32 ltr:right-0 rtl:left-0 dark:hidden sm:w-72 lg:-top-16 lg:ltr:right-36 lg:rtl:left-36"
                            />
                            <img
                                src="/assets/images/modern-saas/analysis-icon-dark.svg"
                                alt=""
                                className="absolute top-0 hidden w-32 ltr:right-0 rtl:left-0 dark:block sm:w-72 lg:-top-16 lg:ltr:right-36 lg:rtl:left-36"
                            />
                            <div
                                className="ltr:pr-24 rtl:pl-24 sm:ltr:pr-60 sm:rtl:pl-60 lg:ltr:pr-24 lg:rtl:pl-24"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <img src="/assets/images/modern-saas/integration-img.png" alt="" />
                            </div>
                            <div className="heading mb-5 text-center ltr:lg:text-right rtl:lg:text-left">
                                <h6 className="!text-secondary">INTEGRATIONS</h6>
                                <h4 className="">Integrated with all tools you already know and love</h4>
                                <p className="mt-4 text-lg font-semibold">
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy
                                    foster collaborative thinking
                                </p>
                                <Link
                                    href="#"
                                    className="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-primary transition hover:text-secondary md:mt-12"
                                >
                                    <span>Learn More</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white/50 py-14 dark:bg-white/[0.03] lg:py-20">
                    <div className="container">
                        <div className="heading mb-5 text-center">
                            <h6 className="!text-secondary">Drive more lead with Plurk</h6>
                            <h4 className="">Our response management having automatically track customer sentiment</h4>
                        </div>
                        <div
                            className="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2"
                            style={{
                                background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)',
                            }}
                        >
                            <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="">Tenancy Optimization</h4>
                                <p className="mt-6 text-lg font-semibold">
                                    Optimize your SaaS solutions’ tenancy by leveraging our deep understanding of the unit economics of SaaS products. We can
                                    take existing single-tenant applications and securely deliver a cost optimized multi-tenant solution.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-primary transition hover:text-secondary lg:mt-14"
                                >
                                    <span>Learn More</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                                <img src="/assets/images/modern-saas/optimization.png" alt="" className="rounded-2xl" />
                            </div>
                        </div>
                        <div
                            className="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2"
                            style={{
                                background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(180, 118, 229, 0.3) 0%, rgba(180, 118, 229, 0) 100%)',
                            }}
                        >
                            <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="">Migrate and Modernize</h4>
                                <p className="mt-6 text-lg font-semibold">
                                    Migrating a legacy system involves taking your old infrastructure and transferring it to the cloud. This does provide
                                    potential cost and efficiency benefits. However, it fails to give your application a growth perspective.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-secondary transition hover:text-primary lg:mt-14"
                                >
                                    <span>Learn More</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                                <img src="/assets/images/modern-saas/migrate-modernize.png" alt="" className="rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-14 text-center lg:py-20">
                    <div className="container">
                        <div className="heading mb-12 lg:mb-20">
                            <h6 className="!text-secondary">Our Services</h6>
                            <h4 className="">The Best Solutions To Your Business</h4>
                        </div>
                        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/modern-design.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-white">Modern Design</h4>
                                <p className="mt-6 mb-8 text-lg font-semibold line-clamp-4">
                                    Design and user experience are among the essential aspects of SaaS. Even if you are just entering the market and no one
                                    knows you,
                                </p>
                                <Link href="/services-detail" className="text-lg font-extrabold text-secondary transition hover:text-primary">
                                    Read More +
                                </Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/magic-pagebuilder.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-white">Magic Pagebuilder</h4>
                                <p className="mt-6 mb-8 text-lg font-semibold line-clamp-4">
                                    Design and simplicity are at the core of our website builder. Easily create, customize, and promote a stunning website
                                    that's search...
                                </p>
                                <Link href="/services-detail" className="text-lg font-extrabold text-primary transition hover:text-secondary">
                                    Read More +
                                </Link>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/support-icon.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-white">Support 24/7</h4>
                                <p className="mt-6 mb-8 text-lg font-semibold line-clamp-4">
                                    24/7 support model ensures that a customer is able to get their issue resolved no matter what day or time it is.
                                </p>
                                <Link href="/services-detail" className="text-lg font-extrabold text-secondary transition hover:text-primary">
                                    Read More +
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-[60px] dark:bg-gray-dark px-5">
                    <Testimonial
                        className="mx-auto max-w-[1440px] py-14 dark:!bg-black md:py-20 rounded-[32px]"
                        showTitle={true}
                        type="modern-saas"
                        feedbacks={feedbacks}
                    />
                </section>

                <Faq showTitle={true} type="modern-saas" queries={faqs} />

                <BlogSlider
                    title1="Blog"
                    title2="Unlock the latest trends/news"
                    className="dark:bg-white/[0.03] lg:py-20"
                    type="modern-saas"
                    blogs={blogs}
                ></BlogSlider>

                <section className="relative bg-black py-14 lg:py-24">
                    <img src="/assets/images/modern-saas/newsletter.svg" alt="" className="absolute right-0 bottom-0 hidden xl:inline-block" />
                    <img src="/assets/images/modern-saas/email.svg" alt="" className="absolute left-40 bottom-0 hidden md:left-1/2 xl:inline-block" />
                    <div className="container">
                        <div className="flex flex-col justify-between gap-5 md:flex-row">
                            <div className="relative text-center md:w-1/2 ltr:md:text-left rtl:md:text-right xl:pr-12">
                                <img src="/assets/images/modern-saas/icon-1.svg" alt="" className="absolute -left-12 -top-12" />
                                <h2 className="relative mb-3 text-3xl font-black text-white md:text-4xl xl:text-6xl">
                                    Email Newsletter
                                    <img src="/assets/images/modern-saas/icon-2.svg" alt="" className="absolute right-8 -bottom-5" />
                                </h2>
                                <p className="text-2xl font-semibold">get updates & more</p>
                                <form className="relative mt-14">
                                    <div className="absolute top-1/2 -translate-y-1/2 ltr:pl-4 rtl:pr-4">
                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24 10.4091C24 14.8446 24 17.0623 22.6527 18.4403C21.3054 19.8182 19.1369 19.8182 14.8 19.8182H10.2C5.86308 19.8182 3.69462 19.8182 2.34731 18.4403C1 17.0623 1 14.8446 1 10.4091C1 5.9736 1 3.75586 2.34731 2.37793C3.69462 1 5.86308 1 10.2 1H14.8C19.1369 1 21.3054 1 22.6527 2.37793C23.4038 3.14616 23.7362 4.17543 23.8833 5.70455"
                                                stroke="#08111F"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                            />
                                            <path
                                                d="M19.3999 5.70508L16.9172 7.82104C14.8051 9.62115 13.749 10.5212 12.4999 10.5212C11.7532 10.5212 11.0755 10.1996 10.1999 9.55627M5.59991 5.70508L6.63491 6.58718L7.66991 7.46928"
                                                stroke="#08111F"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="w-full rounded-xl py-4 font-semibold outline-0 ltr:pl-14 ltr:pr-32 rtl:pr-14 rtl:pl-32 lg:py-6 lg:text-lg"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 -translate-y-1/2 rounded-md bg-secondary px-3 py-1.5 font-bold text-white transition hover:bg-primary ltr:right-4 rtl:left-4 lg:py-2 lg:text-lg"
                                    >
                                        subscribe
                                    </button>
                                </form>
                            </div>
                            <div data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <img src="/assets/images/modern-saas/oc-target.svg" alt="" className="mx-auto w-52 rtl:rotate-y-180 lg:w-80" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ModernSaas;
