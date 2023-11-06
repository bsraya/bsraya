import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns';
import { Post } from '../.contentlayer/generated/types'

export default function Posts({ posts }: { posts: Post[] }) {
    return (
        <>
            {
                posts.map((post: Post) => {
                    return(
                        <Link key={post.slugAsParams} href={`/posts/${post.slugAsParams}`} as={`/posts/${post.slugAsParams}`}>
                            <div className="h-30 xl:flex block gap-5">
                                <Image
                                    src="https://dummyimage.com/200x125.png/a9a9a9/fff"
                                    alt="dummy"
                                    className="rounded-lg col-span-1"
                                    width={200}
                                    height={125}
                                />
                                <div className="col-span-auto mt-3">
                                    <h1 className="text-2xl font-bold">{post.title}</h1>
                                    <p className="text-lg my-2">{post.description}</p>
                                    <div className="text-lg ml-auto text-gray-400">{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}