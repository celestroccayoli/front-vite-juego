import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#d5d5ed' }}>
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src="/logo-interconectados.ico" alt="logo interconectados" style={{ width: "50px" }} />
          </a>
        </div>
      </header>
      <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#681c7c' }}>
        Interconectados
      </h2>
      <p className="subtitle" style={{ color: '#a68fb0', marginBottom: '10%' }}>
        El juego
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/game')}
          className="boton hover:opacity-90"
          style={{ 
            backgroundColor: '#681c7c', 
            color: '#d5d5ed', 
            borderRadius: '30px', 
            padding: '12px 24px', 
            fontWeight: 600, 
            fontSize: '1em', 
            border: 'none', 
            cursor: 'pointer',
            width: "280px"  
          }}
        >
          Jugar
        </button>
        <button
          onClick={() => navigate('/acerca-del-juego')}
          className="hover:opacity-90"
          style={{ 
            backgroundColor: '#a68fb0', 
            color: 'white', 
            borderRadius: '30px', 
            padding: '12px 24px', 
            fontWeight: 600, 
            fontSize: '1em', 
            border: 'none', 
            cursor: 'pointer',
            width: "280px" 
          }}
        >
          Acerca del juego
        </button>
        <button
          onClick={() => navigate('/sobre-interconectados')}
          className="hover:opacity-90"
          style={{ 
            backgroundColor: "#d5d5ed",
            color: "#a68fb0",
            borderRadius: '30px', 
            padding: '12px 24px', 
            fontWeight: 600, 
            fontSize: '1em', 
            border: "none",
            cursor: 'pointer',
            width: "280px" 
          }}
        >
          Sobre Interconectados
        </button>
      </div>
    </div>
  );
};

export default Home;