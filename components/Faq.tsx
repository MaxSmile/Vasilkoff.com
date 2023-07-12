import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: 'What is outsourcing software development?',
            answer: 'Outsourcing software development is the process of hiring a third-party company to develop software for your organization. The outsourcing company takes care of the software development process, from project management to delivery.',
        },
        {
            id: 2,
            question: 'What is outstaffing software development?',
            answer: 'Outstaffing software development is the process of hiring remote developers who work exclusively for your organization but are employed by a third-party company. In this model, the outstaffing company takes care of the administrative tasks related to employment, such as payroll and benefits.',
        },
        {
            id: 3,
            question: 'What is the difference between outsourcing and outstaffing?',
            answer: "The main difference between outsourcing and outstaffing is the level of involvement of the third-party company. In outsourcing, the outsourcing company takes care of the entire software development process, while in outstaffing, the third-party company provides only the talent and takes care of administrative tasks.",
        },
        {
            id: 4,
            question: 'How do I choose between outsourcing and outstaffing?',
            answer: "Choosing between outsourcing and outstaffing depends on your organization's needs and goals. If you need to develop a complete software solution, outsourcing may be a better choice. If you need to augment your existing team with specific skills, outstaffing may be a better choice.",
        },
        {
            id: 5,
            question: 'What are the benefits of outsourcing software development?',
            answer: 'The benefits of outsourcing software development include cost savings, access to a larger talent pool, faster development times, and the ability to focus on core business activities.',
        },
        {
            id: 6,
            question: 'What are the benefits of outstaffing software development?',
            answer: 'The benefits of outstaffing software development include access to a larger talent pool, the ability to augment your existing team with specific skills, and greater flexibility in managing your team.',
        },
        {
            id: 7,
            question: 'What kind of software development services can be outsourced?',
            answer: 'Almost any kind of software development services can be outsourced, including web development, mobile development, cloud development, and software testing.',
        },
        {
            id: 8,
            question: 'What kind of software development services can be outstaffed?',
            answer: 'Any kind of software development services that require remote talent can be outstaffed, including web development, mobile development, cloud development, and software testing.',
        },
        {
            id: 9,
            question: 'How do you ensure quality when outsourcing software development?',
            answer: 'To ensure quality when outsourcing software development, you should choose a reputable outsourcing company, establish clear communication and expectations, and monitor the project regularly.',
        },
        {
            id: 10,
            question: 'How do you ensure quality when outstaffing software development?',
            answer: 'To ensure quality when outstaffing software development, you should choose a reputable outstaffing company, conduct thorough interviews and testing of potential hires, establish clear communication and expectations, and monitor the project regularly.',
        },
        {
            id: 11,
            question: 'What is the process of outsourcing software development?',
            answer: 'The process of outsourcing software development typically involves identifying the project requirements, choosing an outsourcing company, establishing a contract, managing the project, and delivering the final product.',
        },
        {
            id: 12,
            question: 'What is the process of outstaffing software development?',
            answer: 'The process of outstaffing software development typically involves identifying the project requirements, choosing an outstaffing company, conducting interviews and testing of potential hires, managing the team, and delivering the final product.',
        },
        {
            id: 13,
            question: 'How do you manage communication and collaboration with outsourced teams?',
            answer: 'To manage communication and collaboration with outsourced teams, you should establish clear communication channels, set regular check-ins and meetings, and use collaboration tools such as project management software.',
        },
        {
            id: 14,
            question: 'How do you manage communication and collaboration with outstaffed teams?',
            answer: 'To manage communication and collaboration with outstaffed teams, you should establish clear communication channels, set regular check-ins and meetings, and use collaboration tools such as project management software.',
        },
        {
            id: 15,
            question: 'How do you ensure data security when outsourcing software development?',
            answer: "To ensure data security when outsourcing software development, you should choose an outsourcing company with strong security policies and protocols, establish clear data security requirements in the contract, limit access to sensitive data, and regularly monitor and audit the outsourcing company's security practices.",
        },
        {
            id: 16,
            question: 'How do you ensure data security when outstaffing software development?',
            answer: "To ensure data security when outstaffing software development, you should choose an outstaffing company with strong security policies and protocols, establish clear data security requirements in the contract, limit access to sensitive data, and regularly monitor and audit the outstaffing company's security practices.",
        },
        {
            id: 17,
            question: 'What are the potential risks of outsourcing software development?',
            answer: "The potential risks of outsourcing software development include quality issues, communication challenges, security risks, and cultural differences.",
        },
        {
            id: 18,
            question: 'What are the potential risks of outstaffing software development?',
            answer: 'The potential risks of outstaffing software development include quality issues, communication challenges, security risks, and managing the remote team.',
        },
        {
            id: 19,
            question: 'How do you measure the success of outsourced software development projects?',
            answer: 'To measure the success of outsourced software development projects, you should establish clear metrics and goals, track project progress and performance, and conduct regular reviews and evaluations.',
        },
        {
            id: 20,
            question: 'How do you measure the success of outstaffed software development projects?',
            answer: 'To measure the success of outstaffed software development projects, you should establish clear metrics and goals, track project progress and performance, and conduct regular reviews and evaluations.',
        },
    ],
}) => {
    const [active, setActive] = useState<any>(0);
    return (
        <section className="py-14 lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h1>FAQs</h1>
                    <h4>Frequently Asked Questions</h4>
                    <p className="mt-5 text-lg font-bold">Have questions? We're here to help!</p>
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
