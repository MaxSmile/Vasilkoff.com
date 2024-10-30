// src/app/page.tsx
import Hero from "@/app/_components/sections/Hero";
import Prefooter from "@/app/_components/sections/Prefooter";
import TeamMembers from "@/app/_components/sections/TeamMembers";
import Services from "@/app/_components/sections/Services";
import ExpertAnswerKeyQuestions from "@/app/_components/sections/ExpertAnswerKeyQuestions";
import Container from "./_components/Container";
import PricesSection from "./_components/sections/PricesSection";
import { Metadata, NextPage } from "next";
import Script from "next/script";

const homeTitle = `Vasilkoff Ltd | AI-Enhanced Web & Mobile Development Services`;
const homeDescription = `Specializing in AI-enhanced mobile apps, DApps, and web solutions, Vasilkoff Ltd provides advanced development services for businesses seeking innovative web and mobile applications.`

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: 'https://vasilkoff.com' },
  openGraph:
  {
    title: homeTitle,
    description: homeDescription,
    url: "https://vasilkoff.com", type: "website", locale: "en-US",
    images: [{ url: "https://vasilkoff.com/vasilkoff-cover.webp", width: 1200, height: 630, "alt": "Vasilkoff Ltd - AI-enhanced web and mobile development solutions" }]
  }

};

const IndexPage: NextPage = () => {

  return (
    <main className="overflow-x-hidden" id="bg">
      <Hero />

      <Container className="heading">
        <h1 className="mt-4">Your Partner in Web & Mobile Application Development: Vasilkoff Ltd</h1>
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
            "name": "Vasilkoff Ltd",
            "headline": "AI-Enhanced Mobile & Web Development",
            "legalName": "Vasilkoff Ltd",
            "alternateName": "Vasilkoff CY Ltd",
            "url": "https://vasilkoff.com",
            "logo": "https://vasilkoff.com/images/vasilkoff-logo-512x512.png",
            "image": "https://vasilkoff.com/vasilkoff-cover.webp",
            "description": "Vasilkoff Ltd specializes in full-stack mobile and web development with a focus on AI, DApps, and blockchain solutions.",
            "foundingDate": "2005",
            "founder": {
              "@type": "Person",
              "name": "Maxim Vasilkov",
              "jobTitle": "Chief Business Development Officer",
              "image": "https://vasilkoff.com/assets/team/maxim-vasilkov.webp",
              "sameAs": "https://www.linkedin.com/in/maximvasilkov/"
            },
            "sameAs": [
              "https://www.facebook.com/vasilkoff.software",
              "https://www.instagram.com/vasilkoff",
              "https://www.linkedin.com/company/vasilkoff",
              "https://twitter.com/vasilkoff"
            ],
            "telephone": "+35799169229",
            "email": "maxim@vasilkoff.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Glastonos 12-14",
              "addressLocality": "Paphos",
              "addressRegion": "Paphos",
              "postalCode": "8046",
              "addressCountry": "CY"
            },
            "department": [
              {
                "@type": "Organization",
                "name": "Mobile Development Department",
                "url": "https://vasilkoff.com/mobile-development"
              },
              {
                "@type": "Organization",
                "name": "Web Development Department",
                "url": "https://vasilkoff.com/web-development"
              },
              {
                "@type": "Organization",
                "name": "AI & Blockchain Solutions",
                "url": "https://vasilkoff.com/ai-blockchain"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "name": "Simon Papazov",
                "email": "sp@vasilkoff.com",
                "telephone": "+35799169229",
                "jobTitle": "Managing Director",
                "image": "https://vasilkoff.com/assets/team/simon-papazov.webp",
                "contactType": "customer service",
                "availableLanguage": ["English", "Greek"]
              },
              {
                "@type": "ContactPoint",
                "name": "Anastasia Sarlidou",
                "email": "anastasia@vasilkoff.com",
                "jobTitle": "Human Centered AI Engineer",
                "image": "https://vasilkoff.com/assets/team/anastasia-sarlidou.webp",
                "contactType": "AI-related inquiries",
                "availableLanguage": ["English", "Greek"]
              }
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Custom mobile applications with AI capabilities for iOS and Android.",
                "provider": { "@type": "Organization", "name": "Vasilkoff Ltd" },
                "areaServed": { "@type": "Place", "name": "Worldwide" },
                "url": "https://vasilkoff.com/mobile-app-development"
              },
              {
                "@type": "Service",
                "name": "Web Development",
                "description": "Full-stack web development, including AI-enhanced and blockchain applications.",
                "provider": { "@type": "Organization", "name": "Vasilkoff Ltd" },
                "areaServed": { "@type": "Place", "name": "Worldwide" },
                "url": "https://vasilkoff.com/web-development"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12"
            }
          }),
        }}
      />


    </main>
  );
};

export default IndexPage;
