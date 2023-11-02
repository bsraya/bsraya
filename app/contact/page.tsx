import Link from 'next/link'

export default function ContactMe() {
    return (
        <div className="p-10">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Contact Me</Link></div>
        </div>
    )
}