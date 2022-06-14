import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

const Footer: React.FC = () => {
    const link = [
        {
            name: 'GitHub',
            url: 'https://github.com/bsraya',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            name: 'Email',
            url: 'nathan.setyawan96@gmail.com'
        },
        {
            name: 'Resume',
            url: '...'
        }
    ]
    return (
        <Flex as="footer" mt={10}>
            <Flex maxW="container.md" mx="auto">
                {link.map(({ name, url }) => (
                    <Link href={url} key={name} passHref={true}>
                        <a>{name}</a>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
}

export default Footer