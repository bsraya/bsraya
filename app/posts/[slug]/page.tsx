import Link from "next/link";
import { Metadata } from "next";
import { format } from "date-fns";
import { notFound } from 'next/navigation';
import Mdx from "../../../components/mdx-components";
import { allPosts } from "../../../.contentlayer/generated";

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const post = await getPostFromParams(params.slug)
    return {
        title: post.title,
        description: post.description,
        keywords: [
            `${post.title} ${post.description}`,
            `Bsraya ${post.title}`,
            `Bsraya ${post.description}`,
            `Bijon Setyawan Raya ${post.title}`,
            `Bijon Setyawan Raya ${post.description}`,
        ],
        openGraph: {
            url: `/posts/${post.slugAsParams}`,
            title: `${post.title}`,
            description: post.description,
            siteName: 'Bijon Setyawan Raya',
            creators: ['Bijon Setyawan Raya'],
            images: [
                {
                    url: `/api/og?title=${post.title.replace(/\s/g, '+')}&date=${format(new Date(post.date), 'MMMM+dd,+yyyy')}`,
                    width: 1200,
                    height: 630,
                    alt: `Bijon Setyawan Raya - ${post.title}`,
                }
            ]
        }
    }
}

async function getPostFromParams(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug)
    if (!post) notFound()
    if (!post.published) notFound()
    return post
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPostFromParams(params.slug)

    return (
        <>
            <div className="justify-center flex text-center gap-3 font-khula text-slate-500">
                {
                    post.tag && (
                        <Link href={`/tags/${post.tagAsParams}`}>
                            <div className="underline cursor-pointer ml-2">
                                <p>{post.tag}</p>
                            </div>
                        </Link>
                    )
                }
                <p>•</p>
                {
                    post.date && (
                        <div>{format(new Date(post.date), 'dd MMMM yyyy')}</div>
                    )
                }
            </div>

            <h1 className="text-center justify-center xl:text-5xl text-4xl font-thin font-merriweather my-5">{post.title}</h1>
            
            <div className="prose lg:prose-xl my-32 prose-a:underline-offset-4">
                <Mdx code={post.body.code} />
            </div>
        </>
    )
}