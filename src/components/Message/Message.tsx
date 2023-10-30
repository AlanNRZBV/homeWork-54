import { FC } from 'react';
import { IMessage } from '../../types';

const Message: FC<IMessage> = ({ innerText }) => {
  return <span>{innerText}</span>;
};

export default Message;