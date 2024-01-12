import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function Microsoft365(){
    return(
        <div>
            <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1>
           <div class="card mb-3">
            <img src="https://tse2.mm.bing.net/th?id=OIP.ou5EOYIwwwaG8p_EmEc6hQHaCc&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Microsoft Dynamics 365</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    );
}
export default Microsoft365;