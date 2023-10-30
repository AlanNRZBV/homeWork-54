import React from 'react';

export interface ICell {
  hasItem: boolean;
  clicked: boolean;
  onCellClick: React.MouseEventHandler;
}
export interface ICounter {
  count: number
}