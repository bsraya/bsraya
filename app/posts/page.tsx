import Link from 'next/link'
import BurgerMenu from '@/components/burger-menu'
import PostFrames from '../../components/post-frames'
import { allPosts } from '../../.contentlayer/generated';

export default function Posts() {
    const posts = allPosts.filter((post) => post.published === true);

    return (
        <div className="lg:p-10 p-5">
            <div className="flex mb-36">
                <div className="text-xl"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Posts</Link></div>
                <div className='flex ml-auto items-center'>
                    <BurgerMenu />
                </div>
            </div>
            
            <h1 className="underline mb-5">All Posts</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <PostFrames posts={posts} />
            </div>
        </div>
    )
}