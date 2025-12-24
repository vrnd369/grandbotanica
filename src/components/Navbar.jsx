import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/gland.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const regularLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-vision', label: 'Our Commitment to Purity' },
    { path: '/products', label: 'Products' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo - Glass Effect */}
        <Link to="/" className="navbar-logo">
          <div className="logo-glass-container">
            <img src={logo} alt="Gland Botanica Logo" className="logo-img" />
          </div>
        </Link>
        
        {/* Central Navigation Menu Pill - Light Purple */}
        <div className={`navbar-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <div className={`navbar-menu-pill ${isMenuOpen ? 'active' : ''}`}>
            {regularLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Contact button in mobile menu */}
            <Link
              to="/contact"
              className={`navbar-link contact-mobile-btn ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Us Pill - Light Green (Right Side) */}
        <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/contact"
            className={`contact-pill-btn ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

