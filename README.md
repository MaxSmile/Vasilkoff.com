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

## TODO

1. From the main page, you can click on the Price button to open the price calculator, sign order and order prepaipents.
2. Price calculator to be powered by AI
3. Add smrtAI widget.
4. Improve visuals of Portfolio: especially BellaChess and Calculator lock
5. Add smrtAI to the portfolio

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

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

Copyright © 2022 Vasilkoff.com