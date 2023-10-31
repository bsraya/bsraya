import { allPosts } from '../../../.contentlayer/generated'
import { notFound } from 'next/navigation'
import Mdx from "../../../components/mdx-components"
import Link from 'next/link';
import { format } from 'date-fns';

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
        <div className="p-10">
            <div className="text-xl mb-36"><Link href="/" className='no-underline'>Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold no-underline">Posts</Link></div>
            
            <Link href="/posts">
                <div className="flex w-fit px-5 py-2 border rounded-full hover:border-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <p>Posts</p>
                </div>
            </Link>
            <h1 className="text-5xl font-thin font-serif my-5">{post.title}</h1>
            <div className="flex border-y-2 py-2">
                <div className="text-xl">{post.description}</div>
                {
                    post.date && (
                        <div className="text-xl ml-auto">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                    )
                }
            </div>
            {
                post.tags && (
                    <div className="my-5 text-lg">
                        {post.tags.map((tag) => (
                            <span key={tag} className="mr-2">#{tag}</span>
                        ))}
                    </div>
                )
            }
            <div className="prose lg:prose-xl">
                <Mdx code={post.body.code} />
            </div>
        </div>
    )
}