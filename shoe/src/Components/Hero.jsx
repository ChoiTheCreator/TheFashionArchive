import React from 'react';
import '../Style/Hero.css';
const Hero = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
        borderBottom: '2px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Your Stylish Shoe Collection
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#666',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Elevate your style with our curated selection of shoes.
        </p>
      </div>
    </div>
  );
};

export default Hero;
