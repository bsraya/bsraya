import Navbar from './Navigation/Bar'
import Footer from './Footer'
import { Box, Container } from '@chakra-ui/react'
import prismStyles from '../styles/prism'
import katexStyles from '../styles/katex'
import { Global } from '@emotion/react';
import BackToTop from './Navigation/BackToTop'
import MobileToC from './TableOfContent/Mobile'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box as="main">
            <Navbar />
            <Container
                my={10}
                maxW="container.md"
            >
                <Global
                    styles={[prismStyles, katexStyles]}
                />
                {children}
            </Container>
            <MobileToC />
            <BackToTop />
            <Footer />
        </Box>
    );
}

export default Layout