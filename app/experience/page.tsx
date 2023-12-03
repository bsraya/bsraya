import Link from 'next/link'
import BurgerMenu from '@/components/burger-menu'

export default function Experience() {
    return (
        <div className="lg:p-10 p-5">
            <div className="flex mb-36">
                <div className="text-xl"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Experience</Link></div>
                <div className="flex ml-auto items-center">
                    <BurgerMenu />
                </div>
            </div>

            <div>
                <h1 className="underline mb-5">Experience</h1>
            </div>
        </div>
    )
}