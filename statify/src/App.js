import './App.css';
import AboutUs from './components/About';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Solution from './components/Solution'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/solution" element={<Solution />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
