import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link si usas react-router-dom


const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: 'rgb(233 233 242)em', maxWidth: "800px", margin: "0 auto",padding: "2rem"}}>
            <header className="header">
                <div className="logo">
                    <a href="/">
                        <img src="/logo-interconectados.ico" alt="logo interconectados" style={{ width: "50px" }} />
                    </a>
                </div>
            </header>

            <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#681c7c' }}>
                Sobre nosotros
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#681c7c' }}>
                ¿Cuál es nuestra misión fundamental?
            </h3>
            <div className="about-us-text text-base mb-8 text-left max-w-2xl">
                <p>
                    Queremos desarrollar una comunidad diversa que inspire la expansión y el desarrollo humano en todos sus aspectos.
                </p>
                <p>
                    Buscamos ser un catalizador global para la evolución personal y colectiva, ofreciendo oportunidades de enriquecimiento para personas de todas las edades y culturas, en las cuales el intercambio de pensamientos, visiones y sentimientos sean un eje claro.
                </p>
                <p>
                    Nos comprometemos a cultivar el crecimiento, la comprensión mutua y la transformación a través de herramientas que promueven la observación externa e interna así como la colaboración y la exploración de la humanidad.
                </p>
                <p>
                    Queremos que las personas disfruten del viaje que significa ser humano.
                </p>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#681c7c' }}>
                Nuestros Valores
            </h2>
            <div className="about-us-text text-base mb-8 text-left max-w-2xl">
                <p>
                    En Interconectados, nos guiamos por valores fundamentales que no solo definen quiénes somos, sino que también reflejan la comunidad que aspiramos a construir. Estos principios son esenciales para fomentar una evolución personal y colectiva, asegurando que cada paso hacia adelante esté alineado con un propósito significativo. A continuación, presentamos los pilares que sostienen nuestra visión:
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Respeto:</span> Valoramos y practicamos el respeto mutuo en cada interacción.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Creatividad:</span> Inspiramos creatividad constantemente.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Diversidad e Inclusión:</span> Celebramos la diversidad e impulsamos la inclusión con respeto
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Desarrollo Personal:</span> Apoyamos el crecimiento y desarrollo personal de cada individuo.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Colaboración:</span> Fomentamos la colaboración para lograr objetivos comunes.
                </p>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#681c7c' }}>
                ¿Qué queremos aportar al mundo?
            </h2>
            <div className="about-us-text text-base mb-8 text-left max-w-2xl">
                <p>
                    <span style={{ color: '#681c7c' }}>Fomentar conexiones profundas:</span> Transformar la forma en que las personas se conectan en la era digital, promoviendo interacciones auténticas y significativas que trascienden lo superficial, fomentando amistades duraderas y apoyo mutuo.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Cultivar el crecimiento personal:</span> Ser un catalizador para el desarrollo personal y profesional de las personas, proporcionando herramientas, recursos y experiencias que inspiren a los individuos a alcanzar su máximo potencial y afrontar los desafíos de la vida con resiliencia.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Promover la empatía y la comprensión mutua:</span> Aspiramos a ser un puente para la comprensión, reduciendo prejuicios y fomentando una sociedad más empática e inclusiva.
                </p>

                <p>
                    <span style={{ color: '#681c7c' }}>Revolucionar el entretenimiento:</span> Ofrecer una alternativa enriquecedora al entretenimiento convencional, a través de juegos y actividades que no solo diviertan, sino que también eduquen, inspiren y conecten a las personas en niveles más profundos.
                </p>
                <p>
                    <span style={{ color: '#681c7c' }}>Crear un legado de cambio positivo:</span> Queremos que "Interconectados" sea recordado como algo que inspiró a las personas a reconectarse consigo mismas, con los demás y con el mundo a su alrededor.
                </p>
                <p>
                    La visión de "Interconectados" es inspirar un cambio positivo, fomentar relaciones más significativas y contribuir a la construcción de una sociedad más consciente y conectada.
                </p>
            </div>
            <br />
            <a
                href="https://linktr.ee/interconectados.sa"
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
                    width: "100%",
                    textDecoration: 'none',
                    margin: "0 auto"
                }}
            >
                Más sobre Interconectados
            </a>
            <br /><br />
            <Link
                to="/"
                className="text-xs text-gray-500 hover:text-gray-700 mt-4 text-center"
                style={{ fontSize: '0.8rem', textDecoration: 'none', textAlign: "center", display: "block" }}
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default AboutUs;