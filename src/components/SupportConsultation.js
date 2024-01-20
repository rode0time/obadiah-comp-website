import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function Support(){
    return(
        <div>
            {/* <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1> */}
           <div class="card mb-3">
            <img src="https://tse1.mm.bing.net/th?id=OIP.4WRL_YsPzQt68fWU64MOfQHaCz&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Support and Consultation </h5>
                <p class="card-text">Our dedicated support team is available to assist you with technical
          issues, system maintenance, and troubleshooting. We also provide
          consultation services to help optimize your IT infrastructure, enhance
          system performance, and align technology with your business goals.</p>
                
            </div>
            </div>
        </div>
    );
}
export default Support;