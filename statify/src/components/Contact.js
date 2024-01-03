import React from 'react';
import '../Styles/Contact.css';
// import {AspectRatio} from chakra
import { AspectRatio,Flex,Avatar,Box,Text,Badge} from '@chakra-ui/react';
// import styled from 'styled-components';
// import SectionTitle from './SectionTitle'
// import ContactInfoItem from './ContactInfoItem';



const Contact = () => {
  return (
    <div className="contact-page">
    
      {/*  */}
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://tse4.mm.bing.net/th?id=OIP.xry166oVXKfLT82jVoVXgQHaDE&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
            <p>1st Floor, Megahill, Eliud Wakaba Close, Ngong</p>
          </div>
          <div class="carousel-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.ciidDUS2n7HU-5uhUPnN8gHaDM&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
            <p>P.O. BOX 275, Nairobi</p>
          </div>
          <div class="carousel-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.5kD-AVLlBwHa4DM7OqiQoAHaE8&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
            <p>Email: info@statify.co.ke</p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Flex>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Philemon Limo
            <Badge ml='50' colorScheme='green'>
              
            </Badge>
          </Text>
          <Text fontSize='sm'>Sinior Functioanal consoltant</Text>
        </Box>
      </Flex>
      <Flex>
          <Avatar src='https://bit.ly/sage-adebayo' />
          <Box ml='70'>
            <Text fontWeight='bold'>
              Shadrack Kipkoech
              <Badge ml='1' colorScheme='green'>
                
              </Badge>
            </Text>
            <Text fontSize='sm'>Sinior Functioanal consoltant</Text>
          </Box>
        </Flex>
        <Flex>
          <Avatar src='https://bit.ly/sage-adebayo' />
          <Box ml='120'>
            <Text fontWeight='bold'>
              Obadia Kim
              <Badge ml='1' colorScheme='green'>
                New
              </Badge>
            </Text>
            <Text fontSize='sm'>Software Engineer</Text>
          </Box>
        </Flex>
        <Flex>
          <Avatar src='https://bit.ly/sage-adebayo' />
          <Box ml='170'>
            <Text fontWeight='bold'>
              Eliab Karan
              <Badge ml='1' colorScheme='green'>
                New
              </Badge>
            </Text>
            <Text fontSize='sm'>Software Engineer</Text>
          </Box>
        </Flex>
      <AspectRatio ratio={25 / 5}>
        <iframe
          src='https://www.google.com/maps/place/Wakaba+Close,+Kenya/@-1.274605,36.5518148,12z/data=!4m10!1m2!2m1!1sWakaba+Close,+Kenya!3m6!1s0x182edf87d0371b45:0xfa01745db3396fea!8m2!3d-1.1972074!4d36.6072327!15sChNXYWthYmEgQ2xvc2UsIEtlbnlhkgEFcm91dGXgAQA!16s%2Fg%2F1tgldq09?hl=en&entry=ttu'
        />
      </AspectRatio>
      
    </div>
  );
};

export default Contact;
