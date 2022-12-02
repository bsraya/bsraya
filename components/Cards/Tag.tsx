import {
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Tag({ tag }: { tag: string }) {
  return (
    <Button
      variant="ghost"
      bg="white"
      color="gray.500"
      fontFamily="Fira Code"
      // set border color
      border="1px solid"
      borderColor="gray.200"
      boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
      transform='translateY(5px)'
      transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
      _hover={{
        bgColor: 'gray.50',
        transform: 'translateY(0)'
      }}
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