import Link from 'next/link';
import PostFrames from '@/components/post-frames';
import { allPosts } from '../../../.contentlayer/generated';

export default async function Tags({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === params.tag)
  const category = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="lg:p-10 p-5">
      <div className='text-xl mb-36'>
        <Link href='/'>Bijon Setyawan Raya</Link> / <Link href='/tags' className='font-bold'>Tags</Link>
      </div>
    
      <h1 className="underline mb-5">Posts Related to {category}</h1>
      <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
        <PostFrames posts={posts} />
      </div>
    </div>
  )
}