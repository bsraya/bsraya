import Link from 'next/link';
import { format } from 'date-fns';
import { Work } from '../.contentlayer/generated/types';

export default function Works({ works }: { works: Work[] }) {
    return (
        <>
            {
                works.map((work: Work) => {
                    return (
                        <div key={work.slugAsParams} className="block">
                            <div className="font-lalezar text-slate-400">{format(new Date(work.date), 'dd MMMM yyyy')}</div>
                            <Link
                                as={`/works/${work.slugAsParams}`}
                                href={`/works/${work.slugAsParams}`}
                                className="w-fit hover:underline"
                            >
                                <h1 className="font-merriweather font-thin md:text-2xl text-xl">{work.title}</h1>
                            </Link>
                            <p className="font-khula md:text-lg text-md mt-auto text-slate-500">{work.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}