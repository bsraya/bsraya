"use client";
import Link from 'next/link';
import { useState } from 'react';

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button
                className="focus:outline-none mt-1"
                onClick={toggleMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </button>

            {menuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-white shadow-md lg:p-10 p-5 flex flex-col">
                        <div className="flex">
                            <div className='font-ptserif text-2xl'>
                                <Link href='/' className="font-bebasneue text-3xl">Bijon Setyawan Raya</Link>
                            </div>
                            <button
                                className="ml-auto items-center"
                                onClick={toggleMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                            </button>
                        </div>
                        <div className="font-ptserif mt-auto grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <Link 
                                    href="/" 
                                    onClick={toggleMenu} 
                                    className="block mb-2 text-4xl md:text-6xl hover:underline"
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/about" 
                                    onClick={toggleMenu} 
                                    className="block mb-2 text-4xl md:text-6xl hover:underline"
                                >
                                    About
                                </Link>
                                <Link 
                                    href="/experience" 
                                    onClick={toggleMenu} 
                                    className="block mb-2 text-4xl md:text-6xl hover:underline"
                                >
                                    Experience
                                </Link>
                            </div>
                            <div>
                                <Link 
                                    href="/posts" 
                                    onClick={toggleMenu} 
                                    className="block mb-2 text-4xl md:text-6xl hover:underline"
                                >
                                    Posts
                                </Link>
                                <Link 
                                    href="/works" 
                                    onClick={toggleMenu} 
                                    className="block mb-2 text-4xl md:text-6xl hover:underline"
                                >
                                    Works
                                </Link>
                            </div>
                        </div>    
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
