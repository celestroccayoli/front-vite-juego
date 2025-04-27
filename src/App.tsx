import React, { useState, useEffect } from 'react';
import './App.css';

// Definimos las preguntas por categoría con firma de índice
interface Preguntas {
  [key: string]: string[];
}

const preguntas: Preguntas = {
  Nova: [
    '¿Qué sentís cuando te abrazan?',
    '¿Qué hacés de manera forzada?',
    '¿Cómo te gusta afrontar el miedo?',
    '¿Qué te gustaría cambiar de vos mismo/a?',
    '¿Qué querés hacer pero lo estás postergando?',
    '¿Qué necesitás aprender?',
    '¿Qué harías si no tuvieras miedo?',
    '¿Qué relación tenés con tu cuerpo?',
    '¿Cómo reaccionás cuando alguien te felicita?',
    '¿Qué pensás cuando te mirás al espejo?',
    '¿Cómo te sentís cuando pedís ayuda?',
    '¿Preferís el tiempo a solas o en compañía?',
    '¿Qué hacés cuando estás sola?',
    '¿Cómo te gustaría que actúen los demás cuando estás enojada/o?',
    '¿Qué pensás que dicen tus amistades de vos?',
    '¿A quién necesitás pedirle perdón?',
    '¿Cómo te sentís hoy?',
    '¿En qué necesitás ayuda en este momento?',
    '¿Con quién no estuviste de acuerdo recientemente?',
    '¿Cuánto peso le das a lo que la gente piensa de vos?',
    '¿A qué deberías prestarle más atención?',
    '¿En qué área de tu vida estás poniendo más energía?',
    '¿Qué es lo más valiente que hiciste?',
    '¿Cómo es tu diálogo interno?',
    '¿Cuál es tu situación actual?',
    '¿Qué ves de vos en los demás?',
    '¿Con qué soñás?',
    '¿Qué hacés cuando estás muy contento?',
    '¿Cuál fue el último cambio que hiciste en tu vida?',
    '¿Cuál fue la mejor decisión que tomaste en la vida?',
    '¿Qué decisión te cambió la vida?',
    '¿Quién en tu vida te inspira a ser mejor?',
    '¿Qué te sorprende de vos mismo últimamente?',
    '¿Qué actividad te ayuda a encontrar la paz?',
    '¿Qué tipo de persona sos?',
    '¿Qué estás esperando obtener?',
    '¿Qué esperás de los otros?',
    '¿Qué esperás obtener con lo que hacés?',
    '¿Qué atributos valorás en una persona?',
    '¿Qué hacés para sentirte bien?',
    '¿Qué hacés para que otro se sienta bien?',
    '¿A quién admirás y por qué?',
    '¿De qué te hacés cargo?',
    '¿Qué te atrae?',
    '¿Qué te gustaría dejar?',
    '¿Qué te falta?',
    '¿Qué estás dispuesto a dejar para conseguir tus objetivos/sueños/metas?',
    '¿A qué recital te hubiese gustado ir?',
    '¿Cuál fue la mejor pregunta que te hicieron?',
    '¿Cómo decidís en quién confiar?',
    '¿Cómo describirías tu relación con la naturaleza?',
  ],
  Galileo: [
    '¿Qué es lo mejor de crecer?',
    '¿Qué hacen los demás que a vos también te gustaría hacer?',
    'Si pudieras ser la mejor en algo, ¿en qué sería?',
    '¿En qué sos bueno/a?',
    '¿Qué te gusta hacer en tu tiempo libre?',
    '¿Qué te haría sentir contento/a hoy?',
    '¿Cuál es tu objetivo para hoy?',
    '¿Cómo sería tu día perfecto?',
    '¿Cómo te gusta comenzar el día?',
    '¿Cuál es tu objetivo para esta semana?',
    '¿Qué viaje te gustaría hacer?',
    '¿Quién es tu héroe?',
    '¿Qué pensás que tiene de bueno ser adulto/a?',
    'Si pudieras ser un animal, ¿cuál serías y por qué?',
    '¿Cuál fue tu último logro?',
    '¿Cómo te gusta ser recompensada?',
    '¿Qué te hizo feliz hoy?',
    '¿Qué te gustaría sentir hoy?',
    '¿Qué te enorgullece hoy?',
    '¿Qué actividades aumentan tu energía?',
    'Si tu vida fuera una película, ¿qué tipo de personaje serías?',
    'Si tu vida fuera una película, ¿de qué género sería?',
    'Si pudieras agregar una actividad en tu rutina diaria, ¿qué sería?',
    'No podrías vivir sin...',
    '¿Qué oportunidad te gustaría tener?',
    '¿Con qué emoción te relacionás más?',
    '¿Cómo te gusta aprovechar el tiempo?',
    '¿Cuál es tu cable a tierra?',
    '¿Cuál es tu canción favorita?',
    '¿Qué te entretiene?',
    'Si te digo "aire" ¿en qué pensás?',
    '¿En qué animal te gustaría reencarnar?',
    '¿Qué disfrutás hacer en tu estación favorita del año?',
    '¿Qué te gusta hacer antes de dormir?',
    '¿Qué te gusta hacer cuando te despertás?',
    '¿Qué te inspira?',
    '¿Qué no negociás?',
    '¿Cuál es tu próxima meta a cumplir?',
    '¿Qué tipo de gente te cae bien?',
    '¿Cuál es tu manera favorita de festejar?',
    '¿Cómo sería un día ideal para vos?',
    '¿Qué te apasiona en la vida?',
    '¿En qué momento te sentís vos mism@?',
    '¿Cómo te describirían tus amigos en 3 palabras?',
    'Te preparás para una noche perfecta, ¿qué te ponés?',
    '¿Qué es lo mejor de crecer?',
    '¿Qué hacen los demás que a vos también te gustaría hacer?',
    'Si pudieras ser la mejor en algo, ¿en qué sería?',
    '¿En qué sos bueno/a?',
    '¿Qué te gusta hacer en tu tiempo libre?',
  ],
  Mesias: [
    '¿Qué es para vos tener éxito en la vida?',
    '¿Cómo te gustaría ser recordado/a?',
    '¿Cuál es tu deseo más grande?',
    '¿Qué te motiva?',
    '¿A qué te gustaría dedicarle más tiempo?',
    '¿En qué te gustaría asumir más responsabilidad?',
    '¿A qué te gustaría dedicarte?',
    '¿Cuál es tu aspiración más importante?',
    '¿Cuál es tu prioridad en este momento de tu vida?',
    '¿Qué quieres cambiar de tu vida? ¿Por qué?',
    '¿Cómo te imaginás tu vida en 5 años?',
    '¿Qué querés que te pase este año?',
    '¿Qué quisieras hacer pero te da miedo intentar?',
    '¿Cuál es el logro que más te enorgullece?',
    '¿Cómo te gustaría vivir hoy si fuera tu último día?',
    '¿Qué te hace sentir seguridad?',
    '¿Qué significa para vos la responsabilidad?',
    '¿Qué es lo que realmente te interesa?',
    '¿Qué le diría tu yo del presente a tu yo del futuro?',
    '¿Qué te dice tu voz interior?',
    '¿Qué necesitás?',
    '¿Qué estás haciendo hoy para ser la persona que querés ser?',
    '¿Qué es el amor?',
    '¿Qué puede aprender el mundo de vos?',
    '¿En qué momentos te sentís libre?',
    '¿Te gusta la persona que sos? ¿Por qué?',
    '¿De qué manera expresás amor?',
    '¿Dónde vivís más: en el pasado, en el presente o en el futuro?',
    '¿Cuál es la característica que considerás más importante en una persona?',
    '¿Qué es lo que siempre quisiste hacer y aún no hiciste?',
    '¿Qué aspecto de tu vida querés conservar en el futuro?',
    'Nombra tres cualidades que te gustan de vos.',
    '¿Cuál es la última lección que aprendiste?',
    '¿Cómo ves el futuro?',
    '¿Qué te gustaría volver a intentar?',
    '¿Qué define tu identidad?',
    '¿Cuál es el mejor consejo que te dieron?',
    '¿Qué es lo más importante para vos en este momento?',
    '¿Qué es la libertad para vos?',
    'Para vos, ¿cuál es el sentido de la vida?',
    'Para vos, ¿qué es la intuición?',
    '¿Qué significa para vos el vacío/la nada?',
    '¿Qué significa para vos la palabra "religión"?',
    '¿Qué define "hogar" para vos?',
    '¿Qué crees que tiene la vida para vos?',
    '¿Qué anhela tu corazón?',
    '¿Qué estilo de vida te gustaría tener?',
    '¿Qué cambio te gustaría presenciar?',
    '¿Qué hecho te gustaría presenciar?',
    '¿Qué es lo que más te importa en este momento?',
    '¿Qué es lo que más valoras en una amistad?',
  ],
};

