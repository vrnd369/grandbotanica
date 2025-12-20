import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-out-cubic">Contact Us</h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-out-cubic">Get in Touch</h2>
              
              <div className="contact-details">
                <div className="contact-item" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-easing="ease-out-cubic">
                  <div className="contact-icon" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="250">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:hr@glandbotanica.com" className="contact-link">hr@glandbotanica.com</a>
                    <a href="mailto:info@glandbotanica.com" className="contact-link">info@glandbotanica.com</a>
                  </div>
                </div>

                <div className="contact-item" data-aos="fade-right" data-aos-duration="700" data-aos-delay="300" data-aos-easing="ease-out-cubic">
                  <div className="contact-icon" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="350">📞</div>
                  <div>
                    <h4>Phone Numbers</h4>
                    <p className="contact-text">Available on request</p>
                  </div>
                </div>

                <div className="contact-item" data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                  <div className="contact-icon" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="450">📍</div>
                  <div>
                    <h4>Map Location</h4>
                    <a 
                      href="https://maps.app.goo.gl/P5YSvehRym8c1eGS6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link map-link"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Enquiry Form</h2>
                
                <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="350">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="550">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
