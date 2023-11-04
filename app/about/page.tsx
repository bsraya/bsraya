import Link from 'next/link';

export default function About() {
    return (
        <div className="lg:p-10 p-5">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">About Me</Link></div>
        </div>
    )
}