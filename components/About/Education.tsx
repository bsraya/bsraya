import { Heading, Box, Text, Stack } from '@chakra-ui/react'

export default function Education(): JSX.Element {
  return (
    <Stack spacing="1rem" my="4rem">
      <Heading as="h2" fontSize="2rem">Education</Heading>
      <Box>
          <Text fontStyle="italic">February 2021 - January 2023</Text>
          <Heading as="h2" size="lg">M.Sc. in Computer Science</Heading>
          <Text fontStyle="italic">National Tsing Hua University - Hsinchu, Taiwan</Text>
      </Box>
      <Box>
          <Text fontStyle="italic">September 2015 - January 2021</Text>
          <Heading as="h2" size="lg">B.Sc. in Computer Science</Heading>
          <Text fontStyle="italic">National Tsing Hua University - Hsinchu, Taiwan</Text>
      </Box>
    </Stack>
  )
}