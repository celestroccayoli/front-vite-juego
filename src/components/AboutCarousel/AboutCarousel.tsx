import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutCarousel.css';

const slides = [
  {
    title: "El para qué",
    description: "El objetivo del juego es ser un catalizador para crear conversaciones significativas que profundicen las conexiones humanas. Más allá del simple entretenimiento, la intención es abrir espacios de diálogo, tanto internos como con los demás, donde cada participante pueda descubrir nuevas perspectivas, fortalecer lazos y promover un crecimiento personal y colectivo.",
    bullets: [
      // "Fomenta empatía y comprensión.",
      // "Ideal para jugar en grupo o en solitario.",
      // "Abre espacios de diálogo y crecimiento."
    ]
  },
  {
    title: "El cómo",
    description: "A través de preguntas para explorar emociones, experiencias y valores, el juego fomenta la empatía, la comprensión y el aprendizaje entre los jugadores. También se puede jugar en solitario, permitiendo al jugador reflexionar y conocerse a sí mismo en momentos de introspección.",
    bullets: [
    ]
  },
  {
    title: "Preparación",
    description: "Encontrá un espacio cómodo. Si jugás solo, buscá un lugar tranquilo para reflexionar.",
    bullets: [
      "Reúne a los participantes en círculo.",
      "Asegúrate de que todos vean las preguntas.",
"Prepárese para contestar, giren la ruleta, ¡y listo!."
    ]
  },
  {
    title: "Modo de Juego",
    description: "Elegí cómo jugar según el momento:",
    bullets: [
      "Me toca: Responde el que giró la ruleta",
      "Te toca: El que giró la ruleta elige a quién reponde.",
      "Modo Libre: Responde cualquiera.",
      "Modo Ronda: Todos responden la misma pregunta."
    ]
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