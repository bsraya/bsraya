import { DateTime } from 'luxon'
import type { Post } from './types'

// sort posts by date
export default function SortPost(posts: Post[]) {
    return posts.sort((a: Post, b: Post) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}