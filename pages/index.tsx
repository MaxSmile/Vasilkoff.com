
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';


//const Testimonial = dynamic(() => import('../components/Testimonial'));
const TeamMembers = dynamic(() => import('../components/TeamMembers'));
const Services = dynamic(() => import('../components/Services'));
const PricingCard = dynamic(() => import('../components/PricingCard'));
const AIContacts = dynamic(() => import('../components/AIContacts'));
const ExpertAnswerKeyQuestions = dynamic(() => import('../components/ExpertAnswerKeyQuestions'));


const Index = (props: any) => {
    const [openDetails, setOpenDetails] = useState(false);
    return (
        <div className="overflow-x-hidden" id="bg">

            <div className="overflow-hidden pt-[82px] sm:-mx-[250px] lg:-mx-[150px] lg:pt-[106px]" id="over">
                <div className="relative" >
                    <div className="container" >
                        <div className="relative pt-14 pb-0 lg:pt-20 lg:pb-40 xl:pt-36">
                            <div className="relative text-center ">
                                <h2 className="text-4xl font-bold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] " >
                                    <span className="text-primary" style={{ letterSpacing: "0.04em" }}>Team</span>
                                    <span className="text-secondary">work</span>&nbsp;<span>makes</span>
                                    <br style={{ fontSize: "10%", lineHeight: "10%" }} />
                                    <span style={{ fontSize: "70%", lineHeight: "50%" }}>the dream work</span>
                                </h2>
                                <div className="pb-10  text-lg font-extralight leading-[30px]"
                                    style={{ maxWidth: "840px", margin: "19px auto" }}>
                                    We offer bespoke web and mobile development tailored to your business needs, with cutting-edge Blockchain and AI solutions that drive growth and unlock opportunities.
                                </div>
                                <Link href="/contact-us" className="btn mx-auto mt-2 block w-fit text-primary"
                                >
                                    talk to us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className="relative -top-10">&nbsp;</div>
            <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
                <div className="container space-y-8">
                    <div className="heading text-center">
                        <h1>Vasilkoff Ltd Empowers Your Success with Expert Web & Mobile App Development</h1>
                        <h2>Partner with Us for High-Impact Outsourcing Solutions</h2>
                        <p id="details" className={ `cursor-pointer my-8 text-md ${openDetails ? '' : 'line-clamp-2'}`} onClick={() => { setOpenDetails(!openDetails) }}>
                            These services may include software development, project management, consulting, and other related services that aim to deliver tangible results and provide a competitive advantage to clients.
                            
                            At Vasilkoff Ltd, we specialize in crafting state-of-the-art web and mobile applications, focusing on delivering high-quality outsourcing solutions that cater to your unique needs. Our team of experts is dedicated to bringing your ideas to life, ensuring each project is handled with utmost precision and professionalism. From initial concept to final implementation, we blend innovative development techniques with effective project management to create digital solutions that not only meet but exceed your expectations. Let us be your trusted partner in navigating the complexities of modern software development, and together, we'll create impactful digital experiences that drive your business forward.
                           
                            Partnering with us means more than just outsourcing your software development; it’s about embarking on a journey towards digital innovation and growth. With Vasilkoff Ltd, you gain a collaborator who understands the pulse of modern technology and is dedicated to propelling your business forward. Let’s work together to create digital solutions that resonate with your audience and deliver lasting impact.

                        </p>
                        
                        
                    </div>

                    <Services />
                    
                </div>
            </section>

            {/* Prices */}
            <section className="bg-gradient-to-b from-white/60 to-transparent py-14 dark:from-white/[0.02] lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h3>Competitive rates and pricing for superior service</h3>
                        <h2>Our expertise spans both outsourcing and outstaffing</h2>
                        <p className="my-10">
                            For software development services, outsourcing and outstaffing are two common business strategies used to hire external companies or individuals to perform certain tasks, rather than having an in-house team.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2">
                        <PricingCard title="Outsourcing" id="outsourcing"
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
                            ]} />
                        <PricingCard title="Outstaffing" id="outstaffing"
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
                            ]} />

                    </div>
                </div>
            </section>



            <section id="team" className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Meet Our Team</h2>
                        <p>Ingenious Problem-Solvers</p>
                    </div>
                    <TeamMembers />
                </div>
            </section>




            {/* <Testimonial /> */}
            {/* <AIContacts /> */}
            <ExpertAnswerKeyQuestions />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({

                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Vasilkoff",
                            "headline": "Vasilkoff Ltd - Software Development Company",
                            "legalName": "Vasilkoff Ltd",
                            "url": "https://vasilkoff.com",
                            "logo": "https://vasilkoff.com/images/logo-vasilkoff.webp",
                            "image": "https://vasilkoff.com/vasilkoff-cover.webp",
                            "sameAs": ["https://www.facebook.com/vasilkoff.software",
                                "https://www.instagram.com/vasilkoff"],
                            "telephone": "+35799169229",
                            "email": "maxim@vasilkoff.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Glastonos 12-14",
                                "addressLocality": "Paphos",
                                "addressRegion": "Paphos",
                                "addressCountry": "Cyprus",
                                "postalCode": "8046"
                            },
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "name": "Simon Papazov",
                                    "email": "sp@vasilkoff.com",
                                    "telephone": "+35799169229",
                                    "jobTitle": "Managing Director",
                                    "image": "https://www.vasilkoff.com/images/simon-papazov.png",
                                    "contactType": "customer service"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "name": "Anastasia Sarlidou",
                                    "email": "anastasia@vasilkoff.com",
                                    "jobTitle": "Human Centered AI engineer",
                                    "image": "https://www.vasilkoff.com/images/anastasia-sarlidou.png",
                                    "contactType": "AI related questions"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "name": "Irina Vasilkova",
                                    "email": "omorfi@vasilkoff.com",
                                    "jobTitle": "Design Director",
                                    "image": "https://www.vasilkoff.com/images/irina-vasilkova.png",
                                    "contactType": "design related questions"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "name": "Nikol Todorova",
                                    "email": "nikol@vasilkoff.com",
                                    "jobTitle": "UI/UX Designer",
                                    "image": "https://www.vasilkoff.com/images/nikol.jpg",
                                    "contactType": "customer service"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "name": "Maxim Vasilkov",
                                    "email": "maxim@vasilkoff.com",
                                    "jobTitle": "Systems Architect",
                                    "image": "https://www.vasilkoff.com/images/maxim-vasilkov.png",
                                    "contactType": "founder, business related questions"
                                }

                            ],
                            "founder": {
                                "@type": "Person",
                                "name": "Maxim Vasilkov",
                                "image": "https://www.vasilkoff.com/images/maxim-vasilkov.png",
                                "jobTitle": "CBDO"
                            }

                        }),
                    }}
                />
                <title>Vasilkoff Ltd - Full-stack Software Development Services</title>
                <meta name="description" content="Vasilkoff (CY) Ltd: Full-stack software development with a focus on AI-enhanced web/mobile apps, DApps, and Smart Contracts." />
                <link rel="canonical" href="https://vasilkoff.com" />
            </Head>

        </div>
    );
};

export default Index;
