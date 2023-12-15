import React from "react";

import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div>
      <h5>get in touch tel: 07228732301</h5>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg"
              alt="Logo"
              className="logo"
            />
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/solution">Solution</Link></li>  
            <li className="dropdown">
              <Link to="/services" className="dropbtn">
                Services
              </Link>
              <div className="dropdown-content">
                <Link to="#service1">Service 1</Link>
                <Link to="#service2">Service 2</Link>
                <Link to="#service3">Service 3</Link>
              </div>
            
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
