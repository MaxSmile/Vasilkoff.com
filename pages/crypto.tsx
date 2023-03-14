import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Crypto = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    // success chart
    const successChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#12AF97'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const successChartSeries = [
        {
            data: [9, 36, 12, 59, 41, 66],
        },
    ];

    // danger chart
    const dangerChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#FF0000'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const dangerChartSeries = [
        {
            data: [55, 41, 69, 20, 44, 19],
        },
    ];

    return (
        <div>
            <Head>
                <title>Crypto | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20" />
                    <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" className="absolute right-0 -top-4" />
                    <div className="container">
                        <div className="relative flex flex-col items-center bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat lg:flex-row">
                            <div className="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                    Building the <span className="italic text-primary">future</span> of{' '}
                                    <span className="italic text-secondary">Crypto Revolution</span>
                                </h2>
                                <p className="my-5 text-lg lg:my-8">
                                    Cryptography, encryption process of transforming information referred to as plain text using done.
                                </p>
                                <button type="button" className="btn mx-auto mt-2 block bg-white py-[18px] px-8 rtl:ml-auto lg:mx-0">
                                    REGISTER NOW
                                </button>
                            </div>
                            <div>
                                <img
                                    src="/assets/images/crypto/crypto-banner.png"
                                    alt="crypto-banner"
                                    className="rtl:rotate-y-0 mx-auto w-full max-w-[560px]"
                                    data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pt-12">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F7931A]">
                                        <svg width="30" height="30" viewBox="0 0 97 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M47.8917 0.84375C51.5534 1.72875 55.205 2.65708 58.8567 3.58375C57.39 9.46875 55.92 15.3538 54.4534 21.2371C57.3917 21.8954 60.3217 22.5871 63.2434 23.3171C64.7017 17.4654 66.1567 11.6138 67.62 5.76375C71.28 6.65375 74.9367 7.56708 78.5884 8.49708C77.0934 14.5038 75.5934 20.5088 74.0967 26.5154C79.7384 28.5038 85.385 30.9154 89.935 34.8921C92.2167 36.9204 94.1434 39.4138 95.2267 42.2888C96.335 45.1554 96.5517 48.3071 96.1434 51.3371C95.7484 54.3154 94.9234 57.2754 93.4084 59.8854C92.235 61.9138 90.63 63.6938 88.6984 65.0254C86.7117 66.4004 84.4267 67.3038 82.0817 67.8554C84.7117 69.2271 87.2167 70.9021 89.275 73.0554C90.9367 74.7804 92.2584 76.8471 93.045 79.1154C94.4984 83.2638 94.1 87.8154 92.9384 91.9838C91.75 96.2071 89.9234 100.354 86.9634 103.644C84.9617 105.894 82.4367 107.669 79.645 108.802C75.7634 110.415 71.505 110.892 67.33 110.845C62.6667 110.809 58.04 110.12 53.4634 109.284C51.9484 115.35 50.4334 121.417 48.9217 127.485C45.27 126.549 41.61 125.639 37.95 124.739C39.4434 118.759 40.9367 112.779 42.43 106.799C39.5134 106.047 36.5984 105.289 33.6867 104.52C32.1867 110.532 30.69 116.545 29.19 122.559C25.54 121.635 21.8867 120.727 18.2334 119.822C19.7434 113.745 21.2584 107.672 22.7717 101.597C15.43 99.6421 8.04669 97.8454 0.671692 96.0171C2.48836 91.8304 4.30169 87.6421 6.12169 83.4571C8.39836 84.0471 10.6734 84.6504 12.9567 85.2188C14.1034 85.4704 15.31 85.7938 16.4767 85.4638C17.8534 85.0788 18.85 83.8254 19.2134 82.4821C21.5717 73.0121 23.9334 63.5438 26.2984 54.0754C26.6517 54.1571 27.0067 54.2354 27.3634 54.3038C27.0167 54.1921 26.6684 54.0888 26.32 53.9888C27.945 47.4471 29.5767 40.9088 31.21 34.3704C31.6817 32.8854 31.4217 31.2021 30.6267 29.8737C29.8584 28.6054 28.5317 27.7738 27.145 27.3254C24.27 26.3854 21.2934 25.8071 18.355 25.1054C19.3234 21.1988 20.2967 17.2921 21.2717 13.3871C25.36 14.3771 29.435 15.4187 33.5167 16.4304C35.4167 16.8687 37.2717 17.4704 39.18 17.8787C40.5817 18.2237 41.9934 18.5254 43.4017 18.8454C44.8967 12.8438 46.395 6.84375 47.8917 0.84375ZM51.4984 34.2071C49.6734 41.5054 47.8567 48.8054 46.035 56.1038C49.115 56.9088 52.1867 57.7688 55.3234 58.3338C58.7767 58.9821 62.3367 59.3438 65.8317 58.8254C68.3517 58.4388 70.9034 57.4004 72.55 55.3804C74.1384 53.4254 74.84 50.8338 74.7484 48.3404C74.655 45.9521 73.4584 43.7171 71.745 42.0904C69.3984 39.8238 66.3767 38.4288 63.35 37.3154C59.4967 35.9371 55.4834 35.1004 51.4984 34.2071ZM43.2784 67.1554C41.2717 75.2104 39.26 83.2637 37.2534 91.3187C44.21 93.1071 51.2534 95.1304 58.505 94.9421C61.7567 94.8304 65.1984 94.2188 67.8 92.1304C70.1834 90.2454 71.335 87.1538 71.375 84.1771C71.405 82.0988 70.6867 80.0454 69.4517 78.3838C67.8317 76.1971 65.5517 74.6021 63.1734 73.3371C56.9684 70.0904 50.0334 68.7404 43.2784 67.1554Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">BTC</h4>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        BITCON
                                    </span>
                                </div>
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h4 className="mt-2 text-lg font-semibold text-[#12AF97]">1.41%</h4>
                                </div>
                                <div>
                                    <ReactApexChart series={successChartSeries} options={successChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#345d9d]">
                                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h4 className="text-lg font-bold text-black dark:text-white">ETH</h4>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        ETHEREUM
                                    </span>
                                </div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h4 className="mt-2 text-lg font-semibold text-[#FF0000]">-2.22%</h4>
                                </div>
                                <div>
                                    <ReactApexChart series={dangerChartSeries} options={dangerChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F3BA2F]">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15 6.77988L9.17344 12.6059V12.6053L5.78379 9.21562L15 0L24.2186 9.21855L20.8283 12.6082L15 6.77988ZM3.39023 11.6092L0 15L3.38965 18.3885L6.77988 15L3.39023 11.6092ZM15 23.2189L9.17344 17.3936V17.393L5.7791 20.7779L5.78379 20.7832L15 30L24.2203 20.7785L20.8283 17.3906L15 23.2189ZM26.6086 11.6104L23.2189 15L26.6104 18.3896L30 15L26.6086 11.6104ZM15 11.5591L18.4371 15.0015L18.4365 15.0026H18.4395L15 18.4421L11.5623 15.005L11.5576 15.0003L11.5623 14.9956L12.1641 14.3938L12.457 14.1009L15 11.5591Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">BNB</h4>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        BINANCE
                                    </span>
                                </div>
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h4 className="mt-2 text-lg font-semibold text-[#12AF97]">0.82%</h4>
                                </div>
                                <div>
                                    <ReactApexChart series={successChartSeries} options={successChartOptions} type="area" height={55} />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#53ae94]">
                                        <svg width="30" height="30" viewBox="0 0 212 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M127.19 104.8C125.99 104.89 119.79 105.26 105.96 105.26C94.9604 105.26 87.1504 104.93 84.4104 104.8C41.9004 102.93 10.1703 95.53 10.1703 86.67C10.1703 77.81 41.9004 70.42 84.4104 68.52V97.43C87.1904 97.63 95.1503 98.1 106.15 98.1C119.35 98.1 125.96 97.55 127.15 97.44V68.54C169.57 70.43 201.23 77.83 201.23 86.67C201.23 95.51 169.58 102.91 127.15 104.79L127.19 104.8ZM127.19 65.55V39.68H186.39V0.22998H25.2104V39.68H84.4003V65.54C36.2903 67.75 0.110352 77.28 0.110352 88.7C0.110352 100.12 36.2903 109.64 84.4003 111.86V194.76H127.18V111.83C175.18 109.62 211.3 100.1 211.3 88.69C211.3 77.28 175.21 67.76 127.18 65.54L127.19 65.55Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">USDT</h4>
                                    <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                                        TETHER
                                    </span>
                                </div>
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h4 className="mt-2 text-lg font-semibold text-[#FF0000]">-0.03%</h4>
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
                        <div className="text-center ltr:md:text-left rtl:md:text-right">
                            <h6 className="mb-3 text-lg font-extrabold text-primary sm:mb-4">ABOUT US</h6>
                            <h2 className="max-w-[457px] text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-[40px] lg:!leading-[50px]">
                                You do the business, we’ll handle the money.
                            </h2>
                            <p className="mt-[18px] max-w-[522px] text-lg font-semibold">
                                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with
                                hundreds of credit cards on the market.
                            </p>
                            <button type="button" className="btn mt-7 text-white">
                                Get Started
                            </button>
                        </div>
                        <div>
                            <img src="/assets/images/crypto/crypto-about-img.png" className="w-full max-w-[550px] rtl:rotate-y-180" alt="crypto-about-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 dark:!bg-none lg:py-24">
                <div className="container">
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-[30px] lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <div className="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary">
                                <div className="text-center">
                                    <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                        <CountUp start={0} end={10} duration={10} suffix="M+"></CountUp>
                                    </h4>
                                    <span className="font-bold text-black transition dark:text-white dark:group-hover:text-black">Active Users</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary">
                                <div className="text-center">
                                    <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                        <CountUp start={0} end={120} duration={10} suffix="M" prefix="$"></CountUp>
                                    </h4>
                                    <span className="font-bold text-black transition dark:text-white dark:group-hover:text-black">Already Earned</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary">
                                <div className="text-center">
                                    <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                        <CountUp start={0} end={350} duration={10}></CountUp>
                                    </h4>
                                    <span className="font-bold text-black transition dark:text-white dark:group-hover:text-black">Avg Brating</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary">
                                <div className="text-center">
                                    <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                        <CountUp start={0} end={1254} duration={10} suffix="+"></CountUp>
                                    </h4>
                                    <span className="font-bold text-black transition dark:text-white dark:group-hover:text-black">Collections</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black py-12 lg:py-24">
                <div className="bg-[url(/assets/images/crypto/background-img.png)] bg-cover bg-center bg-no-repeat">
                    <div className="container">
                        <div className="heading text-center">
                            <h6>We Can Shape Your Vision</h6>
                            <h4 className="!text-white">You do the business, we’ll handle the money.</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96867)">
                                            <path
                                                d="M15 18.3333C18.6819 18.3333 21.6666 15.3486 21.6666 11.6667C21.6666 7.98477 18.6819 5 15 5C11.3181 5 8.33331 7.98477 8.33331 11.6667C8.33331 15.3486 11.3181 18.3333 15 18.3333Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5 35V31.6667C5 29.8986 5.70238 28.2029 6.95262 26.9526C8.20286 25.7024 9.89856 25 11.6667 25H18.3333C20.1014 25 21.7971 25.7024 23.0474 26.9526C24.2976 28.2029 25 29.8986 25 31.6667V35"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M26.6667 18.334H36.6667M31.6667 13.334V23.334"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96867">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Execution from experts</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:lg:border-r rtl:lg:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.8889 21.2501L19.6389 25.0001L25.8889 16.2501M20.8889 4.52344C17.1151 8.10716 12.0893 10.0727 6.88556 10.0001C6.22362 12.0167 5.88718 14.1259 5.88889 16.2484C5.88889 25.5684 12.2622 33.3984 20.8889 35.6201C29.5156 33.4001 35.8889 25.5701 35.8889 16.2501C35.8889 14.0668 35.5389 11.9651 34.8922 9.99844H34.6389C29.3122 9.99844 24.4722 7.91844 20.8889 4.52344Z"
                                            stroke="#47BDFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Provides a different perspective</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l ltr:lg:border-r-0 rtl:lg:border-l-0"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96884)">
                                            <path
                                                d="M6.3697 11.9947L18.2664 6.81298C18.4627 6.72884 18.6738 6.68486 18.8874 6.68362C19.101 6.68238 19.3127 6.72392 19.5099 6.80578C19.7072 6.88764 19.8861 7.00816 20.036 7.16025C20.186 7.31234 20.304 7.49291 20.383 7.69132L28.5897 27.528C28.7585 27.9304 28.7634 28.3829 28.6034 28.7889C28.4433 29.1949 28.131 29.5223 27.733 29.7013L15.838 34.883C15.6416 34.9674 15.4303 35.0116 15.2166 35.013C15.0028 35.0143 14.7909 34.9729 14.5935 34.891C14.396 34.8091 14.2169 34.6885 14.0669 34.5363C13.9168 34.384 13.7988 34.2033 13.7197 34.0047L5.51303 14.1663C5.34467 13.7638 5.33998 13.3115 5.49997 12.9057C5.65996 12.4998 5.97199 12.1723 6.3697 11.993V11.9947Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M25.363 6.66602H27.0297C27.4717 6.66602 27.8957 6.84161 28.2082 7.15417C28.5208 7.46673 28.6964 7.89065 28.6964 8.33268V14.166"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M33.6964 10C34.1364 10.1867 34.563 10.3617 34.9764 10.525C35.3832 10.6976 35.7049 11.0248 35.8705 11.4346C36.0362 11.8443 36.0323 12.3031 35.8597 12.71L32.0297 21.6667"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96884">
                                                <rect width="40" height="40" fill="white" transform="translate(0.363037)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Trailing Stop</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 lg:border-b-0 ltr:lg:border-r rtl:lg:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96895)">
                                            <path
                                                d="M30 6.66602H10C7.23858 6.66602 5 8.90459 5 11.666V28.3327C5 31.0941 7.23858 33.3327 10 33.3327H30C32.7614 33.3327 35 31.0941 35 28.3327V11.666C35 8.90459 32.7614 6.66602 30 6.66602Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15 20.0007C16.841 20.0007 18.3334 18.5083 18.3334 16.6673C18.3334 14.8264 16.841 13.334 15 13.334C13.1591 13.334 11.6667 14.8264 11.6667 16.6673C11.6667 18.5083 13.1591 20.0007 15 20.0007Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M25 13.334H28.3333" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25 20H28.3333" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.6667 26.666H28.3334" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96895">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Latest Information</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:border-b-0 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96907)">
                                            <path
                                                d="M12.5555 31.6667C14.3965 31.6667 15.8889 30.1743 15.8889 28.3333C15.8889 26.4924 14.3965 25 12.5555 25C10.7146 25 9.22221 26.4924 9.22221 28.3333C9.22221 30.1743 10.7146 31.6667 12.5555 31.6667Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M29.2222 31.6667C31.0632 31.6667 32.5556 30.1743 32.5556 28.3333C32.5556 26.4924 31.0632 25 29.2222 25C27.3813 25 25.8889 26.4924 25.8889 28.3333C25.8889 30.1743 27.3813 31.6667 29.2222 31.6667Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.22223 28.334H5.8889V21.6673M4.22223 8.33398H22.5556V28.334M15.8889 28.334H25.8889M32.5556 28.334H35.8889V18.334M35.8889 18.334H22.5556M35.8889 18.334L30.8889 10.0007H22.5556"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M5.88889 15H12.5556" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96907">
                                                <rect width="40" height="40" fill="white" transform="translate(0.888885)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">We Provide Quality Content</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="flex gap-[15px] px-4 py-5 sm:py-9" data-aos="fade-up" data-aos-duration="1000">
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96918)">
                                            <path
                                                d="M29.068 18.334H12.4013C10.5603 18.334 9.06796 19.8264 9.06796 21.6673V31.6673C9.06796 33.5083 10.5603 35.0007 12.4013 35.0007H29.068C30.9089 35.0007 32.4013 33.5083 32.4013 31.6673V21.6673C32.4013 19.8264 30.9089 18.334 29.068 18.334Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20.7346 28.3333C21.6551 28.3333 22.4013 27.5871 22.4013 26.6667C22.4013 25.7462 21.6551 25 20.7346 25C19.8141 25 19.0679 25.7462 19.0679 26.6667C19.0679 27.5871 19.8141 28.3333 20.7346 28.3333Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.0679 18.3333V11.6667C14.0679 9.89856 14.7703 8.20286 16.0206 6.95262C17.2708 5.70238 18.9665 5 20.7346 5C22.5027 5 24.1984 5.70238 25.4487 6.95262C26.6989 8.20286 27.4013 9.89856 27.4013 11.6667V18.3333"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96918">
                                                <rect width="40" height="40" fill="white" transform="translate(0.734619)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Platform Fees</h4>
                                    <p className="mt-2.5 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Crypto & NFT</h6>
                        <h4 className="text-4xl md:!text-[46px] md:!leading-[57px]">All your crypto and NFTs in one place</h4>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[27px] pt-5 sm:gap-[30px] md:pt-12" data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_88967)">
                                        <path
                                            d="M20.4167 43.75C25.2492 43.75 29.1667 39.8325 29.1667 35C29.1667 30.1675 25.2492 26.25 20.4167 26.25C15.5842 26.25 11.6667 30.1675 11.6667 35C11.6667 39.8325 15.5842 43.75 20.4167 43.75Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M49.5833 29.166C54.4158 29.166 58.3333 25.2485 58.3333 20.416C58.3333 15.5835 54.4158 11.666 49.5833 11.666C44.7508 11.666 40.8333 15.5835 40.8333 20.416C40.8333 25.2485 44.7508 29.166 49.5833 29.166Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M49.5833 58.334C54.4158 58.334 58.3333 54.4165 58.3333 49.584C58.3333 44.7515 54.4158 40.834 49.5833 40.834C44.7508 40.834 40.8333 44.7515 40.8333 49.584C40.8333 54.4165 44.7508 58.334 49.5833 58.334Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M29.1667 35.0007H37.9167L43.75 27.709"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M43.75 42.2917L37.9167 35"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_88967">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_88976)">
                                        <path
                                            d="M8.75 52.4993H17.5V20.416L35 40.8327L52.5 20.416V52.4993H61.25"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_88976">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_88981)">
                                        <path
                                            d="M52.5 55.4173H28.6008C27.765 55.4174 26.9389 55.2378 26.1786 54.8908C25.4182 54.5438 24.7412 54.0374 24.1936 53.406C23.646 52.7745 23.2405 52.0328 23.0045 51.231C22.7685 50.4291 22.7076 49.586 22.8258 48.7586L27.7083 14.584"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M40.8333 26.25L14.5833 37.9167"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_88981">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_88987)">
                                        <path
                                            d="M17.5 35L35 8.75L52.5 35L35 61.25L17.5 35Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.5 35L35 26.25L52.5 35L35 40.8333L17.5 35Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_88987">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_88993)">
                                        <path d="M17.5 35H35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.25 17.5V52.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M17.5 52.5H35C39.6413 52.5 44.0925 50.6563 47.3744 47.3744C50.6563 44.0925 52.5 39.6413 52.5 35C52.5 30.3587 50.6563 25.9075 47.3744 22.6256C44.0925 19.3437 39.6413 17.5 35 17.5H17.5"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_88993">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89000)">
                                        <path
                                            d="M11.6667 52.5007H46.6667L58.3333 40.834H23.3333L11.6667 52.5007Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M23.3333 40.8327L11.6667 29.166H46.6667L58.3333 40.8327"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M46.6667 29.1667L58.3333 17.5H23.3333L11.6667 29.1667"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89000">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89007)">
                                        <path
                                            d="M17.5 17.5H40.8333C43.154 17.5 45.3796 18.4219 47.0205 20.0628C48.6615 21.7038 49.5833 23.9294 49.5833 26.25C49.5833 28.5706 48.6615 30.7962 47.0205 32.4372C45.3796 34.0781 43.154 35 40.8333 35C43.154 35 45.3796 35.9219 47.0205 37.5628C48.6615 39.2038 49.5833 41.4294 49.5833 43.75C49.5833 46.0706 48.6615 48.2962 47.0205 49.9372C45.3796 51.5781 43.154 52.5 40.8333 52.5H17.5"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M23.3333 17.5V52.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.3333 35H40.8333" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.25 8.75V17.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M37.9167 8.75V17.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.25 52.5V61.25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M37.9167 52.5V61.25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89007">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89018)">
                                        <path
                                            d="M45.465 45.3162L35.1021 35L12.5213 58.8583C10.2142 61.3375 12.9675 65.2167 16.1321 63.9042L44.1788 51.9575C44.7936 51.6962 45.3348 51.2879 45.7549 50.7685C46.1749 50.249 46.4608 49.6343 46.5876 48.9784C46.7143 48.3224 46.678 47.6454 46.4817 47.0069C46.2855 46.3683 45.9353 45.7878 45.4621 45.3162H45.465Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M24.535 24.687L34.8979 35.0003L57.4788 11.142C59.7858 8.66279 57.0325 4.78362 53.8679 6.09612L25.8213 18.0486C25.2064 18.3099 24.6652 18.7182 24.2452 19.2377C23.8251 19.7571 23.5392 20.3719 23.4124 21.0278C23.2857 21.6837 23.322 22.3607 23.5183 22.9992C23.7146 23.6378 24.0647 24.2184 24.5379 24.6899L24.535 24.687Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89018">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89024)">
                                        <path
                                            d="M41.0667 58.8817C37.7125 62.0404 32.2583 62.0404 28.9042 58.8817L8.69167 39.7833C5.89167 37.1408 4.9875 32.13 6.67917 28.6096L13.6792 13.9737C15.05 11.0833 18.6958 8.75 21.7875 8.75H48.2125C51.3042 8.75 54.95 11.0892 56.3208 13.9708L63.3208 28.6096C65.0125 32.13 64.0792 37.1408 61.3083 39.7804C51.2371 49.385 51.1992 49.3442 41.0667 58.8817V58.8817Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M35 43.7506V23.334" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.3333 23.334H46.6667" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89024">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="72" viewBox="0 0 70 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M49.5833 9.75195L64.1667 18.508V53.5324L49.5833 62.2885L20.4167 44.7763V27.2641L49.5833 44.7763V27.2641L35 18.508L49.5833 9.75195Z"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M35 18.508L20.4167 9.75195L5.83333 18.508V53.5324L20.4167 62.2885L34.125 53.1529"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89037)">
                                        <path
                                            d="M17.5 23.334L23.3333 29.1673L35 17.5007L46.6667 29.1673L52.5 23.334L35 5.83398L17.5 23.334Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.5 46.6673L23.3333 40.834L35 52.5007L45.2083 42.2923L51.0417 48.1257L35 64.1673L17.5 46.6673Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M58.3333 29.166L64.1579 35.0023L58.3333 40.8327L52.5 34.9993L58.3333 29.166Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.6667 29.166L17.5 34.9993L11.6667 40.8327L5.83333 34.9993L11.6667 29.166Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M35 29.166L40.8333 34.9993L35 40.8327L29.1667 34.9993L35 29.166Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89037">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89046)">
                                        <path
                                            d="M35.5308 5.83398C41.1892 5.89815 46.8446 6.94815 52.5 8.98398L53.5617 9.37773C57.2425 10.7989 60.7911 12.5411 64.1667 14.584C64.1667 30.9698 58.4588 44.5032 47.0458 55.184C43.4292 58.7977 39.7542 61.6123 36.0208 63.6365L35 64.1673C30.9167 62.1169 26.9004 59.1244 22.9542 55.1869C11.5442 44.5032 5.83334 30.9698 5.83334 14.584C13.2563 10.1302 20.6792 7.3769 28.105 6.32398L29.1667 6.18398C30.9265 5.97141 32.6966 5.85457 34.4692 5.83398H35.5308Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.125 20.6206C12.1712 40.2206 21.7962 43.0702 35 29.1664C35 17.4997 38.9579 10.6368 46.8708 8.57474L48.5917 8.25391"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M47.6875 53.9869C47.6875 53.9869 55.4167 37.916 35 29.166"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89046">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_89053)">
                                        <path
                                            d="M37.7708 64.1673C24.6371 64.1702 13.1396 55.3006 9.74167 42.546C6.34375 29.7915 11.8913 16.331 23.2692 9.73355C28.7999 6.52574 35.2385 5.24309 41.5763 6.08652C47.9141 6.92994 53.7932 9.85179 58.2925 14.3944L48.5654 24.2148C47.1575 22.8037 45.4845 21.6848 43.6426 20.9225C41.8007 20.1603 39.8263 19.7697 37.8329 19.7732C35.8396 19.7767 33.8666 20.1743 32.0274 20.9431C30.1882 21.7118 28.5192 22.8366 27.1163 24.2527C24.2741 27.1213 22.6796 30.9961 22.6796 35.0342C22.6796 39.0723 24.2741 42.9471 27.1163 45.8156C28.5192 47.2317 30.1882 48.3565 32.0274 49.1253C33.8666 49.8941 35.8396 50.2916 37.8329 50.2952C39.8263 50.2987 41.8007 49.9081 43.6426 49.1458C45.4845 48.3836 47.1575 47.2647 48.5654 45.8535L58.3333 55.674C55.6391 58.3808 52.434 60.5254 48.9041 61.9834C45.3743 63.4414 41.5899 64.1838 37.7708 64.1673V64.1673Z"
                                            stroke="currentColor"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_89053">
                                            <rect width="70" height="70" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#47BDFF] bg-[url(/assets/images/crypto/our-partners.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-black md:py-24">
                <div className="container">
                    <h2 className="text-center text-3xl font-black text-white sm:text-4xl md:text-[46px] md:leading-[58px]">
                        We featured on popular partners like
                    </h2>
                    <div className="mt-12 grid grid-cols-2 gap-4 md:gap-7 lg:grid-cols-4">
                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-black hover:text-white dark:bg-gray-dark">
                            <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-black hover:text-white dark:bg-gray-dark">
                            <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-black hover:text-white dark:bg-gray-dark">
                            <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="group flex items-center justify-center rounded-[20px] bg-white py-10 px-[50px] text-[#8C98A4] duration-200 hover:bg-black hover:text-white dark:bg-gray-dark">
                            <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_15_88925)">
                                    <path
                                        d="M121.108 16.3165C119.91 14.9692 117.814 14.2207 115.045 14.2207H106.737C106.138 14.2207 105.689 14.6698 105.614 15.1938L102.246 36.4512C102.171 36.9003 102.47 37.2746 102.919 37.2746H107.186C107.56 37.2746 107.934 36.9752 108.009 36.6009L108.982 30.6129C109.057 30.089 109.581 29.6399 110.105 29.6399H112.725C118.189 29.6399 121.332 27.0201 122.156 21.7806C122.53 19.3854 122.156 17.589 121.108 16.3165ZM116.018 22.0051C115.569 24.9991 113.323 24.9991 111.078 24.9991H109.805L110.704 19.4602C110.778 19.1608 111.078 18.8614 111.377 18.8614H111.976C113.473 18.8614 114.895 18.8614 115.644 19.6848C116.018 20.2087 116.168 20.9572 116.018 22.0051Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M139.82 21.9303H135.853C135.479 21.9303 135.255 22.1548 135.18 22.5291L135.03 23.6518L134.731 23.2776C133.907 22.0051 131.961 21.6309 130.015 21.6309C125.599 21.6309 121.856 24.9243 121.183 29.6398C120.808 31.9602 121.332 34.2057 122.68 35.7027C123.877 37.1249 125.599 37.7237 127.695 37.7237C131.213 37.7237 133.159 35.4782 133.159 35.4782L133.009 36.6009C132.934 37.05 133.234 37.4243 133.683 37.4243H137.275C137.874 37.4243 138.323 36.9752 138.398 36.4512L140.569 22.9033C140.569 22.3045 140.269 21.9303 139.82 21.9303ZM134.281 29.6398C133.907 31.8854 132.111 33.4572 129.79 33.4572C128.668 33.4572 127.695 33.083 127.096 32.4093C126.497 31.7357 126.272 30.6877 126.497 29.6398C126.871 27.3943 128.668 25.8225 130.913 25.8225C132.036 25.8225 132.934 26.1967 133.533 26.8704C134.207 27.544 134.506 28.5171 134.281 29.6398Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M149.027 14.2207H145.21C144.835 14.2207 144.611 14.4453 144.536 14.8195L141.168 36.4512C141.093 36.9003 141.392 37.2746 141.841 37.2746H145.284C145.883 37.2746 146.332 36.9003 146.407 36.3015L149.701 15.0441C149.775 14.595 149.401 14.2207 149.027 14.2207Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M62.0509 16.3165C60.8533 14.9692 58.7575 14.2207 55.9881 14.2207H47.6797C47.0809 14.2207 46.6318 14.6698 46.5569 15.1938L43.1886 36.4512C43.1138 36.9003 43.4132 37.2746 43.8623 37.2746H47.8294C48.4282 37.2746 48.8773 36.9003 48.9521 36.3015L49.8503 30.5381C49.9252 30.0141 50.4491 29.565 50.9731 29.565H53.5928C59.0569 29.565 62.2006 26.9453 63.024 21.7057C63.4731 19.3854 63.0988 17.589 62.0509 16.3165ZM56.9611 22.0051C56.512 24.9991 54.2665 24.9991 52.021 24.9991H50.7485L51.6467 19.4602C51.7216 19.1608 52.021 18.8614 52.3204 18.8614H52.9192C54.4162 18.8614 55.8383 18.8614 56.5869 19.6848C56.9611 20.2087 57.1108 20.9572 56.9611 22.0051Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M80.7635 21.9303H76.7964C76.4222 21.9303 76.1976 22.1548 76.1228 22.5291L75.9731 23.6518L75.6737 23.2776C74.8503 22.0051 72.9042 21.6309 70.9581 21.6309C66.5419 21.6309 62.7994 24.9243 62.1258 29.6398C61.7515 31.9602 62.2755 34.2057 63.6228 35.7027C64.8204 37.1249 66.5419 37.7237 68.6377 37.7237C72.1557 37.7237 74.1018 35.4782 74.1018 35.4782L73.9521 36.6009C73.8773 37.05 74.1767 37.4243 74.6258 37.4243H78.2186C78.8174 37.4243 79.2665 36.9752 79.3413 36.4512L81.512 22.9033C81.512 22.3045 81.1377 21.9303 80.7635 21.9303ZM75.2246 29.6398C74.8503 31.8854 73.0539 33.4572 70.7335 33.4572C69.6108 33.4572 68.6377 33.083 68.0389 32.4093C67.4401 31.7357 67.2156 30.6877 67.4401 29.6398C67.8144 27.3943 69.6108 25.8225 71.8563 25.8225C72.9791 25.8225 73.8773 26.1967 74.4761 26.8704C75.1497 27.544 75.3743 28.5171 75.2246 29.6398Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M101.871 21.9316H97.9042C97.53 21.9316 97.1557 22.1562 96.9312 22.4556L91.4671 30.5394L89.0719 22.755C88.9222 22.231 88.4731 21.9316 87.9491 21.9316H84.0569C83.6078 21.9316 83.2336 22.3807 83.3833 22.8298L87.7994 35.7041L83.6827 41.5424C83.3833 41.9915 83.6827 42.6652 84.2815 42.6652H88.2485C88.6228 42.6652 88.997 42.5155 89.2216 42.1412L102.47 22.9795C102.769 22.5304 102.395 21.9316 101.871 21.9316Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M29.5659 16.6162C29.1168 16.0923 28.5928 15.718 27.9192 15.3438C27.9192 15.5683 27.8443 15.7929 27.7695 16.0174C27.6946 16.242 27.6946 16.4665 27.6198 16.6162C26.1976 22.9785 22.1557 25.6731 16.9162 26.2719C16.5419 26.3467 16.2425 26.3467 15.8683 26.3467C15.494 26.3467 15.0449 26.3467 14.6707 26.3467H11.3024C10.479 26.3467 9.80539 26.9455 9.73054 27.694L8.23353 37.2749L8.00898 38.5473L7.48503 41.6162C7.41018 42.1402 7.78443 42.5893 8.30839 42.5893H14.2216C14.8952 42.5893 15.494 42.0653 15.6437 41.3917L15.7186 41.0923L16.8413 34.0563L16.9162 33.6821C16.991 33.0084 17.5898 32.4845 18.3383 32.4845H19.2365C25 32.4845 29.4162 30.1641 30.7635 23.4276C31.2874 20.5833 30.988 18.2629 29.5659 16.6162Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M9.73055 27.7691L9.8054 27.3948L11.6767 15.4188C11.7515 14.9697 12.0509 14.5206 12.5 14.3709C12.7246 14.296 12.8743 14.2212 13.0988 14.2212H22.006C23.0539 14.2212 24.027 14.296 24.9252 14.4457C25.1497 14.5206 25.4491 14.5206 25.6737 14.5954C25.8982 14.6703 26.1228 14.7451 26.3473 14.7451C26.4222 14.7451 26.497 14.82 26.5719 14.82H26.6467C26.6467 14.82 26.6467 14.82 26.7216 14.82C27.1707 14.9697 27.5449 15.1194 27.9192 15.3439C28.3683 12.4996 27.9192 10.5535 26.3473 8.83196C24.7006 6.88585 21.6318 6.0625 17.7395 6.0625H6.36229C5.53894 6.0625 4.86528 6.6613 4.79043 7.4098L1.33747e-05 37.4248C-0.0748369 38.0236 0.374265 38.5475 0.973067 38.5475H8.009L8.23355 37.2751L9.73055 27.7691Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M27.9192 15.3435C27.5449 15.1189 27.1707 14.9692 26.7216 14.8195C26.7216 14.8195 26.7216 14.8195 26.6467 14.8195H26.5719C26.497 14.8195 26.4222 14.7447 26.3473 14.7447C26.1228 14.6698 25.8982 14.595 25.6737 14.595C25.4491 14.5201 25.1497 14.5201 24.9252 14.4453C24.027 14.2956 23.0539 14.2207 22.006 14.2207H13.024C12.7994 14.2207 12.5749 14.2956 12.4252 14.3704C12.0509 14.595 11.6767 14.9692 11.6018 15.4183L9.73056 27.3944V27.7686C9.88026 26.9453 10.5539 26.4213 11.3024 26.4213H14.6707C15.0449 26.4213 15.494 26.4213 15.8683 26.4213C16.2425 26.4213 16.6168 26.3465 16.9162 26.3465C22.1557 25.7477 26.1976 23.053 27.6946 16.7656C27.7695 16.5411 27.7695 16.3914 27.8443 16.1668C27.8443 15.7926 27.9192 15.568 27.9192 15.3435Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88925">
                                        <rect width="150" height="49.7755" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
                        <div className="mx-auto w-full max-w-[458px]">
                            <img src="/assets/images/crypto/app.png" alt="" />
                        </div>
                        <div className="heading flex-1">
                            <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                                <h6>Why choose us?</h6>
                                <h4>Buy Cryptocurrency with Theme</h4>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in
                                the Website.
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                            stroke="currentcolor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                        Digital Marketing Solutions for Tomorrow
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                            stroke="currentcolor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                        Our Talented & Experienced Marketing Agency
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2.5 flex items-center gap-3">
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                            stroke="currentcolor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                        Create your own skin to match your brand
                                    </p>
                                </div>
                            </div>
                            <button type="button" className="btn mt-6 py-[18px] px-8 text-base text-white">
                                Find Out More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            <section className="bg-gradient-to-t from-white to-transparent py-12 dark:bg-none lg:py-24">
                <Faq showTitle={true} />
            </section>

            <section className="py-12 dark:bg-gray-dark lg:py-24">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <img
                                src="/assets/images/form-img.png"
                                alt="form-img"
                                className="mx-auto"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            />
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Full Name
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Email Address
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Mobile Number
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        City
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                    Message
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Crypto;
