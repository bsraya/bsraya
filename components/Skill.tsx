import { Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";

// pass string and react-icons
export default function Skill({ tool, icon }: { tool: string, icon: any }) {
    const bgColor = "#fdd2d8"
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
                <Icon color="gray.700" w={8} h={8} as={icon} />
            </Flex>
            <Text my="auto">{tool}</Text>
        </Flex>
    )
}