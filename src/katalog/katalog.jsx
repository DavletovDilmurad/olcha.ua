import { Box,   Text   } from "@chakra-ui/layout";
import { GiHamburgerMenu } from "react-icons/gi";
import {  Button } from "@chakra-ui/react";
import React from "react";





 
 
      function DrawerExample() {
      
        return (
           <Box >
  <Button _hover={{color:'red', border : '2px solid red'}} bg={'white'} fontSize={'25px'} borderRadius={'7px'} h={'50px'} w={{base:'100px',xl:"180px"}} gap={'10px'}  border={'2px solid black'} leftIcon={ <GiHamburgerMenu /> }>
           
          
           <Text  display={{base:'none',xl:'flex'}}>Katalog</Text>
            
  </Button>
  
           </Box>
          
            
        )
      }
     
    

export default DrawerExample