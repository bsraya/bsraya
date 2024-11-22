import './globals.css';
import { cn } from '@/lib/utils';
import '../styles/katex.min.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import { merriweather, khula, lalezar, fira } from './fonts'
import BackToTop from '@/components/back-to-top';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
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
  alternates: {
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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={cn("max-w-3xl mx-auto py-5 px-5")}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html >
  )
}
