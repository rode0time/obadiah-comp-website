import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column map-column">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.5qfLYj75Me88AIJrSLQZ1wHaCe&pid=Api&P=0&h=220"
              style={{ width: '100%' }}
              alt="Map"
            />
          </div>
          <div className="column form-column">
            <form action="/action_page.php">
              <h2>Contact Us</h2>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

              <label htmlFor="email">
                <FaEnvelope /> Email
              </label>
              <input type="text" id="email" name="email" placeholder="Your email.." />

              <label htmlFor="phone">
                <FaPhone /> Phone
              </label>
              <input type="text" id="phone" name="phone" placeholder="Your phone number.." />

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px' }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt /> Our Location: 123 Main Street, Cityville
            </p>
            <p>
              <FaPhone /> Contact: +1 234-567-890
            </p>
            <p>
              <FaEnvelope /> Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
