import Tag from './Cards/Tag'
import { HStack } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    return (
        <HStack
            flexWrap="wrap"
            spacing={3}
            rowGap={5}
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
        </HStack>
    )
}