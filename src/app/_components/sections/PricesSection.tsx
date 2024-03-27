import React from 'react';
import PricingCard from './PricingCard'; 
import Container from '../Container';

export default function PricesSection ()  {
    return (
        <section className="bg-gradient-to-b from-white/60 to-transparent py-14 lg:py-[100px]">
            <Container>
                <div className="heading text-center">
                    <h3>Competitive rates and pricing for superior service</h3>
                    <h2>Our expertise spans both outsourcing and outstaffing</h2>
                    <p className="my-10">
                        For mobile apps and web-development services, outsourcing and outstaffing are two common business strategies used to hire external companies or individuals to perform certain tasks, rather than having an in-house team.
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
                        ]}
                        minusArray={[
                            "Limited control over project management",
                            "May have less transparency into the development process",
                            "Communication and collaboration may be more challenging",
                            "May have less ownership of the project and deliverables",
                            "May have higher costs due to additional overhead and management fees"
                        ]}
                    />
                    <PricingCard title="Outstaffing" id="outstaffing"
                        period="Monthly static payment"
                        price="from $2000" per="month"
                        plusArray={[
                            "High level of control over project management",
                            "Clear communication and collaboration with the team",
                            "Access to highly skilled talent without long-term hiring",
                            "High level of ownership over the project and deliverables",
                            "Lower overall cost compared to outsourcing"
                        ]}
                        minusArray={[
                            "Require more management and oversight",
                            "Require more time and effort to assemble a team",
                            "Require more time to ramp up and begin development",
                            "Require more effort to establish company culture and team dynamics"
                        ]}
                    />
                </div>
            </Container>
        </section>
    );
};

