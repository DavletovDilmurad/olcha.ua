import { Route, Routes ,  } from "react-router-dom";
import { Text } from "@chakra-ui/button";
import App from "./betlar/App";
import About from './betlar/muddatlitolov'

import Layout from "./layout1";
import Chegirmalar from "./betlar/chegirmalar";
import Yutuqlaroyinlar from "./betlar/Yutuqlio'yinla";
import Saytxaritasi from "./betlar/Saytxaritasi";
import Olchadasoting from "./betlar/olchadasoting";
import Section from "./betlar/Section";
import Basket from "./Basket/Basket";
import Appphonorsamsung from "./betlar/appp,honor,samsung";


function Routers() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<App/>} />
        <Route path="/muddatlitolov" element={<About/>} />
        <Route path="/chegirmalar" element={<Chegirmalar/>} />
        <Route path="/Yutuqlioyinlar" element={<Yutuqlaroyinlar/>} />
        <Route path="/Saytxaritasi" element={<Saytxaritasi/>} />
        <Route path="/olchadasoting" element={<Olchadasoting/>} />
        <Route path="/about/:id" element={<Section />} />
        <Route path="/muddatlitolov/:id" element={<Appphonorsamsung />} />
        <Route path="/basket" element={<Basket/>} />




 



   
      </Route>
    </Routes>
  );
}

export default Routers;
