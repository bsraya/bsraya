import { Text, Flex } from '@chakra-ui/react'

export default function Techs({ techs }: { techs: string[] }) {
    return (
        <Flex
            gap='3'
            wrap='wrap'
        >
            {
                techs.map((tech: string, index: number) => {
                    return (
                        <Text
                            key={index}
                            color="gray.500"
                            fontWeight={700}
                        >
                            {tech}
                        </Text>
                    )
                    
                })
            }
        </Flex>
    )
}