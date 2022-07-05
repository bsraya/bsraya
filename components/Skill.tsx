import { Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";

// pass string and react-icons
export default function Skill({ tool, icon }: { tool: string, icon: any }) {
    const bgColor = useColorModeValue("#fdd2d8", "#fc909f")
    return (
        <Flex mb={3}>
            <Flex
                p={2}
                w="max-content"
                h="max-content"
                bg={bgColor}
                rounded="md"
                mr={3}
            >
                <Icon color="black" w={8} h={8} as={icon} />
            </Flex>
            <Text my="auto">{tool}</Text>
        </Flex>
    )
}