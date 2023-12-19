import Link from 'next/link';
import BurgerMenu from '@/components/burger-menu';

export default function MobileMenu() {
    return (
        <div className="block lg:hidden">
            <div className="flex mb-36">
                <Link href="/" className='font-novasquare text-3xl'>Bijon S. Raya</Link>
                <div className='flex ml-auto items-center'>
                    <BurgerMenu />
                </div>
            </div>
        </div>
    )
}