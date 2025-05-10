import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './views/Game.tsx';
import Home from './views/Home.tsx';
import AboutGame from './views/AboutGame.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/como-se-juega" element={<AboutGame />} />
      </Routes>
    </Router>
  );
};

export default App;