import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function ERPNextImplimentation(){
    return(
        <div>
            {/* <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1> */}
           <div class="card mb-3">
            <img src="https://tse4.mm.bing.net/th?id=OIP.yqrKZf6UQLOlfLql28QaIQHaCB&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">ERPNext System Implementation </h5>
                <p class="card-text">We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.</p>
                
            </div>
            </div>
        </div>
    );
}
export default ERPNextImplimentation;