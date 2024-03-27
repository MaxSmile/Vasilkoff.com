"use client";
import { useState } from 'react';
import Container from '../Container';
import ServiceCardOne from './ServiceCardOne';
import { Boxes, Braces, CodeSlash, FileEarmarkBinary, FileEarmarkCheckFill, Images } from 'react-bootstrap-icons';

export default function Services() {
    const [openDetails, setOpenDetails] = useState(false);

    return (
        <section id="services">
            <Container>
                <div className="heading mx-auto">
                    <h2>Partner with Us for High-Impact Outsourcing Solutions</h2>
                </div>
                <div id="details" className={`cursor-pointer mb-8 text-md max-w-3xl mx-auto ${openDetails ? '' : 'line-clamp-2'}`} onClick={() => { setOpenDetails(!openDetails) }}>
                    <p>Discover how Vasilkoff Ltd can elevate your project from concept to reality. Our website isn’t just a showcase of services but a portal to:</p>
                    <ul>
                        <li><strong>Expertise:</strong> Learn about our roots in blockchain software development and AI applications, and how this expertise can benefit your business.</li>
                        <li><strong>Our Team:</strong> Meet the minds behind our innovations - from our Managing Director to our AI Engineers and Design Directors.</li>
                        <li><strong>Custom Solutions:</strong> Explore detailed descriptions of our tailored services in UI/UX design, web and mobile app development, and more.</li>
                        <li><strong>Success Stories:</strong> Gain insights from our project showcases and client testimonials, illustrating our impact across industries.</li>
                        <li><strong>Innovation Hub:</strong> Stay informed with our blog, offering the latest on technology trends, insights, and company updates.</li>
                        <li><strong>Join Us:</strong> Find your place in our team or collaborate with us on your next project, detailed in our Careers section.</li>
                    </ul>
                    <p>Vasilkoff.com is more than a website; it’s your next step towards digital transformation and innovation. Let's create impactful digital solutions together.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    

                    <ServiceCardOne
                        title="UI/UX Design"
                        message="Simplify your digital journey with our expert UI/UX design services. Our team creates designs that are both beautiful and functional, delivering a seamless and engaging user experience that captures your audience's attention."
                        icon={<Images className="text-light" />}
                        slug="design" />

                    <ServiceCardOne
                        title="Web Development"
                        message="Our team works with a variety of front-end and back-end technologies, CMS, including WordPress, and specializes in major eCommerce platforms like Magento and Shopify."
                        icon={<CodeSlash className="text-light" />}
                        slug="web-development" />

                    <ServiceCardOne
                        title="Mobile Apps Development"
                        message="Our team specializes in both native app development and Flutter, delivering customized solutions that are tailored to your unique business needs."
                        icon={<Braces className="text-light" />}
                        slug="mobile-apps-development" />

                    <ServiceCardOne
                        title="Blockchain, Smart Contracts & DApps"
                        message="Maximize the power of your smart contracts with our expert team. We specialize in Solidity and Hardhat, delivering customized solutions that enhance functionality and efficiency."
                        icon={<FileEarmarkBinary className="text-light" />}
                        slug="smart-contracts-development" />

                    <ServiceCardOne
                        title="Full Stack DApps Development"
                        message="Transform your business with our expert DApps development for EVM blockchains. Our full-stack team offers end-to-end services that are customized to your unique needs, unlocking the potential of blockchain technology for your business."
                        icon={<FileEarmarkCheckFill className="text-light" />}
                        slug="dapps-development" />

                    <ServiceCardOne
                        title="AI & Machine Learning Development"
                        message="Unlock the potential of AI and machine learning with our expert team. We specialize in openAI's GPT integration and Firebase ML to deliver custom solutions that boost your business's innovation and efficiency."
                        icon={<Boxes className="text-light" />}
                        slug="ai-development" />
                </div>
            </Container>
        </section>

    );

};

