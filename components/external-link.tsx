

export default function ExternalLink({ text, url }: { text: string, url: string }) {
    return (
        <a className="font-baskervville underline" href={url} target="_blank" rel="noopener noreferrer">
            <span>{text}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 inline-block mb-1 mx-1">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
                </g>
            </svg>
        </a>
    )
}