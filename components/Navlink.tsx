import { Link } from '@chakra-ui/react'
import Page from 'next/link'

export default function Navlink ({ href, children }: { href: string, children: React.ReactNode }): JSX.Element {
    return (
        <Page href={href}>
            <Link
                px={4}
                py={2}
                rounded={'md'}
                variant="ghost"
                _hover={{
                    textDecoration: 'underline',
                }}
            >
                {children}
            </Link>
        </Page>
    )
}