"use client";
import Header from '@/components/header';
import PostList from '../../components/posts';
import { usePathname } from 'next/navigation';
import { allPosts } from '../../.contentlayer/generated';

export default function Posts() {
    const pathname = usePathname().slice(1);
    const posts = allPosts.filter((post) => post.published === true);

    return (
        <div className="lg:p-10 p-5">
            <Header page={pathname} />
            
            <h1 className="font-inter mb-10 text-3xl">Posts</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <PostList posts={posts} />
            </div>
        </div>
    )
}