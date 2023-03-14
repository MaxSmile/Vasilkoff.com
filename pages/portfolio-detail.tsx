import Head from 'next/head';
import ProjectSlider from '../components/ProjectSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Contactus from '../components/ContactUs';

const Portfoliodetail = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Portfolio Detail | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 md:w-[725px]">
                                <h4 className="!text-white">Crypto Game - UX Interface</h4>
                                <p className="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0">
                                    Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its
                                    in-game economy which uses Ethereum-based cryptocurrencies. Players of Axie Infinity collect and mint NFTs which represent
                                    axolotl-inspired digital pets known as Axies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 md:py-[100px]">
                <div className="container">
                    <div>
                        <h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Technologies</h3>
                        <div className="overflow-x-auto overflow-y-hidden">
                            <ul
                                className="flex w-[520px] justify-between gap-4 md:w-auto md:justify-start md:gap-7"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.1825 29.9999L7.06445 21.9351L11.5511 17.3701L24.206 29.9999H15.1825Z"
                                                fill="#02539A"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.9668 21.9415L15.0127 13.8955H24.0582L11.5412 26.4125L6.9668 21.9415Z"
                                                fill="#45D1FD"
                                                fillOpacity="0.85"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 14.9232L4.56814 19.4882L24.0564 0H14.964L0 14.9232Z"
                                                fill="#45D1FD"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="134" height="130" viewBox="0 0 134 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3" filter="url(#filter0_f_866_3412)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M56.7141 60.6973L66.576 79.9998L50 60.6973H56.7141Z"
                                                    fill="#EA6C00"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M76.4382 60.6973L66.5764 79.9998L83.1523 60.6973H76.4382Z"
                                                    fill="#EA6C00"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M56.7129 60.6973H76.4366L66.5747 79.9998L56.7129 60.6973Z"
                                                    fill="#FDAD00"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M66.5747 50L57.232 50.9876L56.7129 60.6975L66.5747 50Z"
                                                    fill="#FDD231"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M66.5776 50L75.9204 50.9876L76.4395 60.6975L66.5776 50Z"
                                                    fill="#FDD231"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M83.1523 60.6972L75.9192 50.9873L76.4382 60.6972H83.1523Z"
                                                    fill="#FDAD00"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M50 60.6972L57.2332 50.9873L56.7141 60.6972H50Z"
                                                    fill="#FDAD00"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M66.5747 50L56.7129 60.6975H76.4366L66.5747 50Z"
                                                    fill="#EA6C00"
                                                />
                                            </g>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M56.7141 60.6973L66.576 79.9998L50 60.6973H56.7141Z"
                                                fill="#EA6C00"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M76.4382 60.6973L66.5764 79.9998L83.1523 60.6973H76.4382Z"
                                                fill="#EA6C00"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M56.7129 60.6973H76.4366L66.5747 79.9998L56.7129 60.6973Z"
                                                fill="#FDAD00"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M66.5747 50L57.232 50.9876L56.7129 60.6975L66.5747 50Z"
                                                fill="#FDD231"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M66.5776 50L75.9204 50.9876L76.4395 60.6975L66.5776 50Z"
                                                fill="#FDD231"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M83.1523 60.6972L75.9192 50.9873L76.4382 60.6972H83.1523Z"
                                                fill="#FDAD00"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M50 60.6972L57.2332 50.9873L56.7141 60.6972H50Z" fill="#FDAD00" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M66.5747 50L56.7129 60.6975H76.4366L66.5747 50Z" fill="#FEEEB7" />
                                            <defs>
                                                <filter
                                                    id="filter0_f_866_3412"
                                                    x="0"
                                                    y="0"
                                                    width="133.152"
                                                    height="130"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_866_3412" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </li>
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.1054 5.84111C23.0847 5.69033 22.9526 5.60689 22.8434 5.5977C22.7345 5.58861 20.4287 5.4177 20.4287 5.4177C20.4287 5.4177 18.8272 3.82784 18.6515 3.65187C18.4756 3.476 18.1321 3.52949 17.9988 3.56873C17.9792 3.57452 17.6489 3.67645 17.1026 3.8455C16.5677 2.30614 15.6236 0.891538 13.9627 0.891538C13.9168 0.891538 13.8696 0.893397 13.8224 0.896082C13.3501 0.271396 12.7649 0 12.2595 0C8.39046 0 6.54201 4.83669 5.96246 7.29454C4.45904 7.7604 3.39101 8.09159 3.25459 8.13444C2.41541 8.39768 2.38887 8.42412 2.27868 9.21486C2.19575 9.81353 0 26.7943 0 26.7943L17.1097 30L26.3804 27.9945C26.3804 27.9945 23.126 5.99188 23.1056 5.84111H23.1054ZM16.157 4.13796L14.7092 4.58606C14.7097 4.48402 14.7102 4.38364 14.7102 4.27387C14.7102 3.31717 14.5774 2.54687 14.3644 1.93623C15.2202 2.04363 15.7901 3.01737 16.157 4.13796ZM13.3028 2.12594C13.5407 2.72212 13.6954 3.57772 13.6954 4.73229C13.6954 4.79136 13.6949 4.84537 13.6944 4.9C12.7528 5.19164 11.7297 5.50827 10.7044 5.82593C11.2801 3.60395 12.3593 2.53076 13.3028 2.12594ZM12.1532 1.03777C12.3202 1.03777 12.4885 1.09447 12.6495 1.20527C11.4095 1.78876 10.0804 3.2583 9.51911 6.19295L7.15565 6.92494C7.81307 4.68654 9.37412 1.03777 12.1531 1.03777H12.1532Z"
                                                fill="#95BF46"
                                            />
                                            <path
                                                d="M22.8481 5.59741C22.7391 5.58832 20.4333 5.41741 20.4333 5.41741C20.4333 5.41741 18.8319 3.82755 18.6561 3.65158C18.5903 3.58611 18.5016 3.55254 18.4089 3.53809L17.1152 29.9995L26.385 27.9942C26.385 27.9942 23.1305 5.99159 23.1101 5.84082C23.0893 5.69004 22.9572 5.6066 22.8481 5.59741Z"
                                                fill="#5E8E3E"
                                            />
                                            <path
                                                d="M13.965 10.7204L12.8219 14.1207C12.8219 14.1207 11.8204 13.5862 10.5927 13.5862C8.79289 13.5862 8.70232 14.7157 8.70232 15.0003C8.70232 16.5533 12.7505 17.1483 12.7505 20.7859C12.7505 23.6478 10.9353 25.4907 8.48782 25.4907C5.5508 25.4907 4.04883 23.6628 4.04883 23.6628L4.83524 21.0645C4.83524 21.0645 6.37914 22.39 7.6819 22.39C8.53316 22.39 8.87943 21.7198 8.87943 21.2301C8.87943 19.2043 5.55824 19.114 5.55824 15.7852C5.55824 12.9836 7.56913 10.2725 11.6283 10.2725C13.1923 10.2725 13.965 10.7204 13.965 10.7204Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 30C7.75999 30 9.99999 27.76 9.99999 25V20H5C2.24 20 0 22.24 0 25C0 27.76 2.24 30 5 30Z"
                                                fill="#0ACF83"
                                            />
                                            <path d="M0 15C0 12.24 2.24 10 5 10H9.99999V20H5C2.24 20 0 17.76 0 15Z" fill="#A259FF" />
                                            <path d="M0 5C0 2.24 2.24 0 5 0H9.99999V9.99999H5C2.24 9.99999 0 7.75999 0 5Z" fill="#F24E1E" />
                                            <path
                                                d="M10.002 0H15.0019C17.7619 0 20.0019 2.24 20.0019 5C20.0019 7.75999 17.7619 9.99999 15.0019 9.99999H10.002V0Z"
                                                fill="#FF7262"
                                            />
                                            <path
                                                d="M20.0019 15C20.0019 17.76 17.7619 20 15.0019 20C12.242 20 10.002 17.76 10.002 15C10.002 12.24 12.242 10 15.0019 10C17.7619 10 20.0019 12.24 20.0019 15Z"
                                                fill="#1ABCFE"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.20085 26.8972L0 0L26.2838 0.0540514L23.9567 26.8972L13.2411 30L2.20085 26.8972Z" fill="#E34F26" />
                                            <path d="M13.2388 27.4023V2.56152L24.0626 2.59756L22.1325 24.8225L13.2388 27.4023Z" fill="#EF652A" />
                                            <path
                                                d="M21.0902 8.76676L21.3967 5.4834H4.74609L5.66603 15.5497H17.1574L16.7067 19.8431L13.0266 20.8351L9.29235 19.7528L9.09395 17.1912H5.79236L6.24343 22.4227L13.0264 24.3169L19.8633 22.4227L20.7833 12.2123H8.71496L8.37221 8.76676H21.0902Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]">
                                    <div>
                                        <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.8261 0H34.7826L17.3913 30L0 0H13.3043L17.3913 6.95652L21.3913 0H27.8261Z" fill="#41B883" />
                                            <path d="M0 0L17.3913 30L34.7826 0H27.8261L17.3913 18L6.86957 0H0Z" fill="#41B883" />
                                            <path d="M6.86926 0L17.391 18.087L27.8258 0H21.391L17.391 6.95652L13.304 0H6.86926Z" fill="#35495E" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-14 md:py-20">
                        <h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Features and Functionalities</h3>
                        <ul className="list-disc space-y-4 font-semibold leading-6 ltr:ml-[18px] rtl:mr-[18px] md:text-lg ltr:md:pl-4 rtl:md:pr-4">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Pellentesque sagittis risus sed accumsan efficitur.</li>
                            <li>Curabitur non tortor semper, tincidunt augue at, luctus diam.</li>
                            <li>Phasellus vitae metus nec nulla sagittis lobortis sit amet vitae dolor.</li>
                            <li>Fusce lobortis justo pellentesque quam facilisis scelerisque.</li>
                            <li>Phasellus id arcu dapibus, facilisis ipsum nec, faucibus urna.</li>
                            <li>Nullam fermentum ipsum sit amet justo convallis, quis iaculis massa finibus.</li>
                            <li>Vivamus eget dui pulvinar, aliquet magna eget, dignissim felis.</li>
                        </ul>
                    </div>
                    <div className="pb-14 md:pb-20">
                        <h3 className="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Description</h3>
                        <p className="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg">
                            Mosaic is a finance tool for making better business moves — automating data aggregation, analysis, and financial forecasting. In
                            late 2021, we partnered to help them take charge of the Strategic Finance category with a new brand, voice, and web experience. To
                            connect with their audience of finance leaders they needed to look and feel like a polished, confident, no-nonsense brand.
                        </p>
                        <p className="relative mt-5 font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg">
                            Easily recognised by its expert tone of voice and chess-styled visuals, Mosaic takes after its ideal user: the less meetings, more
                            doing kinda folk. Tasked with bringing this new brand to life online, we built an experience to catch the eye of startups
                            everywhere.
                        </p>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2">
                        <img
                            src="/assets/images/portfolio-img-1.png"
                            alt="portfolio-img-1"
                            className="rounded-[32px]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                        <img
                            src="/assets/images/portfolio-img-2.png"
                            alt="portfolio-img-2"
                            className="rounded-[32px]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div className="py-[30px] sm:py-[50px]">
                        <img
                            src="/assets/images/portfolio-img-3.png"
                            alt="portfolio-img-3"
                            className="rounded-[32px]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/images/portfolio-img-4.png"
                            alt="portfolio-img-4"
                            className="rounded-[32px]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </section>

            <ProjectSlider title2="Related Projects" />

            <Contactus />
        </div>
    );
};

export default Portfoliodetail;
