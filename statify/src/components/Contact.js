import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Stakeholder Information</h2>
          <div className="stakeholder">
            <img src="path/to/stakeholder1.jpg" alt="Stakeholder 1" />
            <p>
              For general inquiries, please contact:
              <br />
              <strong>John Doe</strong>
              <br />
              Email: john.doe@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="stakeholder">
            <img src="path/to/stakeholder2.jpg" alt="Stakeholder 2" />
            <p>
              For partnership opportunities, please contact:
              <br />
              <strong>Jane Smith</strong>
              <br />
              Email: jane.smith@example.com
              <br />
              Phone: (234) 567-8901
            </p>
          </div>
          <div className="stakeholder">
            <img src="path/to/stakeholder3.jpg" alt="Stakeholder 3" />
            <p>
              For media inquiries, please contact:
              <br />
              <strong>Bob Johnson</strong>
              <br />
              Email: bob.johnson@example.com
              <br />
              Phone: (345) 678-9012
            </p>
          </div>
        </div>
      </div>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
