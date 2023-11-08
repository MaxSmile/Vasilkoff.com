
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
});

/** @type {import('next').NextConfig} */

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
});