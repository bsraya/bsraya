import Link from 'next/link'
import PostFrames from '../../components/post-frames'
import { allPosts } from '../../.contentlayer/generated';

export default function Posts() {
    const posts = allPosts.filter((post) => post.published === true);

    return (
        <div className="lg:p-10 p-5">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Posts</Link></div>
            
            <h1 className="underline mb-5">All Posts</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <PostFrames posts={posts} />
            </div>
        </div>
    )
}