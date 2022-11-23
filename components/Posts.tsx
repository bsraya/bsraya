import {
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react'
import Post from './Cards/Post'
import type { IPost } from '../lib/types'

export default function Posts({ posts, type }: { posts: IPost[]; type: string }) {
    const isDesktop = useBreakpointValue({ base: false, md: true })
    return (
        <SimpleGrid
            columns={ isDesktop ? 2 : 1 }
            spacing="5"
            mt="5"
        >
            {
                posts.map((post: IPost) => {
                    return(
                        <Post post={post} type={type} />
                    )
                })
            }
        </SimpleGrid>
    )
}