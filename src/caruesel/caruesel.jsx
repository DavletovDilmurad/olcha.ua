import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import Taymer from "./taymer";

function  SimpleSlider() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoSpeed:10000,
    };
    return (
      <Box   padding={'60px'}>
        <Slider  {...settings}>
          <Box >
            <Image borderRadius={'10px'} h={{base:'110px',xl:'400px'}}  w={'100%'} src="https://olcha.uz/image/1400x360/sliders/ru/MHg1LXLtzAYrrbmB1vp7FVzHTiIai74H4k00n03nKE402nzzAe251eyCsCmi.jpeg"/>
          </Box>
          <Box>
           <Image borderRadius={'10px'}h={{base:'110px',xl:'400px'}}   w={'100%'} src="https://olcha.uz/image/1400x360/sliders/ru/fwuNMeIFt1g8hz0CKilAI42YNJF3VMzsbAOJ06lGzm5Q48HM0UA0QfWvgZqK.jpeg"/>
          </Box>
          <Box>
           <Image borderRadius={'10px'}h={{base:'110px',xl:'400px'}}   w={'100%'} src="https://olcha.uz/image/1400x360/sliders/ru/hGwl7LdZ4PHz5UVJFsLQRS89yKThXbxkRqrGOxY7ebNvo6rW8TPAPpeUX7R4."/>
          </Box>
          <Box>
            <Image borderRadius={'10px'} h={{base:'110px',xl:'400px'}}   w={'100%'} src="https://olcha.uz/image/1400x360/sliders/ru/LZEKLgmG82io4qiOmRxsbVKhlQAN0BOjiCB3lMbolEIGsjZRhUJFh8laUOPJ.jpeg"/>
          </Box>
          <Box>
            <Image borderRadius={'10px'} h={{base:'110px',xl:'400px'}}  w={'100%'} src="https://olcha.uz/image/1400x360/sliders/ru/HCji18ZFxwlgbWMegggrzkItPLTNsg3s1AjpQNvvOF2yaxJUVeGgsWoUPtna.png"/>
          </Box>
        </Slider>
              
       
      </Box>
    );
  }
  export default SimpleSlider