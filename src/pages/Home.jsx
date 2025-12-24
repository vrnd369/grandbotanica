import React from 'react';
import './Home.css';
import heroVideo from '../assets/hero.mp4';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-video-container">
          <div className="hero-video-wrapper">
            <video
              className="hero-media"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="hero-content-section">
            <h1 className="main-hero-title">The Pure Power of Nature: Premium Plant-Based Extracts</h1>
            <p className="main-hero-subtitle">
              Unlock Your Body&apos;s Natural Potential with Nature&apos;s Strongest Extracts
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Science-Backed</h3>
              <p>
                Every extract is rigorously tested for purity, concentration, and bioavailability to ensure you get a
                dosage that truly works.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainably Sourced</h3>
              <p>We partner directly with ethical growers committed to sustainable farming and biodiversity preservation.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Pure & Natural</h3>
              <p>
                Free from artificial ingredients, unnecessary additives, and harmful chemicals. Just the power of the plant — nothing else.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Quality and Purity</h3>
              <p>
                Free from artificial ingredients, unnecessary additives, and harmful chemicals.
              </p>
            </div>
          </div>

          <div className="featured-extracts-section">
            <h2 className="featured-title">Our Featured Extracts: Powering Your Wellness</h2>
            <p className="featured-description">
              We carefully select and process the world&apos;s most potent botanicals to deliver targeted, science-backed
              health benefits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
