import React from "react";

import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar">
        <h6 style={{color:'white'}}>NEED HELP? TALK TO AN EXPERT  +254796 265 933</h6><h6>Follow Us:<a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
    <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
    <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></h6>
        <div className="container">
          <div className="logo">
          
            <Link to="/"><img
            
              src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg"
              alt="Logo"
              className="logo"
              
            /></Link>
           
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
         
            <li><Link to="/solution">Solution</Link></li>  
            <li className="dropdown">
              <Link to="/products" className="dropbtn">
                Product
              </Link>
              <div className="dropdown-content">
                <Link to="/ERPNext" style={{ fontSize: '10px' }}>ERPNext</Link>
                <Link to="/Microsoft365" style={{ fontSize: '10px' }}>Microsoft Dynamics 365</Link>
                <Link to="/MicrosoftNav" style={{ fontSize: '10px' }}>Microsoft Dynamics NAV</Link>
                <Link to="/MicrosoftCRM" style={{ fontSize: '10px' }}>Microsoft Dynamics CRM</Link>
                <Link to="#ERPNext" style={{ fontSize: '10px' }}>Microsoft Office 365</Link>
                <Link to="#Microsoft Azure" style={{ fontSize: '10px' }}>Microsoft Azure</Link>
                <Link to="#Microsoft Sharepoint" style={{ fontSize: '10px' }}>Microsoft Sharepoint</Link>
                <Link to="#Power BI" style={{ fontSize: '10px' }}>Microsoft Power BI</Link>
              </div>

            
            </li>
            <li className="dropdown">
              <Link to="/services" className="dropbtn">
                Services
              </Link>
              <div className="dropdown-content">
                <Link to="/eRPNextImp" style={{ fontSize: '10px' }}>ERP Implementation & Support</Link>
                <Link to="/analysis" style={{ fontSize: '10px' }}>Data Analysis</Link>
                <Link to="/analysis" style={{ fontSize: '10px' }}>Power BI</Link>
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
