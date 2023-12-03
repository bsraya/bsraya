import Link from 'next/link';
import Rectangle from '@/components/rectangle';
import BurgerMenu from '@/components/burger-menu';

export default function About() {
    return (
        <div className="lg:p-10 p-5">
            <div className="flex mb-36">
                <div className="text-xl"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">About</Link></div>
                <div className='flex ml-auto items-center'>
                    <BurgerMenu />
                </div>
            </div>

            <div>
                <Rectangle />
            </div>
        </div>
    )
}