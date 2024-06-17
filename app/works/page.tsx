import { Metadata } from 'next';
import WorkList from '../../components/works';
import { allWorks } from '../../.contentlayer/generated';

export const metadata: Metadata = {
    title: 'Works',
    openGraph: {
        url: '/works',
        title: 'Works',
        description: 'List of all Bijon\'s works',
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
        images: [
            {
                url: `/api/og?title=Works`,
                width: 1200,
                height: 630,
                alt: `Bijon Setyawan Raya - Works`,
            }
        ]
    },
    keywords: [
        'Bsraya works',
        'Bsraya projects',
        'Bsraya portfolio',
        'Bijon Setyawan Raya works',
        'Bijon Setyawan Raya projects',
        'Bijon Setyawan Raya portfolio'
    ]
}

export default function Works() {
    const works = allWorks.filter(
        (work) => work.published === true
    ).sort((a, b) => {
        return Number(new Date(b.date)) - Number(new Date(a.date))
    });

    return (
        <>
            <h1 className="font-lalezar mb-5 text-3xl">All Works</h1>
            <div className="flex flex-col gap-10 mb-10 w-full">
                <WorkList works={works} />
            </div>
        </>
    )
}