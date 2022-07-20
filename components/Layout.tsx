import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Container, IconButton, useColorModeValue } from '@chakra-ui/react'
import prismStyles from '../styles/prism'
import katexStyles from '../styles/katex'
import { Global } from '@emotion/react';
import { useState, useEffect } from 'react'
import { TriangleUpIcon } from '@chakra-ui/icons'

// create a "back to top" button so that when pressed, it scrolls to the top
const BackToTopButton = () => {
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

    const color = useColorModeValue("dark", "light")

    return (
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            zIndex={10}
            display={isVisible ? 'block' : 'none'}
            cursor="pointer"
            _focus={{
                outline: 'none',
            }}
            _disabled={{
                opacity: 0.5,
                cursor: 'not-allowed',
            }}
            onClick={handleClick}
        >
            <IconButton
                aria-label='Back to top button'
                icon={<TriangleUpIcon color={color} />}
                colorScheme="transparent"
                border="2px solid"
                borderColor={color}
                bgColor="white"
                _dark={{
                    bgColor: "gray.800",
                }}
            />
        </Box>
    )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box as="main">
            <Navbar />

            <Container
                maxW="container.md"
                my={10}
            >
                <Global
                    styles={[prismStyles, katexStyles]}
                />
                {children}
            </Container>
            <BackToTopButton />
            <Footer />
        </Box>
    );
}

export default Layout