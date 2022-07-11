import Navbar from './Navbar'
import Seo from './Seo'
import Footer from './Footer'
import { Box, Container } from '@chakra-ui/react'
import prismStyles from '../styles/prism'
import katexStyles from '../styles/katex'
import { Global } from '@emotion/react';

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
            <Footer />
        </Box>
    );
}

export default Layout