// Mapa de colores por categoría
const coloresCategoria: { [key: string]: string } = {
  Nova: '#d9c0c9',
  Galileo: '#f3caad',
  Mesias: '#cbe3df',
};

const App: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [preguntaActual, setPreguntaActual] = useState<string | null>(null);
  const [contadorPreguntas, setContadorPreguntas] = useState<number>(0);
  const [girando, setGirando] = useState<boolean>(false);
  const [mostrarCarta, setMostrarCarta] = useState<boolean>(false);
  const [cartaKey, setCartaKey] = useState<number>(0);
  const [preguntasUsadas, setPreguntasUsadas] = useState<{ [key: string]: number[] }>({
    Nova: [],
    Galileo: [],
    Mesias: [],
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
      const anguloFinal = (gradosExtra + 315) % 360;
      let categoria: string;
      if (anguloFinal < 120) {
        categoria = 'Nova';
      } else if (anguloFinal < 240) {
        categoria = 'Galileo';
      } else {
        categoria = 'Mesias';
      }
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

  const cartaColor = categoriaSeleccionada ? coloresCategoria[categoriaSeleccionada] : '#f3caad';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Interconectados</h2>
      <p className="mb-4 text-center">Preguntas jugadas: {contadorPreguntas}</p>

      <div className="ruleta-container mb-8">
        <div
          id="ruleta"
          className="w-64 h-64 rounded-full transition-transform duration-[4000ms] ease-out"
        />
        <div className="centro-ruleta">
          {girando ? 'Girando' : 'Listo'}
        </div>
      </div>

      {!mostrarCarta && (
        <div className='content-button mt-8'>
          <br />
          <button
            onClick={girarRuleta}
            className={`px-6 py-3 font-semibold boton ${girando ? 'cursor-not-allowed' : 'hover:opacity-90'}`}
            disabled={girando}
          >
            Girar la ruleta
          </button>
        </div>
      )}

      {categoriaSeleccionada && preguntaActual && mostrarCarta && (
        <div className="w-80 flex flex-col items-center">
          <div key={cartaKey} className="relative w-full h-48 perspective-1000">
            <div className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d animate-flip">
              <div className="absolute w-full h-full backface-hidden carta flex items-center justify-center p-4" style={{ backgroundColor: "transparent" }}>
                <div className="w-full h-full bg-opacity-80 rounded-[30px]" style={{ backgroundColor: cartaColor }} />
              </div>
              <div className="absolute w-full h-full backface-hidden carta flex flex-col p-4 transform rotate-y-180 text-center" style={{ backgroundColor: cartaColor }}>
                <p className="text-sm font-semibold">{categoriaSeleccionada}</p>
                <h3 className="text-lg flex-1 flex items-center justify-center font-bold"><strong>{preguntaActual}</strong></h3>
              </div>
            </div>
          </div>
          <div className='content-button'>
            <button
              onClick={girarRuleta}
              className={`mt-4 px-6 py-3 font-semibold boton ${girando ? 'cursor-not-allowed' : 'hover:opacity-90'}`}
              disabled={girando}
            >
              Nueva pregunta
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default App;