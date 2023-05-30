import Faq from '../components/Faq';
import OfficeSwiper from '../components/OfficeSwiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
import Head from 'next/head';
import AIContacts from '../components/AIContacts';

const Contactus = () => {

    return (
        <div>
            <Head>
                <title>Contact Vasilkoff Ltd</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vasilkoff Ltd",
    "description": "This page contains contact details for Vasilkoff Ltd",
    "url": "https://vasilkoff.com/contact-us",
    "mainEntity": {
        "@type": "Organization",
        "name": "Vasilkoff Ltd",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Glastonos 12-14",
            "addressLocality": "Paphos",
            "addressRegion": "Paphos",
            "postalCode": "8046",
            "addressCountry": "CY"
        },
        "email": "maxim@vasilkoff.com",
        "telephone": "+35799169229",
        "url": "https://vasilkoff.com",
        "sameAs": ["https://www.facebook.com/vasilkoff.software", 
        "https://www.instagram.com/vasilkoff"]
    }
}
`
}} />

            </Head>


            {/* <section className="mt-40 bg-gradient-to-b from-white/40 to-transparent py-14 dark:from-white/[0.03] lg:py-[100px]">
                <div className="container">
                    <div className="mx-auto text-center sm:w-[430px]">
                        <div className="heading mb-6">
                            <h4>Start working with us</h4>
                        </div>
                        <p className="text-lg font-bold">
                        We provide outsourcing and outstaffing software development services
                        </p>
                        <div className="mt-12 flex items-center justify-between gap-4 font-extrabold sm:gap-7">
                            <Link href="#outsourcing" className="btn w-full bg-secondary text-base capitalize text-white hover:bg-gray/10 hover:text-gray sm:text-lg">
                                Outsourcing
                            </Link>
                            <Link href="#outstaffing" className="btn w-full bg-gray/10 text-base capitalize text-gray sm:text-lg">
                                Outstaffing
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="relative py-14 lg:py-[100px] xl:-mt-[100px]">
                <div className="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
                <div className="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"></div>
                <div className="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
                    <div className="lg:w-2/3">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>How it works?</h6>
                            <h4>Here are 3 working steps to organize our business projects.</h4>
                        </div>
                        <p className="pb-10 text-center text-lg font-semibold leading-[30px] ltr:lg:text-left rtl:lg:text-right">
                            Find out everything you need to know and more about how we create our business process models.
                        </p>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    01
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Collect Ideas</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        The generated Lorem Ipsum is therefore always free from repetition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    02
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Data Analysis</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        There are many variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    03
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Finalize Product</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <OfficeSwiper />


            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4>Our Design Expertise</h4>
                    </div>
                    <ul>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>01
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Clear and straightforward</h4>
                                <p className="text-lg font-semibold">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                                    document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                                    available.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>02
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Visually appealing</h4>
                                <p className="text-lg font-semibold">
                                    We pay a lot of attention to the visual solution so that it is also attractive and in line with modern market requirements
                                    in addition to being comfortable to use.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>03
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">User-friendly</h4>
                                <p className="text-lg font-semibold">
                                    Our design solutions are aesthetically pleasing, user-friendly, and practical so that users will feel attention and a gentle
                                    attitude in every pixel.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>04
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Enhanced Productivity</h4>
                                <p className="text-lg font-semibold">
                                    We significantly reduce the task completion time, allowing users to do their jobs in fewer clicks, thus contributing to
                                    better overall productivity.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> */}


            

            {/* <section className="bg-gradient-to-t from-white/[55%] to-transparent mt-20 py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4 className="sm:!leading-[50px]">Get in touch with us</h4>
                            <ul className="mt-8 flex items-center justify-center gap-4 lg:justify-start" data-aos="fade-up" data-aos-duration="500">
                                <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]">
                                    <Link href="#" className="group">
                                        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3" className="transition duration-500 group-hover:opacity-100">
                                                <circle
                                                    cx="32.782"
                                                    cy="32.782"
                                                    r="31.5"
                                                    transform="rotate(-0.49927 32.782 32.782)"
                                                    stroke="#1778F2"
                                                    strokeWidth="2"
                                                />
                                            </g>
                                            <path
                                                d="M35.801 26.0714H37.5971V22.9432C37.2872 22.9006 36.2216 22.8047 34.9804 22.8047C32.3908 22.8047 30.6168 24.4336 30.6168 27.4273V30.1825H27.7592V33.6796H30.6168V42.479H34.1205V33.6805H36.8626L37.2979 30.1834H34.1197V27.7741C34.1205 26.7633 34.3927 26.0714 35.801 26.0714V26.0714Z"
                                                fill="#1778F2"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]">
                                    <Link href="#" className="group">
                                        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3" className="transition duration-500 group-hover:opacity-100">
                                                <mask
                                                    id="mask0_553_5772"
                                                    style={{ maskType: 'alpha' }}
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="66"
                                                    height="66"
                                                >
                                                    <circle
                                                        cx="32.782"
                                                        cy="32.782"
                                                        r="31.5"
                                                        transform="rotate(-0.49927 32.782 32.782)"
                                                        stroke="#1778F2"
                                                        strokeWidth="2"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_553_5772)">
                                                    <path
                                                        d="M11.4058 32.5C11.4058 20.8486 20.8486 11.4008 32.5 11.4008C44.1514 11.4008 53.5992 20.8486 53.5992 32.5C53.5992 44.1514 44.1514 53.5992 32.5 53.5992C20.8486 53.5992 11.4058 44.1514 11.4058 32.5ZM0 32.5C0 50.4498 14.5502 65 32.5 65C50.4498 65 65 50.4498 65 32.5C65 14.5502 50.4498 0 32.5 0C14.5502 0 0 14.5502 0 32.5Z"
                                                        fill="url(#paint0_radial_553_5772)"
                                                    />
                                                    <path
                                                        d="M11.4058 32.5C11.4058 20.8486 20.8486 11.4008 32.5 11.4008C44.1514 11.4008 53.5992 20.8486 53.5992 32.5C53.5992 44.1514 44.1514 53.5992 32.5 53.5992C20.8486 53.5992 11.4058 44.1514 11.4058 32.5ZM0 32.5C0 50.4498 14.5502 65 32.5 65C50.4498 65 65 50.4498 65 32.5C65 14.5502 50.4498 0 32.5 0C14.5502 0 0 14.5502 0 32.5Z"
                                                        fill="url(#paint1_radial_553_5772)"
                                                    />
                                                </g>
                                            </g>
                                            <path
                                                d="M28.3339 33C28.3339 30.975 29.975 29.333 31.9999 29.333C34.0249 29.333 35.6669 30.975 35.6669 33C35.6669 35.025 34.0249 36.667 31.9999 36.667C29.975 36.667 28.3339 35.025 28.3339 33ZM26.3516 33C26.3516 36.1196 28.8803 38.6484 31.9999 38.6484C35.1195 38.6484 37.6483 36.1196 37.6483 33C37.6483 29.8804 35.1195 27.3516 31.9999 27.3516C28.8803 27.3516 26.3516 29.8804 26.3516 33ZM36.5519 27.1277C36.5518 27.3887 36.6291 27.644 36.7741 27.8611C36.919 28.0782 37.1251 28.2475 37.3663 28.3475C37.6074 28.4475 37.8728 28.4738 38.1289 28.4229C38.385 28.3721 38.6202 28.2465 38.8049 28.062C38.9896 27.8774 39.1154 27.6423 39.1664 27.3862C39.2175 27.1302 39.1914 26.8648 39.0916 26.6235C38.9918 26.3823 38.8227 26.1761 38.6057 26.031C38.3887 25.8858 38.1335 25.8083 37.8724 25.8082H37.8719C37.522 25.8084 37.1864 25.9474 36.9389 26.1948C36.6914 26.4422 36.5522 26.7777 36.5519 27.1277M27.5559 41.9537C26.4835 41.9049 25.9006 41.7263 25.5132 41.5753C24.9996 41.3754 24.6332 41.1373 24.2479 40.7525C23.8627 40.3678 23.6242 40.0017 23.4251 39.4882C23.2741 39.101 23.0955 38.5179 23.0467 37.4454C22.9934 36.2859 22.9828 35.9376 22.9828 33.0001C22.9828 30.0626 22.9943 29.7152 23.0467 28.5548C23.0956 27.4823 23.2755 26.9004 23.4251 26.512C23.6251 25.9985 23.8632 25.632 24.2479 25.2468C24.6327 24.8615 24.9987 24.623 25.5132 24.424C25.9004 24.273 26.4835 24.0943 27.5559 24.0456C28.7154 23.9922 29.0637 23.9816 31.9999 23.9816C34.9361 23.9816 35.2848 23.9931 36.4453 24.0456C37.5177 24.0944 38.0997 24.2744 38.488 24.424C39.0016 24.623 39.368 24.862 39.7533 25.2468C40.1385 25.6315 40.3761 25.9985 40.5761 26.512C40.7271 26.8992 40.9057 27.4823 40.9545 28.5548C41.0078 29.7152 41.0184 30.0626 41.0184 33.0001C41.0184 35.9376 41.0078 36.285 40.9545 37.4454C40.9056 38.5179 40.7261 39.1008 40.5761 39.4882C40.3761 40.0017 40.138 40.3682 39.7533 40.7525C39.3685 41.1369 39.0016 41.3754 38.488 41.5753C38.1008 41.7263 37.5177 41.905 36.4453 41.9537C35.2858 42.0071 34.9375 42.0177 31.9999 42.0177C29.0624 42.0177 28.7151 42.0071 27.5559 41.9537M27.4649 22.0666C26.2938 22.1199 25.4937 22.3056 24.7949 22.5775C24.0711 22.8584 23.4585 23.2351 22.8463 23.8463C22.2341 24.4576 21.8583 25.0712 21.5775 25.7949C21.3056 26.4942 21.1199 27.2939 21.0666 28.4649C21.0123 29.6378 20.9999 30.0128 20.9999 33C20.9999 35.9872 21.0123 36.3622 21.0666 37.5351C21.1199 38.7062 21.3056 39.5058 21.5775 40.2051C21.8583 40.9284 22.2341 41.5427 22.8463 42.1537C23.4584 42.7647 24.0711 43.1409 24.7949 43.4225C25.495 43.6944 26.2938 43.8801 27.4649 43.9334C28.6383 43.9867 29.0127 44 31.9999 44C34.9872 44 35.3622 43.9876 36.535 43.9334C37.7061 43.8801 38.5058 43.6944 39.205 43.4225C39.9283 43.1409 40.5414 42.7649 41.1536 42.1537C41.7658 41.5424 42.1408 40.9284 42.4224 40.2051C42.6943 39.5058 42.8809 38.7061 42.9333 37.5351C42.9867 36.3613 42.9991 35.9872 42.9991 33C42.9991 30.0128 42.9867 29.6378 42.9333 28.4649C42.88 27.2938 42.6943 26.4937 42.4224 25.7949C42.1408 25.0716 41.7649 24.4585 41.1536 23.8463C40.5424 23.2341 39.9283 22.8584 39.2059 22.5775C38.5058 22.3056 37.706 22.1191 36.5359 22.0666C35.363 22.0133 34.9881 22 32.0008 22C29.0136 22 28.6383 22.0124 27.4649 22.0666Z"
                                                fill="url(#paint2_radial_553_5772)"
                                            />
                                            <path
                                                d="M28.3339 33C28.3339 30.975 29.975 29.333 31.9999 29.333C34.0249 29.333 35.6669 30.975 35.6669 33C35.6669 35.025 34.0249 36.667 31.9999 36.667C29.975 36.667 28.3339 35.025 28.3339 33ZM26.3516 33C26.3516 36.1196 28.8803 38.6484 31.9999 38.6484C35.1195 38.6484 37.6483 36.1196 37.6483 33C37.6483 29.8804 35.1195 27.3516 31.9999 27.3516C28.8803 27.3516 26.3516 29.8804 26.3516 33ZM36.5519 27.1277C36.5518 27.3887 36.6291 27.644 36.7741 27.8611C36.919 28.0782 37.1251 28.2475 37.3663 28.3475C37.6074 28.4475 37.8728 28.4738 38.1289 28.4229C38.385 28.3721 38.6202 28.2465 38.8049 28.062C38.9896 27.8774 39.1154 27.6423 39.1664 27.3862C39.2175 27.1302 39.1914 26.8648 39.0916 26.6235C38.9918 26.3823 38.8227 26.1761 38.6057 26.031C38.3887 25.8858 38.1335 25.8083 37.8724 25.8082H37.8719C37.522 25.8084 37.1864 25.9474 36.9389 26.1948C36.6914 26.4422 36.5522 26.7777 36.5519 27.1277M27.5559 41.9537C26.4835 41.9049 25.9006 41.7263 25.5132 41.5753C24.9996 41.3754 24.6332 41.1373 24.2479 40.7525C23.8627 40.3678 23.6242 40.0017 23.4251 39.4882C23.2741 39.101 23.0955 38.5179 23.0467 37.4454C22.9934 36.2859 22.9828 35.9376 22.9828 33.0001C22.9828 30.0626 22.9943 29.7152 23.0467 28.5548C23.0956 27.4823 23.2755 26.9004 23.4251 26.512C23.6251 25.9985 23.8632 25.632 24.2479 25.2468C24.6327 24.8615 24.9987 24.623 25.5132 24.424C25.9004 24.273 26.4835 24.0943 27.5559 24.0456C28.7154 23.9922 29.0637 23.9816 31.9999 23.9816C34.9361 23.9816 35.2848 23.9931 36.4453 24.0456C37.5177 24.0944 38.0997 24.2744 38.488 24.424C39.0016 24.623 39.368 24.862 39.7533 25.2468C40.1385 25.6315 40.3761 25.9985 40.5761 26.512C40.7271 26.8992 40.9057 27.4823 40.9545 28.5548C41.0078 29.7152 41.0184 30.0626 41.0184 33.0001C41.0184 35.9376 41.0078 36.285 40.9545 37.4454C40.9056 38.5179 40.7261 39.1008 40.5761 39.4882C40.3761 40.0017 40.138 40.3682 39.7533 40.7525C39.3685 41.1369 39.0016 41.3754 38.488 41.5753C38.1008 41.7263 37.5177 41.905 36.4453 41.9537C35.2858 42.0071 34.9375 42.0177 31.9999 42.0177C29.0624 42.0177 28.7151 42.0071 27.5559 41.9537M27.4649 22.0666C26.2938 22.1199 25.4937 22.3056 24.7949 22.5775C24.0711 22.8584 23.4585 23.2351 22.8463 23.8463C22.2341 24.4576 21.8583 25.0712 21.5775 25.7949C21.3056 26.4942 21.1199 27.2939 21.0666 28.4649C21.0123 29.6378 20.9999 30.0128 20.9999 33C20.9999 35.9872 21.0123 36.3622 21.0666 37.5351C21.1199 38.7062 21.3056 39.5058 21.5775 40.2051C21.8583 40.9284 22.2341 41.5427 22.8463 42.1537C23.4584 42.7647 24.0711 43.1409 24.7949 43.4225C25.495 43.6944 26.2938 43.8801 27.4649 43.9334C28.6383 43.9867 29.0127 44 31.9999 44C34.9872 44 35.3622 43.9876 36.535 43.9334C37.7061 43.8801 38.5058 43.6944 39.205 43.4225C39.9283 43.1409 40.5414 42.7649 41.1536 42.1537C41.7658 41.5424 42.1408 40.9284 42.4224 40.2051C42.6943 39.5058 42.8809 38.7061 42.9333 37.5351C42.9867 36.3613 42.9991 35.9872 42.9991 33C42.9991 30.0128 42.9867 29.6378 42.9333 28.4649C42.88 27.2938 42.6943 26.4937 42.4224 25.7949C42.1408 25.0716 41.7649 24.4585 41.1536 23.8463C40.5424 23.2341 39.9283 22.8584 39.2059 22.5775C38.5058 22.3056 37.706 22.1191 36.5359 22.0666C35.363 22.0133 34.9881 22 32.0008 22C29.0136 22 28.6383 22.0124 27.4649 22.0666Z"
                                                fill="url(#paint3_radial_553_5772)"
                                            />
                                            <defs>
                                                <radialGradient
                                                    id="paint0_radial_553_5772"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(-13.975 96.391) scale(165.246 165.246)"
                                                >
                                                    <stop offset="0.09" stopColor="#FA8F21" />
                                                    <stop offset="0.78" stopColor="#D82D7E" />
                                                </radialGradient>
                                                <radialGradient
                                                    id="paint1_radial_553_5772"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(45.9758 102.062) scale(130.237)"
                                                >
                                                    <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                                                    <stop offset="1" stopColor="#8C3AAA" />
                                                </radialGradient>
                                                <radialGradient
                                                    id="paint2_radial_553_5772"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(23.9228 44.1039) scale(28.7192 28.7192)"
                                                >
                                                    <stop offset="0.09" stopColor="#FA8F21" />
                                                    <stop offset="0.78" stopColor="#D82D7E" />
                                                </radialGradient>
                                                <radialGradient
                                                    id="paint3_radial_553_5772"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(34.342 45.0895) scale(22.6347)"
                                                >
                                                    <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                                                    <stop offset="1" stopColor="#8C3AAA" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]">
                                    <Link href="#" className="group">
                                        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3" className="transition duration-500 group-hover:opacity-100">
                                                <circle
                                                    cx="33.3459"
                                                    cy="32.782"
                                                    r="31.5"
                                                    transform="rotate(-0.49927 33.3459 32.782)"
                                                    stroke="#1DA1F2"
                                                    strokeWidth="2"
                                                />
                                            </g>
                                            <path
                                                d="M44.564 26.1161C43.7458 26.475 42.8741 26.7129 41.9652 26.8284C42.9002 26.2701 43.6138 25.3929 43.9493 24.3355C43.0776 24.8553 42.1151 25.2224 41.0893 25.4273C40.2616 24.5459 39.0818 24 37.7948 24C35.2978 24 33.2876 26.0267 33.2876 28.5114C33.2876 28.8689 33.3178 29.2126 33.3921 29.5399C29.6425 29.357 26.3246 27.5599 24.0957 24.8223C23.7066 25.4974 23.4783 26.2701 23.4783 27.102C23.4783 28.664 24.2827 30.0486 25.4817 30.8502C24.7571 30.8365 24.0462 30.6261 23.444 30.2948C23.444 30.3085 23.444 30.3264 23.444 30.3443C23.444 32.536 25.0073 34.3565 27.0575 34.7759C26.6903 34.8763 26.2902 34.9244 25.875 34.9244C25.5862 34.9244 25.2947 34.9079 25.0211 34.8474C25.6055 36.6335 27.2637 37.9466 29.2355 37.9893C27.701 39.1896 25.7526 39.9129 23.6433 39.9129C23.2735 39.9129 22.9187 39.8964 22.564 39.851C24.5618 41.1394 26.9296 41.875 29.483 41.875C37.7825 41.875 42.32 35 42.32 29.0408C42.32 28.8414 42.3131 28.6489 42.3035 28.4577C43.1986 27.8225 43.9507 27.0291 44.564 26.1161Z"
                                                fill="#1DA1F2"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]">
                                    <Link href="#" className="group">
                                        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3" className="transition duration-500 group-hover:opacity-100">
                                                <circle
                                                    cx="33.3459"
                                                    cy="32.782"
                                                    r="31.5"
                                                    transform="rotate(-0.49927 33.3459 32.782)"
                                                    stroke="#E74D89"
                                                    strokeWidth="2"
                                                />
                                            </g>
                                            <circle cx="33" cy="33" r="10" fill="#E74D89" />
                                            <path
                                                d="M41.7879 32.5292C41.6977 30.7977 41.0955 29.132 40.0576 27.7431C39.7414 28.0837 39.4033 28.4034 39.0456 28.7001C37.9466 29.6129 36.7185 30.358 35.4013 30.9111C35.585 31.2961 35.7533 31.669 35.9018 32.021V32.0243C35.9437 32.1227 35.984 32.2217 36.0228 32.3213C37.6882 32.1343 39.4438 32.2025 41.1455 32.4324C41.3721 32.4632 41.5855 32.4962 41.7879 32.5292V32.5292ZM31.4644 24.3342C32.5364 25.8447 33.5249 27.4127 34.4256 29.0312C35.7709 28.501 36.883 27.8322 37.7784 27.0875C38.0892 26.8313 38.3818 26.5538 38.654 26.257C37.0711 24.9257 35.0683 24.1971 33 24.2C32.4852 24.1996 31.9714 24.2442 31.4644 24.3331V24.3342ZM24.4783 30.7967C25.2276 30.7778 25.9761 30.7327 26.7223 30.6614C28.5259 30.5001 30.3141 30.1978 32.0705 29.7572C31.1526 28.1624 30.1615 26.6109 29.1005 25.1075C27.9672 25.6689 26.9679 26.4676 26.1704 27.4492C25.3729 28.4308 24.7958 29.5724 24.4783 30.7967ZM26.1613 38.5385C26.5881 37.9148 27.1491 37.213 27.8938 36.4496C29.4932 34.8106 31.3808 33.5346 33.5654 32.8306L33.6336 32.8108C33.4521 32.4104 33.2816 32.0529 33.11 31.7163C31.0904 32.3048 28.963 32.6722 26.8433 32.8625C25.8093 32.956 24.882 32.9967 24.2 33.0033C24.1981 35.0192 24.8911 36.974 26.1624 38.5385H26.1613ZM36.3055 41.1565C35.8813 39.0173 35.2809 36.9168 34.5103 34.8766C32.3081 35.6763 30.5536 36.8456 29.1973 38.2404C28.6499 38.793 28.1642 39.4034 27.7486 40.0609C29.2653 41.1926 31.1076 41.8027 33 41.8C34.1329 41.8016 35.2554 41.5838 36.3055 41.1587V41.1565ZM38.3658 39.974C40.0832 38.6537 41.2531 36.7463 41.6515 34.617C41.2775 34.5235 40.8034 34.43 40.282 34.3574C39.1228 34.1905 37.9465 34.1783 36.784 34.3211C37.4386 36.1678 37.967 38.0568 38.3658 39.9751V39.974ZM33 44C26.9247 44 22 39.0753 22 33C22 26.9247 26.9247 22 33 22C39.0753 22 44 26.9247 44 33C44 39.0753 39.0753 44 33 44Z"
                                                fill="#C62967"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-gray-dark lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
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
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
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
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
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
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
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
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
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
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}



            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="sm:!leading-[50px]">Canada Branch</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8253)">
                                            <path
                                                d="M22.75 17.7883V21.619C22.7501 21.8933 22.6462 22.1574 22.4592 22.358C22.2722 22.5587 22.0161 22.681 21.7425 22.7002C21.2691 22.7327 20.8823 22.75 20.5833 22.75C11.0099 22.75 3.25 14.9901 3.25 5.41667C3.25 5.11767 3.26625 4.73092 3.29983 4.2575C3.31903 3.9839 3.4413 3.72776 3.64195 3.54078C3.84261 3.35379 4.10672 3.24988 4.381 3.25H8.21167C8.34604 3.24986 8.47567 3.29968 8.57537 3.38977C8.67507 3.47986 8.73773 3.6038 8.75117 3.7375C8.77608 3.98667 8.79883 4.18492 8.8205 4.3355C9.0358 5.838 9.477 7.29932 10.1292 8.66992C10.2321 8.88658 10.1649 9.1455 9.96992 9.28417L7.63208 10.9547C9.06149 14.2853 11.7158 16.9396 15.0464 18.369L16.7148 16.0355C16.7829 15.9402 16.8824 15.8718 16.9959 15.8423C17.1093 15.8128 17.2295 15.824 17.3355 15.8741C18.7059 16.525 20.1669 16.9651 21.6688 17.1795C21.8194 17.2012 22.0177 17.225 22.2647 17.2488C22.3982 17.2625 22.5218 17.3253 22.6117 17.425C22.7016 17.5246 22.7512 17.6541 22.7511 17.7883H22.75Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8253">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Call us</span>
                            </div>
                            <a
                                href="tel:(480) 555-0103"
                                className="font-bold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary lg:text-lg"
                            >
                                (480) 555-0103
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-primary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8262)">
                                            <path
                                                d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8262">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Mail us</span>
                            </div>
                            <a
                                href="mailto:michelle.rivera@example.com"
                                className="font-bold text-black transition hover:text-primary dark:text-white dark:hover:text-primary lg:text-lg"
                            >
                                michelle.rivera@example.com
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8282)">
                                            <path
                                                d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8282">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Location</span>
                            </div>
                            <h5 className="font-bold text-black dark:text-white lg:text-lg">Ontario, Canada</h5>
                        </div>
                    </div>
                    <img src="/assets/images/canada-branch.png" alt="canada-branch" className="w-full" />
                </div>
            </section> */}

            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="sm:!leading-[50px]">Australia Branch</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8253)">
                                            <path
                                                d="M22.75 17.7883V21.619C22.7501 21.8933 22.6462 22.1574 22.4592 22.358C22.2722 22.5587 22.0161 22.681 21.7425 22.7002C21.2691 22.7327 20.8823 22.75 20.5833 22.75C11.0099 22.75 3.25 14.9901 3.25 5.41667C3.25 5.11767 3.26625 4.73092 3.29983 4.2575C3.31903 3.9839 3.4413 3.72776 3.64195 3.54078C3.84261 3.35379 4.10672 3.24988 4.381 3.25H8.21167C8.34604 3.24986 8.47567 3.29968 8.57537 3.38977C8.67507 3.47986 8.73773 3.6038 8.75117 3.7375C8.77608 3.98667 8.79883 4.18492 8.8205 4.3355C9.0358 5.838 9.477 7.29932 10.1292 8.66992C10.2321 8.88658 10.1649 9.1455 9.96992 9.28417L7.63208 10.9547C9.06149 14.2853 11.7158 16.9396 15.0464 18.369L16.7148 16.0355C16.7829 15.9402 16.8824 15.8718 16.9959 15.8423C17.1093 15.8128 17.2295 15.824 17.3355 15.8741C18.7059 16.525 20.1669 16.9651 21.6688 17.1795C21.8194 17.2012 22.0177 17.225 22.2647 17.2488C22.3982 17.2625 22.5218 17.3253 22.6117 17.425C22.7016 17.5246 22.7512 17.6541 22.7511 17.7883H22.75Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8253">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Call us</span>
                            </div>
                            <a
                                href="tel:(08) 9082 3286"
                                className="font-bold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary lg:text-lg"
                            >
                                (08) 9082 3286
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-primary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8262)">
                                            <path
                                                d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8262">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Mail us</span>
                            </div>
                            <a
                                href="mailto:michelle.rivera@example.com"
                                className="font-bold text-black transition hover:text-primary dark:text-white dark:hover:text-primary lg:text-lg"
                            >
                                michelle.rivera@example.com
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8282)">
                                            <path
                                                d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8282">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Location</span>
                            </div>
                            <h5 className="font-bold text-black dark:text-white lg:text-lg">Coolumburra, Australia</h5>
                        </div>
                    </div>
                    <img src="/assets/images/canada-branch.png" alt="canada-branch" className="w-full" />
                </div>
            </section> */}

            


            <AIContacts />

        </div>
    );
};

export default Contactus;
