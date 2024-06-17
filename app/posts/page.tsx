import { Metadata } from 'next';
import SearchPosts from '@/components/search-posts';

export const metadata: Metadata = {
    title: 'Posts',
    description: 'List of all Bijon\'s posts',
    openGraph: {
        url: '/posts',
        title: 'Posts',
        description: 'List of all Bijon\'s posts',
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
        images: [
            {
                url: `/api/og?title=Posts`,
                width: 1200,
                height: 630,
                alt: `Bijon Setyawan Raya - Works`,
            }
        ]
    },
    keywords: [
        'Bsraya blog',
        'Bsraya posts',
        'Bijon Setyawan Raya blog',
        'Bijon Setyawan Raya posts',
    ]
}

export default function Posts() {
    return (
        <>
            <h1 className="font-lalezar mb-5 text-3xl">All Posts</h1>
            
            <SearchPosts />
        </>
    )
}