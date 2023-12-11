import Header from '@/components/header';
import PostList from '../../components/posts';
import { allPosts } from '../../.contentlayer/generated';

export default function Posts() {
    const posts = allPosts.filter((post) => post.published === true);

    return (
        <div className="lg:p-10 p-5">
            <Header />
            
            <h1 className="font-bebasneue mb-10 text-5xl">Posts</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                <PostList posts={posts} />
            </div>
        </div>
    )
}