import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { allPosts } from '../../../.contentlayer/generated';

interface PostsProps {
  params: {
    tag: string
  }
}

export default async function Tags({ params }: PostsProps) {
  // filter out posts that are not published and not the same tag
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === params.tag)
  const category = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="lg:p-10 p-5">
      <div className='text-xl mb-36'>
        <Link href='/'>Bijon Setyawan Raya</Link> / <Link href='/tags' className='font-bold'>Tags</Link>
      </div>
    
      <h1 className="underline mb-5">Posts Related to {category}</h1>
      <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
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
                    <h1 className="text-2xl font-bold">
                      {title}
                    </h1>
                    <p className="text-lg my-2">
                      {description}
                    </p>
                    <div className="text-lg ml-auto text-gray-400">
                      {format(new Date(date), 'dd MMMM yyyy')}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}