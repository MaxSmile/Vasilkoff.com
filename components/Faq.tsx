import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: 'How long is this site live?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
}) => {
    const [active, setActive] = useState<any>(0);
    return (
        <section className="py-14 lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h6 className={`${showTitle ? '' : 'hidden'} ${type.toLowerCase() === 'modern-saas' ? '!text-secondary' : ''}`}>FAQs</h6>
                    <h4>Frequently Asked Questions</h4>
                    <p className="mt-5 text-lg font-bold">Have questions? We’re help you.</p>
                </div>
                <div className="mx-auto lg:w-[730px]">
                    {queries.map((faq: any, i: number) => {
                        return (
                            <div key={faq.id} className="mt-6 border-0 border-b-2 border-gray/20 bg-transparent">
                                <button
                                    type="button"
                                    className="relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div>{faq.question}</div>
                                    <div
                                        className={`grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition ${
                                            active === i ? '!border-black !text-black dark:!border-white dark:!text-white' : ''
                                        }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                className={active === i ? 'hidden' : ''}
                                                d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                                    <div className="lg:w-4/5">
                                        <p className="px-0 pb-5 pt-0 text-sm font-bold leading-[18px] text-gray">{faq.answer}</p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
