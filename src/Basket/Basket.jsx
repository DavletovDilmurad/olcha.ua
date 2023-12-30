import react, { useContext } from "react"
import Context, { BasketContext1 } from "../Basket/BasketContext1"
import {  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  useDisclosure } from '@chakra-ui/react'

import {
    Flex,
    Image,
    Text,
    Box,
    Heading,
    Button,
    Grid,
    GridItem,
    Input
} from "@chakra-ui/react";
import { useState } from "react";
const Cart = () => {
    const { state , setState } = useContext(BasketContext1);
  const { isOpen, onOpen, onClose } = useDisclosure()

    const onDelete = (id) => {
        let basketItems = JSON.parse(localStorage.getItem("basket-products")) 
        let newBasketItems = basketItems.filter( item => { 
          return id !== item?.id 
        }) 
        localStorage.setItem("basket-products", JSON.stringify(newBasketItems)) 
        setCount(newBasketItems)
    }

    let arr =
        state.map(elem => {
            return {
                ...elem,
                count: 1,
            }
        });

    let [count, setCount] = useState(arr)

    const decCrease = (id) => {
        let newCount = count.map(elem => {
            if (elem.id === id) {
                return {
                    ...elem,
                    count: elem.count + 1,
                }
            }
            return elem;
        })
        setCount(newCount);
    }
    const inCrease = (id) => {
        let newCount = count.map(elem => {
            if (elem.id === id && elem.count > 1) {
                return {
                    ...elem,
                    count: elem.count - 1,
                }
            }
            return elem;
        })
        setCount(newCount);
    }

    let totalPrice = 10;



    return (
        <>
            <Heading ml={'40px'}>Korzina</Heading>
            <Context display={'flex'}>
                <Box flexWrap={'wrap'} display={'flex'}>
                <Grid  padding={'50px'}>
                    {
                        count.map((product) => {
                            let localPrice = product.price * product.count
                            totalPrice += localPrice;
                            return (
                                <Box  w={{base:'100%', xl:'1300px'}} mt={'10px'} flexWrap={'wrap'} border={'1px solid grey !important'} key={product.id}>
                                    <GridItem gap={'40px'} padding={'20px'} display={{ base: "block", lg: 'flex' }} >
                                        <Image w={{ base: '100%', lg: '350px' }} h={'220px'} objectFit={'cover'} src={product?.thumbnail} />
                                        <Flex flexWrap={'wrap'} w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Heading mt={'10px'} >
                                                {product.title}
                                            </Heading>
                                            <Flex justifyContent={'space-between'} w={{base:'100%', lg:'50%'}}>
                                            <Flex gap={'20px'} justifyContent={'center'}>
                                                <Button  colorScheme="telegram" onClick={() => inCrease(product.id)}>-</Button>
                                                <Heading size={'lg'}>
                                                    {
                                                        product.count
                                                    }
                                                </Heading>
                                                <Button colorScheme="telegram" onClick={() => decCrease(product.id)}>+</Button>
                                            </Flex>
                                            <Heading size={'lg'}>$ {localPrice}</Heading>
                                            <Button
                                                onClick={() => onDelete(product?.id)}
                                                w={'30'}
                                                colorScheme="telegram"
                                                color={'black'}
                                               
                                            >deleta</Button>
                                            </Flex>
                                        </Flex>
                                    </GridItem>








                                    {/* modal */}
            <Box w={'500px'}>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buyurtma Berish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box >

              <Box gap={'20px'} display={'flex'}> 

              <Box>
                  <Image w={'130px'} src={product.thumbnail} />
              </Box>


                <Box>
                  <Text>{product.title}</Text>
                  <Heading mt={'30px'} fontSize={'20px'}>{product.price}.000 сум</Heading>
                </Box>
              </Box>



              <Box mt={'40px'}>
                <Box>
                <Text color={'gray'}>Ism va familiya</Text>
              <Input w={'400px'} border={'2px solid gray'} placeholder='Ism va familiya'/>
                </Box>

                <Box mt={'20px'}>
                <Text color={'gray'}>Kontakt raqami</Text>
                <Box display={'flex'}>
                <Button position={'relative'} left={'2px'} borderLeft={'2px solid black'} bg={'white'} borderRight={'none'} borderY={'2px solid black'} color={'black'}>+998</Button>  <Input w={'400px'} border={'2px solid gray'} type='number' placeholder='Kontakt raqami'/>
                </Box>
           
                </Box>
             
             </Box>



            </Box>
          </ModalBody>
          <ModalFooter>
            
            <Button colorScheme='red'>Buyurttma berish</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>





                                </Box>
                            )
                        })
                    }




                    
                </Grid>

                
                <Box  borderRadius={'7px'} position={'relative'} left={{base:'-30px'}} w={{base:'80%',sm:'320px'}} padding={'20px'}  fontSize={'30px'} border={'1px solid gray'} mt={'20px'}  h={'400px'}  ml={{base:'50px',xl:'120px'}}>
                    <Box  display={'flex'} >Jami : <Heading mt={'10px'}  fontSize={'25px'} ml={'40px'}>  {totalPrice}.000 so`m</Heading></Box>
                    <Box>
                    <Input border={'2px solid black'} w={'280px'} placeholder="Promokodni Kiriting"/>
                    </Box>
                    <Box mt={'10px'}>
                        <Text  color={'black'} fontSize={'15px'}>Qiymati: {totalPrice} .000 so`m</Text>
                        <Text mt={'5px'} color={'black'} fontSize={'15px'}>Promokod: 0 so`m</Text>
                        <Text mt={'5px'} color={'black'} fontSize={'15px'}>Ishlatilgan bonus: 0 so`m</Text>
                        <Text mt={'5px'} color={'black'} fontSize={'15px'}>Naqd pul to'lash uchun komissiya miqdori: 0 %</Text>
                        <Text mt={'5px'} color={'black'} fontSize={'15px'}>Yetkazib berish summasi: 0 so`m</Text>
                    </Box>
                    <Box>
                        <Button mt={'30px'} ml={'-15px'} w={'300px'} colorScheme={'red'} onClick={onOpen}>Buyurtma Berish</Button>
                    </Box>
                    
                    </Box>
                </Box>
              
                
                  
            </Context>



            
        </>
    )
}

export default Cart;