import { Box } from '@chakra-ui/react'

export default function Tech({ tech }: { tech: string }) {
    return (
        <Box
            bg="white"
            color="gray.500"
            fontFamily="heading"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
            pl={3}
            pr={3}
            borderRadius={5}
        >
            {tech}
        </Box>
    )
}
