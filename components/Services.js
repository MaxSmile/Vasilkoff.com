
import ServiceCardOne from './ServiceCardOne';
import { Boxes, Braces, CodeSlash, FileEarmarkBinary, FileEarmarkCheckFill, Images } from 'react-bootstrap-icons';

export default function Services() {


    return (
        <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <ServiceCardOne 
                            title="UI/UX Design" 
                            message="Simplify your digital journey with our expert UI/UX design services. Our team creates designs that are both beautiful and functional, delivering a seamless and engaging user experience that captures your audience's attention."
                            icon={<Images className="text-light"/>}
                            slug="design" />

                        <ServiceCardOne 
                            title="Web Development" 
                            message="Our team works with a variety of front-end and back-end technologies, CMS, including WordPress, and specializes in major eCommerce platforms like Magento and Shopify."
                            icon={<CodeSlash className="text-light"/>}
                            slug="web-development" />

                        <ServiceCardOne 
                            title="Mobile Apps Development" 
                            message="Our team specializes in both native app development and Flutter, delivering customized solutions that are tailored to your unique business needs."
                            icon={<Braces className="text-light"/>} 
                            slug="mobile-apps-development" />
                    
                        <ServiceCardOne 
                            title="Smart Contracts & DApps" 
                            message="Maximize the power of your smart contracts with our expert team. We specialize in Solidity and Hardhat, delivering customized solutions that enhance functionality and efficiency."
                            icon={<FileEarmarkBinary className="text-light"/>} 
                            slug="smart-contracts-development"/>

                        <ServiceCardOne 
                            title="Full Stack DApps Development" 
                            message="Transform your business with our expert DApps development for EVM blockchains. Our full-stack team offers end-to-end services that are customized to your unique needs, unlocking the potential of blockchain technology for your business."
                            icon={<FileEarmarkCheckFill className="text-light"/>} 
                            slug="dapps-development"/>

                        <ServiceCardOne 
                            title="AI & Machine Learning Development" 
                            message="Unlock the potential of AI and machine learning with our expert team. We specialize in openAI's GPT integration and Firebase ML to deliver custom solutions that boost your business's innovation and efficiency."
                            icon={<Boxes className="text-light"/>} 
                            slug="ai-development"/>
                    </div>
        </>
        
    );
   
};

