import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'

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
        <Flex
            flexDirection="row"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            width="100%"
            as="nav"
            px={[2, 6, 6]}
            py={2}
            mt={8}
            mb={[0, 0, 8]}
            mx="auto"
        >
            {link.map(({ name, url }) => (
                <Link href={url} key={name} passHref={true}>
                    <a>{name}</a>
                </Link>
            ))}
        </Flex>
    );
}

export default Footer