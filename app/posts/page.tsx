import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
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
        <div className="flex flex-col gap-10 lg:p-10 p-5">
            <Header />
            
            <div>
                <div className="w-fit">
                    <Link href="/">
                        <div className="flex px-5 py-2 border rounded-full hover:border-gray-500 items-center mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <p className="font-baskervville text-lg">Home</p>
                        </div>
                    </Link>
                </div>
                
                <h1 className="font-bebasneue mb-10 text-5xl">Posts</h1>
                <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                    <PostList posts={posts} />
                </div>
            </div>

            <Footer />
        </div>
    )
}