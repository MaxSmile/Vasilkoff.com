import Testimonial from '../components/Testimonial';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import TeamMember from "../components/TeamMember";
import Services from '../components/Services';
import PricingCard from '../components/PricingCard';

const Index = (props: any) => {
    return (
        <div className="overflow-x-hidden" id="bg">
            <div className="overflow-hidden pt-[82px] sm:-mx-[250px] lg:-mx-[150px] lg:pt-[106px]" id="over">
                <div className="relative" >
                    <div className="container" >
                        <div className="relative pt-14 pb-0 lg:pt-20 lg:pb-40 xl:pt-36">
                            <div className="relative text-center ">
                                <h2 className="text-4xl font-bold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] " >
                                    <span className="italic text-primary" style={{ letterSpacing: "0.04em" }}>Team</span>
                                    <span className="text-secondary">work</span>&nbsp;<span>makes</span><br /><span style={{ fontSize: "70%", lineHeight: "50%" }}>the dream work</span>
                                </h2>
                                <div className="pb-10  text-lg font-extralight leading-[30px]"
                                    style={{ maxWidth: "840px", margin: "19px auto" }}>
                                    We offer bespoke web and mobile development tailored to your business needs, with cutting-edge Blockchain and AI solutions that drive growth and unlock opportunities.
                                </div>
                                <Link href="/#talkToUs" className="btn mx-auto mt-2 block w-fit text-primary"
                                >
                                    talk to us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
                <Container className="space-y-8">
                    <div className="heading text-center">
                        <h6>High - Impact Services</h6>
                        <h4>We help with</h4>
                    </div>

                    <Services />

                </Container>
            </section>

            {/* Prices */}
            <section className="bg-gradient-to-b from-white/60 to-transparent py-14 dark:from-white/[0.02] lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Competitive rates and pricing for superior service</h6>
                        <h4>Our expertise spans both outsourcing and outstaffing</h4>
                        <p>
                        For software development services, outsourcing and outstaffing are two common business strategies used to hire external companies or individuals to perform certain tasks, rather than having an in-house team.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2">
                        <PricingCard title="Outsourcing" 
                        period="Hourly flat rate" 
                        price="from $40" per="hour"
                        plusArray={[
                            "Access to specialized expertise and skills",
                            "Opportunity to work with established teams and companies",
                            "Flexibility to scale resources up or down as needed",
                            "Lower management overhead"
                        ]} minusArray={[
                            "Limited control over project management and team dynamics",
                            "May have less transparency into the development process",
                            "Communication and collaboration may be more challenging",
                            "May have less ownership of the project and deliverables",
                            "May have higher costs due to additional overhead and management fees"
                        ]}/>
                        <PricingCard title="Outstaffing" 
                        period="Monthly static payment" 
                        price="from $2000" per="month"
                        plusArray={[
                            "High level of control over project management and team dynamics",
                            "Clear communication and collaboration with the team",
                            "Access to highly skilled talent without long-term hiring commitments",
                            "High level of ownership over the project and deliverables",
                            "Lower overall cost compared to outsourcing"
                        ]} minusArray={[
                            "Require more management and oversight",
                            "Require more time and effort to assemble a team",
                            "Require more time to ramp up and begin development",
                            "Require more effort to establish company culture and team dynamics"
                        ]}/>

                    </div>
                </div>
            </section>

            {/* <section
                className="py-14 dark:!bg-none lg:py-[100px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 54.69%)',
                }}
            >
                <CounterComponent title="Company Facts" />
                <div className="relative my-14 mx-auto border-[10px] border-transparent bg-black py-14 dark:border-black dark:bg-gray-dark lg:my-[100px] lg:py-[100px] xl:max-w-[1440px] xl:rounded-3xl">
                    <div className="container">
                        <div className="items-end gap-4 lg:flex xl:gap-0">
                            <div className="lg:w-1/2">
                                <div className="heading mb-16 text-center ltr:lg:text-left rtl:lg:text-right">
                                    <h6>What Makes us Different?</h6>
                                    <h4 className="leading-normal !text-white lg:!leading-[50px]">We bring solutions to make life easier for our customers.</h4>
                                </div>
                                <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2" data-aos= 'fade-right' data-aos-duration="1000">
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_337)">
                                                    <path
                                                        opacity="0.5"
                                                        d="M19.2867 23.9285V25.119C19.2867 25.7505 19.0358 26.3561 18.5893 26.8027C18.1427 27.2492 17.5371 27.5001 16.9056 27.5001H12.1435C11.512 27.5001 10.9063 27.2492 10.4598 26.8027C10.0133 26.3561 9.76239 25.7505 9.76239 25.119V23.9285H19.2867Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.69213 21.5473C9.33855 20.0318 7.74323 18.7924 7.08844 17.9757C5.96718 16.5748 5.26448 14.8857 5.06127 13.1028C4.85807 11.32 5.16263 9.51606 5.93988 7.89876C6.71712 6.28146 7.93542 4.91663 9.45445 3.96148C10.9735 3.00632 12.7314 2.49971 14.5258 2.5C16.3202 2.50029 18.078 3.00746 19.5967 3.9631C21.1154 4.91874 22.3333 6.28396 23.11 7.90151C23.8867 9.51906 24.1907 11.3231 23.9869 13.1059C23.7831 14.8886 23.0799 16.5776 21.9582 17.9781C21.3034 18.7936 19.7105 20.033 19.3569 21.5473H9.69094H9.69213ZM15.715 12.029V7.26094L10.3576 14.4101H13.334V19.1722L18.6914 12.029H15.715Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_337">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Creativity</h4>
                                            <p className="font-semibold">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_379)">
                                                    <path
                                                        d="M7.38901 21.9074C8.8422 21.9074 10.0284 20.7213 10.0284 19.268C10.0284 17.8148 8.84225 16.6287 7.38901 16.6287C5.93576 16.6287 4.74963 17.8148 4.74963 19.268C4.74963 20.7212 5.90621 21.9074 7.38901 21.9074Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.64281 22.5896C8.99038 23.0344 8.21938 23.2717 7.38902 23.2717C6.55865 23.2717 5.78771 23.0048 5.13522 22.5896C3.86013 23.3014 3 24.6655 3 26.2372V26.7709C3 27.364 3.47454 27.8386 4.06761 27.8386H9.73188V27.6013C9.73188 26.2075 10.2656 24.9324 11.0962 23.9537C10.7104 23.3901 10.2062 22.9158 9.64276 22.5896L9.64281 22.5896Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M20.9714 19.268C20.9714 20.7212 22.1575 21.9074 23.6107 21.9074C25.064 21.9074 26.2501 20.7213 26.2501 19.268C26.2501 17.8148 25.064 16.6287 23.6107 16.6287C22.128 16.6287 20.9714 17.815 20.9714 19.268Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M25.8646 22.5893C25.2122 23.0341 24.4412 23.2714 23.6109 23.2714C22.7805 23.2714 21.9797 23.0045 21.3571 22.5596C20.764 22.8858 20.2894 23.3306 19.9039 23.894C20.7638 24.8727 21.2681 26.1478 21.2681 27.5416V27.7789H26.9324C27.5255 27.7789 28 27.3044 28 26.7113V26.1776C27.9998 24.6652 27.1397 23.3308 25.8646 22.5894L25.8646 22.5893Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M12.8456 20.6318C12.8456 22.085 14.0318 23.2712 15.485 23.2712C16.9383 23.2712 18.1244 22.085 18.1244 20.6318C18.1244 19.1786 16.9383 17.9924 15.485 17.9924C14.0318 17.9924 12.8456 19.1786 12.8456 20.6318Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M17.7388 23.9536C17.0864 24.3984 16.3154 24.6356 15.485 24.6356C14.6547 24.6356 13.8837 24.3688 13.2312 23.9536C11.9561 24.6654 11.096 26.0295 11.096 27.6012V28.1349C11.096 28.728 11.5706 29.2025 12.1636 29.2025H18.8065C19.3996 29.2025 19.8741 28.728 19.8741 28.1349V27.6012C19.8739 26.0295 19.014 24.6654 17.7387 23.9536H17.7388Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M11.0663 9.15515C11.3036 10.6379 12.5787 11.7945 14.1209 11.7945C14.625 11.7945 15.07 11.676 15.4852 11.4683C15.9003 11.676 16.3451 11.7945 16.8495 11.7945C18.3916 11.7945 19.6965 10.6676 19.904 9.15515C20.9123 8.65103 21.5945 7.613 21.5945 6.39726C21.5945 5.18132 20.9125 4.17307 19.904 3.63937C19.6667 2.15658 18.3916 1 16.8495 1C16.3453 1 15.9004 1.11853 15.4852 1.32623C15.07 1.11853 14.6253 1 14.1209 1C12.5787 1 11.2738 2.12698 11.0663 3.63937C10.0581 4.1435 9.37585 5.18153 9.37585 6.39726C9.37606 7.613 10.0581 8.65106 11.0663 9.15515ZM18.5989 5.3888C19.1625 5.3888 19.6072 5.83356 19.6072 6.39705C19.6072 6.96055 19.1624 7.4053 18.5989 7.4053C18.0354 7.4053 17.5907 6.96055 17.5907 6.39705C17.5907 5.83356 18.0354 5.3888 18.5989 5.3888ZM15.485 5.3888C16.0485 5.3888 16.4933 5.83356 16.4933 6.39705C16.4933 6.96055 16.0485 7.4053 15.485 7.4053C14.9215 7.4053 14.4768 6.96055 14.4768 6.39705C14.4768 5.83356 14.9215 5.3888 15.485 5.3888ZM12.3711 5.3888C12.9346 5.3888 13.3793 5.83356 13.3793 6.39705C13.3793 6.96055 12.9346 7.4053 12.3711 7.4053C11.8076 7.4053 11.3629 6.96055 11.3629 6.39705C11.3629 5.83356 11.8076 5.3888 12.3711 5.3888Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.25737 15.9762C9.73192 15.9762 10.1173 15.5906 10.1173 15.1163C10.1173 14.6417 9.7317 14.2563 9.25737 14.2563C8.78283 14.2563 8.39746 14.6419 8.39746 15.1163C8.39746 15.5908 8.78305 15.9762 9.25737 15.9762Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M11.3036 12.0911C10.7105 12.0911 10.2064 12.5656 10.2064 13.1883C10.2064 13.7813 10.6809 14.2855 11.3036 14.2855C11.9265 14.2855 12.4008 13.811 12.4008 13.1883C12.3712 12.5656 11.8967 12.0911 11.3036 12.0911Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M20.8527 15.1163C20.8527 15.5908 21.2383 15.9762 21.7126 15.9762C22.1872 15.9762 22.5726 15.5906 22.5726 15.1163C22.5726 14.6417 22.187 14.2563 21.7126 14.2563C21.2383 14.2563 20.8527 14.6417 20.8527 15.1163Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M19.6665 12.0911C19.0734 12.0911 18.5693 12.5656 18.5693 13.1883C18.5693 13.7813 19.0438 14.2855 19.6665 14.2855C20.2596 14.2855 20.7637 13.811 20.7637 13.1883C20.7637 12.5656 20.2892 12.0911 19.6665 12.0911Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M15.4851 12.5063C14.892 12.5063 14.3879 12.9809 14.3879 13.6036C14.3879 14.1966 14.8624 14.7008 15.4851 14.7008C16.0782 14.7008 16.5823 14.2262 16.5823 13.6036C16.5823 13.0105 16.0782 12.5063 15.4851 12.5063Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M15.485 15.353C15.0105 15.353 14.6251 15.7386 14.6251 16.2129C14.6251 16.6875 15.0107 17.0729 15.485 17.0729C15.9596 17.0729 16.345 16.6873 16.345 16.2129C16.345 15.7386 15.9596 15.353 15.485 15.353Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_379">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Innovative Thinking</h4>
                                            <p className="font-semibold">There are many variations of passages of Lorem Ipsum available</p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_392)">
                                                    <path
                                                        opacity="0.5"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.2364 27.9997V24.9966C12.4567 25.1078 11.1218 23.6617 11.1218 21.9935C11.1218 20.3249 12.4567 18.9904 14.2364 19.1015V16.0984H8.67477C8.89731 15.6535 9.3422 15.0973 9.3422 14.5412C9.3422 12.3167 6.00534 12.3167 6.00534 14.5412C6.00534 15.0975 6.33905 15.6535 6.56161 16.0984H1V27.1102C1 27.5551 1.44487 27.9999 1.88974 27.9999H14.2365L14.2364 27.9997Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M28.6959 16.0981H25.2477C25.3588 17.8778 24.0242 19.3238 22.3557 19.3238C20.576 19.3238 19.2412 17.8778 19.3526 16.0981H15.4595V20.7698C15.0146 20.6586 14.4584 20.3249 14.0135 20.3249C11.9001 20.3249 11.9001 23.6618 14.0135 23.6618C14.4584 23.6618 15.0146 23.4392 15.4595 23.2169V27.9997H27.8063C28.2511 27.9997 28.696 27.5549 28.696 27.11V16.0982L28.6959 16.0981Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M28.6731 14.9015V3.88974C28.6731 3.44487 28.2283 3 27.672 3H15.4367V5.89196C17.1052 5.66942 18.6624 7.00423 18.6624 8.78392C18.6624 10.5636 17.1052 11.8985 15.4367 11.6759V14.9016H20.9983C20.8871 15.3464 20.5534 15.9027 20.5534 16.3476C20.5534 18.5722 24.0017 18.5722 24.0017 16.3476C24.0017 15.9027 23.668 15.3465 23.4454 14.9016L28.6731 14.9015Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_392">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Rapid Solutions</h4>
                                            <p className="font-semibold">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_401)">
                                                    <path
                                                        opacity="0.5"
                                                        d="M9.68219 19.8007L10.8868 17.8733C11.9699 18.5518 13.2226 18.9106 14.5006 18.9086C15.7787 18.9106 17.0313 18.5518 18.1144 17.8733L19.319 19.8007C17.8749 20.7054 16.2047 21.184 14.5006 21.1814C12.7965 21.184 11.1263 20.7054 9.68219 19.8007Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M24.7284 10.9537C25.3312 10.9537 25.9093 11.1932 26.3355 11.6194C26.7618 12.0457 27.0012 12.6238 27.0012 13.2265V17.7722C27.0012 18.375 26.7618 18.9531 26.3355 19.3794C25.9093 19.8056 25.3312 20.0451 24.7284 20.0451H23.5215C23.2445 22.2421 22.1752 24.2625 20.5143 25.7272C18.8534 27.1918 16.715 28 14.5006 28V25.7272C16.309 25.7272 18.0433 25.0088 19.322 23.7301C20.6007 22.4513 21.3191 20.717 21.3191 18.9086V12.0901C21.3191 10.2817 20.6007 8.54743 19.322 7.26871C18.0433 5.98999 16.309 5.27162 14.5006 5.27162C12.6922 5.27162 10.9579 5.98999 9.67919 7.26871C8.40047 8.54743 7.6821 10.2817 7.6821 12.0901V20.0451H4.27284C3.67004 20.0451 3.09194 19.8056 2.6657 19.3794C2.23946 18.9531 2 18.375 2 17.7722V13.2265C2 12.6238 2.23946 12.0457 2.6657 11.6194C3.09194 11.1932 3.67004 10.9537 4.27284 10.9537H5.47972C5.75704 8.75689 6.82646 6.73677 8.48733 5.27238C10.1482 3.808 12.2864 3 14.5006 3C16.7149 3 18.853 3.808 20.5139 5.27238C22.1748 6.73677 23.2442 8.75689 23.5215 10.9537H24.7284Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_401">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Top-Notch Support</h4>
                                            <p className="font-semibold">
                                                It has survived not only five centuries, but also the leap into electronic typesetting
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-1/2 mx-auto mt-10 ltr:right-5 rtl:left-5 md:w-[45%] lg:mt-0 xl:absolute xl:-translate-y-1/2">
                                <img src="/assets/images/box-img.png" alt="box-img" className="w-full rtl:rotate-y-180" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>Our Project</h6>
                            <h4>Some of our finest work.</h4>
                        </div>
                    </div>
                    <div className="mb-7">
                        <ul className="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
                            <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('all')} className="transition hover:text-secondary">
                                    All Work
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('design')} className="transition hover:text-secondary">
                                    Design
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'website' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('website')} className="transition hover:text-secondary">
                                    Website
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'app' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('app')} className="transition hover:text-secondary">
                                    Mobile App
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'web' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('web')} className="transition hover:text-secondary">
                                    Web Application
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'ecommerce' ? 'active' : ''}`}>
                                <button type="button" onClick={() => setActiveTab('ecommerce')} className="transition hover:text-secondary">
                                    Ecommerce
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className={`project ${activeTab === 'all' || activeTab === 'web' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-1.png" alt="project-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Space Landing page</h6>
                                    <p>Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'ecommerce' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-2.png" alt="project-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Crypto Game - UX Interface</h6>
                                    <p>Website, App</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-3.png" alt="project-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Looking for a quiet place</h6>
                                    <p>Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-4.png" alt="project-4" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">WeTour - Travel Hero Illustration</h6>
                                    <p>Website</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-5.png" alt="project-5" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Digital Art Guide</h6>
                                    <p>Branding</p>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                <Link href="/portfolio-detail" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/project-6.png" alt="project-6" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Frozeverse - 3D and motion design</h6>
                                    <p>Branding, Website, App</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="team" className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Meet Our Team</h6>
                        <h4>Ingenious Problem-Solvers</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <TeamMember name="Maxim Vasilkov" position="CBDO" picture="/images/maxim-vasilkov.png" />
                        <TeamMember name="Simon Papazov" position="Managing Director" picture="/images/simon-papazov.png" />
                        <TeamMember name="Anastasia Sarlidou" position="Project Manager" picture="/images/anastasia-sarlidou.png" />
                        <TeamMember name="Irina Vasilkova" position="Graphics Designer" picture="/images/irina-vasilkova.png" />
                    </div>
                </div>
            </section>



            {/* <Testimonial /> */}

        </div>
    );
};

export default Index;
