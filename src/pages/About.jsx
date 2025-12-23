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

  const promises = [
    {
      title: 'Research-Driven & Quality-Focused',
      description:
        'Gland Botanica is a research-driven, quality-focused plant extracts manufacturer committed to elevating human health.'
    },
    {
      title: 'Highest Purity & Consistency',
      description:
        'We are proud to be producing extracts with the highest quality and purity to meet rigorous global standards.'
    },
    {
      title: 'Built for Healthcare Needs',
      description:
        'Every extract is crafted to cater to the needs of healthcare industries, from nutraceutical to pharmaceutical partners.'
    }
  ];

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
            <div className="intro-text-wrapper">
              <div className="intro-text-main">
                <p className="intro-paragraph" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <span className="highlight-text">Gland Botanica</span> is a <span className="accent-text">Research driven</span> and <span className="accent-text">Quality focused</span> plant extracts manufacturer with a focus on improving human health by <span className="accent-text">Catering to the needs</span> of the health care industries. We are proud to be producing the <span className="highlight-text">highest Quality and purity</span> extracts.
                </p>
                <p className="intro-paragraph" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <span className="highlight-text">Gland Botanica</span> is one of India's largest manufacturers of herbal and Ayurvedic nutraceutical extracts. Our state-of-the-art manufacturing facility is designed to meet USFDA standards, ensuring premium quality and safety.
                </p>
              </div>
            </div>
          </div>

          <div className="promise-section">
            <h2 className="section-heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="50">
              Our Promise
            </h2>
            <div className="promise-grid">
              {promises.map((item, index) => (
                <div
                  key={index}
                  className="promise-card"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={150 + index * 100}
                >
                  <div className="promise-icon">✦</div>
                  <div className="promise-content">
                    <h3 className="promise-title">{item.title}</h3>
                    <p className="promise-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="extracts-section">
            <h2 className="section-heading extracts-heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <span className="heading-line-1">We are pioneers in</span>
              <span className="heading-line-2">producing high-performance herbal extracts such as:</span>
            </h2>
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
                <div className="location-title-wrapper">
                  <span className="location-icon-mobile">📍</span>
                  <h3 className="location-title">Our Location</h3>
                </div>
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
