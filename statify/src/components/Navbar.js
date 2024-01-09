import React from "react";

import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div>
      {/* <h5>get in touch tel: 07228732301</h5> */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
          
            <Link to="/"><img
            
              src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg"
              alt="Logo"
              className="logo"
              
            /></Link>
            {/* <Link to="/">Statify</Link> */}
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            {/* <li><Link to="/product">Product</Link></li> */}
            <li><Link to="/solution">Solution</Link></li>  
            <li className="dropdown">
              <Link to="/product" className="dropbtn">
                Product
              </Link>
              <div className="dropdown-content">
                <Link to="#ERPNext">ERPNext</Link>
                <Link to="#Microsoft Dynamics 365">Microsoft Dynamics 365</Link>
                <Link to="#Microsoft Dynamics NAV ">Microsoft Dynamics NAV</Link>
                <Link to="#Microsoft Dynamics CRM ">Microsoft Dynamics CRM</Link>
                <Link to="#ERPNext"> Microsoft Office  365</Link>
                <Link to="#Microsoft Azure ">Microsoft Azure</Link>
                <Link to="#Microsoft Sharepoint ">Microsoft Sharepoint</Link>
                
                <Link to="#Power BI">Microsoft Power BI</Link>
              </div>
            
            </li>
            <li className="dropdown">
              <Link to="/services" className="dropbtn">
                Services
              </Link>
              <div className="dropdown-content">
                <Link to="#ERP Implementation">ERP Implementation & Support</Link>
                
                <Link to="#Data Analysis">Data Analysis</Link>
                <Link to="#Power BI ">Power BI</Link>
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
