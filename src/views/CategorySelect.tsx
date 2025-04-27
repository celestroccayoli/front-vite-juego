import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'nova',
    label: 'Nova',
    description: 'Introspectiva y emocional',
    bg: '#D9AFA1'
  },
  {
    id: 'galileo',
    label: 'Galileo',
    description: 'Ligera y presente',
    bg: '#E6D07C'
  },
  {
    id: 'mesias',
    label: 'Mesías',
    description: 'Espiritual y reflexiva',
    bg: '#D3C9F1'
  },
  {
    id: 'aleatorio',
    label: 'Aleatorio',
    description: 'Cualquier categoría',
    bg: '#C3C3C3'
  }
];

const CategorySelect: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (categoryId: string) => {
    navigate(`/juego/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-10 mt-6 text-gray-800">Elegí una categoría</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {categories.map(({ id, label, description, bg }) => (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            style={{ backgroundColor: bg }}
            className="rounded-2xl p-6 shadow-md text-left hover:scale-105 transition-transform"
          >
            <div className="text-white text-sm font-light mb-1">somos</div>
            <div className="text-white text-2xl font-bold">{label.toLowerCase()}</div>
            <div className="text-white text-xs mt-1 italic">{description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
