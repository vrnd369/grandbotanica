import React from 'react';
import './Footer.css';
import glandLogo from '../assets/gland.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Registered Address</h3>
            <div className="footer-address">
              <p className="company-name">Gland Botanica Pvt Ltd.</p>
              <p>Plot No.6-3-865/1/2, Flat No. 204</p>
              <p>Greenland Apartment</p>
              <p>Ameerpet Road, Begumpet, Hyderabad</p>
              <p>Telangana,INDIA - 500016</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Unit Address</h3>
            <div className="footer-address">
              <p className="company-name">Gland Botanica Pvt Ltd.</p>
              <p>Plot No.10</p>
              <p>Genome valley, Turkapally,Shamirpet</p>
              <p>Hyderabad, Telangana,INDIA - 500101</p>
            </div>
          </div>

          <div className="footer-section footer-brand">
            <div className="footer-logo-text">
              <img src={glandLogo} alt="Gland Botanica Logo" className="footer-logo-image" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Gland Botanica Pvt Ltd. All rights reserved.{' '}
            <span className="powered-by">
              Powered by{' '}
              <a 
                href="https://vrnd.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="powered-by-link"
              >
                VRND Business Solutions
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
