import { Avatar, Wrap, WrapItem, Box, Text, Tooltip, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type author = {
    name: string,
    image: string,
    url: string,
}

export default function Authors(props: any): JSX.Element {
    const authors: author[] = [
        {
            name: "Bijon Setyawan Raya",
            image: "https://bsraya.com/images/avatar.png",
            url: "/",
        },
        {
            name: "Annabella Putri Dirgo",
            image: "https://i.ibb.co/FhfYZ8L/logo.png",
            url: "https://bellapd.vercel.app",
        },
        {
            name: "Marcelino Gilbert Tagore",
            image: "",
            url: "https://marcelinogilbertt.vercel.app",
        }
    ]

    // if an author both exists in props.authors and authors, then it will be rendered
    const citedAuthors: author[] = authors.filter((author: author) => {
        return props.authors.includes(author.name)
    })

    return (
        <Box mb={5}>
            <Text mb={2} fontSize="sm" color="gray.500">Author(s):</Text>
            <Wrap>
                {
                    (citedAuthors.length === 1 && citedAuthors[0].name === authors[0].name) ?
                    (
                        <WrapItem>
                            <NextLink
                                passHref
                                href={authors[0].url}
                            >
                                <Avatar
                                    src={authors[0].image}
                                    name={authors[0].name}
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                />
                            </NextLink>
                            <Text
                                    fontSize="md"
                                    fontWeight="bold"
                                ml={3}
                                my="auto"
                                fontFamily="Montserrat, sans-serif"    
                            >{authors[0].name}</Text>
                        </WrapItem>
                    ) : (
                        citedAuthors.map((author: author) => {
                            return (
                                <Tooltip
                                    key={author.name}
                                    label={author.name}
                                >
                                    <Link
                                        href={author.url}
                                        target="_blank"
                                        isExternal
                                    >
                                        <WrapItem>
                                            <Avatar
                                                name={author.name}
                                                src={author.image}
                                            />
                                        </WrapItem>
                                    </Link>
                                </Tooltip>
                            )
                        })
                    )
                }
            </Wrap>
        </Box>
    )
}