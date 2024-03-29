import Link from 'next/link';
import { Metadata } from 'next';
import { format } from 'date-fns';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';
import Mdx from "../../../components/mdx-components";
import { allWorks } from '../../../.contentlayer/generated';

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const work = await getWorkFromParams(params.slug)
    return {
        title: work.title,
        description: work.description,
        keywords: [
            `${work.title} ${work.description}`,
            `Bsraya ${work.title}`,
            `Bsraya ${work.description}`,
            `Bijon Setyawan Raya ${work.title}`,
            `Bijon Setyawan Raya ${work.description}`,
        ],
        openGraph: {
            url: `/works/${work.slugAsParams}`,
            title: `${work.title}`,
            description: work.description,
            siteName: 'Bijon Setyawan Raya',
            creators: ['Bijon Setyawan Raya'],
            images: [
                {
                    url: `/api/og?title=${work.title.replace(/\s/g, '+')}&date=${format(new Date(work.date), 'MMMM+dd,+yyyy')}`,
                    width: 1200,
                    height: 630,
                    alt: `Bijon Setyawan Raya - ${work.title}`,
                }
            ]
        }
    }
}

async function getWorkFromParams(slug: string) {
    const post = allWorks.find((work) => work.slugAsParams === slug)
    if (!post) notFound()
    if (!post.published) notFound()
    return post
}

export default async function Work({ params }: { params: { slug: string } }) {
    const work = await getWorkFromParams(params.slug)
    return (
        <div className="flex flex-col gap-10 lg:p-10 p-5">
            <Header />
        
            <div>
                <div className='flex items-center text-xl gap-3 font-baskervville'>
                    <Link href="/works">
                        <div className="flex w-fit px-5 py-2 border rounded-full hover:border-gray-500 cursor-pointer  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <p>Works</p>
                        </div>
                    </Link>
                    {
                        work.tag && (
                            <Link href={`/tags/${work.tagAsParams}`}>
                                <div className="hover:underline cursor-pointer">
                                    <p>{work.tag}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
                
                <h1 className="xl:text-5xl text-4xl font-thin font-serif my-5">{work.title}</h1>
                <div className="text-lg sm:text-md w-full border-y-2 py-3 text-gray-500 flex flex-col lg:flex-row lg:justify-between gap-3">
                    <blockquote className="italic">
                        &quot;{work.description}&quot;
                    </blockquote>
                    {
                        work.date && (
                            <div className="font-bebasneue">{format(new Date(work.date), 'dd MMMM yyyy')}</div>
                        )
                    }
                </div>
                <div className="prose lg:prose-xl my-32 prose-a:underline-offset-4">
                    <Mdx code={work.body.code} />
                </div>
            </div>

            <Footer />
        </div>
    )
}