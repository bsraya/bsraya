/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    swcMinify: true,
    optimizeFonts: true,
    ignoreBuildErrors: true,
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'content', 'pages', 'types', 'utils']
    },
    compiler: {
        emotion: true,
    },
}

const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching,
    }
})
const withImages = require('next-images')

module.exports = withPlugins([
    nextConfig,
    withPWA,
    withImages
])