import { Metadata } from 'next';
import PostList from '../../components/posts';
import { allPosts } from '../../.contentlayer/generated';

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
    const posts = allPosts.filter(
        (post) => post.published === true
    ).sort((a, b) => {
        return Number(new Date(b.date)) - Number(new Date(a.date))
    });

    return (
        <>
            <h1 className="font-lalezar mb-5 text-3xl">All Posts</h1>
            <div className="flex flex-col gap-10">
                <PostList posts={posts} />
            </div>
        </>
    )
}