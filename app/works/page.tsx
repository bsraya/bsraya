import Header from '@/components/header';
import { usePathname } from 'next/navigation';
import WorkList from '../../components/works';
import { allWorks } from '../../.contentlayer/generated';

export default function Works() {
    const works = allWorks.filter((work) => work.published === true);
    return (
        <div className="lg:p-10 p-5">
            <Header />

            <h1 className="font-bebasneue mb-10 text-5xl">Works</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <WorkList works={works} />
            </div>
        </div>
    )
}