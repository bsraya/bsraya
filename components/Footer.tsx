import { Flex, Link, useColorModeValue } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { EmailIcon } from '@chakra-ui/icons'

export default function Footer(): JSX.Element {
    const size = '1.5rem'
    const link = [
        {
            icon: <BsGithub style={{ fontSize: size }} />,
            url: 'https://github.com/bsraya',
        },
        {
            icon: <BsLinkedin style={{ fontSize: size }} />,
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            icon: <EmailIcon style={{ fontSize: size }} />,
            url: 'mailto:nathan.setyawan96@gmail.com',
        },
    ]

    return (
        <Flex as="footer" marginBottom={20} direction="column" align="center">
            <Flex maxW="container.md">
                {link.map((item, index) => (
                    <Link
                        key={index}
                        as="a"
                        px={4}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'blue.500',
                        }}
                        href={item.url}
                        isExternal
                    >
                        {item.icon}
                    </Link>
                ))}
            </Flex>
            <Flex as="p" mt={2}>
                Bijon Setyawan Raya © {new Date().getFullYear()}
            </Flex>
        </Flex>
    );
}