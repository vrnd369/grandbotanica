import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Registered Address</h3>
            <div className="footer-address">
              <p className="company-name">Gland Botanica Pvt Ltd.</p>
              <p>Plot No.: 6-3-865/1/2, Flat No. 204</p>
              <p>Greenland Apartment</p>
              <p>Ameerpet Road, Begumpet, Hyderabad</p>
              <p>Telangana - 500016</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Unit Address</h3>
            <div className="footer-address">
              <p className="company-name">Gland Botanica Pvt Ltd.</p>
              <p>Plot no.10</p>
              <p>Genome valley, Turkapally,</p>
              <p>Hyderabad, Telangana - 500101</p>
            </div>
          </div>

          <div className="footer-section footer-brand">
            <div className="footer-logo-text">
              <h2 className="footer-logo">GB</h2>
              <p className="footer-company">Gland Botanica</p>
              <p className="footer-tagline">Pure Plants, Potential Benefits</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Gland Botanica Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
