import { Flex, Link, IconButton } from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer(): JSX.Element {
    const size = '1.5rem'
    const link = [
        {
            key: 'github',
            icon: <FiGithub style={{ fontSize: size }} />,
            url: 'https://github.com/bsraya',
        },
        {
            key: 'linkedin',
            icon: <FiLinkedin style={{ fontSize: size }} />,
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            key: 'email',
            icon: <MdOutlineMail style={{ fontSize: size }} />,
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
                        px={4}
                        py={2}
                        rounded={'xl'}
                        href={item.url}
                        isExternal
                    >
                        <IconButton
                            key={item.key}
                            aria-label={item.key}
                            icon={item.icon}
                            variant="ghost"
                            isRound
                            color='#fc909f'
                            _dark={{
                                color: '#f8afa6',
                            }}
                            _hover={{
                                bgColor: "rgb(248, 175, 166, 0.2)"
                            }}
                        />
                    </Link>
                ))}
            </Flex>
            <Flex as="p" mt={2}>
                Bijon Setyawan Raya © {new Date().getFullYear()}
            </Flex>
        </Flex>
    );
}