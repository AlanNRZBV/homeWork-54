import { useState } from 'react';
import './App.css';
import { ICell, ICounter, IMessage } from '../../types';
import Cell from '../Cell/Cell.tsx';
import Counter from '../Counter/Counter.tsx';
import Message from '../Message/Message.tsx';
import Button from '../Button/Button.tsx';

const App = () => {
  const startGame = () => {
    const initialCells: ICell[] = [];
    for (let i = 0; i < 36; i++) {
      const newCell = {
        hasItem: false,
        clicked: false,
      };
      initialCells.push(newCell as ICell);
    }
    const rndIndex = Math.floor(Math.random() * 36);
    initialCells[rndIndex].hasItem = true;
    return initialCells;
  };

  const [cells, setCells] = useState<ICell[]>(startGame());
  const [counter, setCounter] = useState<ICounter>({ count: 0 });
  const [msgText, setMsgText] = useState<IMessage>({ innerText: '' });
  const [gameFrozen, setGameFrozen] = useState<boolean>(false);

  const switchGameState = () => {
    setCells(startGame);
    setCounter({ count: 0 });
    setMsgText({ innerText: '' });
    setGameFrozen(false);
  };

  const clickHandle = (key: number) => {
    if (gameFrozen) {
      return;
    }
    const cellsCopy = [...cells];
    const singleCell = cellsCopy[key];
    const cellCopy = { ...singleCell };

    if (singleCell.hasItem) {
      const msgTextCopy = { ...msgText };
      msgTextCopy.innerText = 'FOUND! Press "Reset" button to continue';
      setMsgText(msgTextCopy);
      setGameFrozen(true);
    }

    cellCopy.clicked = true;
    cellsCopy[key] = cellCopy;
    setCells(cellsCopy);
    setCounter((prevCounter) => ({ count: prevCounter.count + 1 }));
  };

  return (
    <div>
      <Message innerText={msgText.innerText} />
      <div className="gameContainer">
        {cells.map((cells, index) => (
          <Cell key={index} hasItem={cells.hasItem} clicked={cells.clicked} onCellClick={() => clickHandle(index)} />
        ))}
      </div>
      <Counter count={counter.count} />
      <Button innerText="Reset" onClick={switchGameState} />
    </div>
  );
};

export default App;
