import './globals.css';
import '../styles/katex.min.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ptSerif, inter, baskervville, bebasNeue, novaSquare } from './fonts'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
  category: 'Personal Website',
  metadataBase: new URL('https://bsraya.com'),
  applicationName: 'Bijon Setyawan Raya',
  title: {
    template: '%s - Bijon Setyawan Raya',
    default: 'Bijon Setyawan Raya',
  },
  authors: [
    {
      name: 'Bijon Setyawan Raya',
      url: '/',
    },
  ],
  alternates:{
    canonical: '/',
  },
  robots: {
    follow: true,
    index: true,
  },
  manifest: '/manifest.json',
  assets: ['/assets'],
  keywords: [
    'Bijon Setyawan Raya',
    'Bijon',
    'Setyawan',
    'Raya',
    'Bijon Setyawan',
    'bsraya',
    'bsraya.com',
    'Bijon Setyawan Personal Website',
    'Bijon Setyawan Raya Personal Website',
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable} ${inter.variable} ${baskervville.variable} ${bebasNeue.variable} ${novaSquare.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
