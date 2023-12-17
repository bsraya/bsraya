import Link from 'next/link';
import { format } from 'date-fns';
import { notFound } from 'next/navigation'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Mdx from "../../../components/mdx-components"
import { allPosts } from '../../../.contentlayer/generated'
import { Metadata } from 'next';

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const post = await getPostFromParams(params.slug)
    return {
        title: post.title,
        description: post.description,
        keywords: [
            `${post.title}`,
            `${post.description}`,
            `Bsraya ${post.title}`,
            `Bsraya ${post.description}`,
            `Bijon Setyawan Raya ${post.title}`,
            `Bijon Setyawan Raya ${post.description}`,
        ],
        openGraph: {
            url: `/posts/${post.slugAsParams}`,
            title: `Bijon Setyawan Raya - ${post.title}`,
            description: post.description,
            siteName: 'Bijon Setyawan Raya',
            creators: ['Bijon Setyawan Raya'],
            images: [
                {
                    url: `/api/og?title=${post.title.replace(/\s/g, '+')}&date=${format(new Date(post.date), 'MMMM+dd,+yyyy')}`,
                    width: 1200,
                    height: 630,
                    alt: `Bijon Setyawan Raya - ${post.title}`,
                }
            ]
        }
    }
}

async function getPostFromParams(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug)
    if (!post) notFound()
    if (!post.published) notFound()
    return post
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPostFromParams(params.slug)
    return (
        <div className="flex flex-col gap-10 lg:p-10 p-5">
            <Header />
            
            <div>
                <div className='flex items-center text-xl gap-3 font-baskervville'>
                    <Link href="/posts">
                        <div className="flex w-fit px-5 py-2 border rounded-full hover:border-gray-500 cursor-pointer  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <p>Posts</p>
                        </div>
                    </Link>
                    {
                        post.tag && (
                            <Link href={`/tags/${post.tagAsParams}`}>
                                <div className="hover:underline cursor-pointer">
                                    <p>{post.tag}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
                
                <h1 className="font-ptserif xl:text-5xl text-4xl font-thin my-5">{post.title}</h1>
                <div className="text-xl sm:text-md w-full border-y-2 py-3 text-gray-500 flex flex-col lg:flex-row lg:justify-between gap-3">
                    <blockquote className="font-baskervville italic">
                        &quot;{post.description}&quot;
                    </blockquote>
                    {
                        post.date && (
                            <div className="font-bebasneue">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                        )
                    }
                </div>
                <div className="prose lg:prose-xl my-32 prose-a:underline-offset-4">
                    <Mdx code={post.body.code} />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}