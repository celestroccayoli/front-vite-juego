import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import questionsData from '../data/questions';

interface LocationState {
  color: string;
}

const QuestionCard: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { color } = location.state as LocationState;

  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const getRandomQuestion = () => {

    const allQuestions = (() => {
        if (categoryId === 'aleatorio') {
          return Object.values(questionsData).flatMap((cat) => cat.preguntas);
        }
        const category = questionsData[categoryId as keyof typeof questionsData];
        if (!category) {
          return [];
        }
        return category.preguntas;
      })();
    const available = allQuestions.filter((q) => !usedQuestions.includes(q));
    if (available.length === 0) {
      return '¡Ya viste todas las preguntas!';
    }
    const next = available[Math.floor(Math.random() * available.length)];
    setUsedQuestions([...usedQuestions, next]);
    setCurrentQuestion(next);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    getRandomQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-white text-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-sm mb-4">Cartas jugadas: {count}</div>

      <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-xl text-xl max-w-xl">
        {currentQuestion}
      </div>

      <button
        onClick={getRandomQuestion}
        className="mt-8 bg-white text-gray-700 font-semibold py-3 px-6 rounded-xl shadow hover:scale-105 transition-transform"
      >
        Siguiente
      </button>
    </div>
  );
};

export default QuestionCard;