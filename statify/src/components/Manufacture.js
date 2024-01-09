import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";

function Manufacture(){
    return(
        <div>
           <div class="card mb-3" style={{maxWidth: '540px'}}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src="https://tse3.mm.bing.net/th?id=OIP.4hyvYV9WY8CKrB6V2_0EqQHaEK&pid=Api&P=0&h=220" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Manufacture</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Manufacture;