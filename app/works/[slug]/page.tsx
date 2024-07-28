import { Metadata } from 'next';
import { format } from 'date-fns';
import { getHeadings } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Mdx from "../../../components/mdx-components";
import TableOfContent from '@/components/table-of-content';
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
    const headings = getHeadings(work.body.raw)

    return (
        <>
            <div className="justify-center flex text-center gap-3 font-khula text-slate-500">
                {work.tag && (<div>{work.tag}</div>)}
                <p>•</p>
                {work.date && (<div>{format(new Date(work.date), 'dd MMMM yyyy')}</div>)}
            </div>

            <h1 className="text-center justify-center xl:text-5xl text-4xl font-thin font-merriweather my-5">{work.title}</h1>

            <div className="prose lg:prose-xl my-20 prose-a:underline-offset-4 mx-auto">
                <Mdx code={work.body.code} />
            </div>

            <TableOfContent headings={headings} />
        </>
    )
}