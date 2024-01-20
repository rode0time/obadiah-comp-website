import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import { useHref } from "react-router-dom";

function MicrosoftDynamicsImplementation(){
    return(
        <div>
            {/* <h1 style={{backgroundColor:'#ffc107',color:'white'}}>PRODUCTS</h1> */}
           <div class="card mb-3">
            <img src="https://tse4.mm.bing.net/th?id=OIP.eSaAg7vRILwNOMhzSrTI_wHaDh&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Microsoft Dynamics 365 Implementation</h5>
                <p class="card-text">
                As certified Microsoft partners, we specialize in implementing
          Microsoft Dynamics 365, a comprehensive suite of business applications.
          We tailor the system to your unique requirements, providing seamless
          integration across departments, including finance, sales, customer service,
          and operations.</p>
                
            </div>
            </div>
        </div>
    );
}
export default MicrosoftDynamicsImplementation;