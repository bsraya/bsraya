import { PT_Sans, Fira_Code } from 'next/font/google'

export const ptSans = PT_Sans({
    weight: ['400', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap'
})

export const firaCode = Fira_Code({
    weight: ['400', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap'
})