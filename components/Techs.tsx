import Tech from './Cards/Tech'
import { Flex } from '@chakra-ui/react'

export default function Techs({ techs }: { techs: string[] }) {
    return (
        <Flex
            gap='3'
            wrap='wrap'
        >
            {
                techs.map((tech: string, index: number) => {
                    return (
                        <Tech
                            key={index}
                            tech={tech}
                        />
                    )
                })
            }
        </Flex>
    )
}