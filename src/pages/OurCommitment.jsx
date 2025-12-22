import React from 'react';
import './OurCommitment.css';

const OurCommitment = () => {
  const qualityTests = [
    'Purity – active ingredient concentration',
    'Safety – absence of heavy metals, pesticides, and microbial contamination',
    'Consistency – ensuring every dose matches label claims'
  ];

  return (
    <div className="our-commitment">
      <section className="commitment-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="title-line-1">Our Commitment to Purity</span>
            <span className="title-line-2">The Extraction Process</span>
          </h1>
        </div>
      </section>

      <section className="commitment-content">
        <div className="container">
          {/* Intro Section */}
          <div className="intro-section" data-aos="fade-up" data-aos-duration="800">
            <p className="intro-text">
              Your health depends on the quality of our ingredients. We ensure maximum potency, purity, and safety through a rigorous, transparent manufacturing process.
            </p>
          </div>

          {/* Process Steps */}
          <div className="process-steps">
            <div className="process-card" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
              <div className="process-number">1</div>
              <div className="process-content">
                <h2 className="process-title">Sourcing & Validation</h2>
                <p className="process-description">
                  We partner only with sustainable, ethical farms. Each raw material undergoes botanical identification and quality verification before entering our facility.
                </p>
              </div>
            </div>

            <div className="process-card" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="process-number">2</div>
              <div className="process-content">
                <h2 className="process-title">State-of-the-Art Extraction</h2>
                <p className="process-description">
                  We use advanced extraction techniques — such as Supercritical Fluid Extraction (SFE) and Aqueous/Ethanol Extraction — to maximize bioactive yield while ensuring minimal solvent residue.
                </p>
              </div>
            </div>

            <div className="process-card" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
              <div className="process-number">3</div>
              <div className="process-content">
                <h2 className="process-title">Standardization</h2>
                <p className="process-description">
                  Every batch is standardized to contain a guaranteed concentration of key actives (e.g., Boswellic Acids, Saponins, or Chlorogenic Acid), ensuring consistent performance.
                </p>
              </div>
            </div>

            <div className="process-card" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <div className="process-number">4</div>
              <div className="process-content">
                <h2 className="process-title">Quality Control & Testing</h2>
                <p className="process-description">
                  Each extract undergoes third-party testing for:
                </p>
                <ul className="quality-list">
                  {qualityTests.map((test, index) => (
                    <li key={index} className="quality-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay={500 + (index * 100)}>
                      <span className="quality-bullet">•</span>
                      <span className="quality-text">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="closing-statement" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <p className="closing-text">
              At Gland Botanica, we don't just manufacture herbal extracts — we craft wellness at its purest form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitment;

