import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutCarousel.css';

const slides = [
  {
    title: "Interconectados: El juego",
    description: "Un juego para conectar con otros y contigo mismo. Gira la ruleta, responde preguntas y crea conversaciones profundas que transforman.",
    bullets: [
      "Fomenta empatía y comprensión.",
      "Ideal para jugar en grupo o en solitario.",
      "Abre espacios de diálogo y crecimiento."
    ]
  },
  {
    title: "Preparación",
    description: "Encuentra un espacio cómodo para todos. Si juegas solo, busca un lugar tranquilo para reflexionar.",
    bullets: [
      "Reúne a los participantes en círculo.",
      "Asegúrate de que todos vean las preguntas."
    ]
  },
  {
    title: "Inicio del Juego",
    description: "Elige quién empieza: puede ser la persona más joven o alguien al azar. El primer jugador responde la pregunta del carrusel.",
    bullets: []
  },
  {
    title: "Modo de Juego",
    description: "Elige cómo jugar según el momento:",
    bullets: [
      "Modo Libre: Responde tú o elige a alguien.",
      "Modo Ronda: Todos responden la misma pregunta."
    ]
  },
  {
    title: "Cambio de Turno",
    description: "Después de responder, pasa al siguiente jugador en orden. ¡Sigan explorando juntos!",
    bullets: []
  },
  {
    title: "Consejos para Conectar",
    description: "Haz que cada partida sea especial:",
    bullets: [
      "Escucha con atención y respeto.",
      "Sé honesto para crear conexiones profundas.",
      "Diviértete: ríe, reflexiona y disfruta. 😄"
    ]
  }
];

// Colores de la ruleta
const colors = [
  '#d9c0c9', // Rosa claro
  '#f3caad', // Naranja claro
  '#cbe3df', // Verde agua claro
  '#e3d5f1', // Lila claro
  '#f9e8b3', // Amarillo pálido
  '#c6e2f5'  // Azul suave
];

const AboutCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          key={currentSlide} // Forzar rerenderización para animación
          className={`carousel-slide ${direction === 'right' ? 'slide-right' : direction === 'left' ? 'slide-left' : ''}`}
          style={{ backgroundColor: colors[currentSlide % colors.length] }}
        >
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <ul>
            {slides[currentSlide].bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <button className="cta-button" onClick={startGame}>
            Jugar ahora
          </button>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

export default AboutCarousel;