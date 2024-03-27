// src/app/page.tsx
import Head from "next/head";
import Hero from "@/app/_components/sections/Hero";
import Prefooter from "@/app/_components/sections/Prefooter";
import TeamMembers from "@/app/_components/sections/TeamMembers";
import Services from "@/app/_components/sections/Services";
import ExpertAnswerKeyQuestions from "@/app/_components/sections/ExpertAnswerKeyQuestions";
import Container from "./_components/Container";
import PricesSection from "./_components/sections/PricesSection";
import { Metadata, NextPage } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: 'Vasilkoff Ltd - Full-stack Web & Mobile mobile apps and web-development Services',
  description: 'Vasilkoff (CY) Ltd: Full-stack mobile apps and web-development with a focus on AI-enhanced web/mobile apps, DApps, and Smart Contracts.',
  alternates: { canonical: 'https://vasilkoff.com' },
  openGraph:
  {
    title: "Vasilkoff", description: "Vasilkoff (CY) Ltd: Expertise in AI-enhanced web/mobile apps, DApps, and Smart Contracts. Your partner for advanced blockchain and AI solutions.",
    url: "https://vasilkoff.com", type: "website", locale: "en-US",
    images: [{ url: "https://vasilkoff.com/vasilkoff-cover.webp", width: 1200, height: 630, alt: "Vasilkoff" }]
  }

};

const IndexPage: NextPage = () => {

  return (
    <main className="overflow-x-hidden" id="bg">
      <Hero />

      <Container className="heading">
        <h1>Your Partner in Web & Mobile Application Development: Vasilkoff Ltd</h1>
      </Container>

      <TeamMembers />

      <Services />

      <PricesSection />

      <ExpertAnswerKeyQuestions />

      <Prefooter />


      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({

            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vasilkoff",
            "headline": "Vasilkoff Ltd - mobile apps and web-development Company",
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
              "addressCountry": "CY",
              "postalCode": "8046"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "name": "Simon Papazov",
                "email": "sp@vasilkoff.com",
                "telephone": "+35799169229",
                "jobTitle": "Managing Director",
                "image": "/images/simon-papazov.png",
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "name": "Anastasia Sarlidou",
                "email": "anastasia@vasilkoff.com",
                "jobTitle": "Human Centered AI engineer",
                "image": "/images/anastasia-sarlidou.png",
                "contactType": "AI related questions"
              },
              {
                "@type": "ContactPoint",
                "name": "Irina Vasilkova",
                "email": "omorfi@vasilkoff.com",
                "jobTitle": "Design Director",
                "image": "/images/irina-vasilkova.png",
                "contactType": "design related questions"
              },
              {
                "@type": "ContactPoint",
                "name": "Nikol Todorova",
                "email": "nikol@vasilkoff.com",
                "jobTitle": "UI/UX Designer",
                "image": "/images/nikol.jpg",
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "name": "Maxim Vasilkov",
                "email": "maxim@vasilkoff.com",
                "jobTitle": "Systems Architect",
                "image": "/images/maxim-vasilkov.png",
                "contactType": "founder, business related questions"
              }

            ],
            "founder": {
              "@type": "Person",
              "name": "Maxim Vasilkov",
              "image": "/images/maxim-vasilkov.png",
              "jobTitle": "CBDO"
            }

          }),
        }}
      />
    </main>
  );
};

export default IndexPage;
