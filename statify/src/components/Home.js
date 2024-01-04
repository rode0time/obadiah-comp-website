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
import { Alert } from 'react-bootstrap';
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
  cursor: 'pointer', // Optional: Add a cursor style for better user feedback
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
   
      {/* <p>
        Statify Solutions Limited is a provider of comprehensive and integrated
        Enterprise Resource Planning (ERP) systems. With a strong focus on
        innovation and customer satisfaction, our company offers a wide range of
        ERP solutions that cater to diverse industries and business needs. 
      </p> */}
      {/* <List spacing={3}>
          <ListItem>
            <MdCheckCircle/>
            <ListIcon as={MdCheckCircle}  color='green.200' />
            Finance and accounting
          </ListItem>
          <ListItem>
            <ListIcon  color='green.500' />
            HR and payroll
          </ListItem>
          <ListItem>
            <ListIcon color='green.500' />
            Loan management
          </ListItem>
         
          <ListItem>
            <ListIcon  color='green.500' />
            Education
          </ListItem>
          <ListItem>
            <ListIcon  color='green.500' />
            Health
          </ListItem>
          <ListItem>
            <ListIcon  color='green.500' />
            Manufacturing
          </ListItem>
          <ListItem>
            <ListIcon  color='green.500' />
            Point of sale (POS)
          </ListItem>
          <ListItem>
            <ListIcon color='green.500' />
            Fleet management
          </ListItem>
          <ListItem>
            <ListIcon  color='green.500' />
            Data analytics
          </ListItem>
        </List> */}
      {/* <ul>
        <li>Finance and accounting</li>
        <li>HR and payroll</li>
        <li>Loan management</li>
        <li>Education</li>
        <li>Health</li>
        <li>Manufacturing</li>
        <li>Point of sale (POS)</li>
        <li>Fleet management</li>
        <li>Data analytics</li>
      </ul> */}
      {/* <AspectRatio   ratio={25 / 5}>
        <Image src='https://tse1.mm.bing.net/th?id=OIP.Q5OcKc6OVDA4I2WqEJQQBgHaDP&pid=Api&P=0&h=220' alt='ICT' objectFit='cover' />
        
      </AspectRatio> */}
      <div className="card text-bg-white">
          <img src="https://dynasoft.co.ke/wp-content/uploads/2020/02/dynasoft-business-banner.jpg?id=11503" className="card-img" alt="..."/>
          <div className="card-img-overlay">
              <h2 className="card-title" style={{ color: '#1f8787', fontSize: '35px',paddingLeft:'30%' }}>Discover unparalleled system consulting and implementation solutions with us.</h2>
              <p className="card-text" style={{ color: 'black', fontSize: '20px',paddingLeft:'38%' }}>Our comprehensive services cover the entire spectrum, from design and development to training, deployment, and ongoing support for business applications. Tailored to address the unique business requirements and customer challenges of our clients, our offerings ensure a seamless and effective integration of cutting-edge solutions for your success.</p>
              {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
          </div>
      </div>


      <Text></Text>
      

      <h2 style={headerStyle}>Our Solutions</h2>
      {/* <div>
        <h3>Data Analysis using Power BI</h3>
        <p>
          We help businesses leverage the power of data by providing data
          analysis services using Microsoft Power BI. Our experts analyze data,
          create interactive visualizations, and develop insightful reports to
          enable data-driven decision-making.
        </p>
      </div>

      <div>
        <h3>ERPNext System Implementation</h3>
        <p>
          We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.
        </p>
      </div>

      <div>
        <h3>Microsoft Dynamics 365 Implementation</h3>
        <p>
          As certified Microsoft partners, we specialize in implementing
          Microsoft Dynamics 365, a comprehensive suite of business applications.
          We tailor the system to your unique requirements, providing seamless
          integration across departments, including finance, sales, customer service,
          and operations.
        </p>
      </div>

      <div>
        <h3>Support and Consultation</h3>
        <p>
          Our dedicated support team is available to assist you with technical
          issues, system maintenance, and troubleshooting. We also provide
          consultation services to help optimize your IT infrastructure, enhance
          system performance, and align technology with your business goals.
        </p>
      </div>

      <div>
        <h3>Business Analysis</h3>
        <p>
          Our skilled business analysts work closely with clients to understand
          their specific needs, challenges, and opportunities. We perform
          comprehensive business analysis, identify areas for improvement, and
          recommend strategic solutions to drive growth and efficiency.
        </p>
      </div> */}
      <SimpleGrid spacing={4}  templateColumns='repeat(auto-fill, minmax(150px ,1fr))'>
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
          <Button
              ml='6'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
            READ MORE ... 
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader as='h1'>Data Analysis using Power BI</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>We help businesses leverage the power of data by providing data
          analysis services using Microsoft Power BI. Our experts analyze data,
          create interactive visualizations, and develop insightful reports to
          enable data-driven decision-making.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            
          </ButtonGroup>
        </Box>
      </Stack>
      </Card>
      
          {/* <Card backgroundColor={"blueviolet"}>
            <CardHeader>
              <Heading size='md'>Data Analysis using Power BI </Heading>
            </CardHeader>
            <CardBody>
              <Text tyle={paragraphStyle}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}>We help businesses leverage the power of data by providing data
          analysis services using Microsoft Power BI. Our experts analyze data,
          create interactive visualizations, and develop insightful reports to
          enable data-driven decision-making.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card> */}
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
                <Button
              ml='4'
              size='sm'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
               READ MORE ...
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>ERPNext System Implementation </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
                </ButtonGroup>
              </Box>
              </Stack>
            </Card>
          {/* <Card>
            <CardHeader>
              <Heading size='md'>ERPNext System Implementation </Heading>
            </CardHeader>
            <CardBody>
            <Collapse startingHeight={18} in={show}>
            We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.
      </Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button> */}
              {/* <Text>We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.</Text> */}
            {/* </CardBody> */}
            {/* <CardFooter>
              <Button>View here</Button>
            </CardFooter> */}
         {/* </Card> */}
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
                <Button
              ml='4'
              size='sm'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
               READ MORE ...
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
            </Modal>
                </ButtonGroup>
              </Box>
              </Stack>
          
            </Card>
         
          {/* <Card>
            <CardHeader>
              <Heading size='md'>Microsoft Dynamics 365 Implementation</Heading>
            </CardHeader>
            <CardBody>
              <Text>As certified Microsoft partners, we specialize in implementing
          Microsoft Dynamics 365, a comprehensive suite of business applications.
          We tailor the system to your unique requirements, providing seamless
          integration across departments, including finance, sales, customer service,
          and operations.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card> */}
          {/* <Button
              
             
          
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}
            >
              Business Analysis
            </Button> */}
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
                <Button
              ml='6'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
             READ MORE ...
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
            </Modal>
                </ButtonGroup>
              </Box>
              </Stack>
            </Card>
          {/* <Card>
            <CardHeader>
              <Heading size='md'>Support and Consultation</Heading>
            </CardHeader>
            <CardBody>
              <Text >Our dedicated support team is available to assist you with technical
          issues, system maintenance, and troubleshooting. We also provide
          consultation services to help optimize your IT infrastructure, enhance
          system performance, and align technology with your business goals.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card> */}
          {/* <CardBody>
          <Image
              src='https://statify.co.ke/Images/christin-hume-mfB1B1s4sMc-unsplash.jpg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
          </CardBody> */}
          {/* <Button
              
             
          
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}
            >
              Business Analysis
            </Button> */}
            
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
                <Button
              ml='4'
              size='sm'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
              READ MORE ...
            </Button >
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
            </Modal>
                </ButtonGroup>
              </Box>
              </Stack>
            </Card>

          {/* <Card>
            <CardHeader>
              <Heading size='md'>Business Analysis</Heading>
            </CardHeader>
            <CardBody>
              <Text>Our skilled business analysts work closely with clients to understand
          their specific needs, challenges, and opportunities. We perform
          comprehensive business analysis, identify areas for improvement, and
          recommend strategic solutions to drive growth and efficiency.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card> */}
        </SimpleGrid>
      <h2>Our Involvement</h2>
      {/* <div>
        <h3>ICT Consultancy</h3>
        <p>
          With a deep understanding of technology trends and business processes,
          we provide strategic recommendations that empower organizations to make
          informed decisions about their IT infrastructure and operations.
        </p>
      </div>

      <div>
        <h3>Software Development</h3>
        <p>
          We have strong collaboration among cross-functional teams, with a deep
          understanding of user needs, adherence to best practices, and commitment
          to delivering high-quality, reliable, and scalable software solutions.
        </p>
      </div>

      <div>
        <h3>ERPNext Implementation</h3>
        <p>
          We have a thorough understanding of the organization's business processes
          and can configure the software to align with these processes. Our ERPNext
          consultants or experts have experience with the platform, ensuring
          successful implementation.
        </p>
      </div> */}
      <SimpleGrid spacing={6}  templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card >
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/christin-hume-mfB1B1s4sMc-unsplash.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>ICT Consultancy</Heading>
                <Text>
                With a deep understanding of technology trends and business processes,
          we provide strategic recommendations that empower organizations to make
          informed decisions about their IT infrastructure and operations.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Text variant='solid' colorScheme='blue'>
                  This also offered
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                  
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack  spacing='3'>
                <Heading size='md'>Software Development</Heading>
                <Text>
                We have strong collaboration among cross-functional teams, with a deep
                understanding of user needs, adherence to best practices, and commitment
                to delivering high-quality, reliable, and scalable software solutions.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Text variant='solid' colorScheme='blue'>
                  Statify offer this
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                  
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://statify.co.ke/Images/Erpnext.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>ERPNext Implementation</Heading>
                <Text>
                We have a thorough understanding of the organization's business processes
          and can configure the software to align with these processes. Our ERPNext
          consultants or experts have experience with the platform, ensuring
          successful implementation.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Text variant='solid' colorScheme='blue'>
                 This is offered here!!
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                  
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='md'>
            <CardBody>
              <Image
                src='https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=1024x1024&w=is&k=20&c=SpP0lU7M-NkRIWUxZdL2rB_MtfegprwutPvbdy0TmMU='
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>ERPNext Implementation</Heading>
                <Text>
                We have a thorough understanding of the organization's business processes
          and can configure the software to align with these processes. Our ERPNext
          consultants or experts have experience with the platform, ensuring
          successful implementation.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Text variant='solid' colorScheme='blue'>
                 This is offered here!!
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                  
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SimpleGrid> 
      {/* <h2>Modules</h2> */}
      <Box position='relative' padding='10' color='black'>
        <Divider />
        <AbsoluteCenter bg='white' px='10' >
        Modules
        </AbsoluteCenter>
      </Box>
      <Box
        
      />
      {/* <ul>
        <li>Finance Management</li>
        <li>HR Management</li>
        <li>Payroll Finance Management</li>
        <li>Manufacturing</li>
        <li>Warehouse Management</li>
        <li>Loans Management</li>
        <li>Education Management</li>
        <li>Health Management</li>
        <li>Project Management</li>
        <li>Dairy Management</li>
        <li>POS</li>
      </ul> */}
     {/* <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">Simple collapsible</button> */}
            {/* <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                <h5 class="card-title"style={{backgroundColor:'#ffc107'}}>Finance Management</h5> */}
                {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="card-link">Card link</a> */}
                {/* <a href="/product" class="card-link">Read More</a>
              </div>
              
            </div> */}
            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card size='sm'>
              <img src="https://tse1.mm.bing.net/th?id=OIP.zVvguAa2jFGOBEECtu4JkgHaE8&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Finance Management </Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.-vQ0Kna73pDkPKv8Cc5Q_QHaDg&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>HR Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse2.mm.bing.net/th?id=OIP.FOIHEYqwsLrpHdBjMuw2-QHaES&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Payroll Finance Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.MREGQTBlH3p3p8jXGksN3QHaEU&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Manufacturing</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP.ezhmEejm8bicUIrrgD3ZtgHaEL&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Warehouse Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse4.mm.bing.net/th?id=OIP.ipHceY5n40jj-JdOgln1dQHaFj&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Loans Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse2.mm.bing.net/th?id=OIP.vsU8Z9TkNMygT2Ye7vGYKQHaEK&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Health Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Project Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse1.mm.bing.net/th?id=OIP.BZxJKx9d9LfoMixgK22EGgHaDt&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'>Dairy Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
              <Card>
              <img src="https://tse3.mm.bing.net/th?id=OIP.189SJeQ6JES5PCl3PuN-OwHaD-&pid=Api&P=0&h=220" className="card-img" alt="..."/>
                <CardHeader>
                  <Heading size='md'> POS</Heading>
                </CardHeader>
                <CardBody>
                  <Text></Text>
                </CardBody>
                <CardFooter>
                <a href="/product" class="card-link">Read More</a>
                </CardFooter>
              </Card>
            </SimpleGrid>
      {/* <Wrap spacing='30px' justify='center'>
            {/* <WrapItem>
              <Center w='180px' h='80px' bg='red.200'>
              Finance Management
              </Center>
            </WrapItem> */}
            
            {/* <WrapItem>
              <Center w='180px' h='80px' bg='green.200'>
              HR Management
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='120px' h='80px' bg='tomato'>
              Payroll Finance Management
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='blue.200'>
              Manufacturing
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='green.200'>
              Warehouse Management
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='teal.200'>
              Loans Management
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='yellow.200'>
              Health Management
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w='180px' h='80px' bg='green.200'>
              Project Management
              </Center>
            </WrapItem>

            <WrapItem>
              <Center w='180px' h='80px' bg='yellow.200'>
              Dairy Management
              </Center>
            </WrapItem>

            <WrapItem>
              <Center w='180px' h='80px' bg='green.200'>
              POS
              </Center>
            </WrapItem>
          </Wrap>
       */} 
      <h4>Our Partners/Technologies</h4>
      {/* <div className="partners">
        <img src="https://statify.co.ke/Images/Erpnextimages.png" alt="ERPNext" />
        <img src="https://statify.co.ke/Images/powerBI_partner.png" alt="PowerBI" />
        <img src="https://statify.co.ke/Images/azure_partner.png" alt="Microsoft Azure" />
        <img src="https://statify.co.ke/Images/office365_partner.png" alt="Office365" />
        <img src="https://statify.co.ke/Images/Microsoft%20partner.png" alt="Microsoft Partner" />
      </div> */}
      <SimpleGrid spacing={2}  templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
      <Image
          borderRadius='full'
          boxSize='150px'
          src='https://statify.co.ke/Images/Erpnextimages.png'
          alt='ERPNext"'
        />
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://statify.co.ke/Images/powerBI_partner.png'
          alt='PowerBI'
        />
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://statify.co.ke/Images/office365_partner.png'
          alt='Microsoft Azure'
        />
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://statify.co.ke/Images/azure_partner.png'
          alt='Office365'
        />
        <Image
        borderRadius='full'
        boxSize='150px'
        src='https://statify.co.ke/Images/Microsoft%20partner.png'
        alt='Microsoft Partner'
      />
      </SimpleGrid> 
      
    </div>
  );
};

export default Home;
