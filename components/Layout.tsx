import Navbar from './Navigation/Bar'
import Footer from './Footer'
import { Container } from '@chakra-ui/react'
import prismStyles from '../styles/prism'
import katexStyles from '../styles/katex'
import { Global } from '@emotion/react';
import BackToTop from './Navigation/BackToTop'
import { motion, useScroll, useSpring } from "framer-motion";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    
    return (
        <>
            <motion.div
                style={{
                    scaleX: scaleX,
                    height: "5px",
                    background: "#3182ce",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    transformOrigin: "0%",
                    zIndex: 999
                }}
            />
            <Container
                as="main"
                my={10}
                maxWidth="container.md"
            >
                
                <Navbar />
                <Global
                    styles={[prismStyles, katexStyles]}
                />
                {children}
                <Footer />
                <BackToTop />
            </Container>
        </>
    );
}

export default Layout