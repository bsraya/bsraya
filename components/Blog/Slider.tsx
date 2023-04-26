import { 
  useDisclosure,
  Slide,
  Box,
  Text,
  Button
} from "@chakra-ui/react";

function Slider({message}: {message: string}) {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Slide
      direction='bottom'
      in={!isOpen}
      style={{ zIndex: 10 }}
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
        <Button onClick={onToggle} ml='4' bg="black" size='sm' _hover={{ bg: 'red.500'}}>
          Close
        </Button>
      </Box>
    </Slide>
  )
}

export default Slider;