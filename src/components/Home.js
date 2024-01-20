import React from "react";

import { Card,AbsoluteCenter,useDisclosure,AspectRatio,Box,ModalOverlay,ModalContent,Modal,ModalHeader,ModalBody,ModalFooter,ModalCloseButton,Collapse,Center,Wrap,WrapItem, CardHeader, CardBody,Image,Stack,Divider,ButtonGroup, CardFooter,Heading,Text,SimpleGrid, Button} from '@chakra-ui/react'
import {

  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import "../Styles/Home.css";
// import { color } from "framer-motion";
// import { MdCheckCircle } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState} from 'react';



const Home = () => {
  const [isHovered, setHovered] = useState(false);

const paragraphStyle = {
  backgroundColor: isHovered ? 'red' : 'blue',
  fontSize: '18px',
  fontFamily: 'Arial, sans-serif',
};
const headerStyle = {
  color: 'black',
  fontSize: '24px',
  fonteight: 'bold',
  fontFamily: 'Arial, sans-serif',
  borderBottom: '2px solid #ccc',
  padding: '5px 0',
  cursor: 'pointer', 
};

  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  

  return (
    <div className="homepage">
   
      
      <div className="card text-bg-white">
          <img src="https://dynasoft.co.ke/wp-content/uploads/2020/02/dynasoft-business-banner.jpg?id=11503" className="card-img" alt="..."/>
          <div className="card-img-overlay">
              <h2 className="card-title" style={{ color: '#1f8787', fontSize: '35px',paddingLeft:'30%' }}>Discover unparalleled system consulting and implementation solutions with us.</h2>
              <p className="card-text" style={{ color: 'black', fontSize: '20px',paddingLeft:'38%' }}>Our comprehensive services cover the entire spectrum, from design and development to training, deployment, and ongoing support for business applications. Tailored to address the unique business requirements and customer challenges of our clients, our offerings ensure a seamless and effective integration of cutting-edge solutions for your success.</p>
              
          </div>
      </div>


      <Text></Text>
      

      <h2 style={headerStyle}>Our Solutions</h2>
      <div className="card text-sm-white" style={{width:'100%',height:'200%'}}>
              <img src="https://tse4.mm.bing.net/th?id=OIP.811J3H-oXPwBdW8ArldmcAHaB3&pid=Api&P=0&h=220" className="card-img" alt="..."/>
              <div className="card-img-overlay">
                  <h2 className="card-title" style={{ paddingTop:'0%',paddingLeft:'10%',color: '#ffc107', fontSize: '30px'}}>Discover Solutions With Us.</h2>
                  <p className="card-text" style={{ paddingTop:'0%',color: '#ffc107', fontSize: '20px' }}>As a leading ICT company based in Nairobi, Kenya, we take pride in our commitment to delivering top-notch ERP system services. This write-up aims to provide a comprehensive overview of our recent involvement in providing ERP solutions.</p>
                  
                  <a class="btn btn-primary" href="/solution" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
              </div>
              
              </div>
     
      <SimpleGrid spacing={6}  templateColumns='repeat(auto-fill, minmax(180px ,1fr))'>
        <Card>
      <Stack direction='column'>
        
            <CardHeader>
              <Heading size='md'>Data Analysis using Power BI </Heading>
            </CardHeader>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
          py={12}
          bgImage="url('https://tse4.mm.bing.net/th?id=OIP.PwYrKg7zedAkO68KPuvR-QHaE8&pid=Api&P=0&h=220')"
          bgPosition='center'
          bgRepeat='no-repeat'
          mb={2}
        >
          <ButtonGroup gap='4'>
          {/* <Button
              ml='6'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
            READ MORE ... 
            </Button> */}
            <a class="btn btn-primary" href="/analysis" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
            {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader as='h1'></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text></Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>  */}
            
           </ButtonGroup> 
        </Box>
       </Stack>
       </Card>
      
          
           <Card>
          <CardHeader>
              <Heading size='md'>ERPNext System Implementation </Heading>
            </CardHeader>
          <Stack direction='column'>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgImage="url('https://tse2.explicit.bing.net/th?id=OIP.MYmaGpLxM4D4eLjARbyVMgAAAA&pid=Api&P=0&h=220')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
              >
                <ButtonGroup gap='4'>
                <a class="btn btn-primary" href="/eRPNextImp" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
            {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>ERPNext System Implementation </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text></Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
                </ButtonGroup>
              </Box>
              </Stack>
            </Card> 
          
         <Card>
         <CardHeader>
              <Heading size='md'>Microsoft Dynamics 365 Implementation</Heading>
          </CardHeader>
         <Stack direction='column'>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgImage="url('https://tse2.mm.bing.net/th?id=OIP.8U6XH2VBvGvuJm-moQTaggHaEl&pid=Api&P=0&h=220')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
              >
                <ButtonGroup gap='4'>
               
                <a class="btn btn-primary" href="/micro" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
            {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Microsoft Dynamics 365 Implementation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>As certified Microsoft partners, we specialize in implementing
          Microsoft Dynamics 365, a comprehensive suite of business applications.
          We tailor the system to your unique requirements, providing seamless
          integration across departments, including finance, sales, customer service,
          and operations.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
                </ButtonGroup>
              </Box>
              </Stack>
          
            </Card>
         
          
          
             <Card>
             <CardHeader>
              <Heading size='md'>Support and Consultation</Heading>
            </CardHeader>
            <Stack direction='column'>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgImage="url('https://tse2.mm.bing.net/th?id=OIP.jT7AT4AAHBgrhhf4qktVwQAAAA&pid=Api&P=0&h=220https://tse2.mm.bing.net/th?id=OIP.jT7AT4AAHBgrhhf4qktVwQAAAA&pid=Api&P=0&h=220')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
              >
                <ButtonGroup gap='4'>
                <a class="btn btn-primary" href="/support" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
            {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Support and Consultation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Our dedicated support team is available to assist you with technical
          issues, system maintenance, and troubleshooting. We also provide
          consultation services to help optimize your IT infrastructure, enhance
          system performance, and align technology with your business goals.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
                </ButtonGroup>
              </Box>
              </Stack>
            </Card>
          
          
         
            
            <Card>
            <CardHeader>
              <Heading size='md'>Business Analysis</Heading>
            </CardHeader>
            <Stack direction='column'>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgImage="url('https://tse3.mm.bing.net/th?id=OIP.7yLw3oSOG_FGVj5t15GBAgAAAA&pid=Api&P=0&h=220')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
              >
                <ButtonGroup gap='4'>
                <a class="btn btn-primary" href="/analysis" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
            {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Business Analysis</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Our skilled business analysts work closely with clients to understand
                their specific needs, challenges, and opportunities. We perform
                comprehensive business analysis, identify areas for improvement, and
                recommend strategic solutions to drive growth and efficiency.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
                </ButtonGroup>
              </Box>
              </Stack>
            </Card>

          
        </SimpleGrid>
      <h2>Our Involvement</h2>
      
      <SimpleGrid spacing={2}  templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      <Card maxW='md' >
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/christin-hume-mfB1B1s4sMc-unsplash.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='0' spacing='0'>
                <Heading size='md'>ICT Consultancy</Heading>
                <Text>
                With a deep understanding of technology trends and business processes,
          we provide strategic recommendations that empower organizations to make
          informed decisions about their IT infrastructure and operations.
                </Text>
                
              </Stack>
            </CardBody>
            
            
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack  spacing='0'>
                <Heading size='md'>Software Development</Heading>
                <Text>
                We have strong collaboration among cross-functional teams, with a deep
                understanding of user needs, adherence to best practices, and commitment
                to delivering high-quality, reliable, and scalable software solutions.
                </Text>
                
              </Stack>
            </CardBody>
                   
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/Erpnext.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='0' spacing='0'>
                <Heading size='md'>ERPNext Implementation</Heading>
                <Text>
                We have a thorough understanding of the organization's business processes
                and can configure the software to align with these processes. Our ERPNext
                consultants or experts have experience with the platform, ensuring
                successful implementation.
                </Text>
                
              </Stack>
            </CardBody>
            
            
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=1024x1024&w=is&k=20&c=SpP0lU7M-NkRIWUxZdL2rB_MtfegprwutPvbdy0TmMU='
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='0' spacing='0'>
                <Heading size='md'>ERPNext Implementation</Heading>
                <Text>
                We have a thorough understanding of the organization's business processes and can configure the software to align with these processes. Our ERPNext consultants or experts have experience with the platform, ensuring successful implementation.
                </Text>
                
              </Stack>
            </CardBody>
                     
          </Card>
        </SimpleGrid> 
      <h2>Modules</h2>
      
        
      
      
     
            <div className="card text-sm-white" style={{width:'100%',height:'200%'}}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.uERZcgzuCZrDemwCKP_nVgHaC3&pid=Api&P=0&h=220" className="card-img" alt="..."/>
              <div className="card-img-overlay">
                  <h2 className="card-title" style={{ paddingLeft:'10%',color: '#ffc107', fontSize: '40px'}}>Discover Erp Modules With Us.</h2>
                  <p className="card-text" style={{ paddingTop:'0%',color: '#ffc107', fontSize: '20px' }}>As a leading ICT company based in Nairobi, Kenya, we take pride in our commitment to delivering top-notch ERP system services. This write-up aims to provide a comprehensive overview of our recent involvement in providing ERP solutions.</p>
                  
                  <a class="btn btn-primary" href="/models" role="button"style={{backgroundColor: '#ffc107'}}>Discover More</a>
              </div>
              
              </div>
         
         
            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card size='sm'>
              <img src="https://tse1.mm.bing.net/th?id=OIP.zVvguAa2jFGOBEECtu4JkgHaE8&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Finance Management </Heading>
                </CardHeader>
                <CardBody>
                  <Text>Our ERP system includes a comprehensive finance and...</Text>
                </CardBody>
                <CardFooter>
                  
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.-vQ0Kna73pDkPKv8Cc5Q_QHaDg&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>HR Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Manage full employee life cycle right from onboarding...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse2.mm.bing.net/th?id=OIP.FOIHEYqwsLrpHdBjMuw2-QHaES&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Payroll Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Our state-of-the-art Payroll Management module is designed to streamline...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.MREGQTBlH3p3p8jXGksN3QHaEU&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Manufacturing</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Elevate your manufacturing capabilities with our ...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP.ezhmEejm8bicUIrrgD3ZtgHaEL&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Warehouse Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Take control of your inventory Management...</Text>
                </CardBody>
                <CardFooter>
                <a href="/nodels" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse4.mm.bing.net/th?id=OIP.ipHceY5n40jj-JdOgln1dQHaFj&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Loans Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Our ERP system includes a feature-rich loan management...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse2.mm.bing.net/th?id=OIP.vsU8Z9TkNMygT2Ye7vGYKQHaEK&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Health Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Our ERP system provides a holistic health management...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More → </a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Project Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Deliver both internal and external projects on time... </Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.BZxJKx9d9LfoMixgK22EGgHaDt&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Dairy Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Tailored for the dairy industry, our Dairy Management solution...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP.189SJeQ6JES5PCl3PuN-OwHaD-&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'> POS</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Our ERP system incorporates a feature-rich POS module...</Text>
                </CardBody>
                <CardFooter>
                <a href="/models" class="card-link">Read More →</a>
                </CardFooter>
              </Card>
            </SimpleGrid>
      
      <h4>Our Partners/Technologies</h4>
      
      <SimpleGrid spacing={4}  templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Image
         
          boxSize='150px'
          src='https://statify.co.ke/Images/Erpnextimages.png'
          alt='ERPNext"'
        />
        <Image
         
          boxSize='150px'
          src='https://statify.co.ke/Images/powerBI_partner.png'
          alt='PowerBI'
        />
        <Image
          
          boxSize='150px'
          src='https://statify.co.ke/Images/office365_partner.png'
          alt='Microsoft Azure'
        />
        <Image
          
          boxSize='150px'
          src='https://statify.co.ke/Images/azure_partner.png'
          alt='Office365'
        />
        <Image
        
        boxSize='150px'
        src='https://statify.co.ke/Images/Microsoft%20partner.png'
        alt='Microsoft Partner'
      />
      </SimpleGrid> 
      
    </div>
  );
};

export default Home;
