import { Flex, Link, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer(): JSX.Element {
    const size = '1.5rem'
    const link = [
        {
            key: 'github',
            icon: <FaGithub style={{ fontSize: size }} />,
            url: 'https://github.com/bsraya',
        },
        {
            key: 'linkedin',
            icon: <FaLinkedin style={{ fontSize: size }} />,
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            key: 'email',
            icon: <FiMail style={{ fontSize: size }} />,
            url: 'mailto:nathan.setyawan96@gmail.com',
        },
    ]

    return (
        <Flex as="footer" marginBottom={20} direction="column" align="center">
            <Flex maxW="container.md">
                {link.map((item) => (
                    <Link
                        key={item.key}
                        as="a"
                        px={1}
                        py={2}
                        rounded={'lg'}
                        href={item.url}
                        isExternal
                    >
                        <IconButton
                            key={item.key}
                            aria-label={item.key}
                            icon={item.icon}
                            variant="ghost"
                        />
                    </Link>
                ))}
            </Flex>
            <Flex as="p" mt={2}>
                © Bijon Setyawan Raya {new Date().getFullYear()}
            </Flex>
        </Flex>
    );
}