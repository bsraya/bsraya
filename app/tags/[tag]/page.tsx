import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PostList from '@/components/posts';
import { allPosts } from '../../../.contentlayer/generated';

export async function generateMetadata(
  { params }: { params: Promise<{ tag: string }> }
): Promise<Metadata> {
  const rawTag = (await params).tag;
  const processedTag = rawTag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    title: `${processedTag}`,
    description: `All posts related to ${processedTag}`,
    keywords: [
      `${processedTag}`,
      `Bsraya ${processedTag}`,
      `Bijon Setyawan Raya ${processedTag}`,
    ],
    openGraph: {
        url: `/tags/${rawTag}`,
        title: `${processedTag}`,
        description: `All posts related to ${processedTag}`,
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
    }
  }
}

export default async function Tags({ params }: { params: Promise<{ tag: string }> }) {
  const rawTag = (await params).tag;
  const posts = allPosts.filter((post) => post.published && post.tagAsParams === rawTag)
  const category = rawTag.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <>
      <h1 className="font-lalezar mb-5 text-3xl">{category}</h1>
      <div className="flex flex-col gap-10">
        <PostList posts={posts} />
      </div>
    </>
  )
}
