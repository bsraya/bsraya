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
                        <div key={work.slugAsParams} className="h-30 xl:flex block gap-5">
                            <Image
                                src={work.image ? work.image : '/200x125.png'}
                                alt={`${work.description}`}
                                className="rounded-lg col-span-1"
                                width={300}
                                height={250}
                            />
                            <div className="flex flex-col col-span-auto my-2">
                                <Link
                                    as={`/works/${work.slugAsParams}`}
                                    href={`/works/${work.slugAsParams}`} 
                                    className="hover:underline"
                                >
                                    <h1 className="font-ptserif text-3xl">{work.title}</h1>
                                </Link>
                                <div className="font-bebasneue text-lg text-gray-400">{format(new Date(work.date), 'dd MMMM yyyy')}</div>
                                <p className="font-baskervville text-lg mt-auto">{work.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}