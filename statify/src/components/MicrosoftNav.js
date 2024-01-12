import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function MicrosoftNav(){
    return(
        <div>
            <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1>
           <div class="card mb-3">
            <img src="https://tse4.mm.bing.net/th?id=OIP._9eg6ubgziD_DloC3-vODQHaD6&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Microsoft Dynamics NAV</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
            </div>
            </div>
        </div>
    );
}
export default MicrosoftNav;