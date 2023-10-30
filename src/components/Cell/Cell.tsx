import React, { FC } from 'react';
import { ICell } from '../../types';

const Cell: FC<ICell> = ({ hasItem, clicked, onCellClick }) => {
  const cellStyle: React.CSSProperties = {
    width: '35px',
    height: '35px',
    backgroundColor: '#565656',
    margin: '5px'
  };

  if (clicked) {
    cellStyle.backgroundColor = 'transparent';
  }

  const createSymbol = () => {
    if (hasItem && clicked) {
      return 'X';
    }
  };

  return (
    <div style={cellStyle} onClick={onCellClick}>
      {createSymbol()}
    </div>
  );
};

export default Cell;
