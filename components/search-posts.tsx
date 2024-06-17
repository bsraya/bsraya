"use client";
import PostList from './posts';
import { useState, useMemo } from 'react';
import { allPosts } from 'contentlayer/generated';

export default function SearchPosts() {
  const [search, setSearch] = useState('')

  const posts = allPosts.filter(
    (post) => post.published === true
  ).sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date))
  });

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
            
    )
  }, [posts, search]);
  
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border-2 border-slate-400 rounded px-4 py-2 mb-5 focus:outline-none focus:border-slate-500'
      />
      <div className="flex flex-col gap-10">
      {
        filteredPosts.length > 0 && (
          <PostList posts={filteredPosts} />
        )
      }
      </div>
    </>
  )
}
      