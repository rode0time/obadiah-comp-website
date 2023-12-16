import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>We are the best</p>
      <div className="icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>

      {/* Your existing code */}
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
              <li><a href="/about">Our Story</a></li>
              <li><a href="/team">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <p>Powered by <i className="fa fa-heart-o"></i> Statify Company</p>
    </section>
  );
};

export default Footer;