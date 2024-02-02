export default function Video({ url, title }: { url: string, title: string }) {
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={url}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}