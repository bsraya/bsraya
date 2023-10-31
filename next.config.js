/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            }
        ]
    },
}

const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer(nextConfig)
