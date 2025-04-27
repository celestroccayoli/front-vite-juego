import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const colors = ['#E57373', '#F06292', '#BA68C8', '#64B5F6', '#4DB6AC', '#FFD54F'];

const RouletteScreen: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const [spinning, setSpinning] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selected = colors[randomIndex];
    setTimeout(() => {
      setSelectedColor(selected);
      setSpinning(false);
      navigate(`/juego/${categoryId}/carta`, { state: { color: selected } });
    }, 2500); // duración de la animación simulada
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Gira la ruleta para continuar</h2>

      <div className={`w-48 h-48 rounded-full border-[12px] border-gray-300 relative mb-8 transition-transform duration-[2500ms] ${spinning ? 'rotate-[1440deg]' : ''}`}
           style={{ borderColor: selectedColor || '#ccc' }}>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <button
        onClick={spinWheel}
        className="bg-[#D9AFA1] text-white font-semibold py-3 px-6 rounded-xl shadow hover:scale-105 transition-transform"
        disabled={spinning}
      >
        {spinning ? 'Girando...' : 'Girar'}
      </button>
    </div>
  );
};

export default RouletteScreen;
