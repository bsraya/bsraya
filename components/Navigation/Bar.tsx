import {
    Box,
    Flex,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import Navlink from './Link'
import Nextlink from 'next/link'
import Dropdown from './Dropdown'

function textAnimation({event, interval, letters}: {event: any, interval: NodeJS.Timeout, letters: string}) {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML
            .split('')
            .map((letter: string, index: number) => {
                if (index < iteration) {
                    return event.target.dataset.value[index]
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1/3
    }, 30);
}

export default function Navigation(): JSX.Element {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <Flex
            mt="1.5rem"
            as="nav"
        >
            <Nextlink href="/" passHref>
                <Text
                    fontFamily="heading"
                    fontSize="2xl"
                    fontWeight="700"
                    transform='translateY(0px)'
                    data-value="bsraya"
                    transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
                    _hover={{
                        transform: 'translateY(-5px)'
                    }}
                    onMouseEnter={(event) => {
                        let interval: any = null;
                        textAnimation({ event, interval, letters })
                    }}
                >bsraya</Text>
            </Nextlink>
            
            <Box ml="auto">
                {
                    isDesktop ? (
                        <>
                            <Navlink href="/">Home</Navlink>
                            <Navlink href="/about">About</Navlink>
                            <Navlink href="/blog">Blog</Navlink>
                            <Navlink href="/portfolio">Portfolio</Navlink>
                        </>
                    ) : (
                        <Dropdown />
                    )
                }
            </Box>
        </Flex>
    )
}