import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#E6BBAF] p-6">
      <h1 className="text-white text-1xl font-bold mb-16 tracking-wide">Interconectados<span className="inline-block w-24 border-b-4 border-white ml-2"></span><span className="text-white text-5xl ml-2">.</span></h1>

      <button
        className="bg-white text-[#333] font-semibold py-4 px-10 rounded-2xl text-xl shadow-md mb-10 hover:scale-105 transition-transform"
        onClick={() => navigate('/categorias')}
      >
        Jugar
      </button>

      <div className="flex flex-col gap-4 text-white font-medium text-lg">
        <button onClick={() => navigate('/como-jugar')} className="hover:underline">¿Cómo se juega?</button>
        <button onClick={() => navigate('/acerca')} className="hover:underline">Acerca de Interconectados</button>
      </div>
    </div>
  );
};

export default Home;
