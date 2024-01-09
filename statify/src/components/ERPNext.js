import React from "react";
import { Image,Heading,Stack,ButtonGroup,Divider,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";

function ERPNext (){
    return(
        <div>
           {/* <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>  */}
            {/* <h2>Finance Management</h2>
            <p>Our ERP system includes a comprehensive finance and accounting module that helps businesses automate financial processes, manage budgets, track expenses, and generate accurate financial reports. It provides real-time visibility into financial data, ensures regulatory compliance, and facilitates seamless financial planning and analysis.</p> */}
            <div class="card mb-3" id="erpnext" style={{maxWidth: '540px'}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://tse3.mm.bing.net/th?id=OIP.x2IStQ844GPaX7GHk3cctgHaE8&pid=Api&P=0&h=220" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">ERPNext</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row row-cols-2 row-cols-md-4 g-6">
              <div class="col">
                <div class="card">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.TuSMmGlZ_urga67VNE9tvgHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.Kd1gQQDJnkVIbXmDquegTgHaFj&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.Kd1gQQDJnkVIbXmDquegTgHaFj&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=400" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
    );
}
export default ERPNext;