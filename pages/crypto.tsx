//import Testimonial from '../components/Testimonial';
//import Faq from '../components/Faq';
import CountUp from 'react-countup';
//import dynamic from 'next/dynamic';
//const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Link from 'next/link';
import Head from 'next/head';

import { CheckCircle } from 'react-bootstrap-icons';
import AIContacts from '../components/AIContacts';

const Crypto = (props: any) => {
    // success chart

    const blsh = [
        { number: 100, title: "Projects", suffix: "+", prefix: "" },
        { number: 8, title: "Own products", suffix: "", prefix: "" },
        { number: 36, title: "Crypto assets", suffix: "", prefix: "" },
        { number: 15, title: "Total apps downloads", suffix: "M", prefix: "" }
    ];

    return (
        <>
            <Head>
                <title>Drive Your Crypto Startup Forward with Tailored Blockchain Solutions - Vasilkoff</title>
            </Head>
            <div className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20" />
                    <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" className="absolute right-0 -top-4" />
                    <div className="container">
                        <div className="relative flex flex-col items-center bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat lg:flex-row">
                            <div className="flex-1 py-10 text-center text-white lg:text-left">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                    Accelerating Your <span className="italic text-[#1c62ff]">Crypto Startup</span> with{' '}
                                    <span className="italic text-[#78fefe]">Blockchain Solutions</span>
                                </h2>
                                <p className="my-5 text-lg lg:my-8">
                                    Unlock the potential of blockchain for your startup, enhancing user experience, scalability, and security.
                                </p>
                                <Link href="contact-us" type="button" className="btn mx-auto border-[#78fefe] hover:bg-[#1c62ff] mt-2 block bg-white py-[18px] px-8 lg:mx-0">
                                    Discover Our Services
                                </Link>
                            </div>

                            <div>
                                <img
                                    src="/assets/images/crypto/crypto-banner.png"
                                    alt="crypto-banner"
                                    className="mx-auto w-full max-w-[560px]"
                                    data-aos='fade-left'
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="pt-12">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-[18px] bg-white p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F7931A]">
                                        <svg role="presentation"  width="30" height="30" viewBox="0 0 97 128" fill="none"  >
                                            <path
                                                d="M47.8917 0.84375C51.5534 1.72875 55.205 2.65708 58.8567 3.58375C57.39 9.46875 55.92 15.3538 54.4534 21.2371C57.3917 21.8954 60.3217 22.5871 63.2434 23.3171C64.7017 17.4654 66.1567 11.6138 67.62 5.76375C71.28 6.65375 74.9367 7.56708 78.5884 8.49708C77.0934 14.5038 75.5934 20.5088 74.0967 26.5154C79.7384 28.5038 85.385 30.9154 89.935 34.8921C92.2167 36.9204 94.1434 39.4138 95.2267 42.2888C96.335 45.1554 96.5517 48.3071 96.1434 51.3371C95.7484 54.3154 94.9234 57.2754 93.4084 59.8854C92.235 61.9138 90.63 63.6938 88.6984 65.0254C86.7117 66.4004 84.4267 67.3038 82.0817 67.8554C84.7117 69.2271 87.2167 70.9021 89.275 73.0554C90.9367 74.7804 92.2584 76.8471 93.045 79.1154C94.4984 83.2638 94.1 87.8154 92.9384 91.9838C91.75 96.2071 89.9234 100.354 86.9634 103.644C84.9617 105.894 82.4367 107.669 79.645 108.802C75.7634 110.415 71.505 110.892 67.33 110.845C62.6667 110.809 58.04 110.12 53.4634 109.284C51.9484 115.35 50.4334 121.417 48.9217 127.485C45.27 126.549 41.61 125.639 37.95 124.739C39.4434 118.759 40.9367 112.779 42.43 106.799C39.5134 106.047 36.5984 105.289 33.6867 104.52C32.1867 110.532 30.69 116.545 29.19 122.559C25.54 121.635 21.8867 120.727 18.2334 119.822C19.7434 113.745 21.2584 107.672 22.7717 101.597C15.43 99.6421 8.04669 97.8454 0.671692 96.0171C2.48836 91.8304 4.30169 87.6421 6.12169 83.4571C8.39836 84.0471 10.6734 84.6504 12.9567 85.2188C14.1034 85.4704 15.31 85.7938 16.4767 85.4638C17.8534 85.0788 18.85 83.8254 19.2134 82.4821C21.5717 73.0121 23.9334 63.5438 26.2984 54.0754C26.6517 54.1571 27.0067 54.2354 27.3634 54.3038C27.0167 54.1921 26.6684 54.0888 26.32 53.9888C27.945 47.4471 29.5767 40.9088 31.21 34.3704C31.6817 32.8854 31.4217 31.2021 30.6267 29.8737C29.8584 28.6054 28.5317 27.7738 27.145 27.3254C24.27 26.3854 21.2934 25.8071 18.355 25.1054C19.3234 21.1988 20.2967 17.2921 21.2717 13.3871C25.36 14.3771 29.435 15.4187 33.5167 16.4304C35.4167 16.8687 37.2717 17.4704 39.18 17.8787C40.5817 18.2237 41.9934 18.5254 43.4017 18.8454C44.8967 12.8438 46.395 6.84375 47.8917 0.84375ZM51.4984 34.2071C49.6734 41.5054 47.8567 48.8054 46.035 56.1038C49.115 56.9088 52.1867 57.7688 55.3234 58.3338C58.7767 58.9821 62.3367 59.3438 65.8317 58.8254C68.3517 58.4388 70.9034 57.4004 72.55 55.3804C74.1384 53.4254 74.84 50.8338 74.7484 48.3404C74.655 45.9521 73.4584 43.7171 71.745 42.0904C69.3984 39.8238 66.3767 38.4288 63.35 37.3154C59.4967 35.9371 55.4834 35.1004 51.4984 34.2071ZM43.2784 67.1554C41.2717 75.2104 39.26 83.2637 37.2534 91.3187C44.21 93.1071 51.2534 95.1304 58.505 94.9421C61.7567 94.8304 65.1984 94.2188 67.8 92.1304C70.1834 90.2454 71.335 87.1538 71.375 84.1771C71.405 82.0988 70.6867 80.0454 69.4517 78.3838C67.8317 76.1971 65.5517 74.6021 63.1734 73.3371C56.9684 70.0904 50.0334 68.7404 43.2784 67.1554Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                    <h2 className="text-lg font-bold text-black dark:text-white">BTC</h2>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        BITCON
                                    </span>
                                </div>
                                <div>
                                    <svg role="presentation"  width="48" height="48" viewBox="0 0 48 48" fill="none"  >
                                        <path
                                            d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                                            stroke="#12AF97"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-bold leading-[25px] text-black dark:text-white">$56,623.54</h3>
                                    <h2 className="mt-2 text-lg font-semibold text-[#12AF97]">1.41%</h2>
                                </div>
                                <div>
                                    <ReactApexChart series={successChartSeries} options={successChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#345d9d]">
                                        <svg role="presentation"  width="30" height="30" viewBox="0 0 20 20" fill="none"  >
                                            <g clipPath="url(#clip0_1_209)">
                                                <path d="M10.4628 12.4716L5.25708 9.99516L10.4628 19.0926L15.6687 9.99516L10.4628 12.4716Z" fill="white" />
                                                <path d="M15.1018 8.14969L10.4628 0.0926056L5.81866 8.15897L10.4628 5.95589L15.1018 8.14969Z" fill="white" />
                                                <path d="M6.22125 9.20426L10.4629 11.2134L14.7116 9.20092L10.4629 7.19194L6.22125 9.20426Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_209">
                                                    <rect width="19" height="19" fill="white" transform="translate(0.952393 0.0926056)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <h2 className="text-lg font-bold text-black dark:text-white">ETH</h2>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        ETHEREUM
                                    </span>
                                </div>
                                <svg role="presentation"  width="48" height="48" viewBox="0 0 48 48" fill="none"  >
                                    <path
                                        d="M31.0208 27.0264L24.0208 33.0078M24.0208 33.0078L17.0208 27.0264M24.0208 33.0078V14.0078"
                                        stroke="#FF0000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-bold leading-[25px] text-black dark:text-white">$4,267.90</h3>
                                    <h2 className="mt-2 text-lg font-semibold text-[#FF0000]">-2.22%</h2>
                                </div>
                                <div>
                                    <ReactApexChart series={dangerChartSeries} options={dangerChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F3BA2F]">
                                        <svg role="presentation"  width="30" height="30" viewBox="0 0 30 30" fill="none"  >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15 6.77988L9.17344 12.6059V12.6053L5.78379 9.21562L15 0L24.2186 9.21855L20.8283 12.6082L15 6.77988ZM3.39023 11.6092L0 15L3.38965 18.3885L6.77988 15L3.39023 11.6092ZM15 23.2189L9.17344 17.3936V17.393L5.7791 20.7779L5.78379 20.7832L15 30L24.2203 20.7785L20.8283 17.3906L15 23.2189ZM26.6086 11.6104L23.2189 15L26.6104 18.3896L30 15L26.6086 11.6104ZM15 11.5591L18.4371 15.0015L18.4365 15.0026H18.4395L15 18.4421L11.5623 15.005L11.5576 15.0003L11.5623 14.9956L12.1641 14.3938L12.457 14.1009L15 11.5591Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                    <h2 className="text-lg font-bold text-black dark:text-white">BNB</h2>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        BINANCE
                                    </span>
                                </div>
                                <div>
                                    <svg role="presentation"  width="48" height="48" viewBox="0 0 48 48" fill="none"  >
                                        <path
                                            d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                                            stroke="#12AF97"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-bold leading-[25px] text-black dark:text-white">$587.74</h3>
                                    <h2 className="mt-2 text-lg font-semibold text-[#12AF97]">0.82%</h2>
                                </div>
                                <div>
                                    <ReactApexChart series={successChartSeries} options={successChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#53ae94]">
                                        <svg role="presentation"  width="30" height="30" viewBox="0 0 212 195" fill="none"  >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M127.19 104.8C125.99 104.89 119.79 105.26 105.96 105.26C94.9604 105.26 87.1504 104.93 84.4104 104.8C41.9004 102.93 10.1703 95.53 10.1703 86.67C10.1703 77.81 41.9004 70.42 84.4104 68.52V97.43C87.1904 97.63 95.1503 98.1 106.15 98.1C119.35 98.1 125.96 97.55 127.15 97.44V68.54C169.57 70.43 201.23 77.83 201.23 86.67C201.23 95.51 169.58 102.91 127.15 104.79L127.19 104.8ZM127.19 65.55V39.68H186.39V0.22998H25.2104V39.68H84.4003V65.54C36.2903 67.75 0.110352 77.28 0.110352 88.7C0.110352 100.12 36.2903 109.64 84.4003 111.86V194.76H127.18V111.83C175.18 109.62 211.3 100.1 211.3 88.69C211.3 77.28 175.21 67.76 127.18 65.54L127.19 65.55Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </Link>
                                    <h2 className="text-lg font-bold text-black dark:text-white">USDT</h2>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        TETHER
                                    </span>
                                </div>
                                <div>
                                    <svg role="presentation"  width="48" height="48" viewBox="0 0 48 48" fill="none"  >
                                        <path
                                            d="M31.0208 27.0264L24.0208 33.0078M24.0208 33.0078L17.0208 27.0264M24.0208 33.0078V14.0078"
                                            stroke="#FF0000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="item-center flex justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-bold leading-[25px] text-black dark:text-white">$0.9998</h3>
                                    <h2 className="mt-2 text-lg font-semibold text-[#FF0000]">-0.03%</h2>
                                </div>
                                <div>
                                    <ReactApexChart series={dangerChartSeries} options={dangerChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-12 lg:pt-24">
                <div className="container">
                    <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
                        <div className="text-center md:text-left">
                            <h1 className="mb-3 text-lg font-extrabold text-primary sm:mb-4">ABOUT US</h1>
                            <h2 className="max-w-[457px] text-2xl font-extrabold text-black sm:text-3xl lg:text-[40px] lg:!leading-[50px]">
                                You do the business, we’ll handle the money.
                            </h2>
                            <p className="mt-[18px] max-w-[522px] text-lg font-semibold">
                                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with
                                hundreds of credit cards on the market.
                            </p>
                            <button type="button" className="btn mt-7 ">
                                Get Started
                            </button>
                        </div>
                        <div>
                            <img src="/assets/images/crypto/crypto-about-img.png" className="w-full max-w-[550px]" alt="crypto-about-img" />
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
                        <div className="heading flex-1">
                            <div className="text-center lg:text-left">
                                <h1>Our Specialized Services</h1>
                                <h2>Smart Contracts Testing</h2>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                Our approach to testing smart contracts is rigorous and comprehensive, ensuring your blockchain solutions are secure and reliable.
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We utilize unit testing to ensure each component of your smart contract operates correctly.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We leverage automatic audit tools to quickly identify potential vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="heading flex-1">
                            <div className="text-center lg:text-left">
                                <h1>Our Advanced Techniques</h1>
                                <h2>Smart Contracts Security</h2>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                Our focus is to ensure your smart contracts are secure and trustworthy, to give you the best outcomes.
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We conduct thorough internal and external audits to ensure comprehensive security.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        Our AI-driven tools assist in identifying smart contract anomalies and potential security breaches.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-12 lg:pb-24">
                <div className="container">
                    <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
                        <div className="heading flex-1">
                            <div className="text-center lg:text-left">
                                <h1>Exploring the Potential</h1>
                                <h2>Navigating the Regulatory Landscape</h2>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                Our expertise in the regulatory landscape of blockchain gaming can be an invaluable asset for your startup.
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We assist startups to navigate compliance without compromising on vision.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We understand the evolving regulatory landscape and help you stay compliant.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="heading flex-1">
                            <div className="text-center lg:text-left">
                                <h1>Our Commitment</h1>
                                <h2>Securing Your Startup's Future</h2>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                We're committed to supporting your blockchain startup while navigating regulatory challenges.
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We provide ongoing support and updates to help you adapt to regulatory changes.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <CheckCircle className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos='fade-left' data-aos-duration="1000">
                                        We deliver insights on the regulatory environment to guide your strategic decision-making.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray py-12 lg:py-24">
                <div className="bg-[url(/assets/images/crypto/background-img.png)] bg-cover bg-center bg-no-repeat">

                    <div className="container text-white">
                        <div className="heading text-center">
                            <h1>Your Crypto Startup Success Starts Here</h1>
                            <h2 className="!text-white">You focus on the vision, we'll provide the blockchain solutions.</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 sm:border-r"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Expert Blockchain Development</h2>
                                    <p className="mt-2.5 font-semibold">Our team brings deep expertise in blockchain game development, ready to transform your unique ideas into reality.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 lg:border-r"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Engaging User Experiences</h2>
                                    <p className="mt-2.5 font-semibold">We excel in creating engaging user experiences, balancing the complexities of blockchain technology with seamless design.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 sm:border-r lg:border-r-0"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Scalable Solutions</h2>
                                    <p className="mt-2.5 font-semibold">We develop scalable blockchain solutions capable of handling high transaction volumes without compromising on speed or cost.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 lg:border-b-0 lg:border-r"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Secure Smart Contract Development</h2>
                                    <p className="mt-2.5 font-semibold">Security is paramount. Our secure smart contract development practices ensure the safe management of your digital assets.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:border-b-0 sm:py-9 sm:border-r"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">In-Game Economy Design</h2>
                                    <p className="mt-2.5 font-semibold">We specialize in designing in-game economies that balance fairness, incentives, and sustainability, ensuring a thriving gaming experience for users.</p>
                                </div>
                            </div>
                            <div className="flex gap-[15px] px-4 py-5 sm:py-9" data-aos="fade-up" data-aos-duration="1000">
                                <div>
                                    <CheckCircle />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Navigating Regulatory Compliance</h2>
                                    <p className="mt-2.5 font-semibold">We have a comprehensive understanding of the regulatory landscape of blockchain gaming. Our solutions are designed for compliance without compromising on your vision.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="bg-gray bg-[url(/assets/images/crypto/our-partners.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-black md:py-24">
                <div className="container">
                    <h2 className="text-center text-3xl font-black text-white sm:text-4xl md:text-[46px] md:leading-[58px]">
                        We featured on popular partners like
                    </h2>
                    <div className="mt-12 grid grid-cols-2 gap-4 md:gap-7 lg:grid-cols-4">

                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-primary hover:text-white">
                            <svg role="presentation"  width="150" height="50" viewBox="0 0 150 50" fill="none"  >
                                <path
                                    d="M90.494 35.6298C81.4371 39.4472 71.6317 41.3185 62.7245 41.3185C49.476 41.3185 36.6766 37.7257 26.2724 31.6628C25.3742 31.1388 24.7006 32.1119 25.4491 32.7855C35.0299 41.3933 47.7545 46.6328 61.9012 46.6328C71.9311 46.6328 83.6078 43.4143 91.6916 37.5011C92.9641 36.528 91.7665 35.031 90.494 35.6298Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M85.4042 32.2613C84.7305 32.7852 84.8802 33.4589 85.6287 33.384C88.1736 33.0846 94.012 32.411 95.0599 33.7583C96.1078 35.1056 93.9371 40.4948 92.964 42.9649C92.6646 43.7134 93.3383 44.0128 93.9371 43.4888C98.2784 39.896 99.4012 32.2613 98.4281 31.2134C97.5299 29.9409 89.97 29.0427 85.4042 32.2613Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M101.123 23.0547C98.6527 21.6325 95.7335 21.2583 93.0389 21.3331L100.374 10.8541C101.048 9.95586 101.422 9.35706 101.422 8.90796V6.21335C101.422 5.68939 101.048 5.46484 100.599 5.46484H86.4521C86.003 5.46484 85.7036 5.8391 85.7036 6.21335V9.35706C85.7036 9.88101 86.0778 10.1056 86.5269 10.1056H93.9371L85.4042 22.2313C84.8802 22.9798 84.8802 23.878 84.8802 24.402V27.6205C84.8802 28.1445 85.4042 28.5936 85.8533 28.2942C90.6437 25.7493 96.4072 25.9738 100.748 28.2942C101.272 28.5936 101.796 27.9948 101.796 27.6205V24.3271C101.796 23.8032 101.647 23.4289 101.123 23.0547Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M30.0149 29.0432H34.3562C34.8802 29.0432 35.1796 28.6689 35.1796 28.2947V16.6181C35.1796 14.0731 35.0299 10.5552 38.1736 10.5552C41.2425 10.5552 40.7934 14.148 40.7934 16.6181V28.2947C40.7934 28.7438 41.1676 29.0432 41.5419 29.0432H45.8832C46.4071 29.0432 46.7065 28.6689 46.7065 28.2947V16.6181C46.7065 15.3456 46.6317 13.4743 47.1556 12.3516C47.6047 11.2288 48.6527 10.5552 49.7006 10.5552C50.973 10.5552 51.9461 11.0043 52.1706 12.4264C52.3952 13.3246 52.3203 15.645 52.3203 16.5432V28.2198C52.3203 28.6689 52.6946 28.9684 53.0688 28.9684H57.4101C57.9341 28.9684 58.2335 28.5941 58.2335 28.2198V14.2977C58.2335 11.9025 58.5329 9.20787 57.1107 7.41147C55.9131 5.76476 53.8922 4.94141 52.1706 4.94141C49.7006 4.94141 47.3053 6.28871 46.2574 9.05817C45.0598 6.28871 43.4131 4.94141 40.7185 4.94141C38.0988 4.94141 36.1527 6.28871 35.1047 9.05817H35.0299V6.21386C35.0299 5.76476 34.6556 5.54021 34.2814 5.46536H30.3143C29.7904 5.46536 29.491 5.83961 29.491 6.21386V28.2198C29.2664 28.6689 29.5658 28.9683 30.0149 29.0432Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M113.548 5.01562C107.335 5.01562 103.892 10.4048 103.892 17.2162C103.892 24.0276 107.335 29.4917 113.548 29.4917C119.536 29.4917 123.353 24.1024 123.353 17.4408C123.428 10.5545 119.985 5.01562 113.548 5.01562ZM113.548 24.9258C110.18 24.9258 110.18 19.1623 110.18 16.4677C110.18 13.7731 110.404 9.50664 113.548 9.50664C114.97 9.50664 115.868 10.1054 116.317 11.6773C116.841 13.3989 116.916 15.6444 116.916 17.5156C117.066 20.3599 116.916 24.9258 113.548 24.9258Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M138.099 5.01562C135.105 5.01562 133.458 6.51263 132.26 9.50664H132.186V6.13838C132.111 5.76413 131.736 5.53958 131.437 5.53958H127.47C127.021 5.53958 126.722 5.91383 126.647 6.21323V28.2192C126.647 28.6683 127.021 28.9677 127.395 28.9677H131.662C132.186 28.9677 132.485 28.5935 132.485 28.2192V16.3929C132.485 14.8959 132.56 13.5486 133.159 12.2013C133.683 11.1533 134.656 10.4797 135.629 10.4797C138.623 10.4797 138.323 13.9977 138.323 16.3929V28.3689C138.398 28.7432 138.698 29.0426 139.072 29.0426H143.413C143.862 29.0426 144.162 28.7432 144.236 28.3689V14.5216C144.236 12.351 144.236 9.43179 143.114 7.71024C141.916 5.68928 140.045 5.01562 138.099 5.01562Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M74.5509 14.1473C72.0808 14.4467 68.8623 14.6713 66.4671 15.6443C63.7724 16.8419 61.9012 19.1623 61.9012 22.6802C61.9012 27.1713 64.6706 29.3419 68.3383 29.3419C71.4072 29.3419 73.0539 28.6683 75.4491 26.1982C76.1976 27.321 76.497 27.8449 77.9191 29.0425C78.2934 29.1922 78.5928 29.1922 78.9671 28.9677C79.7904 28.2192 81.4371 26.8719 82.2605 26.1234C82.6347 25.8239 82.5599 25.3748 82.2605 25.0006C81.512 23.8778 80.6886 23.0545 80.6886 21.0335V14.3719C80.6886 11.5275 80.9132 8.90778 78.8174 6.96167C77.2455 5.38982 74.4012 4.79102 72.3054 4.79102C68.1886 4.79102 63.6976 6.28802 62.7245 11.303C62.6497 11.8269 63.0239 12.1263 63.3233 12.2012L67.3653 12.7251C67.8144 12.7251 68.0389 12.276 68.1138 11.9766C68.488 10.2551 69.9102 9.43173 71.5569 9.43173C72.4551 9.43173 73.4281 9.80599 74.0269 10.5545C74.6257 11.4527 74.5509 12.6503 74.5509 13.6982V14.1473ZM73.6527 23.0545C72.979 24.2521 71.9311 25.0006 70.6587 25.0006C69.012 25.0006 68.0389 23.7281 68.0389 21.8569C68.0389 18.1892 71.3323 17.5156 74.476 17.5156V18.4138C74.5509 20.2102 74.5509 21.6323 73.6527 23.0545Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M25.8982 25.0006C25.1497 23.8778 24.3263 23.0545 24.3263 21.0335V14.3719C24.3263 11.5275 24.5509 8.90778 22.4551 6.96167C20.8084 5.38982 18.0389 4.79102 15.9431 4.79102C11.8263 4.79102 7.33531 6.28802 6.36225 11.303C6.2874 11.8269 6.66165 12.1263 6.96105 12.2012L11.1527 12.6503C11.6018 12.6503 11.8263 12.2012 11.9012 11.9018C12.2754 10.1802 13.6976 9.35688 15.4191 9.35688C16.3173 9.35688 17.2904 9.73113 17.8892 10.4796C18.488 11.3778 18.4131 12.5754 18.4131 13.6234V14.1473C15.8682 14.4467 12.6497 14.6713 10.2545 15.6443C7.55986 16.8419 5.6886 19.1623 5.6886 22.6802C5.6886 27.1713 8.45806 29.3419 12.1257 29.3419C15.1946 29.3419 16.8413 28.6683 19.2365 26.1982C19.985 27.321 20.2844 27.8449 21.7066 29.0425C22.0808 29.1922 22.3802 29.1922 22.7545 28.9677C23.5778 28.2192 25.2245 26.8719 26.0479 26.1234C26.2724 25.8239 26.1976 25.3748 25.8982 25.0006ZM17.5149 23.0545C16.8413 24.2521 15.7934 25.0006 14.5209 25.0006C12.8742 25.0006 11.976 23.7281 11.976 21.8569C11.976 18.1892 15.2694 17.5156 18.4131 17.5156V18.4138C18.2634 20.2102 18.3383 21.6323 17.5149 23.0545Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-primary hover:text-white">
                            <svg role="presentation"  width="150" height="50" viewBox="0 0 150 50" fill="none"  >
                                <path
                                    d="M38.5479 18.2637H21.7066V23.2038H33.6826C33.0838 30.1649 27.2455 33.2338 21.7814 33.2338C14.7455 33.2338 8.60778 27.6949 8.60778 19.9853C8.60778 12.4254 14.4461 6.58708 21.7814 6.58708C27.4701 6.58708 30.7635 10.1799 30.7635 10.1799L34.2066 6.58708C34.2066 6.58708 29.7156 1.64696 21.5569 1.64696C11.1527 1.57211 3.14371 10.3296 3.14371 19.8356C3.14371 29.117 10.7036 38.1739 21.8563 38.1739C31.6617 38.1739 38.8473 31.5122 38.8473 21.5571C38.8473 19.4613 38.5479 18.2637 38.5479 18.2637Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M52.2455 14.5957C45.3593 14.5957 40.4192 19.9849 40.4192 26.2723C40.4192 32.7095 45.2096 38.1735 52.3952 38.1735C58.9072 38.1735 64.1467 33.3083 64.1467 26.4221C64.0719 18.6376 57.9341 14.5957 52.2455 14.5957ZM52.3204 19.3113C55.6886 19.3113 58.9072 22.0807 58.9072 26.4221C58.9072 30.7634 55.7635 33.5328 52.3204 33.5328C48.5778 33.5328 45.6587 30.5388 45.6587 26.3472C45.5838 22.3053 48.503 19.3113 52.3204 19.3113Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M77.994 14.5957C71.1078 14.5957 66.1677 19.9849 66.1677 26.2723C66.1677 32.7095 70.9581 38.1735 78.1437 38.1735C84.6557 38.1735 89.8952 33.3083 89.8952 26.4221C89.8204 18.6376 83.6826 14.5957 77.994 14.5957ZM78.0689 19.3113C81.4371 19.3113 84.6557 22.0807 84.6557 26.4221C84.6557 30.7634 81.512 33.5328 78.0689 33.5328C74.3263 33.5328 71.4072 30.5388 71.4072 26.3472C71.3323 22.3053 74.2515 19.3113 78.0689 19.3113Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M103.219 14.6719C96.8563 14.6719 91.9162 20.2108 91.9162 26.4234C91.9162 33.4593 97.6796 38.2497 103.069 38.2497C106.437 38.2497 108.159 36.9773 109.581 35.4054V37.7258C109.581 41.7677 107.111 44.2377 103.368 44.2377C99.7755 44.2377 97.979 41.5431 97.3054 40.0461L92.7395 41.9174C94.3114 45.2857 97.5299 48.8036 103.293 48.8036C109.581 48.8036 114.371 44.8365 114.371 36.5282V15.3455H109.431V17.3665C108.084 15.7198 105.988 14.6719 103.219 14.6719ZM103.668 19.3126C106.737 19.3126 109.955 22.0072 109.955 26.4982C109.955 31.1389 106.811 33.609 103.593 33.609C100.225 33.609 97.0808 30.8395 97.0808 26.5731C97.1557 21.9324 100.374 19.3126 103.668 19.3126Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M136.527 14.5957C130.539 14.5957 125.524 19.3113 125.524 26.3472C125.524 33.7574 131.138 38.1735 137.051 38.1735C141.991 38.1735 145.135 35.4041 146.931 33.0089L142.814 30.2394C141.766 31.8861 139.97 33.458 137.051 33.458C133.757 33.458 132.26 31.6616 131.287 29.8652L147.081 23.2783L146.257 21.3322C144.686 17.7394 141.168 14.5957 136.527 14.5957ZM136.677 19.1616C138.847 19.1616 140.344 20.2843 141.093 21.7065L130.614 26.1227C130.015 22.6795 133.308 19.1616 136.677 19.1616Z"
                                    fill="currentColor"
                                />
                                <path d="M118.039 37.5001H123.204V2.76953H118.039V37.5001Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-primary hover:text-white k">
                            <svg role="presentation"  width="150" height="50" viewBox="0 0 150 50" fill="none"  >
                                <path
                                    d="M60.1796 15.8672C57.5599 15.8672 54.6407 17.0648 52.8443 19.46V16.2414H46.7066V38.6965H52.8443V25.8971C52.8443 23.5768 54.6407 21.1816 57.9341 21.1816C60.479 21.1816 63.0988 22.978 63.0988 25.8971V38.6965H69.2365V24.7744C69.3114 19.6097 65.6437 15.8672 60.1796 15.8672Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M113.174 16.2422L107.635 31.5116L102.021 16.2422H94.985L104.266 38.6973H111.003L120.21 16.2422H113.174Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M41.7665 19.5349C39.6707 17.1396 36.6018 15.8672 32.8593 15.8672C26.0479 15.8672 20.9581 20.8822 20.9581 27.469C20.9581 34.2804 26.1228 39.0708 33.5329 39.0708C37.7246 39.0708 41.991 37.1247 44.012 34.8043L40.1198 31.8103C37.5749 33.6816 36.0778 34.2055 33.6826 34.2055C31.5868 34.2055 29.8653 33.5319 28.7425 32.4091L44.5359 25.8971C44.1617 23.3522 43.1886 21.1816 41.7665 19.5349ZM27.021 28.3672C26.7216 26.0468 27.3204 24.2504 28.2934 22.978C29.3413 21.5558 30.988 20.7325 33.009 20.7325C35.2545 20.7325 36.9012 22.0049 37.7994 23.8762L27.021 28.3672Z"
                                    fill="currentColor"
                                />
                                <path d="M6.43713 9.50586H0.149701V38.6975H20.4341V33.0089H6.43713V9.50586Z" fill="currentColor" />
                                <path
                                    d="M131.437 15.8672C124.626 15.8672 119.311 20.957 119.311 27.469C119.311 34.0558 124.626 39.0708 131.362 39.0708C138.174 39.0708 143.488 33.981 143.488 27.469C143.413 20.8822 138.174 15.8672 131.437 15.8672ZM131.437 33.7564C128.069 33.7564 125.374 30.9869 125.374 27.3941C125.374 23.6516 127.844 21.0319 131.287 21.0319C134.656 21.0319 137.35 23.8013 137.35 27.3941C137.35 31.1366 134.88 33.7564 131.437 33.7564Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M83.9072 15.8672C77.0958 15.8672 71.7814 20.957 71.7814 27.469C71.7814 34.0558 77.0958 39.0708 83.8323 39.0708C90.6437 39.0708 95.9581 33.981 95.9581 27.469C95.9581 20.8822 90.6437 15.8672 83.9072 15.8672ZM83.9072 33.7564C80.5389 33.7564 77.8443 30.9869 77.8443 27.3941C77.8443 23.6516 80.3144 21.0319 83.7575 21.0319C87.1258 21.0319 89.8204 23.8013 89.8204 27.3941C89.8204 31.1366 87.3503 33.7564 83.9072 33.7564Z"
                                    fill="currentColor"
                                />
                                <path d="M143.263 36.0025H144.311V38.6971H144.91V36.0025H145.883V35.4785H143.263V36.0025Z" fill="currentColor" />
                                <path
                                    d="M149.177 35.4785L148.204 36.9755L147.231 35.4785H146.557V38.6971H147.156V36.3767L148.204 37.9486H148.278L149.252 36.3767V38.6971H149.85V35.4785H149.177Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-primary hover:text-white">
                            <CheckCircle className="text-primary" />
                        </div>
                    </div>
                </div>
            </section> */}





            {/* <section className="bg-gradient-to-t from-white to-transparent py-12 dark:bg-none lg:py-24">
                <Faq showTitle={true} />
            </section> */}



            <section className="py-14 dark:!bg-none lg:py-24">
                <div className="container">
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-[30px] lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                        {
                            blsh.map((item: any, i: number) => {
                                return (
                                    <div key={i}>
                                        <div className="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-gray hover:bg-gray/10">
                                            <div className="text-center">
                                                <h2 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                                    <CountUp start={0} end={item.number} duration={10} suffix={item.suffix} prefix={item.prefix}></CountUp>
                                                </h2>
                                                <span className="font-bold text-black transition dark:text-white dark:group-hover:text-black">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            <AIContacts />
            
        </>
    );
};

export default Crypto;
