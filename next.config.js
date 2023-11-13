const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async headers() {
        return [
            {
                // Match images in the public folder and its subfolders (png and webp formats)
                source: "/:path*.(png|webp|jpg)",
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            // ... any other headers or configurations
        ];
    },
};

module.exports = withBundleAnalyzer(nextConfig);
