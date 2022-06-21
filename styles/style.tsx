import { Global } from '@emotion/react'

export const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'Virgil';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/Virgil.woff2') format('woff2'),
                    url('/fonts/Virgil.woff') format('woff');
            }
        `}
    />
)