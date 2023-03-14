import Testimonial from '../components/Testimonial';
import { useState } from 'react';
import CounterComponent from '../components/CounterComponent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Index = (props: any) => {
    const [activeTab, setActiveTab] = useState<string>('all');
    return (
        <div className="overflow-x-hidden">
            <div className="overflow-hidden pt-[82px] sm:-mx-[250px] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative bg-[url(/assets/images/world-map.png)] bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                            <div className="relative z-[1] text-center lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] ">
                                    Make your <span className="italic text-primary">team</span> 
                                    <span className="italic text-secondary">work</span> together
                                </h2>
                                <p className="my-8 text-lg lg:w-[90%] ">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                </p>
                                <Link href="/about-us" className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                                    read more
                                </Link>
                            </div>
                            <div
                                className="bottom-0 mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
                                data-aos= 'fade-left'
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                data-aos-delay="200"
                            >
                                <img src="/images/hero-768x768.jpg" alt="Working in IT" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>High - Impact Services</h6>
                        <h4>We help Brands with</h4>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    UI/UX Design
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    We provide services with the best designs than our designer team for your business.
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    Web Development
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    We help develop company websites to be more professional and attractive
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >
                                    Digital Marketing
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    We also help you market your products through an online marketplace.
                                </p>
                                <Link
                                    href="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
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
                        {/* <div className="flex items-center justify-end gap-4">
                            <div className="text-sm font-extrabold text-black dark:text-white">View All</div>
                            <button type="button" className="bg-black/5 dark:bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary dark:hover:bg-secondary transition">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                                    <path d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                            <button type="button" className="bg-black/5 dark:bg-white/5 text-p w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary dark:hover:bg-secondary transition">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                                    <path d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div> */}
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
            </section>

            <section className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Meet Our Team</h6>
                        <h4>Creative Minds</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-1.png" alt="team-member-1" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Aditya Patel
                            </h4>
                            <h6 className="text-sm font-bold">Chief Executive Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-2.png" alt="team-member-2" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Audrey Ramirez
                            </h4>
                            <h6 className="text-sm font-bold">Chief Operating Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-3.png" alt="team-member-3" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                James Robinson
                            </h4>
                            <h6 className="text-sm font-bold">Chief Financial Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-4.png" alt="team-member-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Daniel Allen
                            </h4>
                            <h6 className="text-sm font-bold">Chief Marketing Officer</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/60 to-transparent py-14 dark:from-white/[0.02] lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Pricing Plan</h6>
                        <h4>Choose Affordable Prices</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-3xl border-2 border-primary bg-white p-6 px-4 transition hover:bg-primary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6">
                                <div className="mb-8">
                                    <h3 className="text-[22px] font-black text-black dark:text-white">Intro</h3>
                                </div>
                                <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                                </g>
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                                </g>
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                                </g>
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                    </li>
                                </ul>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-7">
                                    <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                        <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                            Monthly
                                        </div>
                                        <Link href="#" className="btn text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44">
                                            $39.99
                                            <small className="text-xs lowercase">/month</small>
                                        </Link>
                                    </div>
                                    <span className="block text-center text-sm font-bold text-black dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left">
                                        Billed every month
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-3xl border-2 border-secondary bg-white p-6 px-4 transition hover:bg-secondary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6">
                                <div className="relative mb-8">
                                    <h3 className="text-[22px] font-black text-black dark:text-white">Base</h3>
                                    <div className="group-hover:white/10 absolute top-1/2 -translate-y-1/2 rounded-xl bg-secondary/10 py-2 px-4 text-xs font-black text-secondary group-hover:bg-white group-hover:text-black ltr:right-0 rtl:left-0">
                                        MOST POPULAR
                                    </div>
                                </div>
                                <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                    </li>
                                </ul>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-7">
                                    <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                        <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                            Yearly
                                        </div>
                                        <Link
                                            href="#"
                                            className="btn bg-secondary text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black xl:w-44"
                                        >
                                            $14.99
                                            <small className="text-xs lowercase">/month</small>
                                        </Link>
                                    </div>
                                    <span className="block text-center text-sm font-bold text-black dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left">
                                        $179.00 every 12 months
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-3xl border-2 border-black bg-white p-6 px-4 transition hover:bg-black hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6">
                                <div className="mb-8">
                                    <h3 className="text-[22px] font-black text-black group-hover:text-white dark:text-white">Pro</h3>
                                </div>
                                <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Daily content updates</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited downloads of FREE resources</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Unlimited PREMIUM downloads</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Valid commercial licenses</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">No attribution required</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#45B649" />
                                                <path
                                                    d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3">Browse with no ads</p>
                                    </li>
                                </ul>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-7">
                                    <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                        <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-black group-hover:text-gray group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                            Yearly
                                        </div>
                                        <Link href="#" className="btn bg-black text-xl text-white group-hover:bg-white group-hover:text-black xl:w-44">
                                            $499
                                        </Link>
                                    </div>
                                    <span className="block text-center text-sm font-bold text-black group-hover:text-white dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left">
                                        Billed once only
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />
            
        </div>
    );
};

export default Index;
