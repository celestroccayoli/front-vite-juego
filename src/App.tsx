import React, { useState, useEffect } from 'react';
import './App.css';

// Definimos las preguntas por categoría con firma de índice
interface Preguntas {
  [key: string]: string[];
}

const preguntas: Preguntas = {
  Autoconocimiento: [
    '¿Qué sentís cuando te abrazan?',
    '¿Cómo te gusta afrontar el miedo?',
    '¿Qué te gustaría cambiar de vos mismo/a?',
    '¿Qué harías si no tuvieras miedo?',
    '¿Qué relación tenés con tu cuerpo?',
    '¿Cómo reaccionás cuando alguien te felicita?',
    '¿Qué pensás cuando te mirás al espejo?',
    '¿Cómo te sentís cuando pedís ayuda?',
    '¿Preferís el tiempo a solas o en compañía?¿Por qué?',
    '¿Qué te gusta hacer cuando estás solo/a?',
    '¿Qué es lo más valiente que hiciste?',
    '¿Cómo es tu diálogo interno?',
    '¿Qué ves de vos en los demás?',
    '¿Qué hacés cuando estás muy contento?',
    '¿Qué actividad te da paz?',
    '¿Qué tipo de persona sos?',
    'Si fueras el personaje de una serie ¿Cuál serías y por qué?',
    '¿En qué momento te sentís vos mismo/a?',
    '¿Cómo te describirían tus amigos en 3 palabras?',
    'Nombra tres cualidades que te gustan de vos.',
    '¿Qué define tu identidad?',
    '¿En qué sos bueno/a?',
    '¿Con qué emoción te relacionás más?',
    '¿Qué no negociás?',
    '¿Qué te atrae?',
    '¿Qué te dice tu voz interior?',
  ],
  Reflexión: [
    '¿Qué querés volver a hacer?',
    '¿Qué necesitás aprender?',
    '¿Cómo te gustaría que actúen los demás cuando estás enojada/o?',
    '¿Cuánto peso le das a lo que la gente piensa de vos?',
    '¿A qué deberías prestarle más atención?',
    '¿En qué área de tu vida estás poniendo más energía?',
    '¿Cuál definirías tu situación actual?',
    '¿Qué es lo peor y mejor de crecer?',
    '¿Qué pensás que tiene de bueno ser adulto/a?',
    'Si tu vida fuera una película, ¿de qué género sería?',
    'No podrías vivir sin...',
    '¿Qué es el amor?',
    '¿Qué puede aprender el mundo de vos?',
    '¿Dónde vivís más: en el pasado, en el presente o en el futuro?',
    '¿Qué es lo que siempre quisiste hacer y aún no hiciste?',
    '¿Qué es la libertad para vos?',
    'Para vos, ¿cuál es el sentido de la vida?',
    'Para vos, ¿qué es la intuición?',
    '¿Qué significa para vos el vacío/la nada?',
    '¿Qué significa para vos la palabra "religión"?',
    '¿Qué define "hogar" para vos?',
    'Si te digo "aire" ¿en qué pensás?',
    '¿Qué animal te gustaría ser?',
    '¿Cómo es tu relación con la naturaleza?',
  ],
  Deseos: [
    '¿Qué querés hacer pero lo estás postergando?',
    '¿Con qué soñás?',
    '¿Qué es para vos tener éxito en la vida?',
    '¿Cuál es tu deseo más grande?',
    '¿Qué te motiva?',
    '¿A qué te gustaría dedicarle más tiempo?',
    '¿En qué te gustaría asumir más responsabilidad?',
    '¿A qué te gustaría dedicarte?',
    '¿Cuál es tu aspiración más grande?',
    '¿Qué quisieras hacer pero te da miedo intentar?',
    '¿Qué te hace sentir seguridad?',
    '¿Qué es lo que realmente te interesa?',
    '¿Qué estás esperando obtener?',
    '¿Qué te gustaría dejar?',
    '¿Qué te falta?',
    '¿Qué te sobra?',
    '¿Qué estás dispuesto a hacer para conseguir tus objetivos/sueños/metas?',
    '¿A qué recital te hubiese gustado ir?',
    '¿Qué viaje te gustaría hacer?',
    '¿Qué oportunidad te gustaría tener?',
    '¿Qué anhelas?',
    '¿Qué estilo de vida te gustaría tener?',
    '¿Qué hecho te gustaría presenciar?',
    '¿Qué apasiona?',
  ],
  Presente: [
    '¿Cómo te sentís hoy?',
    '¿En qué necesitás ayuda en este momento?',
    '¿Con quién no estuviste de acuerdo recientemente?',
    '¿Qué te hizo feliz hoy?',
    '¿Qué te gustaría sentir hoy?',
    '¿De qué estás orgulloso/a?',
    '¿Qué te haría sentir contento/a hoy?',
    '¿Cuál es tu objetivo para hoy?',
    '¿Qué actividades aumentan tu energía?',
    '¿Qué hacés para sentirte bien?',
    '¿Qué te entretiene?',
    '¿Qué te inspira?',
    '¿Qué disfrutás hacer en tu estación favorita del año?',
    '¿Qué te gusta hacer antes de dormir?',
    '¿Qué haces apenas te despertás?',
    '¿Cuál es tu prioridad en este momento?',
    '¿Qué estás haciendo hoy para ser la persona que querés ser?',
    '¿En qué momentos te sentís libre?',
    '¿Qué es lo que más te importa en este momento?',
    '¿Qué te sorprende de vos mismo últimamente?',
    '¿Cuál es tu cable a tierra?',
    '¿Cuál es tu canción favorita?',
    '¿Cómo te gusta aprovechar el tiempo?',
    '¿Qué hacés para que otro se sienta bien?',
    'Te preparás para una noche perfecta, ¿qué te ponés?',
  ],
  Futuro: [
    '¿Cuál fue el último cambio que hiciste?',
    '¿Cuál fue la mejor decisión que tomaste?',
    '¿Qué decisión te cambió la vida?',
    '¿Cómo te imaginás tu vida en 5 años?',
    '¿Qué querés que te pase este año?',
    '¿Cómo te gustaría vivir hoy si fuera tu último día?',
    '¿Qué le diría tu yo del presente a tu yo del futuro?',
    '¿Qué aspectos de tu vida querés conservar en el futuro?',
    '¿Cuál fue la última lección que aprendiste?',
    '¿Cómo ves el futuro?',
    '¿Qué te gustaría volver to intentar?',
    '¿Cuál es el mejor consejo que te dieron?',
    '¿Qué crees que tiene la vida para vos?',
    '¿Cuál es tu objetivo para este año?',
    '¿Cuál es tu próxima meta a cumplir?',
    '¿Qué esperás de los otros?',
    'Si pudieras agregar una actividad en tu rutina diaria, ¿qué sería?',
    '¿Cómo sería tu día perfecto?',
    '¿Cómo te gusta comenzar el día?',
    '¿Qué hacen los demás que a vos también te gustaría hacer?',
    'Si pudieras ser la mejor en algo, ¿en qué sería?',
    '¿Cuál es tu manera favorita de festejar?',
  ],
  Relaciones: [
    '¿A quién necesitás pedirle perdón?',
    '¿Quién o qué te inspira a ser mejor?',
    '¿A quién admirás y por qué?',
    '¿De qué te hacés cargo?',
    '¿Cuál fue la mejor pregunta que te hicieron?',
    '¿Cómo decidís en quién confiar?',
    '¿Qué atributos valorás en una persona?',
    '¿De qué manera expresás amor?',
    '¿Cuál es la característica que considerás más importante en una persona?',
    '¿Qué tipo de gente te cae bien?',
    '¿Qué es lo que más valoras en una amistad?',
    '¿Quién es tu héroe?',
    '¿Cómo te gusta ser recompensada?',
    '¿Qué significa para vos la responsabilidad?',
    '¿Cómo te gustaría ser recordado/a?',
    '¿Qué es para vos una relación?',
  ],
};

