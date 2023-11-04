import Link from 'next/link';
import { format } from 'date-fns';
import { notFound } from 'next/navigation'
import Mdx from "../../../components/mdx-components"
import { allPosts } from '../../../.contentlayer/generated'

interface PostProps {
    params: {
        slug: string
    }
}

async function getPostsFromParams(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug)

    if (!post) notFound()

    return post
}

export default async function Post({ params }: PostProps) {
    const post = await getPostsFromParams(params.slug)
    return (
        <div className="lg:p-10 p-5">
            <div className="text-xl mb-36"><Link href="/" className='no-underline'>Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold no-underline">Posts</Link></div>
            
            <div className='flex items-center text-xl gap-3'>
                <Link href="/posts">
                    <div className="flex w-fit px-5 py-2 border rounded-full hover:border-gray-500 cursor-pointer">
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
            
            <h1 className="xl:text-5xl text-4xl font-thin font-serif my-5">{post.title}</h1>
            <div className="text-lg sm:text-md w-full border-y-2 py-3 text-gray-500 flex flex-col lg:flex-row lg:justify-between gap-3">
                <blockquote className="italic">
                    &quot;{post.description}&quot;
                </blockquote>
                {
                    post.date && (
                        <div>{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                    )
                }
            </div>
            <div className="prose lg:prose-xl max-w-[120ch] my-32 prose-a:underline-offset-4">
                <Mdx code={post.body.code} />
            </div>
        </div>
    )
}