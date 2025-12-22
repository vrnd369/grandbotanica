import React from 'react';
import './pages/Home.css';
import aloevera from './assets/aloevera.jpg';
import bacopa from './assets/bacopa.jpg';
import greenCoffee from './assets/green coffee.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-images-container">
          <div className="hero-image-wrapper image-1">
            <img src={aloevera} alt="Aloe Vera" className="hero-image" />
          </div>
          <div className="hero-image-wrapper image-2">
            <img src={bacopa} alt="Bacopa" className="hero-image" />
          </div>
          <div className="hero-image-wrapper image-3">
            <img src={greenCoffee} alt="Green Coffee" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="hero-content-section">
            <h1 className="main-hero-title">The Pure Power of Nature: Premium Plant-Based Extracts</h1>
            <p className="main-hero-subtitle">Unlock Your Body's Natural Potential with Nature's Strongest Extracts</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Science-Backed</h3>
              <p>Every extract is rigorously tested for purity, concentration, and bioavailability to ensure you get a dosage that truly works.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainably Sourced</h3>
              <p>We partner directly with ethical growers committed to sustainable farming and biodiversity preservation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Pure & Natural</h3>
              <p>Free from artificial ingredients, unnecessary additives, and harmful chemicals. Just the power of the plant — nothing else.</p>
            </div>
          </div>

          <div className="featured-extracts-section">
            <h2 className="featured-title">Our Featured Extracts: Powering Your Wellness</h2>
            <p className="featured-description">We carefully select and process the world's most potent botanicals to deliver targeted, science-backed health benefits.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

