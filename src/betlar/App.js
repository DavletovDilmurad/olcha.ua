import { Box, Button, Container, Text, color, useColorMode } from "@chakra-ui/react";
import Pruducts from "../card/card";
import SimpleSlider from "../caruesel/caruesel";
import Footer from "../foooter/foorer";


function App() {
  return (
    <Box>
     <Container maxW={'container.xl'}>
     <SimpleSlider/>
    
          
    <Pruducts/>
     </Container>
     
    
    </Box>

  );
}

export default App;
