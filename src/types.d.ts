import React from 'react';

export interface ICell {
  hasItem: boolean;
  clicked: boolean;
  onCellClick: React.MouseEventHandler;
}
export interface ICounter {
  count: number
}

export interface IMessage {
  innerText: string;
}

export interface IButton {
  innerText: string
  onClick: ()=> void;
}