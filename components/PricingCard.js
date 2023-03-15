
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const PricingCard = (
    {
        title,
        period,
    }
) => {

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-3xl border-2 border-primary bg-white p-6 px-4 transition hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] 
                             sm:px-6">
                                <div className="mb-8">
                                    <h3 className="text-[22px] font-black text-black">{title}</h3>
                                </div>
                                <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-secondary">
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
                                        <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 
                                            before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary pl-5 before:left-0 sm:mb-0">
                                            {period}
                                        </div>
                                        <Link href="#" className="btn text-xl  group-hover:bg-white group-hover:text-primary xl:w-44">
                                            $39.99
                                            <small className="text-xs lowercase">/month</small>
                                        </Link>
                                    </div>
                                    <span className="block text-center text-sm font-bold text-black  sm:pr-5 sm:text-right ">
                                        Billed every month
                                    </span>
                                </div>
                            </div>
                        </div>
    );
};

export default PricingCard;
