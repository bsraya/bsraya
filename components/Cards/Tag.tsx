import {
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Tag({ tag }: { tag: string }) {
  return (
    <Button
      mr={2}
      variant="ghost"
      px={3}
      bg="white"
      _hover={{
          bgColor: 'gray.50'
      }}
      color="gray.500"
      fontFamily="Fira Code"
      boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
    >
      <NextLink
          passHref
          href={'/tag/' + tag}
      >
        {tag}
      </NextLink>
    </Button>
  )
}