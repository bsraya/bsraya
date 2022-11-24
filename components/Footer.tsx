import {
    Box,
    Flex,
    Text,
    Link,
    Divider,
    Icon,
} from '@chakra-ui/react'
import Github from "../icons/github"
import LinkedIn from "../icons/linkedin"
import Mail from "../icons/mail"

export default function Footer(): JSX.Element {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/bsraya',
            icon: <Github />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bijonsetyawan/',
            icon: <LinkedIn />
        },
        {
            name: 'Email',
            url: 'mailto:nathan.setyawan96@gmail.com',
            icon: <Mail />
        },
    ]

    return (
        <Box
            w="95%"
            mx="auto"
            fontSize="1rem"
            fontFamily="Fira Code"
        >
            <Divider/>
            <Flex
                as="footer"
                mt="0.5rem"
                mb="2rem"
            >
                <Text mr="auto">
                    © Bijon S. Raya {new Date().getFullYear()}
                </Text>
                <Flex>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            as="a"
                            px={2}
                            isExternal
                            href={item.url}
                            fontStyle="normal"
                            target="_blank"
                        >
                            <Icon w={6} h={6}>
                                {item.icon}
                            </Icon>
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}