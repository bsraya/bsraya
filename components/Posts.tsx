import {
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react'
import Post from './Cards/Post'
import type { IPost } from '../lib/types'

export default function Posts({ posts, type }: { posts: IPost[]; type: string }) {
    const isDesktop = useBreakpointValue({ base: false, md: true })
    return (
        <SimpleGrid spacing="5" columns={ isDesktop ? 2 : 1 }>
            {
                posts.map((post: IPost, index: number) => {
                    return(
                        <Post key={index} post={post} type={type} />
                    )
                })
            }
        </SimpleGrid>
    )
}