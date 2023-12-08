import Link from 'next/link'
import Image from 'next/image'
import PostList from '../components/posts'
import SideMenu from '../components/side-menu'
import MobileMenu from '@/components/mobile-menu'
import { allPosts } from '../.contentlayer/generated'
import { Post } from '../.contentlayer/generated/types'

export default function Home() {
  const posts = allPosts.sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).filter((post) => post.published === true).splice(0, 3);

  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="w-full lg:w-3/4 absolute lg:left-1/4 lg:py-60 lg:p-10 p-5">
        <MobileMenu />
        <div className="font-ptserif flex flex-col gap-3 xl:text-6xl lg:text-5xl text-4xl xl:mt-0 lg:mt-0 mt-10 font-pt-serif">
          <p>An Aspiring Data Scientist.</p>
          <p>A Fullstack Developer.</p>
        </div>
        <div className="my-20">
          <h1 className="font-inter mb-5 underline">Recent Works</h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
              <Image
                src="/1200x450.png"
                alt="schedulearn architecture"
                className="rounded-lg"
                width={1200}
                height={450}
              />
              <p className="mt-3 text-lg"><span className="font-inter font-bold">Schedulearn</span>: <span className="font-baskervville">Lightweight Deep Learning Scheduler</span></p>
            </div>
            <div>
              <Image
                src="/1200x450.png"
                alt="schedulearn architecture"
                className="rounded-lg"
                width={1200}
                height={450}
              />
              <p className="mt-3 text-lg"><span className="font-inter font-bold">Recommendation System</span>: <span className="font-baskervville">Lightweight Deep Learning Scheduler</span></p>
            </div>
            <Link
              href="/works"
              className="font-inter py-2 px-5 text-lg w-fit rounded-full border border-2 hover:text-white hover:bg-black hover:border-black"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="mt-32 mb-10">
          <h1 className="font-inter underline mb-5">Latest Posts</h1>
          <div className="flex flex-col gap-10">
            <PostList posts={posts} />
            <Link
              href="/posts"
              className="font-inter py-2 px-5 text-lg w-fit rounded-full border border-2 hover:text-white hover:bg-black hover:border-black"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
