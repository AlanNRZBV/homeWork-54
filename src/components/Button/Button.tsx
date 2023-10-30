import {FC} from 'react';
import { IButton } from '../../types';

const Button: FC<IButton> = ({onClick, innerText}) => {
  return (
    <button onClick={onClick}>{innerText}</button>
  );
};

export default Button;