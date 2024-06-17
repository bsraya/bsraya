import Link from 'next/link'
import BurgerMenu from './burger-menu'

export default function Header() {
    return (
        <div className="flex pb-10">
            <div className="font-khula font-bold md:text-[2rem] text-[1.25rem]"><Link href="/">BSR</Link></div>
            <div className='flex ml-auto items-center'>
                <BurgerMenu />
            </div>
        </div>
    )
}