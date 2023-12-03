import Link from 'next/link';
import WorkList from '../../components/works';
import { allWorks } from '../../.contentlayer/generated';

export default function Works() {
    const works = allWorks.filter((work) => work.published === true);
    return (
        <div className="lg:p-10 p-5">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Works</Link></div>
            
            <h1 className="underline mb-5">All Works</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <WorkList works={works} />
            </div>
        </div>
    )
}