import Link from 'next/link';
import { Metadata } from 'next';
import WorkList from '@/components/works';
import PostList from '@/components/posts';
import { allWorks, allPosts } from '../.contentlayer/generated';

export const metadata: Metadata = {
  openGraph: {
    url: '/',
    title: 'Home',
    description: 'Blog and portfolio',
    siteName: 'Bijon Setyawan Raya',
    creators: ['Bijon Setyawan Raya'],
    images: [
      {
        url: `/api/og?title=Home`,
        width: 1200,
        height: 630,
        alt: `Bijon Setyawan Raya - Home`,
      }
    ]
  }
}

export default function Home() {
  const works = allWorks.filter(
    (work) => work.published === true
  ).sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date))
  }).slice(0, 3);

  const posts = allPosts.filter(
    (post) => post.published === true
  ).sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date))
  }).slice(0, 3);

  return (
    <div className="h-full mb-10">
      <div className="flex flex-col gap-20">
        <div className="grid grid-col gap-2 text-xl">
          <div className="font-merriweather font-semibold">Bijon Setyawan Raya</div>
          <div className="text-slate-500 font-khula">I make machines learn and write about it</div>
        </div>

        <div>
          <h1 className="font-lalezar mb-5 text-3xl">Selected Works</h1>
          <div className="flex flex-col gap-10 w-full mb-5">
            <WorkList works={works} />
          </div>
          <Link href="/works">
            <button className="underline">See more</button>
          </Link>
        </div>

        <div>
          <h1 className="font-lalezar mb-5 text-3xl">Lastest Posts</h1>
          <div className="flex flex-col gap-10 w-full mb-5">
            <PostList posts={posts} />
          </div>
          <Link href="/posts">
            <button className="underline">See more</button>
          </Link>
        </div>
      </div>
    </div >
  )
}
