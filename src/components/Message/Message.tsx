import React, { FC } from 'react';
import { IMessage } from '../../types';

const Message: FC<IMessage> = ({ innerText }) => {

  const messageStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '1rem',
    height: '1rem'
  }

  return <span style={messageStyle}>{innerText}</span>;
};

export default Message;