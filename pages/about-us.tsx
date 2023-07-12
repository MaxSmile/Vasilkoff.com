
import Link from 'next/link';
import Head from 'next/head';
// import CounterComponent from '../components/CounterComponent';
// import Testimonial from '../components/Testimonial';
// import BlogSlider from '../components/BlogSlider';
import { portfolios } from '../data/portfolios';
import TeamMembers from '../components/TeamMembers';
import { OurProjectCard } from '../components/OurProjectCard';
import CounterComponent from '../components/CounterComponent';
import AIContacts from '../components/AIContacts';

const Aboutus = () => {
    const ourprojects = portfolios.filter(portfolio => portfolio.type === 'our-projects');
    return (
        <div>
            <Head>
            <title>About Us - Vasilkoff</title>
                <meta 
                    name="description" 
                    content="Learn more about Vasilkoff, a full-stack software development company. Discover our mission, vision, team, and why we're the right choice for your software development needs." 
                />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h1>Who are we?</h1>
                            <h2>Your Trusted IT Partners</h2>
                        </div>
                        <div className="font-medium pb-10 text-lg leading-[30px]">
                            <p >
                                Our team of IT professionals, primarily based in Cyprus and Ukraine, is dedicated to delivering exceptional technology solutions that empower your business.
                            </p>
                            <p className="font-semibold">
                                🇺🇦 By supporting Ukraine, we showcase our commitment to our team members and the communities we serve.
                            </p>
                        </div>

                        <Link href="/contact-us" className="btn capitalize text-primary">
                            Contact us
                        </Link>
                    </div>
                </div>
                <img src="/assets/images/about-who-bg.png" alt="about-who-bg" className="-bottom-5 ltr:right-0 rtl:left-0 rtl:rotate-y-180 lg:absolute" />
            </section>

            <CounterComponent />

            <section id="team" className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Ingenious Problem-Solvers</h2>
                        {/* <p>Trust in our expertise to provide the cutting-edge solutions your business requires to thrive in today's competitive landscape.</p>
                     */}
                    </div>
                    <TeamMembers />
                </div>
            </section>
            

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="mb-10 flex flex-col items-center justify-center gap-4 lg:mb-14 lg:flex-row lg:justify-between">
                        <div className="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2>Our Projects</h2>
                        </div>
                        Or <Link
                            href="/portfolio"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View our portfolio
                        </Link>
                    </div>

                    <div className="grid gap-[30px] sm:grid-cols-2">
                        {ourprojects.map((project, index) => (
                            <OurProjectCard key={index} proj={project} />
                        ))}

                    </div>
                </div>
            </section>



            <AIContacts />

        </div>
    );
};

export default Aboutus;
