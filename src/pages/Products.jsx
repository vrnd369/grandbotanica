import React from 'react';
import './Products.css';
// Import images - placeholder paths, user will provide actual images
import aloeVeraImg from '../assets/aloevera.png';
import bacopaImg from '../assets/bac.png';
import greenCoffeeImg from '../assets/green.png';
import boswelliaImg from '../assets/boswellia.png';
import phyllanthusImg from '../assets/Phyllanthus.png';
import tribulusImg from '../assets/Tribulus.png';
import fenugreekImg from '../assets/Fenugreek.png';
import androImg from '../assets/Andro.png';

const Products = () => {

  const products = [
    {
      id: 1,
      name: 'Aloe Vera Spray-Dried Powder',
      productLine: '',
      description: 'Dehydrated Aloe barbadensis miller extract (whole leaf, inner gel, or blends). A fine white to off-white powder rich in bioactive polysaccharides, vitamins, minerals, amino acids, enzymes, and natural sugars.',
      procedure: 'Fresh leaves are washed, trimmed, and the gel extracted. The liquid undergoes filtration and clarification before spray drying into a fine powder.',
      benefits: ['Anti-inflammatory', 'Moisturizing', 'Biodegradable', 'Gelling agent'],
      image: aloeVeraImg
    },
    {
      id: 2,
      name: 'Bacopa Extract 50%',
      productLine: '',
      description: 'A standardized extract of Bacopa monnieri containing 50% bacosides for consistent potency and effectiveness.',
      procedure: '',
      benefits: ['Cognitive enhancement', 'Neuroprotection', 'Stress and anxiety modulation', 'Antioxidant and anti-inflammatory support'],
      image: bacopaImg
    },
    {
      id: 3,
      name: 'Green Coffee Bean Extract',
      productLine: 'The Metabolic Catalyst',
      description: 'Rich in Chlorogenic Acid, a natural polyphenol that supports healthy metabolism, weight management, and energy without caffeine.',
      procedure: '',
      benefits: ['Supports metabolism', 'Helps regulate blood sugar', 'Promotes heart health', 'Aids in healthy weight management'],
      image: greenCoffeeImg
    },
    {
      id: 4,
      name: 'Boswellia Serrata Extract',
      productLine: 'The Joint Soother',
      description: 'Derived from the resin of the Indian frankincense tree, standardized for Boswellic Acids, known for supporting joint comfort and mobility.',
      procedure: '',
      benefits: ['Anti-inflammatory', 'Joint comfort', 'Supports flexibility', 'May have anticancer potential'],
      image: boswelliaImg
    },
    {
      id: 5,
      name: 'Phyllanthus Emblica Extract (Amla)',
      productLine: 'The Immunity Shield',
      description: 'One of the richest natural sources of Vitamin C and antioxidants, Amla supports immunity, skin health, and detoxification.',
      procedure: '',
      benefits: ['Boosts immunity', 'Promotes radiant skin and hair', 'Antioxidant-rich', 'Aids digestion and detox'],
      image: phyllanthusImg
    },
    {
      id: 6,
      name: 'Tribulus Terrestris Extract',
      productLine: 'The Natural Vitalizer',
      description: 'Standardized for Saponins (Protodioscin) to support natural vitality, strength, and hormonal balance.',
      procedure: '',
      benefits: ['Boosts energy', 'Supports hormone health', 'Enhances athletic performance', 'Helps manage cholesterol and blood sugar'],
      image: tribulusImg
    },
    {
      id: 7,
      name: 'Fenugreek Saponin Extract',
      productLine: 'The Wellness Regulator',
      description: 'Concentrated in Fenuside Saponins, supporting healthy blood sugar, digestion, and testosterone balance.',
      procedure: '',
      benefits: ['Antidiabetic', 'Supports cholesterol balance', 'Digestive aid', 'Natural emulsifier and stabilizer'],
      image: fenugreekImg
    },
    {
      id: 8,
      name: 'Andrographis Extract',
      productLine: 'The Detox Defender',
      description: 'Known as the "King of Bitters," Andrographis paniculata contains Andrographolides that boost immunity and support detox and liver function.',
      procedure: '',
      benefits: ['Immune support', 'Anti-inflammatory', 'Antimicrobial', 'Liver detox', 'Antioxidant defense'],
      image: androImg
    }
  ];

  return (
    <div className="products">
      <section className="products-hero">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-item ${index % 2 === 0 ? 'product-left' : 'product-right'} product-item-${product.id}`}
              data-product-id={product.id}
            >
              <div 
                className="product-image-wrapper"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                data-aos-delay={index * 100 + 50}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div 
                className="product-content"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="800"
                data-aos-delay={index * 100 + 100}
              >
                {product.productLine && (
                  <div className="product-line" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100 + 100}>
                    {product.productLine}
                  </div>
                )}
                <h2 className="product-name" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100 + 150}>
                  {product.name}
                </h2>
                <p className="product-description" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100 + 200}>
                  {product.description}
                </p>
                {product.procedure && (
                  <div className="product-procedure product-hover-content">
                    <h3>Procedure:</h3>
                    <p>{product.procedure}</p>
                  </div>
                )}
                <div className="product-benefits product-hover-content">
                  <h3>Benefits:</h3>
                  <ul className="benefits-list">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <span className="benefit-bullet">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
