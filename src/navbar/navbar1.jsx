import { Box, Heading,  Text , Container } from "@chakra-ui/layout";
import {  Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DrawerExample from '../katalog/katalog'
import { FaShoppingCart } from "react-icons/fa";

function Navbar1() {
 
    return(
        <Container maxW={'container.xl'}>
 <Box    gap={'20px'} display={'flex'} >
         <Box>
      <Text display={{base:'none',xl:'flex'}}  color={'red'} fontWeight={'999'} fontSize={'40px'}><Link  to={'/'} >Olcha</Link></Text> 
        </Box>
        <Box mt={'10px'}>
            <DrawerExample/>
        </Box>
        <Box>
            <Input ml={'-10px'} mt={'13px'} _hover={{border:'1px solid white'}} bg={'white'} borderRadius={'7px'} h={'50px'}  placeholder="Katalog bo'yicha qidirish" w={{base:'100%',xl:'600px'}}/>
        </Box>
        <Box mt={'20px'}>
          <Button _hover={{bg:'white'}} bg={'white'}>  <Link to={'basket'} fontSize={'20px'}><FaShoppingCart /></Link>  </Button>  
        </Box>
        </Box>
        </Container>
       
        
    )
}
export default Navbar1