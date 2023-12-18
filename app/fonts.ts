import {
  Inter,
  PT_Serif,
  Bebas_Neue,
  Baskervville,
  Nova_Square,
} from 'next/font/google'
  
export const novaSquare = Nova_Square({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  variable: '--font-nova-square',
  fallback: ['sans-serif', 'system-ui'],
  adjustFontFallback: true
})

export const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-pt-serif',
  fallback: ['serif', 'system-ui'],
  adjustFontFallback: true
})

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  variable: '--font-bebas-neue',
  fallback: ['sans-serif', 'system-ui'],
  adjustFontFallback: true
})

export const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  variable: '--font-baskervville',
  fallback: ['serif', 'system-ui'],
  adjustFontFallback: true
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['sans-serif', 'system-ui'],
  adjustFontFallback: true
})