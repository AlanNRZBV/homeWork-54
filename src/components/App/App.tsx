import React, { useState } from 'react'
import './App.css'
import Container from '../Container/Container.tsx';


const App = () => {
  const startGame = () => {
    const rndIndex = Math.floor(Math.random() * 36);
    const initialCells = Array(36).fill({ hasItem: false });
    initialCells[rndIndex] = { hasItem: true };
    return initialCells;
  };

  const [cell, setCells] = useState(startGame());

  return (
    <Container cell={cell}>
    </Container>
  )
};

export default App
