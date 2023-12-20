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
import { ChakraProvider } from '@chakra-ui/react'

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
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />

      </ChakraProvider>
      
    </div>
  );
}

export default App;
