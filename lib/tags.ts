import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getUniqueTags(): string[] {
  const folders = fs.readdirSync(path.join('content', 'posts'))

  // get all unique tags from all posts
  return folders.map(slug => {
    const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
    const { data: frontMatter } = matter(content)

    return frontMatter.tags
  }).flat().filter((tag: string, index: number, self: string[]) => {
    return self.indexOf(tag) === index
  })
}
