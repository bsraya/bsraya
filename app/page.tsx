import Link from 'next/link';
import { Metadata } from 'next';
import WorkList from '@/components/works';
import PostList from '@/components/posts';
import ExternalLink from '@/components/external-link';
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
  }).slice(0, 5);

  const posts = allPosts.filter(
    (post) => post.published === true
  ).sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date))
  }).slice(0, 5);

  return (
    <div className="h-full">
      <div className="flex flex-col gap-20">
        <div className="grid grid-col gap-2">
          <div className="font-merriweather font-semibold text-2xl">Bijon Setyawan Raya</div>
          <div className="text-slate-600 font-khula text-xl">I make machines learn, and I write about it</div>
          <div>Get my resume <ExternalLink text="here" url="/resume.pdf" /></div>
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
