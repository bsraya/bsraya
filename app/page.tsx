import Link from 'next/link'
import Image from 'next/image'
import { IPost } from '../lib/types'
import SideMenu from '../components/sidemenu'
import { getAllPostsFrontmatter } from '../lib/posts'

export default function Home() {
  const posts = getAllPostsFrontmatter().slice(0, 4)
  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="w-full lg:w-3/4 absolute lg:left-1/4 lg:py-60 px-20">
        <div className="flex flex-col gap-3 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:mt-0 lg:mt-0 mt-10 font-pt-serif">
          <p>An Aspiring Data Scientist.</p>
          <p>A Fullstack Developer.</p>
        </div>
        <div className="my-10">
          <h1 className="mb-5 underline">Recent Works</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Image
                src="https://dummyimage.com/1200x450.png/a9a9a9/fff"
                alt="schedulearn architecture"
                className="rounded-lg"
                width={1200}
                height={450}
              />
              <p className="mt-3"><span className="font-bold">Schedulearn</span>: Lightweight Deep Learning Scheduler</p>
            </div>
            <div>
              <Image
                src="https://dummyimage.com/1200x450.png/a9a9a9/fff"
                alt="schedulearn architecture"
                className="rounded-lg"
                width={1200}
                height={450}
              />
              <p className="mt-3"><span className="font-bold">Recommendation System</span>: Lightweight Deep Learning Scheduler</p>
            </div>
          </div>
        </div>
        <div className="mt-32 mb-10 flex flex-col gap-5">
          <h1 className="underline">Latest Posts</h1>
          <div className="flex flex-col gap-5">
            {
              posts.map((post: IPost) => {
                return (
                  <Link key={post.slug} href={`/posts/${post.slug}`} className="h-30 flex gap-5">
                    <Image
                      src="https://dummyimage.com/200x125.png/a9a9a9/fff"
                      alt="dummy"
                      className="rounded-lg"
                      width={200}
                      height={125}
                    />
                    <div>
                      <h1 className="text-2xl font-bold">{post.frontMatter.title}</h1>
                      <p className="text-lg my-2">{post.frontMatter.excerpt}</p>
                      <p className="text-gray-500">{post.frontMatter.date}</p>
                    </div>
                  </Link>
                )
              })
            }
            <Link href="/posts" className="py-2 px-5 text-xl w-fit rounded-full border border-2 hover:border-gray-500">See More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
