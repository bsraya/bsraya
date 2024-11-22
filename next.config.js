// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const { withContentlayer } = require('next-contentlayer2');

module.exports = withContentlayer(nextConfig)
