module.exports = async () => {
    /**
     * @type {import('next').NextConfig}
    */
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true'
    });
    const nextConfig = withBundleAnalyzer({
        optimizeFonts: true,
        ignoreBuildErrors: false,
        reactStrictMode: true,
        eslint: {
            dirs: ['components', 'content', 'pages', 'types', 'utils']
        },
        compiler: {
            emotion: true,
        },
    })
    return nextConfig
}