import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

import { withContentlayer } from 'next-contentlayer2';

export default withContentlayer(nextConfig);
