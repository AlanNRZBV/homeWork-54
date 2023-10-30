import React, { FC } from 'react';
import { ICounter } from '../../types';

const Counter: FC<ICounter> = ({ count }) => {
  const counterStyle: React.CSSProperties = {
    display: 'block',
    marginTop: '8px',
    marginBottom: '8px',
  };

  return <span style={counterStyle}>Tries: {count}</span>;
};

export default Counter;