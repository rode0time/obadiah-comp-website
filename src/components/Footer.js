import React from 'react';
import '../Styles/Footer.css';
import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {
  return (
    <section className="footer">
      
      <footer className="footer">
        <div className="logo">
          <img src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg" alt="Company Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:obadiakimmaasai03@gmail.com">Email</a></li>
              <li><a href="tel:+254728732301">Phone</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="/aboutus">Our Story</a></li>
              <li><a href="/ourteam">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
             
              <li><a href="/technologies">Technologies</a></li>
              
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>1st Floor, Megahill, Eliud Wakaba Close, Ngong</p>
            <p>P.O. BOX 275, Nairobi</p>
            <p>Email: info@statify.co.ke</p>
            <p>Phone No: +254796 265 933</p>
          </div>
        </div>
      </footer>
      <div className="icons">
    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
    <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
    <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
</div>


      <p>Powered by <i className="fa fa-heart-o"></i> Statify Solution Limited</p>
    </section>
  );
};

export default Footer;
