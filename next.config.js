/** @type {import('next').NextConfig} */
//const withSitemap = require('next-sitemap') // require the next-sitemap package


const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
