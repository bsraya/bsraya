"use client";
import Header from '@/components/header';
import { usePathname } from 'next/navigation';
import WorkList from '../../components/works';
import { allWorks } from '../../.contentlayer/generated';

export default function Works() {
    const pathname = usePathname().slice(1);
    const works = allWorks.filter((work) => work.published === true);
    return (
        <div className="lg:p-10 p-5">
            <Header page={pathname} />
 
            <h1 className="font-inter mb-10 text-3xl">Works</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <WorkList works={works} />
            </div>
        </div>
    )
}