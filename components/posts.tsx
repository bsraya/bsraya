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
                    return(
                        <div key={post.slugAsParams}>
                            <div className="flex flex-col col-span-auto my-2">
                                <div className="font-bebasneue text-lg text-gray-400">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                                <Link
                                    as={`/posts/${post.slugAsParams}`}
                                    href={`/posts/${post.slugAsParams}`}
                                    className="hover:underline"
                                >
                                    <h1 className="font-ptserif text-3xl">{post.title}</h1>
                                </Link>
                                <p className="font-baskervville text-lg mt-auto">{post.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}