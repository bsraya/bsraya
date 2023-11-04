import Link from 'next/link'

export default function Works() {
    return (
        <div className="lg:p-10 p-5">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Works</Link></div>
        </div>
    )
}