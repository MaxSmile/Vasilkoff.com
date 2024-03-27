// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      safelist: [
        // This regex matches any color like bg-{color}-{100-900}
        /bg-(red|green|yellow|gray)-[1-9]00/,
      ],
      colors: {
        primary: '#990000',
        secondary: '#660000',
        light: '#F6F6F6',
        shadow: '#999999',
        gray: {
          DEFAULT: '#333',
          dark: '#F6F6F6',
        },
      },
      spacing: {
        28: "7rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
