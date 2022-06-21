/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    optimizeFonts: true,
    ignoreBuildErrors: true,
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
}

const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
    pwa: {
        dest: "public",
        display: "standalone",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching,
    }
})

module.exports = withPlugins([
    nextConfig,
    withPWA,
])