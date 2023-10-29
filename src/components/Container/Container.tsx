import { FC } from 'react';
import { ICell, IContainer } from '../../types';
import Cell from '../Cell/Cell.tsx'

const Container: FC<IContainer> = ({cell}) => {
  return (
    <div className="gameContainer">
      {cell.map((cell: ICell,index:number)=>(
        <Cell key={index} hasItem={cell.hasItem} clicked={cell.clicked}/>
      ))}
    </div>
  );
};

export default Container;