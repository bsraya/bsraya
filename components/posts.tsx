import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '../.contentlayer/generated/types'

export default function Posts({ posts }: { posts: Post[] }) {
    posts.sort((a: Post, b: Post) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <>
            {
                posts.map((post: Post) => {
                    return (
                        <div key={post.slugAsParams}>
                            <div className="font-lalezar text-slate-400">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                            <Link
                                as={`/posts/${post.slugAsParams}`}
                                href={`/posts/${post.slugAsParams}`}
                                className="w-fit hover:underline"
                            >
                                <h1 className="font-merriweather font-thin md:text-2xl text-xl">{post.title}</h1>
                            </Link>
                            <p className="font-khula text-lg mt-auto text-slate-500">{post.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}