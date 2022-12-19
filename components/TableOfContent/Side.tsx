import {
  Box,
  Text,
  Stack,
  Heading,
  keyframes,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import NextLink from "next/link"
import { ArrowUpIcon } from '@chakra-ui/icons'

function ToCHeading({ text }: { text: string }) {
  return (
    <Text
      fontSize="0.8rem"
      transition="textColor .15s ease-in-out"
      _hover={{
        textColor: "#2b6cb0"
      }}
    >
      {text}
    </Text>
  )
}

export default function MobileToC({ headings }: { headings: string[] }) {
  const upAndDown = keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(-0.2rem); }
  `
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${upAndDown} 0.5s ease-in-out infinite alternate`

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }
  
  return (
    <Box
      position="fixed"
      zIndex="100"
      top="27%"
      left="0"
      ml="1rem"
      fontFamily="Fira Code"
    >
      <Heading fontSize="1rem" as="h4" mb="1rem">Table of Contents</Heading>
      <Stack spacing="0.25rem">
      {
        headings.map((heading: string, index: number) => {
          return (
            <NextLink
              key={index}
              href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                  const id = heading.toLowerCase().replace(/\s+/g, '-')
                  const element = document.getElementById(id)
                  if (element) {
                    element.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                      inline: 'start',
                    })
                  }
              }}
              scroll={false}
            >
              <ToCHeading text={heading} />
            </NextLink>
          )
        })
      }
      <Text
        fontSize="0.8rem"
        transition="textColor .15s ease-in-out"
        cursor="pointer"
        _hover={{
          textColor: "#2b6cb0",
          '& > *': {
            transform: "translateY(-0.2rem)",
            animation: animation,
          },
        }}  
        
        onClick={scrollToTop}
      >
        Back to top <ArrowUpIcon mb="0.25rem" ml="0.25rem" translateY="0" transition="transform .15s ease-in-out" />
      </Text>
      </Stack>
    </Box>
  )
}