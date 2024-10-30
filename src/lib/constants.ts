// src/lib/constants.ts
export const MAIN_MENU = [
  { title: "Home", link: "/#maincontent", type:'link' },
  { title: "Team", link: "/#team", type:'link' },
  { title: "Portfolio", link: "/portfolio", type:'link' },
  { title: "Blog", link: "/blog", type:'link' },
  { title: "Contact Us", link: "/contact-us", type:'button' },
];

export const BASE_URL = "https://vasilkoff.com";

export const TOOLS_LINKS = [
  
  {
    title: 'Rich Text to Markdown',
    link: '/rich-text2md',
  },
  {
    title: 'HTML to Markdown',
    link: '/html2md',
  },
  {
    title: 'Markdown to HTML',
    link: '/md2html',
  },
  {
    title: 'Timezones Availability Viewer',
    link: '/timezone-availability',
  }
];

export const FOOTER_MENU = [
  { title: "About Us", link: "/about-us" },
  { title: "Read Fast", link: "/read-fast" },
...TOOLS_LINKS,
  { title: "FAQ", link: "/faq" },
  { title: "Search", link: "/search" }

];


export const HTML_EXAMPLE = `<h1>Paste your HTML here...</h1>
    <p>As an example, here's a link to <a href="https://example.com">Example Site</a>.</p>
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
    </ul>
`;

export const MD_EXAMPLE = `# Paste your HTML here...

As an example, here's a link to [Example Site](https://example.com).

* Item One
* Item Two
* Item Three
`;



export const hourSettings = {
  workingHours: { start: 9, end: 18 },
  evening: { start: 18, end: 22 },
  morning: { start: 7, end: 9 },
  sleeping: { start: 23, end: 7 }
};


export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

// src/constants.js

export const CONTACT_US_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Vasilkoff Ltd",
  "description": "This page contains contact details for Vasilkoff Ltd",
  "url": "https://vasilkoff.com/contact-us",
  "mainEntity": {
      "@type": "Organization",
      "name": "Vasilkoff Ltd",
      "headline": "Vasilkoff Ltd",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "Glastonos 12-14",
          "addressLocality": "Paphos",
          "addressRegion": "Paphos",
          "postalCode": "8046",
          "addressCountry": "CY"
      },
      "email": "maxim@vasilkoff.com",
      "telephone": "+35799169229",
      "url": "https://vasilkoff.com",
      "sameAs": [
          "https://www.facebook.com/vasilkoff.software",
          "https://www.instagram.com/vasilkoff"
      ]
  }
};
