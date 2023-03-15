import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap";
import { EnvelopeAtFill, TelephoneFill, Telegram, CardText, Whatsapp, GeoAltFill, Geo, GeoAlt, Instagram, Facebook, Person, EnvelopeAt, Telephone, ChatLeftDots } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            {/* <section  className="relative overflow-x-hidden border-t-2 border-transparent bg-gradient-to-b from-white/40 to-transparent px-4 py-12">
                <div className="items-center justify-center lg:flex">
                    <div className="text-center" data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/images/contact-text.png" alt="contact-text" className="mx-auto sm:pt-4 xl:mx-0" />
                    </div>
                </div>
            </section> */}

            <section id="talkToUs" className="bg-white">
                <Container>
                    <h2 className="text-center text-3xl font-bold text-primary">Please, try our assistant manager chat</h2>
                    <h4 className="text-center text-xl font-bold text-secondary">- AI powered -</h4>
                    <div className="relative z-10 lg:flex ">

                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-1/2 lg:px-8">
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
                                    <Person className="absolute top-1/2 -translate-y-1/2 right-4 "/>
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
                                    <EnvelopeAt className="absolute top-1/2 -translate-y-1/2 right-4 "/>
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
                                    <Telephone className="absolute top-1/2 -translate-y-1/2 right-4 "/>
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
                                    <GeoAlt className="absolute top-1/2 -translate-y-1/2 right-4 "/>
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
                                <ChatLeftDots className="absolute top-1/2 -translate-y-1/2 right-4 "/>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        <div className="heading text-center lg:mb-0 lg:w-1/2 lg:pr-10 lg:text-left text-secondary my-8">

                            <div
                                className="mx-auto"
                                data-aos='fade-left'
                                data-aos-duration="1000"
                            >
                                <p>
                                At our company, we pride ourselves on providing top-notch software development services to our clients. We understand that communication is a critical aspect of our work, and that's why we've introduced our AI-powered assistant manager chat. This chat is available on our website, and it's designed to help our customers get quick answers to their basic questions.
                            </p>
                            <br/>
                            <p>
                                When you start a conversation with our AI-powered chat, it will ask you a few questions to understand your needs and provide relevant information. The chat is powered by advanced AI technology, which enables it to learn and adapt to different situations. This means that as you interact with the chat, it will become smarter and more accurate in providing you with the information you need.
                            </p>
                            </div>
                            
                        </div>
                    </div>
                </Container>
            </section>
            <footer className="py-14 bg-black lg:py-[100px] text-light text-base">
                <Container>
                    <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="py-4">
                                <strong>Vasilkoff (CY) Ltd</strong> provides comprehensive development services for websites and mobile applications, as well as cutting-edge blockchain technology solutions such as DApps and smart contracts.
                            </p>
                            <ul className="flex flex-col gap-3 font-bold">

                                <li>
                                    <Link href="/startup-offer" className="inline-block transition hover:scale-110">
                                        Startup Offer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="inline-block transition hover:scale-110">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="inline-block transition hover:scale-110">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="inline-block transition hover:scale-110">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career" className="inline-block transition hover:scale-110">
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-white">Cyprus</li>
                            </ul>
                            <ul>
                                <li>Vasilkoff (CY) Ltd Reg. HE 344792</li>
                            </ul>
                            <ul className="my-2">


                                <li><CardText className="inline-block" />&nbsp;<span className="text-sm">VAT #CY10344792Y TIC 12344792A</span></li>
                                <li className="transition hover:text-light hover:scale-110"><Whatsapp className="inline-block" />&nbsp;<a className="text-sm" href="https://wa.link/drf9vm" target="_blank">+35796253566</a></li>
                                <li className="transition hover:text-light hover:scale-110"><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+35799169229" target="_blank">+35799169229</a></li>
                                <li className="transition hover:text-light hover:scale-110"><EnvelopeAtFill className="inline-block" />&nbsp;<a className="text-sm" href="mailto:sp@vasilkoff.com" target="_blank">sp@vasilkoff.com</a></li>
                                <li className="transition hover:text-light hover:scale-110"><GeoAltFill className="inline-block" />&nbsp;<a className="text-sm" href="https://g.page/Vasilkoff-com?share" target="_blank"><span>Glastonos 12-14, 2nd Floor, Paphos&nbsp;8046</span></a></li>

                            </ul>
                            <p className="text-xs my-2">
                                <GeoAlt className="inline-block" />&nbsp;ATHINODOROU BUSINESS CENTER Office 402
                                Charalambou Mouskou & Grigori Afxentiou 20
                                Paphos 8010
                            </p>

                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold">
                                <li className="mb-3 text-lg font-extrabold text-white">UK</li>
                            </ul>
                            <ul >
                                <li>Vasilkoff Ltd Reg. 07976437</li>
                                <li>207 Regent Street, London W1B 3HH</li>
                                <li className="transition hover:text-light hover:scale-110"><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+18882614460" target="_blank">+1-888-2614460</a></li>
                                <li className="transition hover:text-light hover:scale-110"><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+442045772478" target="_blank">+442045772478</a></li>
                                <li className="transition hover:text-light hover:scale-110"><EnvelopeAtFill className="inline-block" />&nbsp;<a className="text-sm" href="mailto:maxim@vasilkoff.com" target="_blank">maxim@vasilkoff.com</a></li>
                                <li className="transition hover:text-light hover:scale-110"><Telegram className="inline-block" />&nbsp;<a className="text-sm" href="https://t.me/Vasilkoff" target="_blank">Vasilkoff</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
            <hr />
            <div className="py-5 bg-black">
                <Container>
                    <div className="items-center justify-between text-center text-shadow md:flex">
                        <div className="flex items-center gap-8">
                            <Link href="/terms-conditions" className=" transition hover:text-light">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy-policy" className="transition hover:text-light">
                                Privacy Policy
                            </Link>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4 text-shadow">
                                <li className="transition hover:text-light hover:scale-110">
                                    <Link href="https://www.facebook.com/vasilkoff.software" target="_blank">
                                        <Facebook />
                                    </Link>
                                </li>
                                <li className="transition hover:text-light hover:scale-110">
                                    <Link href="https://www.instagram.com/vasilkoff/" target="_blank">
                                        <Instagram />
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
