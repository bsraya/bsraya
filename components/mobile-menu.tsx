import Link from 'next/link';
import BurgerMenu from '@/components/burger-menu';

export default function MobileMenu() {
    return (
        <div className="block lg:hidden">
            <div className="flex mb-36">
                <Link href="/" className='text-xl'>Bijon Setyawan Raya</Link>
                <div className='flex ml-auto items-center'>
                    <BurgerMenu />
                </div>
            </div>
        </div>
    )
}