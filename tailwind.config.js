/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            dark: '#1F0808',
            primary: '#990000',
            secondary: '#660000',
            projects: '#525f7f',
            red: '#FF0000',
            gray: {
                DEFAULT: '#333',
                dark: '#F6F6F6',
            },
            light:'#F6F6F6',
            shadow:'#999999',
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
