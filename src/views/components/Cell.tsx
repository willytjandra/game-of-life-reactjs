import React from 'react';
import styles from './Cell.module.scss';

type CellProps = {
  isAlive: boolean;
  onChange: () => void;
};

export const Cell: React.FC<CellProps> = ({ isAlive, onChange }) => (
  <input className={styles.cell} type="checkbox" checked={isAlive} onChange={onChange} />
);
