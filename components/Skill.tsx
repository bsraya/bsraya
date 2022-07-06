import { Box, Icon, Tooltip } from "@chakra-ui/react";

// pass string and <svg>
export default function Skill({ name, icon }: { name: string, icon: JSX.Element }) {
    return (
        <Tooltip label={name}>
            <Box
                p={2}
                w="max-content"
                h="max-content"
                bgColor="white"
                rounded="md"
                mr={3}
            >
                <Icon color="gray.700" w={12} h={12}>
                    {icon}
                </Icon>
            </Box>
        </Tooltip>
    )
}