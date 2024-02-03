export default function Video({ url, title }: { url: string, title: string }) {
    return (
        <div className="aspect-w-16 aspect-h-9 mb-20">
            <video
                src={url}
                title={title}
                controls
            />
        </div>
    )
}