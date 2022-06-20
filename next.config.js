/**
 * @type {import('next').NextConfig}
*/
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    optimizeFonts: true,
    ignoreBuildErrors: false,
    reactStrictMode: true,
    eslint: {
        dirs: ['components', 'content', 'pages', 'types', 'utils']
    },
    compiler: {
        emotion: true,
    },
}

// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require('next-pwa')({
//     pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//         disable: process.env.NODE_ENV === 'development',
//         runtimeCaching,
//     }
// })

module.exports = withPlugins([
    nextConfig,
    // withPWA,
])