import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import {offices} from '../data/offices.js';
import { EnvelopeAtFill, TelephoneFill, Telegram, CardText, Whatsapp, GeoAltFill, GeoAlt, Instagram, Facebook } from 'react-bootstrap-icons';

const OfficeSwiper = () => {

    return (
        <section className="bg-gradient-to-t from-white/[54%] to-transparent m-16">
            <div className="container">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div className="heading mt-10 text-center md:w-1/2 lg:text-left ">
                        <h2>Our offices</h2>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        {/* <Link
                            href="#"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                        </Link> */}
                        <button
                            type="button"
                            className="ofc-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
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
                        <button
                            type="button"
                            className="ofc-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
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
                <div className="swiper ofc-slider rounded-[32px] drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] max-h-[340px]">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={30}
                            loop={true}
                            autoplay={{ delay: 8500, disableOnInteraction: true }}
                            navigation={{
                                nextEl: '.ofc-slider-button-next',
                                prevEl: '.ofc-slider-button-prev',
                            }}
                        >
                            {
                                offices.map((office,idx) => (
                                    <SwiperSlide key={idx}>
                                <div className="mt-10 rounded-[32px] bg-white dark:bg-gray-dark md:grid md:grid-cols-2 lg:mt-0">
                                    <img
                                        src={office.image}
                                        alt={office.address}
                                        className="h-full w-full rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none"
                                    />
                                    <div className="py-10 px-5 sm:px-8">
                                        <div className="text-3xl">
                                            {office.country}
                                        </div>
                                        <ul className="space-y-4 pt-10">
                                            <li className="flex gap-3">
                                                <div className="pt-1">
                                                    <GeoAlt/>
                                                </div>
                                                <div className="text-sm font-bold sm:text-lg">{office.address}</div>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <TelephoneFill/>
                                                </div>
                                                {
                                                    office.phones.map((phone,idx) => (
                                                        <a key={idx} href={`tel:${phone}`} className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                            {phone}
                                                        </a>
                                                    ))
                                                }
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <EnvelopeAtFill/>
                                                </div>
                                                {
                                                    office.emails.map((email,idx) => (
                                                        <a key={idx} href={`mailto:${email}`} className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                            {email}
                                                        </a>
                                                    ))
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                                ))
                            }
                                                   

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeSwiper;
