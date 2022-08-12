import { css } from "@emotion/react";

const katexStyles = css`
    .math {
        overflow-x: auto;
    }

    .math::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
        background-color: rgba(0, 0, 0, 0.05);
    }

    .math::-webkit-scrollbar-thumb {
        background-color: #A0AEC0;
    }
`

export default katexStyles;