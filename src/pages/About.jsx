import React from 'react';
import './About.css';

const About = () => {
  const extracts = [
    { name: 'Aloe Vera', use: 'for the food and cosmetic industry' },
    { name: 'Bacopa', use: 'for cognitive and neuro health' },
    { name: 'Ashwagandha', use: 'for mood and vitality' },
    { name: 'Bakuchiol', use: 'for skincare and anti-aging' },
    { name: 'Valerian', use: 'for relaxation and anxiety relief' },
    { name: 'Fenugreek', use: 'for metabolic and diabetic support' }
  ];

  const industries = ['Food', 'Cosmetic', 'Nutraceutical', 'Pharmaceutical'];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="intro-section" data-aos="fade-up" data-aos-duration="800">
            <p className="intro-text">
              Gland Botanica is one of India's largest manufacturers of herbal and Ayurvedic nutraceutical extracts. Our state-of-the-art manufacturing facility is designed to meet USFDA standards, ensuring premium quality and safety.
            </p>
          </div>

          <div className="extracts-section">
            <h2 className="section-heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">We are pioneers in producing high-performance herbal extracts such as:</h2>
            <div className="extracts-grid">
              {extracts.map((extract, index) => (
                <div key={index} className="extract-card" data-aos="fade-up" data-aos-duration="600" data-aos-delay={200 + (index * 100)}>
                  <div className="extract-bullet">•</div>
                  <div className="extract-content">
                    <h3 className="extract-name">{extract.name}</h3>
                    <p className="extract-use">{extract.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="industries-section">
            <h2 className="section-heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">Serving Global Industries</h2>
            <p className="industries-text" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Our ingredients serve the food, cosmetic, nutraceutical, and pharmaceutical industries, and we are expanding exports to the U.S., Europe, Southeast Asia, and the Middle East.
            </p>
            <div className="industries-tags">
              {industries.map((industry, index) => (
                <span key={index} className="industry-tag" data-aos="fade-up" data-aos-duration="600" data-aos-delay={300 + (index * 100)}>{industry}</span>
              ))}
            </div>
          </div>

          <div className="location-section">
            <div className="location-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="location-icon">📍</div>
              <div className="location-content">
                <h3 className="location-title">Our Location</h3>
                <p className="location-text">
                  We are located on an 8-acre campus in Genome Valley, Turkapally, the hub of India's biotech innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
