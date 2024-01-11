import Head from 'next/head';
import { useState } from 'react';
import FaqItem from './FaqItem';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: 'What is outsourcing software web-development?',
            answer: 'Outsourcing of  web-development is the process of hiring a third-party company to develop software for your organization. The outsourcing company takes care of the mobile apps and web-development process, from project management to delivery.',
        },
        {
            id: 2,
            question: 'What is outstaffing mobile apps and web-development?',
            answer: 'Outstaffing mobile apps and web-development is the process of hiring remote developers who work exclusively for your organization but are employed by a third-party company. In this model, the outstaffing company takes care of the administrative tasks related to employment, such as payroll and benefits.',
        },
        {
            id: 3,
            question: 'What is the difference between outsourcing and outstaffing?',
            answer: "The main difference between outsourcing and outstaffing is the level of involvement of the third-party company. In outsourcing, the outsourcing company takes care of the entire mobile apps and web-development process, while in outstaffing, the third-party company provides only the talent and takes care of administrative tasks.",
        },
        {
            id: 4,
            question: 'How do I choose between outsourcing and outstaffing?',
            answer: "Choosing between outsourcing and outstaffing depends on your organization's needs and goals. If you need to develop a complete software solution, outsourcing may be a better choice. If you need to augment your existing team with specific skills, outstaffing may be a better choice.",
        },
        {
            id: 5,
            question: 'What are the benefits of outsourcing mobile apps and web-development?',
            answer: 'The benefits of outsourcing mobile apps and web-development include cost savings, access to a larger talent pool, faster development times, and the ability to focus on core business activities.',
        },
        {
            id: 6,
            question: 'What are the benefits of outstaffing mobile apps and web-development?',
            answer: 'The benefits of outstaffing mobile apps and web-development include access to a larger talent pool, the ability to augment your existing team with specific skills, and greater flexibility in managing your team.',
        },
        {
            id: 7,
            question: 'What kind of mobile apps and web-development services can be outsourced?',
            answer: 'Almost any kind of mobile apps and web-development services can be outsourced, including web development, mobile development, cloud development, and software testing.',
        },
        {
            id: 8,
            question: 'What kind of mobile apps and web-development services can be outstaffed?',
            answer: 'Any kind of mobile apps and web-development services that require remote talent can be outstaffed, including web development, mobile development, cloud development, and software testing.',
        },
        {
            id: 9,
            question: 'How do you ensure quality when outsourcing mobile apps and web-development?',
            answer: 'To ensure quality when outsourcing mobile apps and web-development, you should choose a reputable outsourcing company, establish clear communication and expectations, and monitor the project regularly.',
        },
        {
            id: 10,
            question: 'How do you ensure quality when outstaffing mobile apps and web-development?',
            answer: 'To ensure quality when outstaffing mobile apps and web-development, you should choose a reputable outstaffing company, conduct thorough interviews and testing of potential hires, establish clear communication and expectations, and monitor the project regularly.',
        },
        {
            id: 11,
            question: 'What is the process of outsourcing mobile apps and web-development?',
            answer: 'The process of outsourcing mobile apps and web-development typically involves identifying the project requirements, choosing an outsourcing company, establishing a contract, managing the project, and delivering the final product.',
        },
        {
            id: 12,
            question: 'What is the process of outstaffing mobile apps and web-development?',
            answer: 'The process of outstaffing mobile apps and web-development typically involves identifying the project requirements, choosing an outstaffing company, conducting interviews and testing of potential hires, managing the team, and delivering the final product.',
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
            question: 'How do you ensure data security when outsourcing mobile apps and web-development?',
            answer: "To ensure data security when outsourcing mobile apps and web-development, you should choose an outsourcing company with strong security policies and protocols, establish clear data security requirements in the contract, limit access to sensitive data, and regularly monitor and audit the outsourcing company's security practices.",
        },
        {
            id: 16,
            question: 'How do you ensure data security when outstaffing mobile apps and web-development?',
            answer: "To ensure data security when outstaffing mobile apps and web-development, you should choose an outstaffing company with strong security policies and protocols, establish clear data security requirements in the contract, limit access to sensitive data, and regularly monitor and audit the outstaffing company's security practices.",
        },
        {
            id: 17,
            question: 'What are the potential risks of outsourcing mobile apps and web-development?',
            answer: "The potential risks of outsourcing mobile apps and web-development include quality issues, communication challenges, security risks, and cultural differences.",
        },
        {
            id: 18,
            question: 'What are the potential risks of outstaffing mobile apps and web-development?',
            answer: 'The potential risks of outstaffing mobile apps and web-development include quality issues, communication challenges, security risks, and managing the remote team.',
        },
        {
            id: 19,
            question: 'How do you measure the success of outsourced mobile apps and web-development projects?',
            answer: 'To measure the success of outsourced mobile apps and web-development projects, you should establish clear metrics and goals, track project progress and performance, and conduct regular reviews and evaluations.',
        },
        {
            id: 20,
            question: 'How do you measure the success of outstaffed mobile apps and web-development projects?',
            answer: 'To measure the success of outstaffed mobile apps and web-development projects, you should establish clear metrics and goals, track project progress and performance, and conduct regular reviews and evaluations.',
        },
    ],
}) => {
    const [active, setActive] = useState(null);
    const toggleActive = (i) => setActive(active === i ? null : i);

    return (
        <>
            <Head>
                <title>FAQs - Vasilkoff Ltd</title>
                <meta name="description" content="Get answers to common questions about Vasilkoff's full-stack mobile apps and web-development services, blockchain technology, outsourcing, and outstaffing in our comprehensive FAQ." />
            </Head>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h1>FAQs</h1>
                        <h2>Frequently Asked Questions</h2>
                        <p className="mt-5 text-lg font-bold">Have questions? We're here to help!</p>
                    </div>
                    <div className="mx-auto lg:w-[730px]">
                        {queries.map((faq, i) => (
                            <FaqItem
                                key={i}
                                question={faq.question}
                                answer={faq.answer}
                                isActive={active === i}
                                onClick={() => toggleActive(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
