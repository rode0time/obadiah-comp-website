import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function Analysis(){
    return(
        <div>
            {/* <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1> */}
           <div class="card mb-3">
            <img src="https://tse1.mm.bing.net/th?id=OIP.MR4TYKOTYmS4Z4t2rmQ4EAHaDt&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Data Analysis using Power BI</h5>
                <p class="card-text">We help businesses leverage the power of data by providing data
          analysis services using Microsoft Power BI. Our experts analyze data,
          create interactive visualizations, and develop insightful reports to
          enable data-driven decision-making.</p>
                
            </div>
            </div>
        </div>
    );
}
export default Analysis;