/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    optimizeFonts: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com', 'cdn.pixabay.com', 'images.pexel.com'],
        formats: ['image/webp'],
    }
}

const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
})

module.exports = withPlugins([
    nextConfig,
    withPWA
])