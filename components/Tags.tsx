import Tag from './Cards/Tag'
import { Flex } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    return (
        <Flex>
            {
                tags.map((tag: string, index: number) => {
                    return (
                        <Tag
                            key={index}
                            tag={tag}
                        />
                    )
                })
            }
        </Flex>
    )
}