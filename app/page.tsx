import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns';
import SideMenu from '../components/side-menu'
import { allPosts } from '../.contentlayer/generated'

export default function Home() {
  const posts = allPosts.filter((post) => post.published === true).splice(0, 3);

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
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
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
          <div className="flex flex-col gap-10">
            {
              posts.map(({ title, description, date, slugAsParams }: any) => {
                return (
                  <Link key={slugAsParams} href={`/posts/${slugAsParams}`} as={`/posts/${slugAsParams}`}>
                    <div className="h-30 xl:flex block gap-5">
                      <Image
                        src="https://dummyimage.com/200x125.png/a9a9a9/fff"
                        alt="dummy"
                        className="rounded-lg col-span-1"
                        width={200}
                        height={125}
                      />
                      <div className="col-span-auto mt-3">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-lg my-2">{description}</p>
                        <div className="text-xl ml-auto">{format(new Date(date), 'dd MMMM yyyy')}</div>
                      </div>
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
