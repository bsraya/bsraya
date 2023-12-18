import Link from 'next/link'
import BurgerMenu from './burger-menu'

export default function Header() {
    return(
        <div className="flex mb-32">
            <div className="font-novasquare text-3xl"><Link href="/">Bijon S. Raya</Link></div>
            <div className='flex ml-auto items-center'>
                <BurgerMenu />
            </div>
        </div>
    )
}