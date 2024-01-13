import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Solution from './components/Solution';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ERPNext from './components/ERPNext';
import Payroll from './components/Payroll';
import Microsoft365 from './components/Microsoft365';
import Manufacture from './components/Manufacture';
import OurTeam from './components/OurTeam';
import Models from './components/models';
import MicrosoftNav from './components/MicrosoftNav';
import MicrosoftCRM from './components/MicrosoftCRM';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/products" element={<Product />} />
            <Route path="/erpnext" element={<ERPNext />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/microsoft365" element={<Microsoft365 />} />
            <Route path="/manufacture" element={<Manufacture/>}/>
            <Route path="/ourteam" element={<OurTeam/>}/>
            <Route path="/models" element={<Models/>}/>
            <Route path="/microsoftNav" element={<MicrosoftNav/>}/>
            <Route path="/microsoftCRM" element={<MicrosoftCRM/>}/>
            <Route path="/Services" element={<Services/>}/>
          </Routes>
       
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
