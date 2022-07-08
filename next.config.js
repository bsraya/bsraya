/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    swcMinify: true,
    optimizeFonts: true,
    ignoreBuildErrors: true,
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'pages', 'lib', 'icons']
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