import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PostList from '@/components/posts';
import { allPosts } from '../../../.contentlayer/generated';

export default async function Tags({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === params.tag)
  const category = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="flex flex-col gap-10 lg:p-10 p-5">
      <Header />

      <div>
        <div className="w-fit">
          <Link href="/">
            <div className="flex px-5 py-2 border rounded-full hover:border-gray-500 items-center mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <p className="font-baskervville text-lg">Home</p>
            </div>
          </Link>
        </div>

        <h1 className="font-bebasneue mb-10 text-5xl">{category}</h1>
        <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
          <PostList posts={posts} />
        </div>
      </div>
      
      <Footer />
    </div>  
  )
}