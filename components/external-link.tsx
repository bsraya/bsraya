import { GoLinkExternal } from "react-icons/go";

export default function ExternalLink({ text, url }: { text: string, url: string }) {
    return (
        <>
            <a className="font-baskervville underline" href={url} target="_blank" rel="noopener noreferrer">
                <span>{text}</span>
            </a>
            <GoLinkExternal className="inline-block ml-1" />
        </>
    )
}