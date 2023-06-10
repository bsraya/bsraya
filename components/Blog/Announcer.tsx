import { 
  useDisclosure,
  Slide,
  Box,
  Text,
  Button
} from "@chakra-ui/react";

function Announcer({message}: {message: string}) {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Slide
      direction='bottom'
      in={!isOpen}
      style={{ zIndex: 1000 }}
      transition={{ enter: { duration: 0.4, delay: 0.4 }, exit: { duration: 0.4 } }}
    >
      <Box
        p='40px'
        color='white'
        mt='4'
        bg='blue.500'
        rounded='md'
        shadow='md'
        display='flex'
      > 
        <Text>{message}</Text>
        <Button onClick={onToggle} pt="3" pb="3" pl="6" pr="6" ml='4' bg="gray.100" size='sm' _hover={{ bg: 'gray.300'}}>
          Close
        </Button>
      </Box>
    </Slide>
  )
}

export default Announcer;