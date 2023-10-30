import React, { useState } from 'react'
import './App.css'
import { ICell, ICounter } from '../../types';
import Cell from '../Cell/Cell.tsx';
import Counter from '../Counter/Counter.tsx';


const App = () => {
  const startGame = () => {
    const initialCells: ICell[] = [];
    for (let i = 0; i < 36; i++) {
      const newCell = {
        hasItem: false,
        clicked: false
      }
      initialCells.push(newCell as ICell);
    }
    const rndIndex = Math.floor(Math.random() * 36);
    initialCells[rndIndex].hasItem = true;
    return initialCells;
  };

  const [cells, setCells] = useState<ICell[]>(startGame());
  const [counter, setCounter]=useState<ICounter>({count: 0})

  const testFn = ( key: number)=>{
    console.log('TEST', key)
    const cellsCopy = [...cells];
    const singleCell = cellsCopy[key];
    const cellCopy = {...singleCell}
    cellCopy.clicked = true;
    cellsCopy[key] = cellCopy;
    setCells(cellsCopy);
    setCounter(prevCounter => ({ count: prevCounter.count + 1 }));
  }

  return (
    <div>
      <div className="gameContainer">
        {cells.map((cells, index) => (
          <Cell key={index} hasItem={cells.hasItem} clicked={cells.clicked}  onCellClick={() => testFn(index)}/>
        ))}
      </div>
      <Counter count={counter.count}/>
    </div>
  )
};

export default App
