import Link from 'next/link'
import Image from 'next/image'
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
                        <div className="h-30 xl:flex block gap-5">
                            <Image
                                src="/200x125.png"
                                alt="dummy"
                                className="rounded-lg col-span-1"
                                width={200}
                                height={125}
                            />
                            <div className="flex flex-col col-span-auto my-2">
                                <Link 
                                    key={post.slugAsParams}
                                    as={`/posts/${post.slugAsParams}`}
                                    href={`/posts/${post.slugAsParams}`}
                                    className="hover:underline"
                                >
                                    <h1 className="font-ptserif text-3xl">{post.title}</h1>
                                </Link>
                                <div className="font-bebasneue text-lg text-gray-400">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                                <p className="font-baskervville text-lg mt-auto">{post.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}