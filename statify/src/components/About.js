import React from 'react';
import '../Styles/About.css';
import {Heading,CardHeader,Card,CardBody,Button,CardFooter,Text} from "@chakra-ui/react";
import {
  ListItem,
  UnorderedList
} from '@chakra-ui/react'


const AboutUs = () => {
  const modules = [
    
    { title: 'Overview...', description: 'Statify Solutions Limited is a leading provider of comprehensive and integrated Enterprise Resource Planning (ERP) systems. With a strong focus on innovation and customer satisfaction, our company offers a wide range of ERP solutions that cater to diverse industries and business needs. Our robust and scalable software modules cover various domains, including finance and accounting, HR and payroll, loan management, education, health, manufacturing, point of sale (POS), fleet management, and data analytics.' },
    {title :'Our Mission', description:'To deliver cutting-edge ERP software solutions that align with industry best practices, address complex business challenges, and drive digital transformation for our clients worldwide. We aim to enhance our offerings by integrating the power of data analytics to empower organizations with valuable insights.'},
    
    // <h3>ERP Modules Offered:</h3>,
    // {title:'ERP Modules Offered:'},
    {title :'Finance and Accounting', description:'Our ERP system includes a comprehensive finance and accounting module that helps businesses automate financial processes, manage budgets, track expenses, and generate accurate financial reports. It provides real-time visibility into financial data, ensures regulatory compliance, and facilitates seamless financial planning and analysis.'},
    { title: 'HR and Payroll Management', description: 'Our ERP solution encompasses a robust HR and payroll management module that streamlines core HR functions such as employee records, attendance management, payroll processing, benefits administration, performance evaluation, talent management, and payroll calculations. It enables organizations to optimize human resource operations, ensure accurate and timely payroll processing, and enhance workforce efficiency.' },
    
    { title: 'Loan Management', description: 'Our ERP system includes a feature-rich loan management module designed specifically for financial institutions. It automates the end-to-end loan origination, processing, disbursement, and collection processes. It also offers comprehensive reporting and analytics capabilities, ensuring compliance with lending regulations and improving overall loan portfolio management.' },
    { title: 'Education Management', description: 'Statify Solutions ERP software offers a specialized education management module that caters to educational institutions, including schools, colleges, and universities. It covers student enrollment, admissions, class scheduling, attendance tracking, grade management, and examination administration. It facilitates seamless communication between teachers, students, and parents, enhancing the overall educational experience.' },
    { title: 'Health Management', description: 'Our ERP system provides a holistic health management module for healthcare organizations. It integrates patient records, appointment scheduling, medical billing, insurance claims processing, pharmacy management, and electronic health records (EHR). It promotes operational efficiency, enhances patient care, and supports compliance with healthcare regulations.' },
    { title: 'Manufacturing and Supply Chain', description: 'The ERP software includes a comprehensive manufacturing and supply chain management module that optimizes production processes, inventory management, demand planning, procurement, and logistics. It enables manufacturers to achieve lean operations, reduce costs, improve quality control, and enhance customer satisfaction.' },
    { title: 'Point of Sale (POS)', description: 'Our ERP system incorporates a feature-rich POS module that helps retailers and businesses streamline their sales processes. It includes functionalities such as sales transactions, inventory management, order processing, customer relationship management, and sales analytics. It ensures efficient store operations and enhances the overall customer experience.' },
    { title: 'Fleet Management', description: 'Statify Solutions ERP solution offers a robust fleet management module designed for transportation and logistics companies. It covers vehicle tracking, maintenance scheduling, fuel management, driver management, route optimization, and fleet analytics. It helps optimize fleet operations, reduce costs, and ensure timely deliveries.' },
    { title: 'Data Analytics with Power BI', description: 'As a value-added service, we integrate Microsoft Power BI into our ERP system. Power BI is a powerful business intelligence and data visualization tool that enables organizations to analyze and visualize data from various sources. With Power BI, our clients can gain valuable insights, create interactive dashboards, and make data-driven decisions to improve their business performance.' },
    // <h3>Why Choose Statify Solutions Limited</h3>,
    // {title :'Why Choose Statify Solutions Limited'},
    { title: 'Why Choose Statify Solutions Limited', description: 'Comprehensive and Integrated: Our ERP system covers a wide range of modules, allowing organizations to consolidate their operations into a single unified platform.' },
    {title :'Scalable and Customizable:', description:'Our software is designed to accommodate the evolving needs of businesses and can be tailored to specific requirements.'},
    {title :'Industry Expertise: ', description:'We have extensive experience serving diverse industries, enabling us to provide industry-specific solutions that address unique challenges.'},
    {title :'User-Friendly Interface:', description:'Our ERP software features an intuitive anduser-friendly interface, ensuring ease of use and minimal training requirements.'},
    {title :'Robust Security: ', description:'We prioritize data security and employ advanced encryption and authentication mechanisms to protect sensitive business information.'},
    {title :'Dedicated Support:', description:'Our team of experienced professionals provides dedicated support throughout the implementation and maintenance of our ERP system, ensuring a smooth and successful deployment.'},
    
  ];

  return (
    <div className="about-us-page">
      <div class="card mb-3">
        {/* <img src="https://tse1.mm.bing.net/th?id=OIP.5I6mZ-L2mZcSdOq1rzkkqgAAAA&pid=Api&P=0&h=220" class="card-img-top" alt="..."/> */}
        <div class="card-body">
          <h5 class="card-title">Overview</h5>
          <p class="card-text">Statify Solutions Limited is a leading provider of comprehensive and integrated Enterprise Resource Planning (ERP) systems. With a strong focus on innovation and customer satisfaction, our company offers a wide range of ERP solutions that cater to diverse industries and business needs. Our robust and scalable software modules cover various domains, including finance and accounting, HR and payroll, loan management, education, health, manufacturing, point of sale (POS), fleet management, and data analytics.</p>
          {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
     <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://tse3.mm.bing.net/th?id=OIP.TTPv3wjs5E0ia7fdPj_EIgHaDe&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Our Vission</h5>
                <p class="card-text">To empower organizations with efficient and intelligent ERP solutions, enabling them to streamline operations, maximize productivity, and achieve sustainable growth. We strive to integrate advanced data analytics capabilities to provide actionable insights for better decision-making.</p>
              </div>
              <div class="card-footer">
                {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://tse2.mm.bing.net/th?id=OIP.iZwFQwh0kX3Xk0OJSdO9qAHaD_&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Mission</h5>
                <p class="card-text">To deliver cutting-edge ERP software solutions that align with industry best practices, address complex business challenges, and drive digital transformation for our clients worldwide. We aim to enhance our offerings by integrating the power of data analytics to empower organizations with valuable insights.</p>
              </div>
              <div class="card-footer">
                {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Core Values</h5>
                {/* <p class="card-text">Provide the best service to our customers</p> */}
                <UnorderedList>
                  <ListItem>Collaboration</ListItem>
                  <ListItem>Expertise</ListItem>
                  <ListItem>Transparency</ListItem>
                  <ListItem>Adaptability</ListItem>
                  <ListItem>Innovation</ListItem>
                </UnorderedList>
              </div>
              <div class="card-footer">
                {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
              </div>
            </div>
          </div>
        </div>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Why Choose Statify Solutions Limited ?</Heading>
            <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>Comprehensive and Integrated: Our ERP system covers a wide range of modules, allowing organizations to consolidate their operations into a single unified platform.</Text>
          </CardBody>
          
        </Card>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Scalable and Customizable:</Heading>
          <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>Our software is designed to accommodate the evolving needs of businesses and can be tailored to specific requirements.</Text>
          </CardBody>
          
        </Card>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Industry Expertise: </Heading>
            <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>We have extensive experience serving diverse industries, enabling us to provide industry-specific solutions that address unique challenges.</Text>
          </CardBody>
          
        </Card>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>User-Friendly Interface: </Heading>
            <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>Our ERP software features an intuitive anduser-friendly interface, ensuring ease of use and minimal training requirements.</Text>
          </CardBody>
          
        </Card>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Robust Security:</Heading>
            <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>We prioritize data security and employ advanced encryption and authentication mechanisms to protect sensitive business information.</Text>
          </CardBody>
          
        </Card>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Dedicated Support:</Heading>
            <img src="https://tse1.explicit.bing.net/th?id=OIP.w-CXp7fBEeH8csGwolOgIAHaE7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
          </CardHeader>
          <CardBody>
            <Text>Our team of experienced professionals provides dedicated support throughout the implementation and maintenance of our ERP system, ensuring a smooth and successful deployment.</Text>
          </CardBody>
          
        </Card>
    </div>
  );
};

export default AboutUs;

