import React from 'react';

export interface IContainer extends React.PropsWithChildren{
  cell: ICell[]
}

export interface ICell {
  hasItem: boolean;
  clicked: boolean
}