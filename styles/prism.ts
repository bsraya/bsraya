import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const prismStyles = css`
    .code-highlight {
        float: left; /* 1 */
        min-width: 100%; /* 2 */
    }

    .rehype-code-title {
        margin: ${theme.space[6]} 0 0;
        padding: ${theme.space[2]} ${theme.space[5]};
        background: ${theme.colors.gray[700]};
        color: ${theme.colors.gray[100]};
        border-top-left-radius: ${theme.radii.md};
        border-top-right-radius: ${theme.radii.md};
        font-size: 0.9rem;
        font-weight: 600;
        width: 100%;
        font-family: ${theme.fonts.mono};

        + pre[class*="language-"] {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-top: 0;
        }
    }

    pre[class*="language-"] {
        font-size: ${theme.fontSizes["md"]};
        margin: ${theme.space[6]} 0;
        min-width: 100%;

        ::-webkit-scrollbar {
            height: 0.5rem;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #A0AEC0 !important;,
        }
    }

    pre[class*="language-"]

    .code-line {
        font-family: "Fira Code", monospace;
        line-height: 2em;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
        margin-left: -16px;
        margin-right: -16px;
        border-left-width: 4px;
        border-left-color: rgba(31, 41, 55, 0); /* Set code block color */
    }

    .code-line.diff-inserted {
        background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
    }

    .code-line.diff-deleted {
        background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
    }

    .code-line.diff-warn {
        background-color: rgba(104, 45, 15, 0.2); /* Set warn line (!) color */
    }

    .code-line.diff-comment {
        background-color: rgba(255, 255, 255, 0.2); /* Set comment line (#) color */
    }

    .highlight-line {
        margin-left: -16px;
        margin-right: -16px;
        background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
        border-left-width: 4px;
        border-left-color: rgb(155 163 175); /* Set highlight accent border color */
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    code, pre[class*="language-"] {
        font-family: "Fira Code", monospace;
        color: ${theme.colors.gray[50]};
    }

    :not(pre) > code {
        font-size: ${theme.fontSizes["sm"]};
        color: #FF79C6;
        background: #282A36;
        padding: ${theme.space[1]} ${theme.space[2]};
        border-radius: ${theme.radii.md};
    }

    @media (max-width: ${theme.breakpoints.md}) {
        pre[class*="language-"] {
            font-size: ${theme.fontSizes["sm"]};
        }
    }
`

export default prismStyles;