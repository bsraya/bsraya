import {
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Tag({ tag, type }: { tag: string, type: string }) {
  return (
    <Button
      variant="ghost"
      bg={type === 'blog' ? 'white' : 'gray.50'}
      color="gray.500"
      fontFamily="heading"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
      transform='translateY(5px)'
      transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
      _hover={{
        bgColor: 'gray.50',
        transform: type === 'portfolio' ? 'translateY(5px)' : 'translateY(0)',
        cursor: type === 'blog' ? 'pointer' : 'default'
      }}
    >
      {
        type === 'portfolio' && (
          <>
            {tag}
          </>
        )
      }
      {
        type === 'blog' && (
          <NextLink
            href={'/tag/' + tag}
          >
            {tag}
          </NextLink>
        )
      }
    </Button>
  )
}