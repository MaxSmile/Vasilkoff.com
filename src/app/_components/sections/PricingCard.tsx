import React from 'react';
import Link from 'next/link';

type PricingCardProps = {
    id: string;
    title: string;
    price: string;
    period: string;
    plusArray: string[];
    minusArray: string[];
    per: string;
};

const PricingCard: React.FC<PricingCardProps> = ({
    id,
    title,
    price,
    period,
    plusArray,
    minusArray,
    per
}) => {
    return (
        <card data-aos="fade-up" data-aos-duration="1000" className="group rounded-3xl bg-white p-8 px-4 sm:px-6">

            <div className="m-6">
                <h3 className="text-[22px] font-black text-black">{title}</h3>
            </div>
            <ul className="space-y-5 p-6 text-sm font-bold group-hover:text-secondary">
                {plusArray.map((item, index) => (
                    <li key={'p' + index} className="flex items-center">
                        <div>
                            <svg role="presentation" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
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
                        <p className="pl-3">{item}</p>

                    </li>

                ))}
                {minusArray.map((item, index) => (
                    <li key={'m' + index} className="flex items-center">
                        <div>
                            <svg role="presentation" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                        <p className="pl-3">{item}</p>

                    </li>

                ))}

            </ul>
            <div className="border-t-2 border-gray-300 pt-7">
                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 
                                            before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-green-400 pl-5 before:left-0 sm:mb-0">
                        {period}
                    </div>
                    <Link href={"contact-us#" + id} passHref className="btn text-xl 
                    border-gray-300  
                    group-hover:bg-white group-hover:text-primary w-44">
                        {price}
                        <small className="text-xs lowercase">/{per}</small>
                    </Link>
                </div>
                <span className="block text-center text-sm font-bold text-black sm:pr-5 sm:text-right">
                    Billed every month
                </span>
            </div>

        </card>
    );
};

export default PricingCard;
