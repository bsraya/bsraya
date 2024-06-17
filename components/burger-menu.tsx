"use client";
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button className="focus:outline-none" onClick={toggleMenu}>
                {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            {menuOpen && (
                <div className="absolute px-5 py-8 flex flex-col top-10 right-0 border-2 rounded-lg bg-slate-50">
                    <div className="font-khula">
                        <div className="text-3xl font-semibold text-right">
                            <Link
                                href="/"
                                onClick={toggleMenu}
                                className="block mb-2 hover:underline"
                            >
                                Home
                            </Link>
                            <Link
                                href="/experience"
                                onClick={toggleMenu}
                                className="block mb-2 hover:underline"
                            >
                                Experience
                            </Link>
                            <Link
                                href="/posts"
                                onClick={toggleMenu}
                                className="block mb-2 hover:underline"
                            >
                                Posts
                            </Link>
                            <Link
                                href="/works"
                                onClick={toggleMenu}
                                className="block mb-2 hover:underline"
                            >
                                Works
                            </Link>
                        </div>
                        <div className="text-md mt-10 text-slate-500">
                            <div className="flex justify-end mb-2">
                                <a href="https://github.com/bsraya" target="_blank" rel="noreferrer noopener">
                                    <FaGithub size={24} className="hover:text-slate-800" />
                                </a>
                                <a href="https://linkedin.com/in/bijonsetyawan" target="_blank" rel="noreferrer noopener" className='ml-2'>
                                    <FaLinkedin size={24} className="hover:text-slate-800" />
                                </a>
                            </div>
                            <a href="mailto:bijonsetyawan@gmail.com" className="text-right hover:underline">bijonsetyawan@gmail.com</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
