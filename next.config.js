module.exports = async () => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        optimizeFonts: true,
        ignoreBuildErrors: false,
        reactStrictMode: true,
        compiler: {
            emotion: true,
        },
    }
    return nextConfig
}