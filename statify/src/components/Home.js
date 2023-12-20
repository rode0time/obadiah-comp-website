import React from "react";
import { Card, CardHeader, CardBody,Image,Stack,Divider,ButtonGroup, CardFooter,Heading,Text,SimpleGrid, Button} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import "../Styles/Home.css";
// import { color } from "framer-motion";
import  { useState } from 'react';



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

  return (
    <div className="homepage">
      <h2>STATIFY SOLUTIONS LIMITED</h2>
      <p>
        Statify Solutions Limited is a provider of comprehensive and integrated
        Enterprise Resource Planning (ERP) systems. With a strong focus on
        innovation and customer satisfaction, our company offers a wide range of
        ERP solutions that cater to diverse industries and business needs. Our
        robust and scalable software modules cover various domains, including:
      </p>
      <List spacing={3}>
          <ListItem>
            <ListIcon  color='green.500' />
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
          {/* You can also use custom icons from react-icons */}
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
        </List>
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
      <SimpleGrid spacing={3}  templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          <Card>
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
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'>ERPNext System Implementation </Heading>
            </CardHeader>
            <CardBody>
              <Text>We offer end-to-end implementation services for ERPNext, an open-source
          enterprise resource planning (ERP) solution. Our team ensures a seamless
          integration of ERPNext into your business processes, enabling efficient
          management of operations, inventory, sales, and more.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
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
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'>Support and Consultation</Heading>
            </CardHeader>
            <CardBody>
              <Text>Our dedicated support team is available to assist you with technical
          issues, system maintenance, and troubleshooting. We also provide
          consultation services to help optimize your IT infrastructure, enhance
          system performance, and align technology with your business goals.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
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
          </Card>
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
      <h2>Modules</h2>
      <ul>
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
      </ul>
      
      <h2>Our Partners/Technologies</h2>
      <div className="partners">
        <img src="https://statify.co.ke/Images/Erpnextimages.png" alt="ERPNext" />
        <img src="https://statify.co.ke/Images/powerBI_partner.png" alt="PowerBI" />
        <img src="https://statify.co.ke/Images/azure_partner.png" alt="Microsoft Azure" />
        <img src="https://statify.co.ke/Images/office365_partner.png" alt="Office365" />
        <img src="https://statify.co.ke/Images/Microsoft%20partner.png" alt="Microsoft Partner" />
      </div>
    </div>
  );
};

export default Home;
