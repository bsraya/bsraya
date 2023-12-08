import Header from '@/components/header';
import PostList from '@/components/posts';
import { allPosts } from '../../../.contentlayer/generated';

export default async function Tags({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === params.tag)
  const category = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="lg:p-10 p-5">
      <Header />

      <h1 className="font-inter mb-10 text-3xl">Posts Related to <span className="font-bold underline">{category}</span></h1>
      <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
        <PostList posts={posts} />
      </div>
    </div>
  )
}