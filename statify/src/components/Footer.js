import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <img src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg" alt="Company Logo" className="footer-logo" />
          <p>&copy; 2023 STATIFY.CO.KE | All rights reserved</p>
          <p>Contact: info@statify.co.ke</p>
          <div className="quick-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="mailto:info@statify.co.ke">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
