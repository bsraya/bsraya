import Tag from './Cards/Tag'
import { Flex } from '@chakra-ui/react'

export default function Tags({ tags, type }: { tags: string[], type: string }) {
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
                            type={type}
                        />
                    )
                })
            }
        </Flex>
    )
}