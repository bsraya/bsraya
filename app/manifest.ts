import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bijon Setyawan Raya',
        short_name: 'Bijon S. R.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
            {
                src: '/static/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: '/static/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png'
            },
            {
                src: '/static/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            },
            {
                src: '/static/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/static/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png'
            },
            {
                src: '/static/icon-128x128.png',
                sizes: '128x128',
                type: 'image/png'
            },
            {
                src: '/static/icon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
            },
            {
                src: '/static/icon-72x72.png',
                sizes: '72x72',
                type: 'image/png'
            },
            {
                src: '/static/icon-72x72.png',
                sizes: '48x48',
                type: 'image/png'
            }
        ]
    }
}