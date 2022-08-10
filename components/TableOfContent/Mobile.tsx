import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Heading,
    Box
} from '@chakra-ui/react'
import React from 'react'

export default function MobileToC() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            position="fixed"
            bottom={20}
            right={5}
            zIndex={10}
        >
            <Button colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Table of Contents</DrawerHeader>
                    <DrawerBody>
                        <Heading as="h2" size="lg">
                            # Something
                        </Heading>
                        <Heading as="h2" size="lg">
                            # Something
                        </Heading>
                        <Heading as="h2" size="lg">
                            # Something
                        </Heading>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}