// Mapa de colores por categoría
const coloresCategoria: { [key: string]: string } = {
  Autoconocimiento: '#d9c0c9', // Rosa claro
  Reflexión: '#f3caad',       // Naranja claro
  Deseos: '#cbe3df',          // Verde agua claro
  Presente: '#e3d5f1',        // Lila claro
  Futuro: '#f9e8b3',          // Amarillo pálido
  Relaciones: '#c6e2f5',      // Azul suave
};

const App: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [preguntaActual, setPreguntaActual] = useState<string | null>(null);
  const [contadorPreguntas, setContadorPreguntas] = useState<number>(0);
  const [girando, setGirando] = useState<boolean>(false);
  const [mostrarCarta, setMostrarCarta] = useState<boolean>(false);
  const [cartaKey, setCartaKey] = useState<number>(0);
  const [preguntasUsadas, setPreguntasUsadas] = useState<{ [key: string]: number[] }>({
    Autoconocimiento: [],
    Reflexión: [],
    Deseos: [],
    Presente: [],
    Futuro: [],
    Relaciones: [],
  });

  useEffect(() => {
    const usadas = sessionStorage.getItem('preguntasUsadas');
    if (usadas) {
      setPreguntasUsadas(JSON.parse(usadas));
    }
    const contador = sessionStorage.getItem('contadorPreguntas');
    if (contador) {
      setContadorPreguntas(parseInt(contador));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('preguntasUsadas', JSON.stringify(preguntasUsadas));
    sessionStorage.setItem('contadorPreguntas', contadorPreguntas.toString());
  }, [preguntasUsadas, contadorPreguntas]);

  const girarRuleta = () => {
    if (girando) return;
    setGirando(true);
    setMostrarCarta(false);

    const rotaciones = Math.floor(Math.random() * 5) + 5;
    const gradosExtra = Math.floor(Math.random() * 360);
    const totalGrados = rotaciones * 360 + gradosExtra;

    const ruleta = document.getElementById('ruleta');
    if (ruleta) {
      ruleta.style.transform = `rotate(${totalGrados}deg)`;
    }

    setTimeout(() => {
      // Seleccionar categoría aleatoria
      const categorias = Object.keys(preguntas);
      const categoria = categorias[Math.floor(Math.random() * categorias.length)];
      setCategoriaSeleccionada(categoria);

      const indicesDisponibles = preguntas[categoria]
        .map((_: string, index: number) => index)
        .filter((index) => !preguntasUsadas[categoria].includes(index));

      if (indicesDisponibles.length === 0) {
        setPreguntasUsadas((prev) => ({ ...prev, [categoria]: [] }));
        seleccionarPregunta(categoria, []);
      } else {
        const indiceAleatorio = indicesDisponibles[Math.floor(Math.random() * indicesDisponibles.length)];
        setPreguntasUsadas((prev) => ({
          ...prev,
          [categoria]: [...prev[categoria], indiceAleatorio],
        }));
        setPreguntaActual(preguntas[categoria][indiceAleatorio]);
        setContadorPreguntas((prev) => prev + 1);
        setCartaKey((prev) => prev + 1);
        setMostrarCarta(true);
      }

      setGirando(false);
    }, 4000);
  };

  const seleccionarPregunta = (categoria: string, usadas: number[]) => {
    const indicesDisponibles = preguntas[categoria]
      .map((_: string, index: number) => index)
      .filter((index) => !usadas.includes(index));
    const indiceAleatorio = indicesDisponibles[Math.floor(Math.random() * indicesDisponibles.length)];
    setPreguntasUsadas((prev) => ({
      ...prev,
      [categoria]: [...usadas, indiceAleatorio],
    }));
    setPreguntaActual(preguntas[categoria][indiceAleatorio]);
    setContadorPreguntas((prev) => prev + 1);
    setCartaKey((prev) => prev + 1);
    setMostrarCarta(true);
  };

  const nuevaPregunta = () => {
    if (girando) return;
    setGirando(true);
    setMostrarCarta(false);

    const rotaciones = Math.floor(Math.random() * 5) + 5;
    const gradosExtra = Math.floor(Math.random() * 360);
    const totalGrados = rotaciones * 360 + gradosExtra;

    const ruleta = document.getElementById('ruleta');
    if (ruleta) {
      ruleta.style.transform = `rotate(${totalGrados}deg)`;
    }

    setTimeout(() => {
      // Seleccionar una nueva categoría aleatoria
      const categorias = Object.keys(preguntas);
      const categoria = categorias[Math.floor(Math.random() * categorias.length)];
      setCategoriaSeleccionada(categoria);

      const indicesDisponibles = preguntas[categoria]
        .map((_: string, index: number) => index)
        .filter((index) => !preguntasUsadas[categoria].includes(index));

      if (indicesDisponibles.length === 0) {
        setPreguntasUsadas((prev) => ({ ...prev, [categoria]: [] }));
        seleccionarPregunta(categoria, []);
      } else {
        const indiceAleatorio = indicesDisponibles[Math.floor(Math.random() * indicesDisponibles.length)];
        setPreguntasUsadas((prev) => ({
          ...prev,
          [categoria]: [...prev[categoria], indiceAleatorio],
        }));
        setPreguntaActual(preguntas[categoria][indiceAleatorio]);
        setContadorPreguntas((prev) => prev + 1);
        setCartaKey((prev) => prev + 1);
        setMostrarCarta(true);
      }
      setGirando(false);
    }, 4000);
  };

  const cartaColor = categoriaSeleccionada ? coloresCategoria[categoriaSeleccionada] : '#f3caad';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Interconectados</h2>
      <div className="ruleta-container mb-8">
        <div
          id="ruleta"
          className="w-52 h-52 rounded-full transition-transform duration-[4000ms] ease-out"
          onClick={mostrarCarta ? nuevaPregunta : girarRuleta}
          style={{ cursor: girando ? 'not-allowed' : 'pointer' }}
        />
        <div className="centro-ruleta">
          {girando ? 'Girando' : 'Listo'}
        </div>
      </div>

      {!mostrarCarta && (
        <div className='content-button mt-8'>
          <br />
          <br />
        </div>
      )}

      {categoriaSeleccionada && preguntaActual && mostrarCarta && (
        <div className="w-96 flex flex-col items-center">
          <div key={cartaKey} className="relative w-full h-60 perspective-1000">
            <div className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d animate-flip">
              <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4" style={{ backgroundColor: "transparent" }}>
                <div className="w-full h-full bg-opacity-80 rounded-[30px]" style={{ backgroundColor: cartaColor }} />
              </div>
              <div className="absolute w-full h-full backface-hidden carta flex flex-col p-4 transform rotate-y-180 text-center" style={{ backgroundColor: cartaColor }}>
                <p className="text-sm font-semibold categ">{categoriaSeleccionada}</p>
                <h3 className="text-lg flex-1 flex items-center justify-center font-bold"><strong>{preguntaActual}</strong></h3>
              </div>
            </div>
          </div>
          <p className="mb-4 text-center xs" style={{ color: "grey", fontSize: "xs" }}>Preguntas jugadas: {contadorPreguntas}</p>
          {/* <div className='content-button'>
            <button
              onClick={nuevaPregunta}
              className={`mt-4 px-6 py-3 font-semibold boton ${girando ? 'cursor-not-allowed' : 'hover:opacity-90'}`}
              disabled={girando}
            >
              Nueva pregunta
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default App;