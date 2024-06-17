import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PostList from '@/components/posts';
import { allPosts } from '../../../.contentlayer/generated';

export async function generateMetadata(
  { params }: { params: { tag: string } }
): Promise<Metadata> {
  const tag = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    title: `${tag}`,
    description: `All posts related to ${tag}`,
    keywords: [
      `${tag}`,
      `Bsraya ${tag}`,
      `Bijon Setyawan Raya ${tag}`,
    ],
    openGraph: {
        url: `/tags/${params.tag}`,
        title: `${tag}`,
        description: `All posts related to ${tag}`,
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
    }
  }
}

export default async function Tags({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === params.tag)
  const category = params.tag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <>
      <h1 className="font-lalezar mb-5 text-3xl">{category}</h1>
      <div className="flex flex-col gap-10 mb-10">
        <PostList posts={posts} />
      </div>
    </>
  )
}