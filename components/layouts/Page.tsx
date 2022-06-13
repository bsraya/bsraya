import Header from '../Header'
import Footer from '../Footer'
import { Flex } from '@chakra-ui/react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                maxWidth="700px"
            >
                {children}
            </Flex>
            <Footer />
        </>
    );
}

export default Layout