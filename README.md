# Vasilkoff.com
NextJS repository of our company website


# Starting with NextJS
 https://nextjs.org/docs/getting-started

##  Create Next App can be installed via yarn:
`
yarn create next-app
`
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## SEO


HIGH
To improve the website experience for your visitors, it is recommended to eliminate any render-blocking resources on this webpage.
HIGH
Using images in a modern format can significantly reduce the file size and improve the loading speed of a webpage, providing a better user experience and potentially increasing engagement.
MEDIUM
Avoid using distorted images, as they can have a negative impact on the user experience.
MEDIUM
Serve properly sized images to reduce page loading times and to improve user's experience.
MEDIUM
Avoid performance and security issues by adding "rel=noopener" or "rel=noreferrer" to your "target=_blank" links.
LOW
To protect against spam harvesters, consider hiding or obfuscating email addresses in your page code.
LOW
Using more than 20 HTTP requests on a webpage can negatively impact the loading time.
LOW
Consider moving inline CSS styles to an external stylesheet to improve site performance and maintain separation of content and design.

## TODO

1. From the main page, you can click on the Price button to open the AI chat which suggests to make an estimation of the project and calculate the price, then we can sign an agreement, start the order and make prepaiments.
2. Add smrtAI widget.
3. Improve visuals of Portfolio: especially BellaChess and Calculator lock
4. Add smrtAI to the portfolio
5. Make a simialr page to https://lookmy.info/index.php?id=15862&show=58935
6. Add more pages like lookmy.info
7. Let's make http://preview.codecanyon.net/item/manager-resume-app/full_screen_preview/46341465?_ga=2.41351974.569631678.1688384657-633491467.1643048083 from https://codecanyon.net/item/manager-resume-app/46341465 
8. Update smrt16.com https://codecanyon.net/item/bithu-nft-mintingcollection-with-smart-contract-react-jssolidity/38514572/comments 
9.  WhatsApp API? https://codecanyon.net/item/whatsapi-a-multipurpose-whatsapp-api/reviews/42445454 
10. https://tinify.com/ i have account with maxim@vasilkoff.com 500 calls per month
11. NextAI -> smrtAI
12. block certify -> NFTTRX A Blockchain-based certificate creation and verification system 
13. Facebook like https://www.facebook.com/codeyon/
14. Instant Invoice Generator - like https://codecanyon.net/item/instant-invoice-generator/39035008 by html to pdf
15. NFTTRX - NFTTRX A Blockchain-based certificate creation and verification system https://codecanyon.net/item/pdf-merger-merge-rotate-organize-delete-preview-pdf-all-in-one-react-nextjs-web-application/42741922
16. Inter-euro and neophitoullc ... maybe not
17. https://dashboard.render.com/ cool free hosting
18. https://github.com/raid-guild/smart-escrow-nextjs for which domain?
19. SMRT16 https://www.koob.ru/mlm/ 
20. https://www.npmjs.com/package/react-vertical-timeline-component 
21. Learn from https://combonetwork.io  and https://cocosbcx.io - where they show partners, other services usage etc
22. Interesting how contact us done here https://nodereal.io/contact-us 

## Deployed on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Schemas

index - Organization

    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vasilkoff",
    "headline": "Vasilkoff Ltd - Software Development Company",
    "legalName": "Vasilkoff Ltd",
    "url": "https://vasilkoff.com",
    "logo": "https://vasilkoff.com/images/logo-vasilkoff.png",
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




## Google Analytics

STREAM NAME
Vasilkoff.com
STREAM URL
https://vasilkoff.com
STREAM ID
4635087964
MEASUREMENT ID
G-9WSLDWGM8P

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9WSLDWGM8P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9WSLDWGM8P');
</script>


<script async src="https://cse.google.com/cse.js?cx=a4466be8f630340db">
                </script>
                <div class="gcse-search"></div>   

# License

Copyright © Vasilkoff.com