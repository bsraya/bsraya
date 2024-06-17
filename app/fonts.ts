import {
  Khula,
  Lalezar,
  Merriweather,
  Fira_Code
} from 'next/font/google'

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-merriweather',
  fallback: ['serif', 'system-ui'],
  adjustFontFallback: true
})

export const lalezar = Lalezar({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-lalezar',
  fallback: ['cursive', 'sans-serif'],
  adjustFontFallback: true,
})

export const khula = Khula({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-khula',
  fallback: ['sans-serif', 'system-ui'],
  adjustFontFallback: true,
})

export const fira = Fira_Code({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-fira-code',
  fallback: ['monospace', 'system-ui'],
  adjustFontFallback: true,
})