import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap";
import { EnvelopeAtFill, TelephoneFill, Telegram } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            <section className="py-14 bg-black lg:py-[100px]">
                <Container>
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 lg:pr-10 lg:text-left text-light">
                            <img src="/images/answer.png" alt="Answer" className="w-full" />
                            <div
                                className="mx-auto"
                                data-aos='fade-right'
                                data-aos-duration="1000"
                            >
                               <p>
                                <strong>Vasilkoff (CY) Ltd</strong> provides comprehensive development services for websites and mobile applications, as well as cutting-edge blockchain technology solutions such as DApps and smart contracts.
                            </p>
                            </div>
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
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
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
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
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
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
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
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
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
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
                </Container>
            </section>
            <footer className="py-14 bg-black lg:py-[100px] text-light">
                <Container>
                    <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">


                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-white">UK</li>
                            </ul>
                            <ul >
                                <li>Vasilkoff Ltd Reg. 07976437</li>
                                <li>207 Regent Street, London W1B 3HH</li>
                                <li><TelephoneFill className="inline-block"/>&nbsp;<a href="tel:+18882614460" target="_blank">+1-888-2614460</a></li>
                                <li><TelephoneFill className="inline-block"/>&nbsp;<a href="tel:+442045772478" target="_blank">+442045772478</a></li>
                                <li><EnvelopeAtFill className="inline-block"/>&nbsp;<a href="mailto:maxim@vasilkoff.com" target="_blank">maxim@vasilkoff.com</a></li>
                                <li><Telegram className="inline-block"/>&nbsp;<a href="https://t.me/Vasilkoff" target="_blank">Vasilkoff</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-white">Cyprus</li>
                            </ul>
                            <ul>
                                <li>Vasilkoff (CY) Ltd Reg. HE 344792</li>
                                <li>ATHINODOROU BUSINESS CENTER Office 402</li>
                                <li>
Charalambou Mouskou & Grigori Afxentiou Office 20
Paphos 8010</li>

					<li><a href="#" target="_blank"><i className="fa-regular fa-address-card"></i>VAT #CY10344792Y TIC 12344792A</a></li>
					<li><a href="https://wa.link/drf9vm" target="_blank"><i class="fa-brands fa-square-whatsapp"></i>+35796253566</a></li>
					<li><a href="tel:+35799169229" target="_blank"><i class="fa-solid fa-square-phone"></i><span>+35799169229</span></a></li>
					<li><a href="mailto:sp@vasilkoff.com" target="_blank"><i class="fa-solid fa-at"></i><span>sp@vasilkoff.com</span></a></li>
					<li><a href="https://g.page/Vasilkoff-com?share" target="_blank"><i class="fa-solid fa-location-dot"></i><span>Glastonos 12-14, 2nd Floor, Paphos&nbsp;8046</span></a></li>
			
                            </ul>
                            
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">

                                <li>
                                    <Link href="/modern-saas" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Startup Offer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
            <div className="py-5 dark:border-t-2 dark:border-white/5">
                <Container>
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div className="flex items-center gap-8">
                            <Link href="/terms-conditions" className="text-primary transition hover:text-secondary">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy-policy" className="text-primary transition hover:text-secondary">
                                Privacy Policy
                            </Link>
                        </div>
                        <div>
                            <ul className="flex items-center gap-8">
                                <li>
                                    <Link href="#">
                                        <svg
                                            width="10"
                                            height="20"
                                            viewBox="0 0 10 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition hover:scale-110 hover:text-secondary"
                                        >
                                            <path
                                                d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <svg
                                            width="23"
                                            height="18"
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition hover:scale-110 hover:text-secondary"
                                        >
                                            <path
                                                d="M22.8849 2.11613C22.0668 2.475 21.1951 2.71288 20.2862 2.82838C21.2212 2.27013 21.9348 1.39287 22.2703 0.3355C21.3986 0.85525 20.4361 1.22238 19.4103 1.42725C18.5826 0.545875 17.4028 0 16.1158 0C13.6188 0 11.6086 2.02675 11.6086 4.51137C11.6086 4.86888 11.6388 5.21263 11.7131 5.53988C7.96345 5.357 4.64557 3.55988 2.4167 0.82225C2.02757 1.49738 1.79932 2.27012 1.79932 3.102C1.79932 4.664 2.6037 6.04862 3.8027 6.85025C3.07807 6.8365 2.3672 6.62613 1.76495 6.29475C1.76495 6.3085 1.76495 6.32638 1.76495 6.34425C1.76495 8.536 3.32832 10.3565 5.37845 10.7759C5.01132 10.8763 4.6112 10.9244 4.19595 10.9244C3.9072 10.9244 3.6157 10.9079 3.34207 10.8474C3.92645 12.6335 5.5847 13.9466 7.55645 13.9893C6.02195 15.1896 4.07357 15.9129 1.96432 15.9129C1.59445 15.9129 1.2397 15.8964 0.884949 15.851C2.88282 17.1394 5.25057 17.875 7.80395 17.875C16.1034 17.875 20.6409 11 20.6409 5.04075C20.6409 4.84137 20.6341 4.64887 20.6244 4.45775C21.5196 3.8225 22.2717 3.02913 22.8849 2.11613Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition hover:scale-110 hover:text-secondary"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z"
                                                fill="currentColor"
                                            />
                                            <circle cx="17.7975" cy="5.08737" r="0.732875" fill="currentColor" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
