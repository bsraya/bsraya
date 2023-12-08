"use client";
import Header from '@/components/header';
import { usePathname } from 'next/navigation';

export default function Experience() {
    const pathname = usePathname().slice(1);
    return (
        <div className="lg:p-10 p-5">
            <Header page={pathname} />

            <div>
                <h1 className="font-inter mb-10 text-3xl">Experience</h1>
            </div>
        </div>
    )
}