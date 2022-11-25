import {
    Box,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { TriangleUpIcon } from '@chakra-ui/icons'

export default function BackToTop() {
    const color = useColorModeValue('gray.800', 'whiteAlpha.900')
    const [isVisible, setIsVisible] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100
            if (isTop !== isAtTop) {
                setIsAtTop(isTop)
            }
            if (isTop !== isScrolling) {
                setIsScrolling(isTop)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isAtTop, isScrolling])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        if (isAtTop) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }, [isAtTop])

    return (
        <Box
            position="fixed"
            bottom={5}
            right={5}
            zIndex={10}
            display={isVisible ? 'block' : 'none'}
            cursor="pointer"
            onClick={handleClick}
            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
            borderRadius="md"
            _focus={{
                outline: 'none',
            }}
            _disabled={{
                opacity: 0.5,
                cursor: 'not-allowed',
            }}
        >
            <IconButton
                aria-label='Back to top button'
                icon={<TriangleUpIcon color="gray.600" />}
                colorScheme="transparent"
                border="1px solid"
                borderColor="gray.200"
                bgColor="white"
            />
        </Box>
    )
}