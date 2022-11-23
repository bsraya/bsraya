import {
  Box, 
  Text,
} from '@chakra-ui/react';

export default function Type() {
    return (
      <Box
        h={7}
        pl={2}
        pr={2}
        bg="gray.100"
        borderRadius="md"
        boxShadow="3px 3px 0px rgba(0, 0, 0, 0.1)"
      >
        <Text
          m="auto"
          fontSize="sm"
          color="gray.500"
          fontFamily="heading"
          _dark={{
              color: "gray.200"
          }}
        >
          Series
        </Text>
      </Box>
    )
}