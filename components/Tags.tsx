import Tag from './Cards/Tag'
import { HStack, Flex } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    return (
        <Flex
            gap='3'
            wrap='wrap'
        >
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