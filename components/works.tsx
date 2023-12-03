import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns';
import { Work } from '../.contentlayer/generated/types'

export default function Works({ works }: { works: Work[] }) {
    return (
        <>
            {
                works.map((work: Work) => {
                    return(
                        <Link key={work.slugAsParams} href={`/works/${work.slugAsParams}`} as={`/works/${work.slugAsParams}`}>
                            <div className="h-30 xl:flex block gap-5">
                                <Image
                                    src="/200x125.png"
                                    alt="dummy"
                                    className="rounded-lg col-span-1"
                                    width={200}
                                    height={125}
                                />
                                <div className="col-span-auto mt-3">
                                    <h1 className="text-2xl font-bold">{work.title}</h1>
                                    <p className="text-lg my-2">{work.description}</p>
                                    <div className="text-lg ml-auto text-gray-400">{format(new Date(work.date), 'dd MMMM yyyy')}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}