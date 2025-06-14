import React from 'react';
import "./AboutGame.css";
import AboutCarousel from '../components/AboutCarousel/AboutCarousel';

const AboutGame: React.FC = () => {
 
  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#d5d5ed' }}>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src="/logo-interconectados.ico" alt="logo interconectados" style={{width: "50px"}}/>
          </a>
        </div>
      </header>
      <div  className="about-game">
        <section>
          <AboutCarousel />
        </section>
      </div>
    </div>
  );
};

export default AboutGame;